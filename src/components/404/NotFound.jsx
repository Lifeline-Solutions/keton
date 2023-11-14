import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen text-center font-bold pt-20 bg-secondaryBlue flex flex-col justify-center items-center text-white">
      <img
        src="/images/404.svg"
        alt="404"
        className="sm:w-1/2 sm:h-1/2 w-3/4 h-3/4"
      />
      <Link
        className="bg-white text-secondaryBlue px-4 py-2 rounded-md sm:mt-3 -mt-20 font-medium hover:bg-primaryBlue hover:text-white"
        to="/"
      >
        &larr; Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
