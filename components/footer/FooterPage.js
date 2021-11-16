import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterData } from "../MockData";
import Link from "next/link";
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

function FooterPage() {
  return (
    <div className="relative">
      <div
        className="bg-gray-900 bg-cover p-8"
        // style={{ backgroundImage: `url(${`/Tesla/model-s.jpg`})` }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {FooterData.map((p) => (
            <div key={p.id} className="p-2">
              <h1 className=" text-md font-semibold text-white uppercase ">
                {p.title}
              </h1>
              <div className="">
                {p.detail.map((d) => (
                  <Link href={`/${d.link}`}  key={d.link}>
                    <div
                      key={d.link}
                      className="flex justify-start items-center text-gray-300 space-x-4 space-y-2 mt-4"
                    >
                      <div className="h-10 w-10  flex items-center justify-center">
                        <img
                          src={d.logo}
                          className="rounded obeject-cover bg-center bg-norepeat"
                        />
                      </div>
                      <p className="text-sm text-gray-50">{d.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FooterPage;
