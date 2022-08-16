// react imports
import React from "react";
import { Route, Routes } from "react-router-dom";

// custom imports
import Grid from "./grid";
import Aboutimg from "./aboutimg";
import Cookiesimg from "./cookiesimg";
import Modal from "./modal";


const Content = () => {

    return (

        <Routes>
            <Route path="/" index={true} element={<Grid />} />
            <Route path="/images" element={<Grid />} />
            <Route path="/videos" element={<Grid />} />
            <Route path="/aboutimg" element={<Aboutimg />} />
            <Route path="/Cookiesimg" element={<Cookiesimg />} />
<<<<<<< HEAD
            <Route path="/modal" element={<Modal />} />
            {/* <Route path="*" element={<NotFound />}/> */}
=======
>>>>>>> 3e857eddddf233a257c1ca77146c8e8b4437a8e5
        </Routes>
    );
};

export default Content;
