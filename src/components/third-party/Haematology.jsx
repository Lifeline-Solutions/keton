const Haematology = () => {
  return (
    <div className="flex flex-col justify-center gap-4 p-6 bg-primaryBg">
      <>
        <div className="flex flex-col justify-center  bg-primaryBlue rounded-full h-10">
          <h1 className="text-md font-bold text-black capitalize p-4 ml-2">
            Biotechne R&D controls
          </h1>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
          <ul className="flex flex-col gap-2 text-sm mt-4 w-1/2 leading-6 px-4">
            <li>Multilevel Whole Blood Controls</li>
            <li>Whole Blood Calibrators</li>
            <li>Wholde Blood Reticulocyte Controls</li>
            <li>Flow Cytometry Controls with Human stem cells CD34+</li>
            <li>LeukoReduced Controls</li>
            <li>Body Fluid Controls</li>
            <li>Linearity Material</li>
            <li>Urine Cytology Control</li>
            <li>Erythroblast Controls</li>
            <li>Others controls</li>
            <li>EQA products</li>
          </ul>
          <div className="col sm:col-span-1 flex flex-col">
            <div className="relative bg-primaryBlue">
              <div className="absolute left-20 bg-primaryBlue w-[55%] sm:h-[19rem] rounded-xl sm:block hidden"></div>
              <div className="sm:absolute">
                <img
                  src="https://res.cloudinary.com/dlahz5ciz/image/upload/v1697896601/keton/Rectangle_227_eawgzs.png"
                  alt="logo"
                  className="sm:w-3/4 sm:h-3/4 rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        <div className="flex flex-col justify-center  bg-primaryBlue rounded-full h-10 mt-6">
          <h1 className="text-md font-bold text-black capitalize p-4 ml-2">
            Diagon controls
          </h1>
        </div>
        <div className="">
          <table className="table-auto w-full text-sm mt-4 leading-6">
            <thead className="border-collapse border border-secondaryBlue">
              <th
                className="px-4 py-2 text-left"
                style={{ borderTopLeftRadius: '10px' }}
              >
                Table here
              </th>
            </thead>
          </table>
        </div>
      </>
    </div>
  );
};

export default Haematology;
