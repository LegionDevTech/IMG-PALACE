import React from 'react';
import Grid from '../components/grid';
import Footer from '../components/footer';
import Header from '../components/header';


const renderContent = (location) => {

    switch (location) {
        case "homePage":
            return <Grid title="Home" gridContentType="Home" />
        case "imagesPage":
            return <Grid title="Images" gridContentType="Images" />;
        case "videosPage":
            return <Grid title="Videos" gridContentType="Videos" />;
        default:
            break;
    }
}

export default function Main(props) {
    return (
        <>
            <Header />
            {
                renderContent(props.location)
            }
            <Footer />
        </>
    )
}
