import firebase from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';

// TODO: remove firebase full dependency and pull just the ones you need

// Firebase has built in types! https://www.npmjs.com/package/@types/firebase
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: `${process.env.FIREBASE_URL}.firebaseapp.com`,
  databaseURL: `https://${process.env.FIREBASE_URL}.firebaseio.com`,
  projectId: process.env.FIREBASE_URL.toString(),
  storageBucket: `${process.env.FIREBASE_URL}.appspot.com`,
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore ? firebaseApp.firestore() : null;
export const auth = firebaseApp.auth ? firebaseApp.auth() : null;
export const authProvider = firebase!.auth!.GoogleAuthProvider;

// db settings
const settings = { timestampsInSnapshots: true };
db!.settings(settings);
