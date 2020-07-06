import firebase from 'firebase';
import 'firebase/firestore';
const config = {
  apiKey: 'AIzaSyBVtalKHWjFxuWrH6gpU4ZGXt_6b1A11dM',
  authDomain: 'music-lib-c8085.firebaseapp.com',
  databaseURL: 'https://music-lib-c8085.firebaseio.com',
  projectId: 'music-lib-c8085',
  storageBucket: 'music-lib-c8085.appspot.com',
  messagingSenderId: '190115303885',
  appId: '1:190115303885:web:bbf9490b5cb73bd98fb484',
  measurementId: 'G-PJ64WJFQ4K'
};
const firestore = firebase.initializeApp(config);
const db = firebase.firestore();

console.log('firestore', firestore);
export default db;
