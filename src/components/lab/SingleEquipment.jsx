import { useState } from 'react';
import { useParams } from 'react-router-dom';
import equipmentData from '../../data/equipment.json';
import NotFound from '../404/NotFound';
import Header from './Header';
import { IoIosStar } from 'react-icons/io';
import Description from './Description';
import Reviews from './Reviews';
import RelatedProducts from './RelatedProducts';

const SingleEquipment = () => {
  const { id } = useParams();

  const tabs = ['description', 'reviews'];
  const defaultTab = tabs[0];

  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const allProducts = equipmentData.categories.flatMap(
    (category) => category.products
  );

  const equipment = allProducts.find((product) => product.id === parseInt(id));

  if (equipment === undefined) {
    return <NotFound />;
  }

  const specifications = equipment.specifications && equipment.specifications;
  const firstTwoSpecs = specifications && specifications.slice(0, 2);
  const reviews = equipment.reviews && equipment.reviews;
  const averageRating =
    reviews &&
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  const renderSpecs = (specifications) => {
    return (
      specifications &&
      specifications.map((spec) => {
        for (const [key, value] of Object.entries(spec)) {
          const specTitle = key;
          const specArray = value;

          return (
            <div className="flex flex-col gap-2" key={specTitle}>
              {specArray.map((item, index) => (
                <div className="text-sm flex gap-6" key={index}>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          );
        }
        return null;
      })
    );
  };

  const renderStars = (averageRating) => {
    const maxRating = 5;
    const starCount = Math.round(averageRating);

    const starIcons = [];
    for (let i = 1; i <= maxRating; i++) {
      starIcons.push(
        <IoIosStar
          key={i}
          className={`${
            i <= starCount ? 'text-green-500' : 'text-gray-400'
          } text-md`}
        />
      );
    }

    return starIcons;
  };

  const tabContent = {
    description: (
      <Description equipment={equipment} renderSpecs={renderSpecs} />
    ),
    reviews: <Reviews equipment={equipment} renderStars={renderStars} />,
  };

  return (
    <>
      <Header />
      <div className="h-full  bg-primaryBg py-4 text-black">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 px-4">
          <div className="col-span-1 px-8 bg-white rounded-lg">
            <img
              src={equipment.image}
              alt={equipment.title}
              className="mx-auto mb-2 w-3/4 h-full"
            />
          </div>

          <div className="col-span-1 px-8 flex flex-col gap-4 py-2">
            <h4 className="uppercase font-semibold text-xl mb-4">
              Description
            </h4>
            <p className="">{equipment.title}</p>
            <div className="flex flex-col gap-4 w-3/4">
              {renderSpecs(firstTwoSpecs)}
            </div>
            <div className="text-sm text-primaryBlue mt-4">
              Category:{' '}
              <span className="font-semibold">{equipment.category}</span>
            </div>
            <div className="flex gap-1 mt-4">
              {renderStars(averageRating)}
              <span
                className="text-sm ml-2 cursor-pointer hover:underline"
                onClick={() => handleTabClick('reviews')}
              >
                ( See {reviews && reviews.length} reviews )
              </span>
            </div>
          </div>
        </div>

        <div className="px-8 mt-16">
          <div className="bg-white rounded-lg">
            <div className="flex xs:flex-row flex-col items-center px-4 pt-10 rounded-lg">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`sm:px-4 sm:py-2 px-2 py-1 mr-2 uppercase ${
                    activeTab === tab ? 'bg-gray-500 text-white' : 'text-black'
                  }`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <hr className="border-gray-500 my-4 ml-6 w-11/12" />
            <div className="px-4 mt-12 ">{tabContent[activeTab]}</div>
          </div>
        </div>
      </div>
      <RelatedProducts equipment={equipment} />
    </>
  );
};

export default SingleEquipment;
