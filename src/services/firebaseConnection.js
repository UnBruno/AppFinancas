import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


let firebaseConfig = {
    apiKey: "AIzaSyArH0sUXxySzJgczBccWfxalHHD9IX-okE",
    authDomain: "financas-b5bd7.firebaseapp.com",
    databaseURL: "https://financas-b5bd7-default-rtdb.firebaseio.com",
    projectId: "financas-b5bd7",
    storageBucket: "financas-b5bd7.appspot.com",
    messagingSenderId: "276492181633",
    appId: "1:276492181633:web:9ea7f02d7c614f46582d80"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
