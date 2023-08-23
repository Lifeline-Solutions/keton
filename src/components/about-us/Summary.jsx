const Summary = () => {
  return (
    <div className="h-full flex justify-center items-center bg-primaryBg py-10 md:mt-64">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        <div className="col-span-1 px-4">
          <div>
            <img src="/images/values-1.png" alt="mission" className="w-full" />
          </div>
          <div className="flex justify-center items-center mt-2 gap-2">
            <img
              src="/images/values-2.png"
              alt="mission"
              className="sm:w-96 sm:h-64 w-32 h-32"
            />
            <img
              src="/images/values-3.png"
              alt="mission"
              className="sm:w-96 sm:h-64 w-32 h-32"
            />
          </div>
        </div>

        <div className="col-span-1 px-4 relative">
          <div className="w-2 h-2 rounded-full bg-primaryBlue absolute top-5 -left-5"></div>
          <hr className="sm:absolute sm:top-72 sm:right-[385px] border-primaryBlue sm:w-10/12 w-full sm:rotate-90"></hr>
          <div>
            <h2 className="capitalize sm:text-2xl font-bold mt-2">
              Executive Summary
            </h2>
            <p className="font-light text-sm leading-6 sm:w-9/12 w-full mt-3">
              Our expertise lies in the deep knowledge and understanding of how
              to operate a modern clinical laboratory optimally both by
              equipment and capacity of staff to produce reliable, reproducible,
              rapid quality laboratory reports for optimal patient care. We
              premise our work on the Intelligent methods wired with modern
              approaches divided into four strategic business units that
              communicate effortlessly, buttressed by the requirements of ISO
              15189:2022 of risk based and patient centric approach of managing
              laboratory business.
            </p>
          </div>
          <div className="w-2 h-2 rounded-full bg-primaryBlue absolute top-[20rem] -left-5"></div>
          <div>
            <h2 className="capitalize sm:text-2xl font-bold mt-16">
              Corporate Governance
            </h2>
            <p className="font-light text-sm leading-6 sm:w-9/12 w-full mt-3">
              Keton has a board that meets four times a year to evaluate the
              organizations on tenets of sustainability, accountability and
              transparency. The board has a good mix of expertise across the
              industry -finance, legal, Lab Medicine, Marketing and banking with
              all gender represented as a fit for purpose board. The Board Takes
              Matters ESG seriously and this guides most of the decisions on
              what to invest in, that protect the environment, communities with
              best governance practices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
