// react imports
import React, { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { useLocation, useNavigate } from "react-router-dom";
import Typed from 'react-typed';
import white from '../../assets/images/white.svg';

// custom imports
import v1 from '../../assets/videos/v1.mp4';

export default function Background() {

    const [searchInput, setSearchInput] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const searchButtonRef = React.useRef(null);

    const onSearchButtonPress = (sQuery) => {

        // navigate to pathname with query
        navigate({
            pathname: location.pathname,
            search: sQuery ? "query=" + sQuery : ""
        });
    };

    React.useEffect(() => {
        let params = new URLSearchParams(location.search);
        let sQuery = params.get("query");
        sQuery = (sQuery === null || sQuery === undefined) ? "" : sQuery;
        setSearchInput(sQuery);
    }, [location]);

    const onSearchInputKeyDown = (event) => {
        if (event.key === "Enter") {
            searchButtonRef.current.click();
        }
    }

    return (

        <div className='w-full h-screen realtive'>
            {/* center div  */}
            <div className='absolute w-full h-screen bg-gradient-to-r from-neutral-900' />
            <video className='w-full h-full object-cover'
                src={v1}
                autoPlay
                loop
                muted
            />
            <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30' />
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>

                <img src={white}
                    alt="/"
                    className="max-h-28 mx-auto" />
                {/* <p className='font-bold p-1 text-3xl uppercase md:text-5xl sm:text-4xl md:py-4'>.Img Palace </p> */}
                <h1>Offers you free stock Images</h1>
                <div className='flex justify-center items-center'>
                    <p className='py-5 md:text-4xl sm:text:3x-l text-xl font-bold '>
                        Get royalty Free
                    </p>
                    <Typed
                        className='py-5 md:text-4xl sm:text:3x-l text-xl font-bold pl-2 text-blue-600'
                        strings={['IMAGES', 'VIDEOS']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>

                {/* main search box  */}
                {/* <LargeSearchBar /> */}
                <div className='flex justify-between items-center max-w-[650px] mx-auto w-full border-none p-1 rounded-md text-black bg-gray-200/90'>
                    <input onInput={e => setSearchInput(e.target.value)}
                        className='bg-transparent w-[300px] sm:w-[600px] focus:outline-none p-2'
                        type="text"
                        value={searchInput}
                        onKeyDown={(event) => onSearchInputKeyDown(event)}
                        placeholder='Search Here' />
                    <button ref={searchButtonRef} onClick={() => onSearchButtonPress(searchInput)}
                        className=' hover:bg-green-600 hover:border-green-600 hover:duration-200  ml-2 '>
                        <AiOutlineSearch size={22}
                            className='m-2 hover:rotate-90 hover:duration-500' />
                    </button>
                </div>
            </div>
        </div>
    );
}
