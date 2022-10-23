// const IMAGE_FIXED_WIDTH = 300;

// function resizePhotos(photos) {
//     for (var i = 0; i < photos.length; i++) {
//         photos[i].src = photos[i].src.tiny.split("?")[0] + "?auto=compress&cs=tinysrgb&dpr=2&w=" + IMAGE_FIXED_WIDTH;
//         photos[i]["newH"] = photos[i].height / photos[i].width * IMAGE_FIXED_WIDTH;
//     }
//     return photos;
// }

export const searchForVideos = async (PEXELS_API_CLIENT_OBJECT, sSearchQuery, iPageNumber, iContentPerPage) => {

    return new Promise(resolve => {
        PEXELS_API_CLIENT_OBJECT.videos.search({
                query: sSearchQuery,
                page: iPageNumber,
                per_page: iContentPerPage
            })
            .then(response => {
                // response.photos = resizePhotos(response.photos);
                resolve(response);
            });
    })
}


export const popularVideos = async (PEXELS_API_CLIENT_OBJECT, iPageNumber, iContentPerPage) => {
    return new Promise(resolve => {
        PEXELS_API_CLIENT_OBJECT.videos.popular({
                page: iPageNumber,
                per_page: iContentPerPage
            })
            .then(response => {
                // response.photos = resizePhotos(response.photos);
                resolve(response);
            });
    })
}