import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./contact";
import Grid from "./grid";
import Login from "./login";
import Signup from "./signup";
import Aboutimg from "./aboutimg";
import Cookiesimg from "./cookiesimg";




const Content = () => {

    return (

        <Routes>
            {/* <Route path={["/home", "/videos", "/popular", "/recent"]} element={<Grid />} /> */}
            <Route path="/" index={true} element={<Grid />} />
            <Route path="/images" element={<Grid />} />
            <Route path="/videos" element={<Grid />} />
            {/* <Route path="/popular" element={<Grid />} /> */}
            {/* <Route path="/recent" element={<Grid />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/signup" element={<Signup />} /> */}
            <Route path="/aboutimg" element={<Aboutimg />} />
            <Route path="/Cookiesimg" element={<Cookiesimg />} />
            {/* <Route path="*" element={<NotFound />}/> */}
        </Routes>
    );
};

export default Content;
