// react imports
import React from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { IoMdImages } from "react-icons/io"
import { MdVideoLibrary } from "react-icons/md"
import white from '../../assets/images/white.svg';


// custom imports
import Background from "./background";

const Header = (props) => {

  const [nav, setNav] = React.useState(false);
  const handleClick = () => setNav(!nav);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = React.useState('');
  const smallSearchButton = React.useRef(null);

  React.useEffect(() => {
    let params = new URLSearchParams(location.search);
    let sQuery = params.get("query");
    sQuery = (sQuery === null || sQuery === undefined) ? "" : sQuery;
    setSearchInput(sQuery);
  }, [location]);

  const onSmallSearchButtonPress = (sQuery) => {
    // navigate to pathname with query
    navigate({
      pathname: location.pathname,
      search: "query=" + sQuery
    });
  };

  const onSmallSearchInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      const smallSearchButtonRef = smallSearchButton.current;
      smallSearchButtonRef.click();
    }
  };

  return (
    <>
      <div className={
        location.pathname === "/" ?
          "flex w-full justify-between items-center p-4 z-10 text-white absolute" :
          "flex w-full justify-between items-center p-4 z-10 text-white shadow-lg sticky top-0 bg-gradient-to-l from-[#0f2527] via-[#203A43] to-[#2C5364] "}>
        <div className="flex justify-between items-center w-full h-full px-2">
          {/* Menu */}
          <div className="flex items-center">
          <img src={white} alt="/" className="max-h-[44px] mx-auto cursor-pointer " />
            <a href="/">
              <h1 className="text-white-600 hidden md:flex text-3xl lg:text-4xl cursor-pointer font-bold ">
                .IMG PALACE
              </h1>
            </a>
          </div>

          {location.pathname !== "/" && (
            /* Search bar for other pages */
            <div className="bg-[#0f2527]  shadow-xl rounded-md flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] ">
              <input onKeyDown={(e) => onSmallSearchInputKeyDown(e)} onInput={e => setSearchInput(e.target.value)} value={searchInput}
                className="bg-transparent w-full focus:outline-none p-2 text-sm"
                type="text"
                placeholder="Search here"
              />
              <button ref={smallSearchButton} onClick={() => onSmallSearchButtonPress(searchInput)} className="justify-between items-center text-gray-300 px-1 py-1 rounded-md cursor-pointer">
                <AiOutlineSearch
                  size={22}
                  className="m-0 object-right hover:fill-green-600"
                />
              </button>
            </div>
          )}

          {/* side nav button  */}

          <ul className="justify-between items-center hidden md:flex text-sm">
            <li>
              <a href="/" className="flex hover:bg-gray-700/40 rounded-sm duration-500 -mx-3 p-3">
                <AiFillHome size={18} className="mr-2" />
                Home
              </a>
            </li>
            <li>
              <a href="/images" className="flex hover:bg-gray-700/40 rounded-sm duration-500 -mx-3 p-3 ">
                <IoMdImages size={18} className='mr-2' />
                Images
              </a>
            </li>
            <li>
              <a href="/videos" className="flex hover:bg-gray-700/40 rounded-sm duration-500 -mx-3 p-3 ">
                <MdVideoLibrary size={18} className="mr-2" />
                Videos
              </a>
            </li>
          </ul>


          {/* Button
          <div className="justify-center hidden md:flex p-4 ">
            <Link to='/login'>
              <button className="bg-transparent px-4 py-3 pr-5 border-none font-semibold hover:bg-gray-700/40 rounded-sm duration-500 mr-2 ">Login</button>
            </Link>
            <Link to='signup'>
              <button className="px-8 py-3 font-semibold">Sign Up</button>
            </Link>
          </div> */}

          {/* Mobile Hamburger */}
          <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
            {!nav ? <MenuIcon className="w-5 " /> : <XIcon className="w-5" />}
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div>
          <ul
            className={
              !nav
                ? "hidden"
                : "absolute top-0 left-0 h-screen flex flex-col justify-center items-center bg-[#0a192f]/90 w-full px-8"
            }
          >
            <li className="border-zinc-300 py-5 hover:border-b border-b-gray-500 uppercase">
              <a href="/home">Home</a>
            </li>
            <li className="border-zinc-300 py-5 hover:border-b border-b-gray-500 uppercase">
              <a href="/images">Images</a>
            </li>
            <li className="border-zinc-300 py-5 hover:border-b border-b-gray-500 uppercase">
              <a href="/videos">Videos</a>
            </li>
            {/* <div className="flex flex-col my-6">
              <button className="bg-transparent text-indigo-500 px-8 py-3 mb-4">Sign In</button>
              <button className="px-8 py-3">Sign Up</button>
            </div> */}
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Background />} />
      </Routes>
    </>
  );
};

export default Header;
