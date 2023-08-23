const Mission = () => {
  return (
    <div className="relative">
      <div className="md:absolute md:-top-8 bg-primaryBlue h-80 flex flex-col justify-center items-center py-10 w-full text-white md:mt-0 mt-[33rem]">
        <div>
          <h2 className="capitalize sm:text-2xl font-bold mt-2">mission</h2>
          <hr className="w-20 mx-auto border-2 border-primaryGreen rounded my-1" />
        </div>
        <p className="text-center text-sm font-normal mt-4 leading-6 w-8/12">
          To create communities where people continually expand their capacity
          to create the results they truly desire, where new and expansive
          patterns of thinking are nurtured and collective aspiration is set
          free for better healthcare outcomes.
        </p>
      </div>
    </div>
  );
};

export default Mission;
