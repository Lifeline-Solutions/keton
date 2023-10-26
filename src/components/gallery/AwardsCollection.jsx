import { awardsImages } from '../../data/gallery';

const AwardsCollection = () => {
  return (
    <div className="bg-primaryBg pb-40">
      <div className="flex flex-col justify-center items-center py-8">
        <hr className="w-60 mx-auto border-4 border-primaryGreen rounded my-1" />
        <p className="text-xl text-center font-thin my-1 capitalize">
          latest features
        </p>
        <h4 className="text-4xl text-center font-bold my-1 uppercase">
          Awards collection
        </h4>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
        <div className="flex flex-col justify-center px-10">
          <img src={awardsImages[0]} alt="Awards" className="" />
          <h5 className="text-2xl font-bold mt-6 mb-2 capitalize">
            Receiving our flowers{' '}
          </h5>
          <p className="text-sm font-normal leading-6 w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi
          </p>
          <hr className="w-full  border-1 border-primaryGreen rounded my-3" />
          <a href="/gallery/awards">
            <button className="bg-primaryGreen w-1/2 py-2 px-4 rounded uppercase text-sm font-bold hover:bg-green-300">
              View all
            </button>
          </a>
        </div>
        <div className="flex flex-col  gap-2 px-10">
          <div className="flex justify-center items-center gap-2">
            <img
              src={awardsImages[1]}
              alt="Awards"
              className="sm:w-72 w-44 sm:h-72 h-44 object-cover"
            />
            <img
              src={awardsImages[2]}
              alt="Awards"
              className="sm:w-72 w-44 sm:h-72 h-44 object-cover"
            />
          </div>
          <div className="flex gap-2">
            <img
              src={awardsImages[3]}
              alt="Awards"
              className="sm:w-72 w-44 sm:h-72 h-44 object-cover"
            />
            <img
              src={awardsImages[4]}
              alt="Awards"
              className="sm:w-72 w-44 sm:h-72 h-44 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsCollection;
