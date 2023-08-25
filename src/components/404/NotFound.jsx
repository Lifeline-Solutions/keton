const NotFound = () => {
  return (
    <div className="h-screen text-center font-bold pt-20 bg-secondaryBlue flex flex-col justify-center items-center text-white">
      <img src="/images/404.svg" alt="404" className="w-1/2 h-1/2" />
      <button className="bg-white text-secondaryBlue px-4 py-2 rounded-md mt-3 font-medium hover:bg-primaryBlue hover:text-white" href="/">
        &larr; Back to Home
      </button>
    </div>
  );
};

export default NotFound;
