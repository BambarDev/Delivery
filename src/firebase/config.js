import firebase from '@react-native-firebase/app'
import '@react-native-firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCfJS4_Wc0keazm7w2RNvB-qQ1ZS5kfP6o",
  authDomain: "delivery-app-71c73.firebaseapp.com",
  projectId: "delivery-app-71c73",
  storageBucket: "delivery-app-71c73.appspot.com",
  messagingSenderId: "259981075307",
  appId: "1:259981075307:web:a05b272d5bbcac0318a22e"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

