import Link from 'next/link'
import {Category}from "../MockData"
import {staticPages}from "../MockData"

function HeaderRight() {

    const uniqueC = new Set()

    const uniqueCategory = Category.filter((cat)=>{
      const isPresent = uniqueC.has(cat.category)
      uniqueC.add(cat.category)
      return !isPresent
    })

 

    return (
        <div className=" flex items-center space-x-2 w-full justify-around text-gray-900 text-s">

              <div className="flex items-center justify-center">
                  {staticPages.map((p, i)=>(
                      <div key={i} >
                        <Link href={`/${p.title}`}>
                       <p className=" p-2 font-bold uppercase link">{p.title}</p>
                       </Link>
                    </div>
                    ))}
                  </div>
              {uniqueCategory.map(data=>(
                
                <div key={data.id}>
                 
                 <Link href={`/page/${data.category}`}>
               
                 <p className=" font-bold uppercase link">{data.category}</p>
                
              
               </Link>
               </div>
              
             
            
              ))}
           
            </div>
    )
}

export default HeaderRight
