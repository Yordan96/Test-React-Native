/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import ArtistBox from './artistBox';
import {getArtist} from './api-client';
import { fireDatabase, firebaseAuth } from './firebase'
export default class ArtistDetailView extends Component<{}> {
  handleSend = () => {

     const {text} = this.state
     const artistCommentsRef = this.getArtistCommentRef()
     var newCommentRef = artistCommentsRef.push();
      newCommentRef.set({text });
  }

  getArtistCommentRef = () => {
      const {id} = this.props.artist
      return fireDatabase.ref('comments/'+id)
  }

  handleTextChange = (text) => this.setState({text})

  render() {
    const send = 'http://wfarm4.dataknet.com/static/resources/icons/set110/a03c52ec.png';
    const artist= this.props.artist
    return (
      <View style={styles.container}>
       <ArtistBox artist={artist}/>
       <View style={styles.inputcontainer}>
         <TextInput
            style={styles.input}
            placeholder="Opina sobre este artista"
            onChangeText={this.handleTextChange}
         />
        <TouchableOpacity onPress={this.handleSend}>
          <Image style={styles.btn} source={{uri: send}} />
        </TouchableOpacity>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop:70,

  },
  inputcontainer:{
    position:'absolute',
    bottom:0,
    right:0,
    left:0,
    height:50,
    backgroundColor:'white',
    paddingHorizontal:10,
    flexDirection: 'row',
    alignItems:'center',
  },
  input:{
    height:50,
    flex:1
  },
  btn:{
    width: 30,
    height:30,
  },
});
