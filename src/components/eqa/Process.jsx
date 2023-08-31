const Process = () => {
  return (
    <div className="bg-primaryBg pt-10">
      <div className="flex flex-col justify-center items-center mb-4">
        <hr className="w-44 border-4 border-primaryGreen rounded my-2" />
        <h2 className=" text-center uppercase sm:text-2xl font-medium">
          KETON EQA process
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center py-4">
        <img
          src="/images/eqa-process.png"
          alt="eqa process"
          className="w-3/4 pb-6"
        />
      </div>
    </div>
  );
};

export default Process;
