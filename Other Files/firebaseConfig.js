// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFLm-gpC8i68A9cEYKXjfgXQaMTcCfCIM",
  authDomain: "qrcodeattendence-54147.firebaseapp.com",
  projectId: "qrcodeattendence-54147",
  storageBucket: "qrcodeattendence-54147.appspot.com",
  messagingSenderId: "404132353266",
  appId: "1:404132353266:web:72e4718e148592677c2c6b",
  measurementId: "G-6LWTBRY9JW",
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const auth = firebase.auth();

export { auth };
// const analytics = getAnalytics(app);
6