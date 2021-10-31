import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowCircleRight, faArrowCircleLeft, faHome, faEnvelope, faUsers, faEllipsisV } from '@fortawesome/free-solid-svg-icons'

export const PreviousBtn = (props)=>{
    const {className, onClick} =props

    return(
      <div className={className} onClick ={onClick} >
        <div className="glass3 absolute  mx-4 flex items-center justify-center  left-8 z-10 h-8 top-1/2 p-1 w-8 rounded-full ">
      <FontAwesomeIcon
                icon={faArrowCircleLeft}
                className=" h-5 hover:animate-bounce  text-white text-xl"
      />
      </div>
     </div>
    )
   
  }
  
  export const NextBtn = (props)=>{
    const {className, onClick, style} =props
    
    return(
      <div className={className} onClick ={onClick} >
        <div className="glass3 absolute  mx-4 flex items-center justify-center  right-8 z-10 h-8 top-1/2 p-1 w-8 rounded-full">
      <FontAwesomeIcon
                icon={faArrowCircleRight}
                className=" h-5 hover:animate-bounce  text-white text-xl"
                // className=" right-2 absolute z-10  h-5 hover:animate-bounce text-teal-500 text-xl"
      />
      </div>
    </div>
    )
   
  }