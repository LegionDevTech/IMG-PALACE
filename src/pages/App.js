import Footer from "../components/footer";
import Header from "../components/header";
import ImgGrid from "../components/grid";
import Main from "./Main";
import { Routes, Route } from "react-router-dom";
import Popular from "./Popular";
import Recent from "./Recent";
import Contact from "./Contact";
import Videos from "./Videos";
import SignUp from "./SignUp";
import Login from "./Login";
import Accounts from "./Accounts";

function App() {
  return (
    <>
      <Header />
      
      <Main/>
      <Routes>
        <Route path="/" element={<ImgGrid />} />
        <Route path="/videos" element={<Videos/>} />
        <Route path="/popular" element={<Popular/>} />
        <Route path="/recent" element={<Recent/>} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
      {/* just to check */}
      <Routes>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Accounts/>} />

      </Routes>
      
      <Footer />
      <Videos />
    </>
  );
}

export default App;
