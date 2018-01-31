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
  Image,
  Text
} from 'react-native';

import ArtistBox from './artistBox';
//import CommentList from './CommentList';
import {getArtist} from './api-client';
import { fireDatabase, firebaseAuth } from './firebase'
import CommentList from './CommentList'
export default class ArtistDetailView extends Component<{}> {
state = {
  comments: []
}
componentDidMount(){
    this.getArtistCommentRef().on('child_added',this.addComment );
}

componentWillUnmount() {
    this.getArtistCommentRef().off('child_added',this.addComment );
}
addComment = (data) => {
  const comment = data.val()
  this.setState({
    comments: this.state.comments.concat(comment)
  })
}
  handleSend = () => {
     const {text} = this.state
     const artistCommentsRef = this.getArtistCommentRef()
     var newCommentRef = artistCommentsRef.push();
      newCommentRef.set({text });
      this.setState({text:''})
  }

  getArtistCommentRef = () => {
      const {id} = this.props.artist
      return fireDatabase.ref(`comments/'${id}`)
  }

  handleTextChange = (text) => this.setState({text})

  render() {
    const send = 'http://wfarm4.dataknet.com/static/resources/icons/set110/a03c52ec.png';
    const artist= this.props.artist
    const {comments} =this.state
    return (
      <View style={styles.container}>
       <ArtistBox artist={artist}/>
       <Text style={styles.header}>Comentarios</Text>
       <CommentList comments={comments}/>
       <View style={styles.inputcontainer}>
         <TextInput
            style={styles.input}
            value={this.state.text}
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
  header:{
    fontSize:20,
    paddingHorizontal: 15,
    marginVertical:20,
  },
  inputcontainer:{

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
