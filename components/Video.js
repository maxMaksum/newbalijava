import React, {useRef, useState} from 'react'

import ContentWelcome from '../components/ContentWelcome'

function Video() {

    const [play, setPlay] =useState(false)
    const videoRef = useRef(null)
  
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
      <div  className="">
        <div>
        <video
          ref={videoRef}
          loop
          muted
          onClick={onVideoPress}
          // src={video}
          className=" w-full h-full flex justify-start relative bg-gray-400"
        >
          <source className="bg-cover" src="/balijava.mp4" type="video/mp4" />
        </video>

        <ContentWelcome/>
        </div>
        
      </div>
    );
}

export default Video
