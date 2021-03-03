import firebase from 'firebase';
import { firebaseConfig } from './config/firebase.config';

firebase.initializeApp(firebaseConfig);
const FirebaseDatabase = firebase.database();

export const sendRegistrationToServer = (token) => {
  const tokenSplit = token.split(':');
  const userTokenKey = tokenSplit[0];
  const reference = FirebaseDatabase.ref(`/users/${userTokenKey}`);
  reference.set({ token });
};

export default firebase;
