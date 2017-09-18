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


const styles = StyleSheet.create({
  Listview: {
    flex: 1,
    padding: 12,
    height: 290,

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
    const PathJson='http://server/products/product.json'

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
         renderRow={(rowData) => <Text style={styles.text}>{rowData.identificador}, {rowData.price}</Text>}
       />

     </View>
   );
 }

}

module.exports = HomeLView;
