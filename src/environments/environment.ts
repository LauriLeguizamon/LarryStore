// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'https://platzi-store.herokuapp.com/products',
  firebase: {
    apiKey: 'AIzaSyBBsrC_thRIrwao9dsXjRO2UVGLC0VsKxM',
    authDomain: 'platzi-store-ccb2f.firebaseapp.com',
    projectId: 'platzi-store-ccb2f',
    storageBucket: 'platzi-store-ccb2f.appspot.com',
    messagingSenderId: '566789874119',
    appId: '1:566789874119:web:1a09064501fa45f588b9e2',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
