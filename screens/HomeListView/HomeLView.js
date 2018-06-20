'use strict'

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  ListView,
  View,
  FlatList,
  ActivityIndicator
} from 'react-native';


//Component in charge of render each row of products.
//Remember: The first character is a capital letter.
 import Rowproducts from './Rowproducts';

const styles = StyleSheet.create({
  Listview: {
    flex: 1,
    padding: 12,
    height: 310,

    },

});




class HomeLView extends Component {


  constructor(props) {
    super(props);

    //Define state
    this.state={
      isLoading: true
    };


  }


  componentDidMount() {
   
    const PathJson='https://demo-mern.herokuapp.com/v1/productos.json'
    return fetch(PathJson)
      .then((response) => response.json())
      .then((responseJson) => {
        try{
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.productos),
        }, function() {
          // nothing to do with new state
          console.log('All data read from:'+PathJson);
        });

        }catch(e){
          alert('Exception while processing. \nPlease,try again.');
        }

      })
      .catch((error) => {
        alert('Connection error:\n\n'+PathJson+'\n\nPlease, check yout network connection and path.')

      //Stop the icon wait
      this.setState({
        isLoading: false
      }, function() {
        // nothing to do with new state.
        console.log('Catch error:'+this.state.isLoading);
      });

      });
  }

render() {
   if (this.state.isLoading) {
     return (
       <View style={{flex: 1, paddingTop: 20}}>
         <ActivityIndicator />
       </View>
     );
   }

   return (
     <View style={{flex: 1, paddingTop: 20}}>
       <ListView
         style={styles.Listview}
         dataSource={this.state.dataSource}

         //Inicialize each row
        // renderRow={(rowData) => <Text style={styles.text}>{rowData.identificador}, {rowData.price}</Text>}
        renderRow={(data) => <Rowproducts {...data} />}

       />

     </View>
   );
 }

}

module.exports = HomeLView;
