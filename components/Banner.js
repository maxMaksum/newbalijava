import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { MockData } from "./MockData";
function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div className="relative">
      <Slider {...settings} className="z-10">
        {MockData.map((homedata) => (
          <div
            key={homedata.id}
            className=" relative mx-auto "
           
          >
            <div className=" mx-auto flex h-screen justify-center relative bg-cover bg-center bg-norepeat "  style={{backgroundImage: `url(${homedata.image})`}} >
             
            </div>
            <div className=" w-full flex items-center justify-center px-2 rounded z-22 absolute top-20 text-gray-50 text-center">
           
           <div className="px-2">
             <p className="text-green-700 font-bold">
              Model S
              </p>
              </div>
            </div>
         
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;


