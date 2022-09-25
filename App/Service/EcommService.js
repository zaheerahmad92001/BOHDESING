import HttpClient from '@Utils/HttpClient';

async function banner(d) {
  let endpoint = 'user/banner';
  return HttpClient.post(endpoint, d);
}
async function fetchcategory(d) {
  let endpoint = 'user/categary';
  return HttpClient.post(endpoint, d);
}
async function product(data) {
  let endpoint = 'user/product';
  return HttpClient.post(endpoint, data);
}
async function addcart(data) {
    let endpoint = 'user/product/addtocart';
    return HttpClient.post(endpoint, data);
}
async function fetchcart(data) {
    let endpoint = 'user/product/fetchcart';
    return HttpClient.post(endpoint, data);
}
async function cartcount(data) {
  let endpoint = 'user/product/cartcount';
  return HttpClient.post(endpoint, data);
}
async function deletecart(data) {
    let endpoint = 'user/product/deletecart';
    return HttpClient.post(endpoint, data);
}
async function checkout(data) {
  let endpoint = 'user/checkout';
  return HttpClient.post(endpoint, data);
}
async function orderhistory(data) {
  let endpoint = 'user/checkout/history';
  return HttpClient.post(endpoint, data);
}
export default {
    banner,
    fetchcategory,
    product,
    addcart,
    fetchcart,
    cartcount,
    deletecart,
    checkout,
    orderhistory
};
