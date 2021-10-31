import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NextBtn, PreviousBtn}from "./customeSlider"

import Image from 'next/image'
import Link from 'next/link'
function MySlider({data}) {
 
  console.log(data)

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      arrows:true,
      slidesToScroll: 1,
      autoplay:false,
      centerPadding:"170 px",
      prevArrow:<PreviousBtn/>,
      nextArrow:<NextBtn/>,
      responsive:[
         {
          breakpoint:426,
          settings:{
            slidesToShow: 1,
            centerMode:false
          }},
          {
            breakpoint:600,
            settings:{
              slidesToShow: 1,
              centerMode:false
            }},
            {
              breakpoint:700,
              settings:{
                slidesToShow: 2,
                centerMode:false
              }}
      ]
  
  
  
  
    };
  
   
      return (
        <div className="relative flex flex-col space-y-2 my-5  max-w-[1400px] mx-auto">
        
        {/* <div className="grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3"> */}
  
        <Slider {...settings} className="flex p-2 m-2 relative bg-relative">
          {data.map((p) => (
              <div  key={p.id} className="mx-auto h-full w-full p-2 pt-4 ">
                
                <div className="relative min-w-[250px] min-h-[170px] md:min-w-[330px]">
            <Image
              src={p.url}
              layout="fill"
            
              objectFit="contain"
              className="rounded-lg"

              className="bg-cover bg-center bg-norepeat"
            />
          </div>
  
  
              </div>
            ))}
  
         </Slider>
        {/* </div> */}
        </div>
        
      );
  }
  
  export default MySlider