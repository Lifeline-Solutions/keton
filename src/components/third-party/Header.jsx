const Header = () => {
  return (
    <header
      className="bg-cover bg-top sm:h-96 h-[30rem] flex flex-col justify-center items-center text-white bg-no-repeat"
      style={{
        backgroundImage: `url(https://res.cloudinary.com/dlahz5ciz/image/upload/v1693327559/keton/Keton_Consulting15_kpdhww.jpg)`,
      }}
    >
      <div className="absolute top-0 left-0 w-full sm:h-96 h-[30rem] bg-black opacity-50"></div>
      <div className="relative z-8 text-center md:mt-12 mt-20">
        <h1 className="md:text-4xl text-2xl font-bold text-center capitalize sm:mt-8 mt-16">
          3rd Party Controls
        </h1>
        <p className="text-sm mt-4 w-3/4 leading-6 sm:ml-40 ml-10">
          Knowledge management holds the key to better patient outcomes centered
          on rapid, reliable, reproducible and informative patient laboratory
          reports. Keton Training services has reached over 2500 laboratory
          medicine professionals in Africa and beyond
        </p>
      </div>
    </header>
  );
};

export default Header;
