const Header = () => {
  return (
    <header
      className="bg-cover bg-top h-96 flex flex-col justify-center items-center text-white bg-no-repeat"
      style={{
        backgroundImage: `url(/images/training-1.png)`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-96 bg-black opacity-50"></div>
      <div className="relative z-8 text-center md:mt-12 mt-20">
        <h1 className="md:text-4xl text-2xl font-bold text-center uppercase mt-8">
          Training Services
        </h1>
        <p className="text-sm mt-4 w-3/4 leading-6 sm:ml-40 ml-20">
          Keton Consulting in collaboration with the European Society for External Quality Assessment offers laboratories a wide range of EQA schemes organized in the following areas: biochemistry, immunology, microbiology, haematology, malaria, parasitology, infectious diseases, mycobacteria and mycology
        </p>
      </div>
    </header>
  );
};

export default Header;
