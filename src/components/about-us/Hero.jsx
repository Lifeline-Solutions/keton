const Hero = () => {
  return (
    <header
    className="bg-cover bg-top h-72 flex flex-col justify-center items-center text-white bg-no-repeat"
    style={{
      backgroundImage: `url(/images/about-us-header.png)`,
    }}
  >
    <div className="absolute top-0 left-0 w-full h-72 bg-black opacity-50"></div>
    <div className="relative z-10 text-center mt-20">
      <h1 className="text-4xl font-bold text-center uppercase mt-8">About Us</h1>
      <p className="text-sm mt-4">In a world of pandemics, epidemics and chronic ailments lies quality laboratory solutions provided by Keton Group of companies.</p>
    </div>
  </header>
  )
}

export default Hero
