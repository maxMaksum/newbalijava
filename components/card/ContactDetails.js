import {ContactLists} from '../components/MockData2'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faInstagram,faFacebook } from '@fortawesome/free-brands-svg-icons'

function ContactDetails({id, title, description, category, image}) {
  
    console.log(faMapMarkerAlt)
    return (
      <div className=" h-screen w-100 bg-gray-50 rounded p-4">
        <div className="">
         {ContactLists.map((p)=>(
             <div className="flex flex-col m-1">
             <h1 className="font-bold uppercase">{p.title}</h1>
             <div className="ml-3 p-1">
                 <div>
                     {p.detail.description.map(Icon=>(
                         <div className="flex items-center justify-start"> 
                                {p.title=="Phone"&& (<div><FontAwesomeIcon icon={faWhatsapp}/></div>)||p.title=="Email" && (<div><FontAwesomeIcon icon={faEnvelopeSquare}/></div>)||Icon=="Instagram" && (<div><FontAwesomeIcon icon={faInstagram}/></div>)||Icon=="Facebook" && (<div><FontAwesomeIcon icon={faFacebook }/></div>)} 
                               <p className="ml-4">{Icon}</p> 
                        </div>
                     ))}</div>
                
             </div>
             
             </div>
         ))}
        </div>
      </div>
    );
}

export default ContactDetails