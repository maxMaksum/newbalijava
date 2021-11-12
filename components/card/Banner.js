import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContentWelcome from "../card/ContentWelcome"
import { SliderData } from "../MockData";


function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false
  };

  return (
    <div className="relative h-100">
      <Slider {...settings} className="z-10">
        {SliderData.map((homedata) => (
          <div key={homedata.id} className=" relative">
            <div
              className="flex  h-64 sm:h-screen  w-100 justify-center relative bg-cover bg-center bg-norepeat "
              style={{ backgroundImage: `url(${homedata.image})` }}
            >
              <div className=" w-full h-full flex items-center justify-center bg-gradient-to-t from gray-900 to transparent top-0 left-0">
                <div className="px-2 rounded z-22 absolute text-gray-50 text-center bottom-2 left-2 bg-gray-900  bg-opacity-50 " >
                  <p className="font-bold">Model S</p>
                </div>
              </div>
            </div>
          
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;


