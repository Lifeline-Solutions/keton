import Header from './Header';

const Resources = () => {
  return (
    <>
      <Header />
      <div className="h-full flex flex-col justify-center items-start bg-primaryBg py-10 px-8 gap-6">
        <div className="mt-6 w-3/4">
          <h4 className="uppercase sm:text-xl text-xl font-bold mb-2">
            Troubleshooting Guide for EQA Results
          </h4>
        </div>
        <div className="mt-6 w-3/4">
          <h4 className="uppercase sm:text-xl text-xl font-bold mb-2">
            EQA Results Interpretation Guide
          </h4>
        </div>
      </div>
    </>
  );
};

export default Resources;
