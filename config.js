import firebase from 'firebase'
require('@firebase/firestore')


const firebaseConfig = {
    apiKey: "AIzaSyAObKEA_0-WZASAS2TmpW1AtT2Jy6YPejs",
    authDomain: "libappdata.firebaseapp.com",
    projectId: "libappdata",
    storageBucket: "libappdata.appspot.com",
    messagingSenderId: "484592033844",
    appId: "1:484592033844:web:14bfd3b696f8b3c79b2a61"
  };
  firebase.initializeApp(firebaseConfig); 
  export default firebase.firestore();