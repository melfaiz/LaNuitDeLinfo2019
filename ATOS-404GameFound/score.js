import * as firebase from "firebase/app";

var firebaseConfig = {
    apiKey: "AIzaSyBp2CvigqUyAFjQooWMnG_OK-QeSfjsSPE",
    authDomain: "birdy-8db7d.firebaseapp.com",
    databaseURL: "https://birdy-8db7d.firebaseio.com",
    projectId: "birdy-8db7d",
    storageBucket: "birdy-8db7d.appspot.com",
    messagingSenderId: "257615462074",
    appId: "1:257615462074:web:7e580597ab40f7d2c28c83"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  var database = firebase.database();
  
  function addScore() {
    console.log("called");
    database.ref("scores/test").set({ score: 1111 });
  }
  