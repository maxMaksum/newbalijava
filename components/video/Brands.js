import Image from "next/image";
import React, {useRef, useState, useEffect} from 'react'

function Brands() {

  useEffect(()=>{
    setPlay(true)
    videoRef.current.play()
  },[])

  const [play, setPlay] =useState(true)

  const videoRef = useRef()
  
  const onVideoPress=()=>{
      if(play){
          videoRef.current.pause()
          setPlay(false)
      }else{
          videoRef.current.play()
          setPlay(true)
      }
     
  }

  
  return (
    <section className="relative flex flex-col md:flex-row justify-center items-center gap-6 px-8 max-w-[1400px] mx-auto">

  
      <div  onClick={onVideoPress} className="brand group">
        <Image src="/images/disnep.png" layout="fill" objectFit="cover" />
        <video
          ref={videoRef}
          muted
          loop
          onClick={onVideoPress}
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/videos01/Embroidery-1.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="brand group">
        <Image src="/images/pixar.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/videos01/Embroidery-2.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="brand group">
        <Image src="/images/marvel.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/videos01/Sewing.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="brand group">
        <Image src="/images/starwars.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/videos01/Linen.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="brand group">
        <Image
          src="/images/national-geographic.png"
          layout="fill"
          objectFit="cover"
        />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/videos01/Linen-1.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default Brands;
