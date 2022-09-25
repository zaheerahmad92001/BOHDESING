import HttpClient from '@Utils/HttpClient'

function adPost(data){
    let endpoint = 'ad_post.php';
    return HttpClient.post(endpoint,data);
}

function adInv(data){
    let endpoint = 'add_inventory.php';
    return HttpClient.post(endpoint,data);
}

function fetchprf(data){
    let endpoint = 'fetch_profle.php';
    return HttpClient.post(endpoint,data);
}
function updateprf(data){
    let endpoint = 'update_profile.php';
    return HttpClient.post(endpoint,data);
}

function fetchItem(data){
    let endpoint = 'fetch_item.php';
    return HttpClient.post(endpoint,data);
}

function uploadImage(data){
    let endpoint = 'product_image_upload.php';
    return HttpClient.upload(endpoint,'POST',data);
}

function deleteItem(data){
    let endpoint = 'delete_item.php';
    return HttpClient.post(endpoint,data);
}

function editItem(data){
    let endpoint = 'edit_item.php';
    return HttpClient.post(endpoint,data);
}

function editDetails(data){
    let endpoint = 'edit_inventory.php';
    return HttpClient.post(endpoint,data);
}

export default {
    adPost,
    adInv,
    fetchprf,    
    fetchItem,
    uploadImage,
    updateprf,
    deleteItem,
    editItem,
    editDetails
}