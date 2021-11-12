import React from "react";
import Section from "./Section";
import { Store } from "../../utils/Store";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextBtn, PreviousBtn } from "../custome-slider/customeSlider";

function Posts({ products, title }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 1,
    autoplay: false,
    centerPadding: "170 px",
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
    ],
  };

  const videosFilter = () => {
    return products.filter(
      (p) => p.videos && p.videos.map((p) => p.title == title)
    );
  };

  const filterVideos2 = videosFilter();

  return (
    <div className="relative flex flex-col space-y-2 my-5  max-w-[1400px] mx-auto">
      <h1 className="font-bold text-left uppercase text-green-800 ml-4">
        {title}
      </h1>

      <Slider {...settings} className="flex p-2 m-2">
        {filterVideos2.map(
          ({ id, title, description, slug, category, thumbnails }) => (
            <div key={id} className="mx-auto h-full w-full p-2 pt-4">
              <Section
                id={id}
                title={title}
                slug={slug}
                description={description}
                category={category}
                image={thumbnails}
              />
            </div>
          )
        )}
      </Slider>
      {/* </div> */}
    </div>
  );
}

export default Posts;
