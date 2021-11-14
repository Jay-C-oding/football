import firebase from 'firebase/app';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDjBgAKmd81M6cxajdXQTKgw3ZXnvOsmAE',
  authDomain: 'kicker-5992a.firebaseapp.com',
  projectId: 'kicker-5992a',
  storageBucket: 'kicker-5992a.appspot.com',
  messagingSenderId: '835938951056',
  appId: '1:835938951056:web:eadfee2c9018b603459d15',
  measurementId: 'G-W44Q0S75LJ',
};

firebase.initializeApp(firebaseConfig);

export { firebase };
