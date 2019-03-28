import firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAFX2rvkO1hftJ5tr-v6PdifLuMwnF3Nlo",
    authDomain: "signin-cc36d.firebaseapp.com",
    databaseURL: "https://signin-cc36d.firebaseio.com",
    projectId: "signin-cc36d",
    storageBucket: "signin-cc36d.appspot.com",
    messagingSenderId: "1053018919255"
  };
export const firebaseApp =  firebase.initializeApp(config);
