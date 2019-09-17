import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyATLrvrkhVJjwXSoJUG3E898oZCGBaNO5o",
  authDomain: "ecomm-db-29e2d.firebaseapp.com",
  databaseURL: "https://ecomm-db-29e2d.firebaseio.com",
  projectId: "ecomm-db-29e2d",
  storageBucket: "",
  messagingSenderId: "412727117166",
  appId: "1:412727117166:web:ee90478aef5815dc"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
  
  if(!userAuth)
    return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch(error){
      console.log('error creating user ', error.message);
    }
  }
  // console.log('snapShot -- ', snapShot);
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;