import HttpClient from '@Utils/HttpClient';


async function addpost(data) {
  let endpoint = 'user/post';
  return HttpClient.post(endpoint,data);
}
async function uploadfile(data) {
  let endpoint = 'image-upload/post';
  return HttpClient.newFileUpload(endpoint,data);
}
async function fetchpost(data) {
  let endpoint = 'user/post/get-all';
  return HttpClient.post(endpoint,data);
}
async function deletepost(data) {
  let endpoint = 'user/post/delete';
  return HttpClient.post(endpoint,data);
}
async function likepost(data) {
  let endpoint = 'user/post/like';
  return HttpClient.post(endpoint,data);
}
async function commentpost(data) {
  let endpoint = 'user/post/comment';
  return HttpClient.post(endpoint,data);
}
async function bookmarks(data) {
  let endpoint = 'user/post/bookmark';
  return HttpClient.post(endpoint,data);
}
export default {
addpost,
fetchpost,
likepost,
commentpost,
bookmarks,
uploadfile,
deletepost
};
