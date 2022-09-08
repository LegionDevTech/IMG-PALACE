async function getImages(sPath, sQuery, iPage) {
    const backendResponse = await fetch("/getImages?" + new URLSearchParams({
        sPath: sPath,
        sQuery: sQuery,
        iPage: iPage
    }));
    if (backendResponse.ok) {
        const jsonResponse = await backendResponse.json();
        return jsonResponse.photos;
    }
}
const API = {
    getImages
};
export default API;