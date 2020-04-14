// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyC6EJ-tDqlrlwoq9bQLvTHBXoIS_wGxbGo',
    authDomain: 'myfirebase-1b0b9.firebaseapp.com',
    databaseURL: 'https://myfirebase-1b0b9.firebaseio.com',
    projectId: 'myfirebase-1b0b9',
    storageBucket: 'myfirebase-1b0b9.appspot.com',
    messagingSenderId: '100939198975',
    appId: '1:100939198975:web:64a00569bb415ed82937ca',
    measurementId: 'G-N3277SR5M1'
},
  dominioAutorizado:  {
  url: 'https://myfirebase-1b0b9.firebaseapp.com/'
},
dbCollection: 'usersFirebase'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
