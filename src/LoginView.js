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
  ImageBackground,
  Image
} from 'react-native';
import  FBSDK, {
  LoginButton,
  AccessToken
} from'react-native-fbsdk'
import {Actions} from 'react-native-router-flux';

import firebase, { firebaseAuth} from './firebase'
//import Icon from 'react-native-vector-icons/dist/FontAwesome';

const {FacebookAuthProvider} = firebase.auth;


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
      <ImageBackground source={require('./12.jpg')} style={styles.container}>
        <Text style={styles.welcome}>
          Bienvenido a mi applicación
        </Text>
        <Text style={styles.welcome2}>
          {this.state.credentials && this.state.credentials.displayName}
        </Text>
        <Image source={require('./cian.png')} style={styles.logo}/>
        <Button style={styles.btnseguir}
        onPress={this.handleButtonPress} title="seguir" />
        <LoginButton
          readPermissions={["public_profile",'email']}
          onLoginFinished={this.handleLoginFinished }
          onLogoutFinished={() => alert("logout.")}/>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height:null,
    backgroundColor: 'lightgray',
    justifyContent:'center',
    alignItems:'center'
  },
  welcome:{
    fontSize:24,
    fontWeight:'600',
    marginBottom:20,
    color: 'lightgray'
  },
  welcome2:{
    fontSize:19,
    marginBottom:10,
    color: 'lightgray'
  },
  logo:{
    width: 150,
    height:60,
    marginBottom:10,
  },
  btnseguir:{
    marginBottom:17,
  }
});
