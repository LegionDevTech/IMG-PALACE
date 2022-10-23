const getTitle = (pathname) => {
    switch (pathname) {
        case "/":
            return "Home";
        case "/images":
            return "Images";
        case "/videos":
            return "Videos";
        default:
            return "Title Not found";
    }
};
const getSearchTagNames = () => {
    return [{
            searchText: "nature",
            displayText: "Nature"
        },
        {
            searchText: "abstract",
            displayText: "Abstract"
        },
        {
            searchText: "cars",
            displayText: "Cars"
        },
        {
            searchText: "sunset",
            displayText: "Sunset"
        }
    ];
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getTitle,
    getSearchTagNames
}