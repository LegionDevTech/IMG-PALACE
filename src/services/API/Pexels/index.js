import {
    createClient
} from "pexels";

import {
    searchForPhotos,
    curatedPhotos
} from "./Photos";

import {
    searchForVideos,
    popularVideos
} from "./Videos";

const PEXELS_API_KEY = '563492ad6f9170000100000156956241344046c8953c628fb5e032b7';
const PEXELS_API_RESOURCE_PER_PAGE = 20;
let PEXELS_API_CLIENT_OBJECT = null;


function createPexelsClient() {
    PEXELS_API_CLIENT_OBJECT = PEXELS_API_CLIENT_OBJECT ? PEXELS_API_CLIENT_OBJECT : createClient(PEXELS_API_KEY);
}

export const APIPexelsPhotos = (sSearchQuery, iPageNumber) => {
    createPexelsClient();
    if (sSearchQuery !== "") {
        return searchForPhotos(PEXELS_API_CLIENT_OBJECT, sSearchQuery, iPageNumber, PEXELS_API_RESOURCE_PER_PAGE);
    } else {
        return curatedPhotos(PEXELS_API_CLIENT_OBJECT, iPageNumber, PEXELS_API_RESOURCE_PER_PAGE);
    }
}


export const APIPexelsVideos = (sSearchQuery, iPageNumber) => {
    createPexelsClient();
    if (sSearchQuery !== "") {
        return searchForVideos(PEXELS_API_CLIENT_OBJECT, sSearchQuery, iPageNumber, PEXELS_API_RESOURCE_PER_PAGE);
    } else {
        return popularVideos(PEXELS_API_CLIENT_OBJECT, iPageNumber, PEXELS_API_RESOURCE_PER_PAGE);
    }
}