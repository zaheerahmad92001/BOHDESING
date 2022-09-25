import HttpClient from '@Utils/HttpClient';

async function createMeeting(data) {
  let endpoint = 'user/metting';
  return HttpClient.post(endpoint,data);
}

async function getMeeting(data) {
    let endpoint = 'user/metting/get-all';
    return HttpClient.post(endpoint);
}


async function getInviteMeeting(data) {
    let endpoint = 'user/metting/get-invited';
    return HttpClient.post(endpoint);
}

async function InviteMeeting(data) {
    let endpoint = 'user/metting/invite';
    return HttpClient.post(endpoint, data);
}

async function joinMeet(data) {
  let endpoint = 'user/metting/join';
  return HttpClient.post(endpoint, data);
}




export default {
  createMeeting,
  getMeeting,
  getInviteMeeting,
  InviteMeeting,
  joinMeet
};
