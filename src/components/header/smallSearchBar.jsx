import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

export default function SmallSearchBar() {

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

    const onSearchButtonPress = (sQuery) => {
        // navigate to pathname with query
        navigate({
            pathname: location.pathname,
            search: sQuery ? "query=" + sQuery : ""
        });
    };

    const onSearchInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            smallSearchButton.current.click();
        }
    };
    return (
        <div className="bg-[#0f2527]  shadow-xl rounded-md flex items-center px-2 w-[200px] sm:w-[550px] md:w-[300px] lg:w-[350px] xl:w-[500px]">
            <input onKeyDown={(e) => onSearchInputKeyDown(e)}
                onInput={e => setSearchInput(e.target.value)}
                value={searchInput}
                className="bg-transparent w-full focus:outline-none p-2 text-sm"
                type="text"
                placeholder="Search here"
            />
            <button onClick={() => onSearchButtonPress(searchInput)}
                ref={smallSearchButton}
                className="justify-between items-center text-gray-300 px-1 py-1 rounded-md cursor-pointer">
                <AiOutlineSearch
                    size={22}
                    className="m-0 object-right hover:fill-green-600"
                />
            </button>
        </div>
    )
}
