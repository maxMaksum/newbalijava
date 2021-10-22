import Image from 'next/image'
import { useState } from 'react'
import Currency from 'react-currency-formatter';
import Link from 'next/link'



function Description({id, title, price, description, category, image}) {
    const [hasPrime] = useState(
        Math.random()<0.5
    )

    return (
      <div className=" h-screen w-100 m-5 bg-red-500">
        <div className="sm:flex">
          <div className="h-96 w-100  sm:h-screen sm:w-2/3 bg-gray-200 relative">
            <Image src={image} layout="fill" objectFit="cover" />
          </div>
          <div className="h-1/3 sm:w-1/3">
            <p className="text-md font-bold italic text-gray-700 px-2">{category}</p>
            <div>
              <h4 className="text-center p-2 font-bold ">{title}</h4>

              <p className="text-xs m-2 text-center">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Description