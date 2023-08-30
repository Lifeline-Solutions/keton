const Gallery = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center bg-primaryBg py-6">
      <div className="text-center sm:mt-10">
        <h2 className="capitalize sm:text-3xl font-bold mt-2">gallery</h2>
        <hr className="w-20 mx-auto border-2 border-primaryGreen rounded my-1" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-8 px-5">
          <div className="col-span-1">
            <img
              src="/images/g-1.png"
              alt="g-1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2">
            <img
              src="/images/g-2.png"
              alt="g-2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 px-5 mb-4">
          <div className="col-span-2">
            <img
              src="/images/g-3.png"
              alt="g-3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1">
            <img
              src="/images/g-4.png"
              alt="g-4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
