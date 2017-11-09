/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View
} from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';


export default class App extends Component<{}> {

  componentWillMount(){

    const config = {
    apiKey: 'AIzaSyDnOXCFr5AWPv0-YzmgNwKcDpRIc-7CO0Y',
    authDomain: 'auth-dc190.firebaseapp.com',
    databaseURL: 'https://auth-dc190.firebaseio.com',
    projectId: 'auth-dc190',
    storageBucket: 'auth-dc190.appspot.com',
    messagingSenderId: '78789493651'
  };

  firebase.initializeApp(config);



  }

  render() {
    return (
      <View>
        <Header headerText="Authentification" />
        <LoginForm />
      </View>
    );
  }
}

