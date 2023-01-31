import React, { Component } from 'react';
import './App.css';
import SampleData from './components/SampleData';
import firebase from 'firebase';

// firebaseの設定
var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

console.log(firebaseConfig);

// Firebaseの初期化
firebase.initializeApp(firebaseConfig);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>FireBaseData</h1>
          <SampleData />
        </div>
      </div>
    );
  }
}

export default App;
