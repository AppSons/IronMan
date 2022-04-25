// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  publickey : '1deba2216544ad56f5491ee890f937f7',
  hash : '3a2c602a882fef0c36463c78c055368a',
  ts : '9',
  
  key_api : '?&ts=9&apikey=1deba2216544ad56f5491ee890f937f7&hash=3a2c602a882fef0c36463c78c055368a',
  Url_Comic: 'https://gateway.marvel.com:443/v1/public/comics/',
  
  Url_API_P : `https://gateway.marvel.com:443/v1/public/characters/1009368?&ts=9&apikey=1deba2216544ad56f5491ee890f937f7&hash=3a2c602a882fef0c36463c78c055368a`,
  URL_API : `https://gateway.marvel.com:443/v1/public/characters/1009368/comics?format=comic&formatType=comic&limit=100&ts=9&apikey=1deba2216544ad56f5491ee890f937f7&hash=3a2c602a882fef0c36463c78c055368a`,
  };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
