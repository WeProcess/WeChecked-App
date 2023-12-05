import { firebase } from "@react-native-firebase/messaging";
import { initializeApp } from "firebase/app";
import "@react-native-firebase/auth";
import "firebase/firestore";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyCHYXdB1S2vGPS10j4x7xfPt7DfT3T3ORE",
  authDomain: "wechecked-apk.firebaseapp.com",
  databaseURL: "https://wechecked-apk.firebaseio.com",
  projectId: "wechecked-apk",
  storageBucket: "wechecked-apk.appspot.com",
  messagingSenderId: "472741148070",
  appId: "1:472741148070:android:9d0cd4a8b92365c4e20b67",
  measurementId: "G-measurement-id",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
