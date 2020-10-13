/* eslint-disable global-require */
/*
 * This file can be replaced during build by using the `fileReplacements` array.
 * `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
 * The list of file replacements can be found in `angular.json`.
 */

export const environment = {
  api_base_uri: 'https://localhost:3000/api/v1.0.0/',
  production: false,
  secret: {
    number_of_rounds: 10,
    secret_key: 'va#_-w,X+b/c%)b~Wg_z5%dXe8%99&Q-'
  },
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  version: require('../../package.json').version
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// Import 'zone.js/dist/zone-error';  // Included with Angular CLI.
