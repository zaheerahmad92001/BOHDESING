import HttpClient from '@Utils/HttpClient';

async function fetchevents(data) {
  let endpoint = 'user/event/get-all';
  return HttpClient.post(endpoint, data);
}
async function bookevent(data) {
  let endpoint = 'user/event/seat-booking';
  return HttpClient.post(endpoint, data);
}
async function fetchtickets(data) {
  let endpoint = 'user/event/ticket';
  return HttpClient.post(endpoint, data);
}
async function fetchseats(data) {
  let endpoint = 'user/event/seats';
  return HttpClient.post(endpoint, data);
}
export default {
  fetchevents,
  bookevent,
  fetchtickets,
  fetchseats
};
