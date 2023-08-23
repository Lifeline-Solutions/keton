const Founder = () => {
  return (
    <div className="h-[28rem] flex justify-center items-center bg-primaryBg sm:pt-10 pt-[520px] relative">
      <div className="md:absolute md:-top-10 left-0 md:w-10/12 w-11/12 md:ml-24 ml-4 bg-white rounded flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="col-span-1 flex flex-col items-center mt-8 px-6">
            <h2 className="capitalize sm:text-2xl font-bold md:mt-2 mt-4">
              the founder
            </h2>
            <hr className="w-20 mx-auto border-2 border-primaryGreen rounded my-1" />
            <p className="text-left mt-2 text-sm leading-6">
              A thought leader, dedicated to expanding advances in laboratory
              medicine from a global view of best practices into health systems
              and value chains, translating into customer delights. Creating the
              laboratory of the future with Africa in mind drove Antony; to
              constantly think about curating the passion for quality laboratory
              services into provision of end-to-end laboratory solutions where
              every client would convert questions marks into solutions whenever
              they knocked our door. This has come to pass with our one stop
              shop principle in provision of laboratory services and products
              from training, mentorship, EQA, third party controls, method
              verification controls, molecular and clinical laboratory equipment
              plus consumables to software development for RCA and LIMS,
              laboratory infrastructure design and laboratory hardware. Hence
              our mantra We have delivered quality lab solutions.
            </p>
          </div>
          <div className="col-span-1 flex flex-col">
            <img
              src="/images/founder.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
