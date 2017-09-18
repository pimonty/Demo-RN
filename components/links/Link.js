'use strict'

import React, { Component } from 'react';

import {
  AppRegistry,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';



var URLHandler = require('react-native-url-handler');

class Link extends Component {

  render() {
    return (
      <TouchableHighlight onPress={this._linkPressed} {...this.props} />
    );
  },

  _linkPressed() {
    if (this.props.url) {
      URLHandler.openURL(this.props.url);
    } else if (this.props.to && this.props.to.uri) {
      var url = this.props.to.uri;
      URLHandler.openURL(url);
    } else {
      console.error("Invalid Link destination:", this.props.to);
    }
  },


}


module.exports = Link;
