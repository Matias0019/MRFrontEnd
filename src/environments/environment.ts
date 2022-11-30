// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'matias-romero-frontend',
    appId: '1:337599256182:web:e7ad952b91c6860b01f157',
    storageBucket: 'matias-romero-frontend.appspot.com',
    locationId: 'southamerica-east1',
    apiKey: 'AIzaSyAGCwJg9ALWLpkDIdOQokBCldlwlZaXoJ0',
    authDomain: 'matias-romero-frontend.firebaseapp.com',
    messagingSenderId: '337599256182',
  },
  production: false,

  URL: 'http://localhost:8080/',
  //URL: 'http://otraurl'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
