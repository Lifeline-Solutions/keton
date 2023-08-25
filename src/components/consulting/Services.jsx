const Services = () => {
  return (
    <div className="h-full flex flex-col justify-center items-start bg-primaryBg py-10 px-4">
      <h1 className="uppercase sm:text-2xl text-xl font-bold mb-4">
        PROVIDING YOU WITH THE BEST SERVICES AND CONSULTING.
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-20 gap-4 mt-4 sm:px-10">
        <div className="col-span-1">
          <img
            src="/images/consulting-2.png"
            alt="consulting-2"
            className="w-full h-full rounded object-cover"
          />
        </div>

        <div className="col-span-2">
          <hr className="w-20  border-2 border-primaryGreen rounded my-1" />
          <h2 className="uppercase sm:text-2xl font-medium mt-2">
            ISO SERVICES
          </h2>
          <ul className="text-left mt-8 text-sm leading-6 list-disc flex flex-col gap-4">
            <li> Analysis for ISO/IEC 17043:2010, 17025:2017, 15189:2012</li>
            <li>
              Accreditation Mentorship for ISO/IEC 17043:2010, 17025:2017 and
              15189:2012
            </li>
            <li>Kenya Quality Model for Health</li>
            <li>Joint Inspection Checklist</li>
            <li>Baseline Survey</li>
            <li>Midterm Evaluation</li>
            <li>Endline Evaluation</li>
            <li>Monitoring and Evaluation</li>
            <li>Pre-certification Audit for ISO 9001:2015</li>
            <li>Writing SOPs and Documentation</li>
            <li>Project Planning and Management</li>
            <li>Professional Building Design for Health Facilities</li>
          </ul>
          <div className="flex sm:flex-row flex-col gap-4 mt-10">
            <button className="bg-primaryBlue text-white py-2 px-4 rounded-md capitalize text-sm font-medium">
              Inquire about Service
            </button>
            <button className="border border-primaryBlue text-primaryBlue py-2 px-4 rounded-md capitalize text-sm font-medium mt-4 sm:mt-0">
              Get a quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
