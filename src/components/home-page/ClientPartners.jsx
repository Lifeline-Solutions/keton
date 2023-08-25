import { useState, useEffect } from 'react';
import {
  BiSolidChevronRightCircle,
  BiSolidChevronLeftCircle,
} from 'react-icons/bi';

const clientsPartners = [
  {
    id: 1,
    image: '/images/cp-1.png',
  },
  {
    id: 2,
    image: '/images/cp-2.png',
  },
  {
    id: 3,
    image: '/images/cp-3.png',
  },
  {
    id: 4,
    image: '/images/cp-4.png',
  },
  {
    id: 5,
    image: '/images/cp-5.png',
  },
];

const ClientPartners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + itemsPerPage) % clientsPartners.length;
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    const nextIndex = (currentIndex + itemsPerPage) % clientsPartners.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      (currentIndex - itemsPerPage + clientsPartners.length) %
      clientsPartners.length;
    setCurrentIndex(prevIndex);
  };

  const displayedLogos = clientsPartners.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div className="h-full flex flex-col justify-center items-center bg-primaryBg py-6">
      <div className="text-center mt-24">
        <h2 className="capitalize sm:text-3xl font-bold mt-2">
          Our Clients & Partners
        </h2>
        <hr className="w-20 mx-auto border-2 border-primaryGreen rounded my-1" />
      </div>

      <div className="sm:flex grid sm:grid-cols-0 grid-cols-2 sm:gap-0  justify-center mt-8 items-center">
        <button onClick={handlePrev} className="sm:mr-2 mr-0 sm:block hidden">
          <BiSolidChevronLeftCircle className="text-3xl text-secondaryBlue" />
        </button>
        {displayedLogos.map((logo) => (
          <div key={logo.id} className="rounded-md mx-1 mb-2">
            <img
              src={logo.image}
              alt={logo.name}
              className="sm:w-full sm:h-full w-24 h-20 mx-auto mb-4"
            />
          </div>
        ))}
        <button onClick={handleNext} className="sm:ml-2 ml-0 sm:block hidden">
          <BiSolidChevronRightCircle className="text-3xl text-secondaryBlue" />
        </button>
      </div>
    </div>
  );
};

export default ClientPartners;
