


function HeaderBanner({title, description, playVideo, url}) {

    return (
      <header>
        <div
          className="hero min-h-screen"
          style={{ backgroundImage: `url(${url})` }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="text-center hero-content text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{title}</h1>
              <p className="mb-5 line-clamp-2">
                {description}
              </p>
              <button onClick={playVideo} className="btn glass hover:pointer">
              <img
                  src="/images/play-icon-white.svg"
                  alt=""
                  className="h-6 md:h-8"
                />
                <span className="uppercase font-medium tracking-wide">
                  Play
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
    );
}

export default HeaderBanner
