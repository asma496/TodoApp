
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyC5aMsQ7JELUbJTBor1289LWqfDUOjS-ZI",
  authDomain: "loginfirebase-ad2f8.firebaseapp.com",
  projectId: "loginfirebase-ad2f8",
  storageBucket: "loginfirebase-ad2f8.appspot.com",
  messagingSenderId: "808562424410",
  appId: "1:808562424410:web:a6f9acc4a380ffffd9f663"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
  export default fire