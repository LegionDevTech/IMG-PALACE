import React from "react";

const aboutimg = () => {
  return (
    <div className="max-w-none px-4 py-4 mx-auto bg-gradient-to-l from-[#0f2527] via-[#203A43] to-[#2C5364]">
      {/* Div for content  */}
      <div className="flex justify-center items-center py-4 border-x-2 hover:border-pink-500 hover:border-shadow-2xl shadow-xl rounded-md bg-gradient-to-l from-[#0f2527]  to-[#2C5364] text-white">
        <h2> About | .IMG PALACE </h2>
      </div>
      <div className="flex justify-center items-center w-full h-screen my-4 bg-gradient-to-l from-[#0f2527] via-[#203A43] to-[#2C5364] text-white ">
        <p className="font-sans text-lg">
          Hello folks <span role="img" aria-label="hi emoji">✌️</span>, <b>.IMG PALACE </b> is a made in <b> INDIA <span role="img" aria-label="heart emoji">💙</span> </b> website made for you folks to get the image's what you <b> "DESIRE" </b>
        </p>
      </div>
    </div>
  );
};

export default aboutimg;
