
function Card({title, category, description}) {

    return (
      <header>
        <div
          className="bg-norepeat bg-center bg-cover h-64"
          style={{backgroundImage: `url(${`/images01/model-s.jpg`})`}} 
         
        >
          <div className="flex items-end justify-center w-full h-full bg-gray-900 bg-opacity-50 ">
            <div className="text-center mb-4">
              <h1 className="text-xl font-semibold text-white uppercase lg:text-3xl">
                {category} 
              </h1>
              <p className="text-white uppercase text-md capitalize">Lorem Ipsum</p>
              
            </div>
          </div>
        </div>
        

        <div className="text-center p-4 bg-gray-50">
        <h1>{title}</h1>
        <p>{description}</p>
        </div>
      </header>
    );
}

export default Card
