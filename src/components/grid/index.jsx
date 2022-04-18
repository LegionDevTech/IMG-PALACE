import React from "react";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg";
import img7 from "../../assets/images/img7.jpg";
import img8 from "../../assets/images/img8.jpg";
import img9 from "../../assets/images/img9.jpg";
import img11 from "../../assets/images/img11.jpg";
import img12 from "../../assets/images/img12.jpg";
import img13 from "../../assets/images/img13.jpg";
import img14 from "../../assets/images/img14.jpg";
import img15 from "../../assets/images/img15.jpg";
import img16 from "../../assets/images/img16.jpg";
import img17 from "../../assets/images/img17.jpg";
import img18 from "../../assets/images/img18.jpg";
import img19 from "../../assets/images/img19.jpg";
import img20 from "../../assets/images/img20.jpg";
import img21 from "../../assets/images/img21.jpg";
import img22 from "../../assets/images/img22.jpg";
import img23 from "../../assets/images/img23.jpg";
import img24 from "../../assets/images/img24.jpg";
import img25 from "../../assets/images/img25.jpg";




const ImgGrid = () => {

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

  return (
    <div className="max-w-none mx-auto py-16 px-4 text-center">
      <h2 className="py-6"> Popular Images </h2>
      <div className="md:masonry-3-col lg:masonry-4-col box-border mx-auto before:box-inherit after:box-inherit items-center">

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

export default ImgGrid;
