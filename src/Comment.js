import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image
} from 'react-native'

/*
const Comment = (props) =>
  <Text>{props.text}</Text>
*/
const DEFAULT_AVATAR = 'http://wfarm3.dataknet.com/static/resources/icons/set110/2327b4c4.png';
const AVATAR_SIZE =32

export default class Comment extends Component<{}> {
  render() {
    return (
      <View style={styles.comment}>
      {
        this.props.avatar ?
          <Image style={styles.avatar} source={{uri: this.props.avatar }}/>:
            <Image style={styles.avatar} source={{uri: DEFAULT_AVATAR }}/>
      }
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
    flexDirection: 'row',
    alignItems: 'center'
  },
  text:{
    fontSize:16,
    marginLeft:10,
  },
  avatar:{
    width:AVATAR_SIZE,
    height:AVATAR_SIZE,
    borderRadius:AVATAR_SIZE / 2,
  }
});
