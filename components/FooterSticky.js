import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {FooterData} from "./MockData2"
import Link from 'next/link'
import { faMapMarkerAlt, faPhone, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faInstagram,faFacebook } from '@fortawesome/free-brands-svg-icons'

function FooterSticky() {

    return (
      <div className="h-16 w-full fixed bottom-8">
          <div className="h-100 text-4xl text-green-500 font-bold flex justify-end mr-6">
          <FontAwesomeIcon icon={faWhatsapp}/>
          </div>
      </div>
    );
}

export default FooterSticky