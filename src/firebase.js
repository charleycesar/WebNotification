import firebase from 'firebase';
import { firebaseConfig } from './config/firebase.config';
import { v1 as uuid } from 'uuid';

firebase.initializeApp(firebaseConfig);
const FirebaseDatabase = firebase.database();

export const sendRegistrationToServer = (token) => {
  const reference = FirebaseDatabase.ref(`/users/${uuid()}`);
  reference.set({ token });
};

export default firebase;
