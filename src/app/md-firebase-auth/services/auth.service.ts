
// https://firebase.google.com/docs/auth/web/manage-users?hl=es
// https://firebase.google.com/docs/auth/admin/errors?hl=es-419
// https://github.com/Dunebook/Firebase-auth-chat-app/tree/master/src 

import { Injectable } from '@angular/core';
import { auth } from '../../firebase/firebase';
// tslint:disable-next-line: max-line-length
import { signup, signin, signInWithGoogle, signInWithPopup ,signInWithGitHub, logout, verificarEmail, isLogginOn, signInWithTwitter, getDataAuthCurrentUser } from '../helpers/helper.auth';

// import * as firebase from 'firebase';
/* import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';
 */

import { environment } from '../../../environments/environment'
// import { DataAuth } from '../models/dataauth';


@Injectable()
export class AuthService {

  dataAuth = {} ;
  currentUserName = 'no hi ha currentUser';
  currentUser: Object;

  constructor( ) {
    // Initialize Firebase

    auth().onAuthStateChanged( async user => {


        const userWrk = await isLogginOn();
        if ( userWrk) {
          this.currentUserName = auth().currentUser.displayName;
          this.currentUser = auth().currentUser;
          this.dataAuth = getDataAuthCurrentUser();
          return 'Ja estás loguejat!!!';
           } else {
            this.currentUserName = 'No hi ha currentUser!!!';
            this.currentUser = null;
            this.dataAuth = null;
           }
    });

  }


async crearCuentaEmailPass( email, password, nombres) {
  try {
    if ( isLogginOn() ) {
      return 'Ya tens un compte!!!';
    }
    const result = await signup(email, password);
    await result.user.updateProfile({
          displayName: nombres
      })
      // tslint:disable-next-line: no-shadowed-variable
      .then( ( result ) => result)
      .catch(( error ) => {
        console.log(error);
        return error;
      });

    // enviamos un email a usuario para que lo confirme
    // y podamos validar el email.

    await verificarEmail( result.user,environment.dominioAutorizado );

    // hacemos el signOut() para que cuando el usuario confirme
    // el correo, firebase hace el signIn() automáticamente
    await logout();


    return `Compte donat d'alta ok. Confirma el correu enviat. OK`

  } catch (error) {
    return error;
  }
}

async autEmailPass( email: string, password: string ) {
  try {

          if ( isLogginOn()) { return 'Ja estás loguejat!!!'; }

          const result = await signin(email, password);
          if (result.user.emailVerified) {
            return 'Loguejat amb email verificat';
           // return result.user.providerData;
      }

          await auth().signOut();
          return 'Error: email no verificat';
  } catch (error) {
      return error;
  }
}

async authCuentaGoogle() {
  try {

    if ( isLogginOn()) { return 'Ja estás loguejat!!!'; }

    const result = await signInWithGoogle();
    if ( auth().currentUser) { return 'Ja estás loguejat!!!'; }
    if (result) {
      return result.user;
      }

    return 'Loguejat amb Google';

  } catch (error) {
      console.error(error);
      return error;
  }
}

async authCuentaFacebook() {
  try {


      if ( isLogginOn()) { return 'Ja estás loguejat!!!'; }

      const result = await signInWithPopup();

      if (result) {
        return 'Loguejat amb Facebook';
      }
      return 'error inesperat a autCuentaFacebook()';

       } catch (error) {
      console.error(error);
      return error;
  }
}

async authCuentaTwitter() {
  try {

    if ( isLogginOn()) { return 'Ja estás loguejat!!!'; }

    const result = await signInWithTwitter();

    if (result) {
      return 'Loguejat amb Twitter';
    }
    return 'error inesperat a authCuentaTwitter()';

     } catch (error) {
    console.error(error);
    return error;
     }

}

async authCuentaGitHub( ) {
  try {

    if ( isLogginOn()) { return 'Ja estás loguejat!!!'; }

    const result = await signInWithGitHub();
    if (result) {
      return 'Loguejat amb GitHub';
    }
    return 'error inesperat a authCuentaGitHub()';

     } catch (error) {
    console.error(error);
    return error;
     }

}

async signOut() {
  try {
    await logout();
    this.dataAuth = getDataAuthCurrentUser();
    return 'S´ha fet el logout!!!';
  } catch (error) {
    console.error('error en catch try', error);
    return error;
  }
}

}
