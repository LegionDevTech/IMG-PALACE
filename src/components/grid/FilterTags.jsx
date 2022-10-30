import React from 'react';
import GridUtility from "../../utilities/components/grid";

export default function filterTags(props) {
    return (
        <div className="max-w-none mt-2 px-2 py-4">
            <div className="relative justify-between focus:shadow-lg ">
                {//display Recent button for images
                    props.pathname === "/images"
                    &&
                    <button onClick={() => props.onSearchTagClick("recent")}
                        className="rounded-full m-1 border-gray-500 text-white bg-transparent font-medium leading-tight focus:outline-none focus:ring-0 duration-150 inline-block focus:bg-[#14272c] items-center px-4 py-1 text-sm hover:bg-gradient-to-r from-[#203a43] to-[#2c5364] ">
                        Recent
                    </button>
                }
                {//display Popular for videos
                    props.pathname === "/videos"
                    &&
                    <button onClick={() => props.onSearchTagClick("popular")}
                        className="rounded-full m-1 border-gray-500 text-white bg-transparent font-medium leading-tight focus:outline-none focus:ring-0 duration-150 inline-block focus:bg-[#14272c] items-center px-4 py-1 text-sm hover:bg-gradient-to-r from-[#203a43] to-[#2c5364] ">
                        Popular
                    </button>
                }

                {/* display common search tags */}
                {
                    GridUtility.getSearchTagNames().map((val, index, obj) => (
                        <button key={index}
                            onClick={() => props.onSearchTagClick(val.searchText)}
                            className="rounded-full m-1 border-gray-500 text-white bg-transparent font-medium leading-tight focus:outline-none focus:ring-0 duration-150 inline-block focus:bg-[#14272c] items-center px-4 py-1 text-sm hover:bg-gradient-to-r from-[#203a43] to-[#2c5364]">
                            {val.displayText}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}
