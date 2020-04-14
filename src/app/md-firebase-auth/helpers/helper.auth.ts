

// https://firebase.google.com/docs/auth/web/manage-users?hl=es
// https://firebase.google.com/docs/auth/admin/errors?hl=es-419
// https://github.com/Dunebook/Firebase-auth-chat-app/tree/master/src 


import { auth } from '../../firebase/firebase';
import { DataAuth } from '../models/dataauth';


function newDataAuth() {
   return new DataAuth() ;
}


export function signup(email, password) {
  return auth().createUserWithEmailAndPassword(email, password);
}

export function signin(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function signInWithGoogle() {
  const provider = new auth.GoogleAuthProvider();
  return auth().signInWithPopup(provider);
}
export function signInWithTwitter() {
  const provider = new auth.TwitterAuthProvider();
  return auth().signInWithPopup(provider);
}

export function signInWithPopup() {
  const provider = new auth.FacebookAuthProvider();
  return auth().signInWithPopup(provider);
}

export function signInWithGitHub() {
  const provider = new auth.GithubAuthProvider();
  return auth().signInWithPopup(provider);
}

export function logout() {
  return auth().signOut();
}

export function verificarEmail( user, dominioAutorizado ) {
  return user.sendEmailVerification(dominioAutorizado);
}

export function isLogginOn(  ) {
  return auth().currentUser;
}

export  function getDataAuthCurrentUser(  ): DataAuth{
   const user =  auth().currentUser;
   // console.log('qqqqqqqqq   user', user);
  // cargamos datos usuario
   const dataAuth = newDataAuth();

   if ( user ) {dataAuth.uid = user.uid;
                dataAuth.displayname = user.displayName;
                dataAuth.email = user.email;
                dataAuth.emailverified = user.emailVerified;
                dataAuth.photourl = user.photoURL;
                dataAuth.lastsignintime = user.metadata.lastSignInTime;
                dataAuth.creationtime = user.metadata.creationTime;
  }
   return dataAuth ;
}


