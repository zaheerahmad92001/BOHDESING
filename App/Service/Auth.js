import HttpClient from '@Utils/HttpClient';
import Storage from '@Utils/Storage';

async function register(data) {
  let endpoint = 'user/register';
  return HttpClient.post(endpoint, data);
}
async function updateprofile(data) {
  let endpoint = 'user/update';
  return HttpClient.post(endpoint, data);
}
async function login(data) {
  let endpoint = 'user/login';
  return HttpClient.post(endpoint, data);
}

async function getAccount() {
  return await Storage.get('account');
}

async function setAccount(data) {
  return await Storage.set('account', data);
}

async function getToken() {
  return await Storage.get('token');
}

async function setToken(data) {
  return await Storage.set('token', data);
}

async function logout() {
  return await Storage.set('account', null);
}


export default {
  register,
  updateprofile,
  login,
  logout,
  getAccount,
  setAccount,
  getToken,
  setToken
};
