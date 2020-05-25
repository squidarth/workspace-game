import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Login from './components/Login';
import Signup from './components/Signup';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDdEt-y5GZ7OuGm9H6j6OWo6BcB9fE-slc",
  authDomain: "workspace-game.firebaseapp.com",
  databaseURL: "https://workspace-game.firebaseio.com",
  projectId: "workspace-game",
  storageBucket: "workspace-game.appspot.com",
  messagingSenderId: "26240082349",
  appId: "1:26240082349:web:dc844d4cc6e82b7adc0124"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(userAuth => {
ReactDOM.render(
    <Router>
      <Route exact path="/app" component={App} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Signup} />

    </Router>,
    
  document.getElementById('root')
);
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
