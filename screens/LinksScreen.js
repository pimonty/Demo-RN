import React from 'react';
import { TouchableHighlight, Text, ScrollView, StyleSheet } from 'react-native';
//import { ExpoLinksView } from '@expo/samples';
 //import Link from '../components/links/Link'
 import { WebBrowser } from 'expo';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>

        <TouchableHighlight onPress={this._linkReactn} style={styles.reactn}>
          <Text>Tutorial React native</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this._linkMern} style={styles.mern}>
          <Text>Tutorial MERN</Text>
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
    paddingTop: 15,
    backgroundColor: '#fff'
  },
  reactn: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#3746',
    height:120,
    width:200,
  },
  mern: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#6321',
    height:120,
    width:200,
  }
});
