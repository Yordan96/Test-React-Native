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
  Text,
} from 'react-native';
import  FBSDK, {
  LoginButton,
  AccessToken
} from'react-native-fbsdk'
import {Actions} from 'react-native-router-flux';
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyA8Mo41B_NOu_9vvxYowzvQf4GowBgxK0o",
  authDomain: "platzimusic-1a969.firebaseapp.com",
  databaseURL: "https://platzimusic-1a969.firebaseio.com",
  projectId: "platzimusic-1a969",
  storageBucket: "",
  messagingSenderId: "195972716067"
};
firebase.initializeApp(config);
const {FacebookAuthProvider} = firebase.auth;
const firebaseAuth=firebase.auth()

export default class LoginView extends Component<{}> {
  state = {
    credentials:null
  }

  componentWillMount(){
    this.authenticateUser()
  }
  authenticateUser = () => {
     AccessToken.getCurrentAccessToken().then((data)=>{
        const {accessToken} =data
        const credential = FacebookAuthProvider.credential(accessToken)
        firebaseAuth.signInWithCredential(credential).then((credentials) => {
        this.setState({credentials})
        },function(error) {
          console.log("Sign In Error", error);
        });
      })
  }


  handleLoginFinished =(error, result) => {
        if (error) {
          console.error(error)
        } else if (result.isCancelled) {
          alert("login is cancelled.");
        } else {
            this.authenticateUser()

        }
      }
  handleButtonPress = ()=>{
    Actions.home()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Bienvenido a mi applicación
        </Text>
        <Text style={styles.welcome}>
          {this.state.credentials && this.state.credentials.displayName}
        </Text>
        <Button onPress={this.handleButtonPress} title="seguir" />
        <LoginButton
          readPermissions={["public_profile",'email']}
          onLoginFinished={this.handleLoginFinished }
          onLogoutFinished={() => alert("logout.")}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    justifyContent:'center',
    alignItems:'center'
  },
  welcome:{
    fontSize:24,
    fontWeight:'600',
    marginBottom:20
  }
});
