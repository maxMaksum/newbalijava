import React, {useRef, useState, useEffect} from 'react'

import ContentWelcome from '../components/ContentWelcome'




function Video() {

    const [play, setPlay] =useState(false)

    const [video, setVideo] =useState(null)

    useEffect(() => {
      // Update the document title using the browser API
      setTimeout( setVideo ('/https://www.youtube.com/watch?v=cGnoIVcQRXA&t=27s'), 10000);
     
    },[]);

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

   
    
    return  video==null?("Looading.."):(

      
      <div  className="">
        <div>
        <iframe  className=" w-full h-96 sm:h-screen flex justify-start" src="https://www.youtube.com/embed/cGnoIVcQRXA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        {/* <video
          ref={videoRef}
          loopn
          muted
          onClick={onVideoPress}
          src={video}
          className=" w-full h-full flex justify-start"
        > */}
          {/* <source className="bg-cover" src="/balijava.mp4" type="video/mp4" /> */}
        {/* </video> */}

        <ContentWelcome/>
        </div>
        
      </div>
    );
}

export default Video
