import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Content from "./Content"

function PageSection({ id, title, description, category, image, filteredDataLength }) {

 console.log("ok")
   
    return (
      <div className="bg-gray-100 p-2">
        <div className="bg-gray-50">
          {filteredDataLength <= 2 ? (
            <div className="h-screen bg-gray-50 ">
              <div
                className=" mx-auto h-2/3 bg-cover bg-center bg-norepeat "
                style={{ backgroundImage: `url(${image})` }}
              ></div>
              <Content id={id} title={title} description={description} />
            </div>
          ) : (
            <div className="flex flex-col items-between justify-center h-100 bg-gray-50">
              <div className="relative h-80 sm:h-64 md:h-80  w-100">
                <Image
                  src={image}
                  layout="fill"
                  // height={400}
                  // width={400}

                  className="bg-cover bg-center bg-norepeat"
                />
              </div>
              <div className="pb-4 mb-12">
                <Content id={id} title={title} description={description} />
              </div>
            </div>
          )}
        </div>
      </div>
    );
}

export default PageSection
