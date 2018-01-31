import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native'

/*
const Comment = (props) =>
  <Text>{props.text}</Text>
*/

export default class Comment extends Component<{}> {
  render() {
    return (
      <View style={styles.comment}>
      <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  comment:{
    backgroundColor: '#ecf0f1',
    padding:10,
    margin:5,
    borderRadius:5,
  },
  text:{
    fontSize:16,
  }
});
