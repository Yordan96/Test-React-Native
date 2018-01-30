/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';


export default class ArtistBox extends Component<{}> {
onPress(){

}
  render() {

    const {image, name, likes, comments}= this.props.artist
    const cora = 'http://www.oogazone.com/wp-content/uploads/best-heart-icon-red-hollow-cdr.jpg';
    const coment = 'https://cdn.iconscout.com/public/images/icon/free/png-512/chat-bubble-talk-message-communication-comment-3b47aa782dd67b7d-512x512.png';
    return (
      <View style={styles.artistBox}>
        <Image style={styles.image} source={{uri: image }}/>
        <View style={styles.info}>
          <Text style={styles.name}> {name}</Text>
            <View style={styles.row}>
              <View style={styles.iconcontainer}>
                <Image style={styles.btn} source={{uri: cora }} backgroundColor='lightgray'/>
                <Text style={styles.count}> {likes}</Text>
              </View>
              <View style={styles.iconcontainer}>
                <Image style={styles.btn} source={{uri: coment}} backgroundColor='lightgray'/>
                <Text style={styles.count}> {comments}</Text>
              </View>
            </View>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  artistBox:{
    margin:5,
    backgroundColor: 'white',
    flexDirection: 'row',
    elevation:2
  },
  image: {
    width: 150,
    height:150
  },
  info:{
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  name:{
    fontSize:20,
    marginTop:10,
  },
  btn:{
    width: 30,
    height:30,
  },
  row:{
    justifyContent: 'space-between',
    flexDirection:'row',
    marginHorizontal: 40,
    marginTop: 10,
  },
  iconcontainer:{
    flex:1,
    alignItems:'center'
  },
  count: {
    color:'gray'
  }
});
