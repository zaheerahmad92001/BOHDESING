import HttpClient from '@Utils/HttpClient';

async function getBanner() {
    let endpoint = 'user/video/banner';
    return HttpClient.get(endpoint);
}

async function getCategory() {
    let endpoint = 'user/content';
    return HttpClient.get(endpoint);
}

async function getTypeData(id) {
    let endpoint = 'user/content/type/'+id;
    return HttpClient.get(endpoint);
}

async function videoSingle(data) {
    let endpoint = 'user/video/single';
    return HttpClient.post(endpoint,data);
}

export default {
    getBanner,
    getCategory,
    getTypeData,
    videoSingle
}
