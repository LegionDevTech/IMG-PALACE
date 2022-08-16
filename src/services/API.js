import React from "react";

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

export default {
    getImages
};