// const frontendUrl = 'http://localhost:4200/';
// const backendUrl = 'http://localhost:8080/';
// const loginUrl = 'http://localhost:4200/login';

const frontendUrl = 'https://tube.hindu.social/';
const backendUrl = 'https://api.hindu.social/';
const loginUrl = 'https://hindu.social/login';
const logoutUrl = 'https://hindu.social/logout';



export const environment = {
  production: true,
  frontendUrl: frontendUrl,
  backendUrl: backendUrl,
  loginUrl: loginUrl,
  apiUrl: `${backendUrl}api/v1/`,
  domain: '.healing.tube',
  socketUrl: `${backendUrl}`,
  conferenceUrl: 'https://facetime.tube/',
  logoutUrl: logoutUrl
};