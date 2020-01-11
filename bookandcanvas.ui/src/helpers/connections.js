import firebase from 'firebase';
import AuthConfig from './authConfig.json';

const firebaseApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(AuthConfig.firebaseKeys);
  }
};

export default firebaseApp;
