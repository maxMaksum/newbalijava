import Slider from "react-slick";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContentWelcome from "../card/ContentWelcome";
import { SliderData } from "../MockData";
import { SocialMedia } from "../MockData";



function Banner({ bannerData }) {
  const [BannerData, setBannerData] = useState([]);
 

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div className="relative h-100">
      <Slider {...settings} className="z-10">
        {bannerData.map((homedata) => (
          <div key={homedata.id} className=" relative">
            <div
              className="flex  h-64 sm:h-screen  w-100 justify-center relative bg-cover bg-center bg-norepeat "
              style={{ backgroundImage: `url(${homedata.images.url})` }}
            >
              <div className=" w-full h-full flex items-center justify-center bg-gradient-to-t from gray-900 to transparent top-0 left-0">
                <div className="px-2 rounded z-22 absolute text-gray-50 text-center bottom-2 left-2 bg-gray-900  bg-opacity-50 ">
                  <p className="font-bold">{homedata.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="absolute bottom-1/2 right-0 rounded bg-gray-900 bg-opacity-75 z-50 p-2">
        {SocialMedia.map((d) => (
          <div className="w-30 flex justify-start items-center space-x-2 ">
            <div className="h-8 w-8  flex items-center justify-center">
              <img
                src={d.image}
                className="rounded obeject-cover bg-center bg-norepeat"
              />
            </div>
            <p className="text-xs text-gray-50 hidden sm:inline-flex">
              {d.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
