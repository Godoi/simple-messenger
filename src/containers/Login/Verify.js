import React, { useState, useEffect } from 'react';
import firebase from '../../firebase/Firebase';
import "firebase/auth";

import './Login.css';

const Verify = () => {

  const [error, setError] = useState('');

  useEffect(() => {
    const email = window.localStorage.getItem('simpleMessengerEmail');
    const isSignIn = firebase.auth().isSignInWithEmailLink(window.location.href);
    const signIn = firebase.auth().signInWithEmailLink(email, window.location.href);

    if (!isSignIn || !signIn) {
      setError('404');
      return;
    }

    // const {
    //   user: {

    //   }
    // } = signIn;

    // window.location.pathname = `messages/${email}`;

    console.log('Meu primeiro user', signIn);
  });

  return (
    <div className="App">
      { error ? '404' : 'Verificando...'}
    </div>
  );
}

export default Verify;
