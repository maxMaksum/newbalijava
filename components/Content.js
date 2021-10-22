import React, { useContext } from 'react';
import Image from 'next/image'
import Link from 'next/link'


function Content({ id, title, price, description, category, image }) {
  return (
    <div className="items-center justify-start">
      <div className="flex p-2 flex-col items-center justify-center">
        <h1 className="font-bold">{title}</h1>
        <p className="line-clamp-2">{description}</p>

        <Link href={`/pagedetail/${id}`}>
          <button className="mx-auto btn m-2">Learn More</button>
        </Link>
      </div>
    </div>
  );
}

export default Content