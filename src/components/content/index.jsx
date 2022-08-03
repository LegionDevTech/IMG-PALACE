import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./contact";
import Grid from "./grid";
import Login from "./login";
import Signup from "./signup";


const Content = () => {

    return (

        <Routes>
            {/* <Route path={["/home", "/videos", "/popular", "/recent"]} element={<Grid />} /> */}
            <Route path="/" element={<Grid />} />
            <Route path="/home" element={<Grid />} />
            <Route path="/videos" element={<Grid />} />
            <Route path="/popular" element={<Grid />} />
            <Route path="/recent" element={<Grid />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="*" element={<NotFound />}/> */}
        </Routes>
    );
};

export default Content;
