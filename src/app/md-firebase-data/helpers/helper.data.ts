

// https://firebase.google.com/docs/auth/web/manage-users?hl=es
// https://firebase.google.com/docs/auth/admin/errors?hl=es-419
// https://github.com/Dunebook/Firebase-auth-chat-app/tree/master/src
// https://github.com/jggomez/firestore-examples
// https://github.com/jggomez/firestore-examples-JS/blob/master/firestore.js


import { db } from '../../firebase/firebase';


// add: crea la collecció si no existeix i afegeix un registre
// Els noms dels camps de la bade de dades a firestore millor
// tot amb minúscules
export async function add(...args) {
  try {
    if ( args[0] === ''  || args[1] === null ) {
      throw new Error('Whoops!: colecció o document no están definits');
    }
    // fem el Object.assign perque es necessita
    // type Object per no un Object
    const respuesta = await db.collection(args[0]).add(Object.assign({}, args[1]));
    return respuesta;
  } catch (error) {
    console.error('error en catch try helper.data.ts', error);
    return error;
  }
}

// deleteDocument elimina un document
export async function deleteDocument(...args) {
  try {
    if ( args[0] === ''  || args[1] === '' ) {
      throw new Error('Whoops!: colecció o document no están definits');
    }
    // fem el Object.assign perque es necessita
    // type Object per no un Object
    const resp = await db.collection(args[0]).doc(args[1]).delete();
    // si no hi ha errors retorna undefined encara que no hagi trobat
    // el document
    return args[1];
  } catch (error) {
    console.error('error en catch try helper', error);
    return error;
  }
}

// readDocument obté les dades del document
export async function readDocument(...args) {
  try {
    if ( args[0] === ''  || args[1] === '' ) {
      throw new Error('Whoops!:colecció o document no están definits');
    }

    const doc = await db.collection(args[0]).doc(args[1]).get();
    // si no hi ha errors retorna undefined encara que no hagi trobat
    // el document
    return doc.data();
  } catch (error) {
    console.error('Error getting document:', error);
    return error;
  }
}



