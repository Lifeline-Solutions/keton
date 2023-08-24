const Solutions = () => {
  return (
    <header
      className="bg-cover bg-top h-96 flex flex-col justify-center items-center text-white bg-no-repeat relative"
      style={{
        backgroundImage: `url(/images/consulting-3.png)`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-96 bg-primaryBlue opacity-50"></div>
      <div className="relative z-8 text-center md:mt-12 mt-20">
        <h1 className="md:text-4xl text-2xl font-bold text-center uppercase mt-8">
          <p>MEDICAL AND HEALTH CARE</p>
          <p className="mt-4">PRODUCTS SOLUTIONS</p>
        </h1>
      </div>
    </header>
  );
};

export default Solutions;
