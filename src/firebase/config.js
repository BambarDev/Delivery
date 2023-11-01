import { initializeApp } from 'firebase/app'
import '@react-native-firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAwtVJ0ziV_If0fA4_djSfD21NKnAFHjn0",
  authDomain: "delivery-1634e.firebaseapp.com",
  projectId: "delivery-1634e",
  storageBucket: "delivery-1634e.appspot.com",
  messagingSenderId: "574684472171",
  appId: "1:574684472171:web:2084ce196c6732f504e22e"
};

if (!firebase.apps.length) {
  firebase.initializeApp({ /* Firebase config options */ });
}