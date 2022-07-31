

import React from "react";


const Videos = () => {

  const [images, setImages] = React.useState(null);

  React.useEffect(() => {
    fetch("/api",
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        }
      })
      .then(response => {
        if (response.ok) {
          response.json().then(json => {
            setImages(json.images);
          });
        }
      });
  }, []);
  console.log(images)

  return (
    <div className="max-w-none mx-auto py-16 px-4 text-left ">
      <div className=" bg-gradient-to-r from-[#ebebfc] pl-4 ">
      <h2 className="py-4 items-center font-bold"> Popular Videos 2022 </h2>
      </div>
      <div className="md:masonry-3-col lg:masonry-4-col box-border mx-auto before:box-inherit after:box-inherit items-center cursor-pointer ">

        {!images ?
          "" :
          images.map((url, index, obj) => (
            <div key={index} className="break-inside  py-1 rounded-lg">
               <img src={url} alt="/" />
          </div>
            
           
          ))}
          
      </div>
     
    </div>
  );
};

export default Videos;
