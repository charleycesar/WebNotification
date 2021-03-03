import React, { useEffect } from 'react';
import firebase, { sendRegistrationToServer } from './firebase';

const App = () => {
  useEffect(() => {
    const messaging = firebase.messaging();
    messaging
      .getToken()
      .then((token) => {
        sendRegistrationToServer(token);
      })
      .catch((error) => {
        console.log('Error, error', error);
      });
  }, []);
  return <div></div>;
};

export default App;
