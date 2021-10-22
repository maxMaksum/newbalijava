import Image from 'next/image'
import { useState } from 'react'
import Currency from 'react-currency-formatter';
import Link from 'next/link'



function Description({id, title, price, description, category, image}) {
    const [hasPrime] = useState(
        Math.random()<0.5
    )

    return (
      <div className=" h-screen w-100 m-5 bg-gray-50">
        <div className="sm:flex bg-gray-900 h-full">
          <div className="h-96 w-100  sm:h-screen sm:w-2/3 bg-gray-200 relative">
            <Image src={image} layout="fill" objectFit="cover" />
          </div>
          <div className="sm:w-1/3  text-gray-50 ">
            <p className="text-md font-bold italic px-2">{category}</p>
            <div>
              <h4 className="text-center p-2 font-bold ">{title}</h4>

              <p className="text-sm space-y-2 space-x-1 m-2 text-center">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Description