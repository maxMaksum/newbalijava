


function HeaderBanner({pageCategory}) {

    return (
      <header>
        <div
          className="bg-norepeat bg-center bg-cover h-64 mt-20"
          style={{backgroundImage: `url(${`/Tesla/model-s.jpg`})`}} 
         
        >
          <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">
                {pageCategory} 
              </h1>
              
            </div>
          </div>
        </div>

        <div className="text-center p-4 bg-gray-50">
        Lembongan Island’s Mushroom Bay. Our accommodation includes garden villas, traditional Balinese lumbungs, two restaurants, and a spa. We also offer a variety of aquatic activities like sea walking and parasailing.
        </div>
      </header>
    );
}

export default HeaderBanner
