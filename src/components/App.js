import React, { Component } from 'react';
import Container from './Container';
import './App.css';
import { firebaseApp } from './firebase';

const auth = firebaseApp.auth();
auth.createUserWithEmailAndPassword('marcusm@live.se', 'password')
    .then(response => console.log('Response', response))
    .catch(err => console.error(err));

class App extends Component {

  render() {
    return (
      <div className="App">
        <Container />
      </div>
    );
  }
}

export default App;
