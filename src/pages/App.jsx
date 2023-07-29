import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "./About";
import Error from "./Error";
import Main from "./Main";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndConditions from "./TermsAndConditions";

function App() {
  return (

    <Routes>
      <Route path="/" index={true} element={<Main location="homePage" />} />
      <Route path="/images" element={<Main location="imagesPage" />} />
      <Route path="/termAndConditions" element={<TermsAndConditions />} />
      <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error errorCode="404" errorDescription="The page you are trying to access does not exsists." />} />
    </Routes>

  );
}

export default App;
