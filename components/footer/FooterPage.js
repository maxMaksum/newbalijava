import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {FooterData} from "../MockData"
import Link from 'next/link'
import { faMapMarkerAlt, faPhone, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faInstagram,faFacebook } from '@fortawesome/free-brands-svg-icons'

function FooterPage() {

    return (
      <div className="relative">
        <div
          className="bg-norepeat bg-center bg-cover h-96"
          style={{ backgroundImage: `url(${`/Tesla/model-s.jpg`})` }}
        >
          <div className="flex flex-col items-start justify-center w-full h-full bg-gray-900 bg-opacity-50">
            
            {FooterData.map((p) => (
              <div key={p.id}className="p-2">
               
                  <h1 className=" text-xl font-semibold text-white uppercase  mx-2 link">
                    {p.title}
                  </h1>
                  <div className="ml-4">
                    {p.detail.map((d, i)=>(
                      <div key={i} className="flex space-x-2 text-gray-300">
                        {d.title=="Whatsapp"&& (<div><FontAwesomeIcon icon={faWhatsapp}/></div>)||d.title=="Email" && (<div><FontAwesomeIcon icon={faEnvelopeSquare}/></div>)||d.title=="Instagram" && (<div><FontAwesomeIcon icon={faInstagram}/></div>)||d.title=="Facebook" && (<div><FontAwesomeIcon icon={faFacebook }/></div>)}
                        
                          <Link href={`/${d.link}`}>
                          <p className="link">{d.title}</p>
                          </Link>
                        
                        
                        
                      </div>
                    ))}
                  </div>
            
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default FooterPage
