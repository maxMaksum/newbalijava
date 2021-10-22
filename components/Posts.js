import React from 'react';
import Section from "./Section"
import { Store } from '../utils/Store'

function Posts({products}) {



    return (
      <div className="grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3">


        {products.map(({ id, title, price, description, category, image }) => (
            <div  key={id} className="mx-auto h-full w-full bg-gray-100 p-1 ">
                <Section 
               
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}/>


            </div>
          ))}

       
      </div>
    );
}

export default Posts