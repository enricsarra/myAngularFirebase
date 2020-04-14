import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { environment } from '../../environments/environment';

firebase.initializeApp(environment.firebaseConfig);

export const auth = firebase.auth;
// export const db = firebase.database();
export const db = firebase.firestore();
