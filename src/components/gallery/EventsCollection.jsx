import { eventsImages } from '../../data/gallery';
import { Link } from 'react-router-dom';

const EventsCollection = () => {
  return (
    <div className="bg-primaryBg pb-40">
      <div className="flex flex-col justify-center items-center py-8">
        <hr className="w-60 mx-auto border-4 border-primaryGreen rounded my-1" />
        <p className="text-xl text-center font-thin my-1 capitalize">
          latest features
        </p>
        <h4 className="text-4xl text-center font-bold my-1 uppercase">
          Events collection
        </h4>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
        <div className="flex flex-col justify-center px-10">
          <img src={eventsImages[0]} alt="Events" className="" />
          <h5 className="text-2xl font-bold mt-6 mb-2 capitalize">
            our Events
          </h5>
          <p className="text-sm font-normal leading-6 w-3/4">
            We have actively participated in various events, both within our
            country and abroad. Since our inception five years ago, we have been
            an integral part of more than 80 events. These include prominent
            conferences like the AACC Conference in Chicago, USA in 2022, the
            Medica Conference in Germany, the Medilab Conference in Dubai, the
            ASLM Conference in Capetown, the AKMLSO Conferences in Kisumu and
            Diani, the Kenya Hospital Association Conferences, the OMLTA
            Conference in Uganda, and many more.
          </p>
          <hr className="w-full  border-1 border-primaryGreen rounded my-3" />
          <Link to="/gallery/events">
            <button className="bg-primaryGreen w-1/2 py-2 px-4 rounded uppercase text-sm font-bold hover:bg-green-300">
              View all
            </button>
          </Link>
        </div>
        <div className="flex flex-col  gap-2 px-10">
          <div className="flex justify-center items-center gap-2">
            <img
              src={eventsImages[1]}
              alt="Events"
              className="sm:w-72 w-44 sm:h-72 h-44 object-cover"
            />
            <img
              src={eventsImages[2]}
              alt="Events"
              className="sm:w-72 w-44 sm:h-72 h-44 object-cover"
            />
          </div>
          <div className="flex gap-2">
            <img
              src={eventsImages[3]}
              alt="Events"
              className="sm:w-72 w-44 sm:h-72 h-44 object-cover"
            />
            <img
              src={eventsImages[4]}
              alt="Events"
              className="sm:w-72 w-44 sm:h-72 h-44 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCollection;
