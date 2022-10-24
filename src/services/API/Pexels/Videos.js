const IMAGE_FIXED_WIDTH = 300;

function resizeThumbnail(videos) {
    for (var i = 0; i < videos.length; i++) {
        videos[i].image = videos[i].image.split("?")[0] + "?auto=compress&cs=tinysrgb&dpr=2&w=" + IMAGE_FIXED_WIDTH;
        videos[i]["newH"] = videos[i].height / videos[i].width * IMAGE_FIXED_WIDTH;
    }
    return videos;
}

export const searchForVideos = async (PEXELS_API_CLIENT_OBJECT, sSearchQuery, iPageNumber, iContentPerPage) => {
    return new Promise(resolve => {
        PEXELS_API_CLIENT_OBJECT.videos.search({
                query: sSearchQuery,
                page: iPageNumber,
                per_page: iContentPerPage
            })
            .then(response => {
                response.photos = resizeThumbnail(response.videos);
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
                response.photos = resizeThumbnail(response.videos);
                resolve(response);
            });
    })
}