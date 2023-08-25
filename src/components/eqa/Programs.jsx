import InquiryForm from './InquiryForm';

const programs = [
  'Cardiac Markers 12/4- CM12/4',
  'Clinical Chemistry 12/4/2 - CC12/4/2',
  'Brucella - BRU',
  'Blood Gas 12/4 - BG12/4',
  'Bacteriology - BAC',
  'Coagulation',
  'Drugs od Abuse - DAT',
  'Erythrocyte Sedimentation Rate - ESR',
  'Parasitology- PAR12',
  'Erythrocyte Sedimentation Rate - ESR',
  'HBV DNA VIral Load - HBV 12',
  'Erythrocyte Sedimentation Rate - ESR',
  'Lymphocyte Immunophenotyping - LYMP3',
  'Erythrocyte Sedimentation Rate - ESR',
];

const Programs = () => {
  return (
    <div>
      <div className="h-full flex flex-col justify-center items-center bg-primaryBg py-10 px-4 ">
        <h2 className="uppercase sm:text-2xl font-medium mt-2">
          KETON EQA PROGRAMS
        </h2>
        <hr className="w-44 border-4 border-primaryGreen rounded my-1" />
        <ul className="text-left mt-8 text-sm leading-6 list-none flex flex-col gap-4 border-4 border-secondaryBlue w-3/4">
          {programs.map((program, index) => (
            <div key={index} className="text-center font-medium mt-6 mb-2">
              {program}
              {index !== programs.length - 1 && (
                <hr className="border-primaryGreen my-2 w-10/12 sm:ml-16" />
              )}
            </div>
          ))}
        </ul>
      </div>
      <InquiryForm />
    </div>
  );
};

export default Programs;
