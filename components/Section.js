import React, { useContext } from 'react';
import Image from 'next/image'
import Link from 'next/link'


function Section({ id, title, price, description, category, image }) {



    return (
     
        <div className="bg-gray-50 p-2 rounded">
          {/* <h1 className="font-bold text-right  uppercase text-green-800 z-20 absolute top-0 left-0 p-2">{category}</h1> */}
          <div className="relative h-80 sm:h-64 md:h-80  w-100">
            <Image
              src={image}
              layout="fill"
              // height={400}
              // width={400}

              className="bg-cover bg-center bg-norepeat"
            />
          </div>

          <div
            className="items-start justify-center
        p-2 mb-4"
          >
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-bold uppercase font-bold p-2">{category}</h1>
              <p className="line-clamp-2">{description}</p>

              <Link href={`/page/${category}`}>
                <button className="mx-auto bg-gray-900 p-2 rounded mt-2 w-48 text-gray-50 font-bold">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
    
    );
}

export default Section
