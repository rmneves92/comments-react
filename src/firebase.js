import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB7CvPGsW4VXuEyNNP16ik8ZlRYyswEzBk",
    authDomain: "comments-aca07.firebaseapp.com",
    databaseURL: "https://comments-aca07.firebaseio.com",
    projectId: "comments-aca07",
    storageBucket: "",
    messagingSenderId: "588261597069",
    appId: "1:588261597069:web:b9b9e450280306d9"
  };

  firebase.initializeApp(firebaseConfig);

  export const database = firebase.database()
  export const auth = firebase.auth()