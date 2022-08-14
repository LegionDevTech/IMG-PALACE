import React from "react";

async function getImages(sQuery) {
    const backendResponse = await fetch("/getImages", {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        }
    });
    if (backendResponse.ok) {
        const jsonResponse = await backendResponse.json();
        return jsonResponse.aImageResponse;
    }
}

export default {
    getImages
};