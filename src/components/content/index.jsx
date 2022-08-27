// react imports
import React from "react";
import { Route, Routes } from "react-router-dom";

// custom imports
import Grid from "./grid";
import Aboutimg from "./aboutimg";
import Cookiesimg from "./cookiesimg";
import Modal from "./modal";
import Error404 from "./error404";


const Content = (props) => {

    return (

        <Routes>
            <Route path="/" index={true} element={<Grid />} />
            <Route path="/images" element={<Grid />} />
            <Route path="/videos" element={<Grid />} />
            <Route path="/aboutimg" element={<Aboutimg />} />
            <Route path="/Cookiesimg" element={<Cookiesimg />} />
            <Route path="/modal" element={<Modal />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
};

export default Content;
