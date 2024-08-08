// firebase-config.js

var firebaseConfig = {
    apiKey: "AIzaSyAuknFiV42CT-PDYtp57bmclyKEZnP0kMU",
    authDomain: "attendance-system-d9e82.firebaseapp.com",
    databaseURL: "https://attendance-system-d9e82-default-rtdb.firebaseio.com",
    projectId: "attendance-system-d9e82",
    storageBucket: "attendance-system-d9e82.appspot.com",
    messagingSenderId: "1016633980751",
    appId: "1:1016633980751:web:cbf390f5400ffae0c1773a",
    measurementId: "G-49EXS27L8M"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
