import { useState, useEffect } from 'react';
import {
  BiSolidChevronRightCircle,
  BiSolidChevronLeftCircle,
} from 'react-icons/bi';
import { equipmentData } from '../../data/equipmentData';
import { Link } from 'react-router-dom';


//   {
//     id: 1,
//     image: '/images/medicine-bottles.png',
//     name: 'Control FD Immunoassay',
//   },
//   {
//     id: 2,
//     image: '/images/cooler.png',
//     name: 'Cooler box with inbuilt digital Thermometer',
//   },
//   {
//     id: 3,
//     image: '/images/medicine-bottles-2.png',
//     name: 'Control FD Glycohemoglobin A1c',
//   },
// ];

const products = equipmentData.map((category) => category.products).flat();

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + itemsPerPage) % products.length;
      setCurrentIndex(nextIndex);
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    const nextIndex = (currentIndex + itemsPerPage) % products.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      (currentIndex - itemsPerPage + products.length) % products.length;
    setCurrentIndex(prevIndex);
  };

  const displayedProducts = products.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div className="h-full flex flex-col justify-center items-center bg-primaryBg py-6">
      <div className="text-center mt-24">
        <h1 className="capitalize sm:text-3xl font-bold">
          We are Offering Reliable Products
        </h1>
        <h5 className="capitalize xs:text-md text-sm font-light mt-4 mb-2">
          Keton Consulting offers some of the best products in the healthcare
          sector.
        </h5>
        <hr className="w-80 mx-auto border-2 border-primaryGreen rounded my-2" />
      </div>

      <div className="flex sm:flex-row flex-col sm:gap-0 gap-8 justify-center mt-8 items-center">
        <button onClick={handlePrev} className="sm:mr-2 mr-0">
          <BiSolidChevronLeftCircle className="text-3xl text-primaryGreen" />
        </button>
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="card bg-white rounded-md shadow-md p-6 mx-2 sm:w-96 sm:h-96 w-60 h-60"
          >
            <img
              src={product.image}
              alt={product.title}
              className="sm:w-56 sm:h-56 w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-center sm:text-base text-sm">
              {product.title}
            </h3>
            <Link
              to={`lab-equipment-and-supplies/${product.id}`}
              className="block mx-auto mt-4 bg-primaryGreen text-white px-4 py-2 rounded sm:text-sm text-xs text-center"
            >
              Read More
            </Link>
          </div>
        ))}
        <button onClick={handleNext} className="sm:ml-2 ml-0">
          <BiSolidChevronRightCircle className="text-3xl text-primaryGreen" />
        </button>
      </div>
    </div>
  );
};

export default Products;
