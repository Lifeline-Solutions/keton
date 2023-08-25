import { useState, useEffect } from 'react';

const images = ['/header-bg.png', '/header-bg.png', '/header-bg.png'];

const Header = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header
        className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primaryBlue to-transparent"></div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`inline-block w-2 h-2 rounded-full mx-1 ${
                currentImage === index ? 'bg-primaryBlue' : 'bg-white'
              }`}
            ></span>
          ))}
        </div>
        <div className="z-1 absolute inset-0 flex flex-col justify-left  p-10">
          <div className="sm:mt-40 xs:mt-60 mt-40 sm:w-8/12">
            <div className="sm:text-3xl xs:text-xl text-sm font-semibold uppercase sm:leading-[3.2rem] xs:leading-[2.5rem] text-white ">
              QUALIFIED STAFF WITH
              <br />
              EXPERTISE IN SERVICES WE OFFER
            </div>
            <div className="mt-4 xs:leading-7 leading-6 xs:text-base text-xs text-white  ">
              As an organization we pride ourselves in valuable collaboration
              with big brands such as Bibby Scientific, Meslo, Tanbead,
              Vitassay, Neomedica, Diagon, Euromex, Biotechne, Audit
              Microcontrols, ESfEQA, Diamex, Noex, Aiken among other reputable
              life sciences organizations globally
            </div>
            <div className="sm:mt-8 xs:mt-16 mt-4 flex xs:flex-row flex-col xs:space-y-0 space-y-2 items-center space-x-0.5 xs:text-base  text-xs">
              <input
                className="border border-gray-300 rounded-md px-4 py-2 sm:w-96 w-40  xs:rounded-r-none"
                placeholder="Search Here"
              />
              <button className="bg-primaryGreen text-white px-4 py-2 xs:rounded-l-none rounded-md xs:w-40 w-40">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
