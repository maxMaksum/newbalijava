import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

function Section({ id, title, slug, description, image }) {
  return (
    <div className=" flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300 bg-gray-50">
      <div className="relative min-w-[250px] min-h-[170px] md:min-w-[330px]">
        <Image
          src={image.url}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          className="bg-cover bg-center bg-norepeat"
        />
      </div>
      <Link href={`/detail/${slug}`}>
        <div
          className="items-start justify-center
        p-2 mb-4"
        >
          <div className="flex flex-col items-center justify-center text-gray-900">
            {/* <h1 className="font-bold uppercase font-bold p-2">{category}</h1> */}
            <p className="line-clamp-2 text-s">{description}</p>

            <button className="mx-auto bg-gray-900 rounded mt-2 py-1 px-2 text-gray-50 w-100">
              Learn More
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Section;
