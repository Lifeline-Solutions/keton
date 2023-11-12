const Header = () => {
  const path = window.location.pathname;
  const headerTitle = () => {
    if (path === '/eqa/rca-resources') {
      return 'Rca Resources';
    } else if (path === '/eqa/programs') {
      return 'EQA programme';
    }
  };
  return (
    <header
      className="bg-cover bg-center sm:h-96 h-[30rem] flex flex-col justify-center items-center text-white bg-no-repeat"
      style={{
        backgroundImage: `url(https://res.cloudinary.com/dlahz5ciz/image/upload/v1693327554/keton/Keton_Consulting16_abf6zk.jpg)`,
      }}
    >
      <div className="absolute top-0 left-0 w-full sm:h-96 h-[30rem] bg-black opacity-50"></div>
      <div className="relative z-8 text-center md:mt-12 mt-20">
        <h1 className="md:text-4xl text-2xl font-bold text-center uppercase sm:mt-8 mt-16">
          {headerTitle()}
        </h1>
        <p className="text-sm mt-4 w-3/4 leading-6 sm:ml-40 ml-10">
          Keton Consulting in collaboration with the European Society for
          External Quality Assessment offers laboratories a wide range of EQA
          schemes organized in the following areas: biochemistry, immunology,
          microbiology, haematology, malaria, parasitology, infectious diseases,
          mycobacteria and mycology
        </p>
      </div>
    </header>
  );
};

export default Header;
