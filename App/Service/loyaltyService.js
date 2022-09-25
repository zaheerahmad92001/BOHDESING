import HttpClient from '@Utils/HttpClient';

async function loyaltypoint(d) {
  let endpoint = 'user/loyalty/get-all';
  return HttpClient.post(endpoint, d);
}

async function loyaltyAdd(data) {
  let endpoint = 'user/loyalty/loyalty-add';
  return HttpClient.post(endpoint, data);
}

export default {
    loyaltypoint,
    loyaltyAdd
};
