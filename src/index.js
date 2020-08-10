import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCMuLlJI3V__H55afAaikheYo3YkRcw1pw",
    authDomain: "cart-5571b.firebaseapp.com",
    databaseURL: "https://cart-5571b.firebaseio.com",
    projectId: "cart-5571b",
    storageBucket: "cart-5571b.appspot.com",
    messagingSenderId: "10823133082",
    appId: "1:10823133082:web:43c6d6d71cf7c48d023c23"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



