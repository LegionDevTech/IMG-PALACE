import React from "react";

async function getImages(sPath, sQuery) {
    const params = {
        sPath: sPath,
        sQuery: sQuery
    };
    const backendResponse = await fetch("/getImages?" + new URLSearchParams({
        sPath: sPath,
        sQuery: sQuery
    }));
    if (backendResponse.ok) {
        const jsonResponse = await backendResponse.json();
        return jsonResponse.aImageResponse;
    }
}

export default {
    getImages
};