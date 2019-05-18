// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:
  {
    apiKey: 'AIzaSyB0FyLmjFNyZD2gQJ2AGUhVTr0Ut3dSByE',
    authDomain: 'invitationapp-3d6e9.firebaseapp.com',
    databaseURL: 'https://invitationapp-3d6e9.firebaseio.com',
    projectId: 'invitationapp-3d6e9',
    storageBucket: 'invitationapp-3d6e9.appspot.com',
    messagingSenderId: '1040702981059'
  }

};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI