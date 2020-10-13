/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */

export const environment = {
  api_base_uri: 'https://localhost:3000/api/v1.0.0/',
  production: true,
  secret: {
    number_of_rounds: 10,
    secret_key: 'va#_-w,X+b/c%)b~Wg_z5%dXe8%99&Q-'
  },
  version: require('../../package.json').version
};
