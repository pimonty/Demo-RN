import React from 'react';
import { Dimensions,Image,TouchableHighlight, Text, ScrollView, StyleSheet } from 'react-native';
//import { ExpoLinksView } from '@expo/samples';
 //import Link from '../components/links/Link'
 import { WebBrowser } from 'expo';




let winSize = Dimensions.get('window');
const UriPicture='http://tmnopal.com.mx/tmnopal-archivos/2015/11/comercializacion-de-producto.png';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image source={require('./Logogithub.png')} style={styles.photo} />
        {/* <Image source={{ uri: UriPicture}} style={styles.photo} /> */}
        <TouchableHighlight onPress={this._linkReactn} style={styles.reactn}>
          <Text style={styles.txt}>Tutorial React native</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this._linkMern} style={styles.mern}>
          <Text style={styles.txt}>Tutorial MERN</Text>
        </TouchableHighlight>

      </ScrollView>
    );
  }

  _linkReactn = () => {
    WebBrowser.openBrowserAsync(
      'https://github.com/pimonty/Demo-RN'
    );
  };

  _linkMern = () => {
    WebBrowser.openBrowserAsync(
      'https://github.com/pimonty/Demo-MERN'
    );
  };

}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 90,
    backgroundColor: '#eee',
    flexDirection: 'column',
  },
  reactn: {
    alignSelf: 'center',
    paddingTop: 50,
    borderRadius: 30,
    borderWidth: 1.5,
    backgroundColor: '#3746',
    borderColor: '#d6d7da',
    height:120,
    width:winSize.width,
    alignItems: 'center',
  },
  mern: {
    alignSelf: 'center',
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: '#d6d7da',
    paddingTop: 50,
    backgroundColor: '#79b2e7',
    height:120,
    width:winSize.width,
    alignItems: 'center',
  },
  txt:{
    fontSize: 19,
    fontWeight: 'bold',
    alignItems:'center',
  },
  photo: {
    height: 0.15*winSize.height,
    width: 0.8
    *winSize.width,
    borderRadius: 20,
    alignSelf: 'center',
  }

});
