import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { Category } from "../MockData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelopeSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Brands() {
  useEffect(() => {
    setPlay(true);
  }, []);

  const [play, setPlay] = useState(true);

  const videoRef = useRef();

  const onVideoPress = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };

  return (
    <section className="relative flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-default p-2 -m-2 border-t-2 border-gray-200 shadow-md">
      {Category.map((cat) => (
        <div
          key={cat.id}
          onClick={onVideoPress}
          className="brand group relative min-w-[300px] min-h-[200px] md:min-w-[330px]"
        >
          <div className="absolute top-0 left-0 group-hover:hidden bg-gray-900 w-full h-full bg-cover z-50 bg-opacity-25 flex items-center justify-center">
            <p className="text-lg text-gray-50">{cat.title}</p>

            <img src={cat.logo} className="h-10 w-100 rounded" />
          </div>

          <Image
            src={cat.thumbnail}
            layout="fill"
            objectFit="cover"
            className=" group-hover:opacity-5"
          />
          <video
            ref={videoRef}
            onClick={onVideoPress}
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src={cat.video} type="video/mp4" />
          </video>
        </div>
      ))}
    </section>
  );
}

export default Brands;
