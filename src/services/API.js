import {
    createClient
} from 'pexels';



function getImages(sQuery, iPage, perPage) {
    const client = createClient('563492ad6f9170000100000156956241344046c8953c628fb5e032b7'),
        fixedWidth = 300;
    return new Promise((resolve, reject) => {
        client.photos.search({
                query: sQuery,
                page: iPage,
                per_page: perPage
            })
            .then(photos => {
                var localPhotos = photos,
                    oSingleImage;
                for (var i = 0; i < localPhotos.photos.length; i++) {
                    oSingleImage = localPhotos.photos[i];
                    localPhotos.photos[i].src = localPhotos.photos[i].src.tiny.split("?")[0] + "?auto=compress&cs=tinysrgb&dpr=2&w=" + fixedWidth;
                    localPhotos.photos[i]["newH"] = oSingleImage.height / oSingleImage.width * fixedWidth;
                }
                console.log(localPhotos);
                resolve(localPhotos.photos);
            });
    });
}

const API = {
    getImages
};
export default API;