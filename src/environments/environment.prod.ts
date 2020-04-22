export const environment = {
  apiURL: 'https://localhost:3000/api/v1.0.0/',
  production: true,
  version: require('../../package.json').version,
  secret: {
    secretKey: 'va#_-w,X+b/c%)b~Wg_z5%dXe8%99&Q-',
    numRounds: 10,
  },
};
