
// https://firebase.google.com/docs/auth/web/manage-users?hl=es

// https://firebase.google.com/docs/auth/admin/errors?hl=es-419

// https://github.com/Dunebook/Firebase-auth-chat-app/tree/master/src

// https://github.com/Fictizia/Master-en-Programacion-FullStack-con-JavaScript-y-Node.js_ed3/blob/master/teoria/clase85.md

// https://medium.com/firebase-developers/why-is-my-cloud-firestore-query-slow-e081fb8e55dd

import { Injectable, OnDestroy } from '@angular/core';
import { db } from '../../firebase/firebase';
// tslint:disable-next-line: max-line-length
import { add, deleteDocument, readDocument } from '../helpers/helper.data';
import { environment } from '../../../environments/environment';


@Injectable()
export class DataService implements OnDestroy {

    documentsCollection = '';
    uidsDeCadaDocument = '';

  constructor( ) {
    this.onSnapshot();
  }

  ngOnDestroy() {
    const unsubscribe = db.collection(environment.dbCollection)
    .onSnapshot(( resp ) => {
       console.log('unsubcribe', resp);
      // ...
    });
    unsubscribe();
  }

  async add( ...args  ) {
    try {
       const respuesta = await add(...args );
       return respuesta;
    } catch (error) {
      console.error('error en catch try data.service.ts', error);
      return error;
    }
  }

  async deleteDocument( ...args ) {
    try {
       const respuesta = await deleteDocument(...args);
       return respuesta;
    } catch (error) {
      console.error('error en catch try service', error);
      return error;
    }
  }

  async onSnapshot( ) {
    try {
      db.collection(environment.dbCollection)
      .where('email', '==', 'enricsarra@gmail.com')
      .orderBy('datacreationinapp', 'asc')
      .limit(3)
      .onSnapshot( async querySnapshot => {
        const documents = [];
        querySnapshot.docs.forEach((doc) => {
          documents.push(doc.id);
        });
        this.documentsCollection = documents.join(', ');

        const uidsDeCadaDocument = [];
        querySnapshot.forEach( doc => {
          uidsDeCadaDocument.push(doc.data().uid);
      });
        this.uidsDeCadaDocument = uidsDeCadaDocument.join(', ');

    });

    } catch (error) {
      console.error('error en catch try service', error);
      return error;
    }
  }

  async readDocument( ...args ) {
    try {
       const respuesta = await readDocument(...args);
       return respuesta;
    } catch (error) {
      console.error('error en catch try service', error);
      return error;
    }
  }

}
