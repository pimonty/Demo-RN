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



//Define de style of list View
const styles = StyleSheet.create({
  Listview: {
    flex: 1,
    padding: 12,
    height: 290,
    },
});


class HomeLView extends Component {

  //Define the states
  constructor(props) {
    super(props);

    this.state={
      isLoading: true
    };

    console.log('Constructor-> State isloading:'+ this.state.isLoading);
  }


  componentDidMount() {

    const PathJson = 'http://server/products/product.json'

    return fetch('http://192.168.1.69:3013/v1/productos.json')
      .then((response) => response.json())
      .then((responseJson) => {
        try{
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.productos),
        }, function() {
          // nothing to do with new state.
        });
      } catch(e){
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
          console.log('exception isloading:'+this.state.isLoading)
        });

        console.error(error);
      });
  }



render() {

console.log('Render-> State isloading:'+ this.state.isLoading);

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

        //Show initial dates.
        renderRow={(rowData) => <Text style={styles.text}>{rowData.identificador}, {rowData.price}</Text>}

       />
     </View>

   );
 }

}

module.exports = HomeLView;
