const programs = [
  'Hematology controls – Biotechne',
  'Urinalysis controls - Clinica',
  'Biochemistry controls - Audit Microcontrols',
  'Infectious diseases controls- Diamex',
];

const ThirdParty = () => {
  return (
    <div className="bg-primaryBg pt-10">
      <div className="flex flex-col justify-center items-center">
        <h2 className=" text-center uppercase sm:text-2xl font-medium mt-2">
          KETON EQA PROGRAMS
        </h2>
        <hr className="w-44 border-4 border-primaryGreen rounded my-1 mb-8" />
      </div>
      {programs.map((program, index) => (
        <div
          key={program}
          className={`py-10 flex justify-center items-center font-bold ${
            index % 2 === 0 ? 'bg-secondaryBlue/10' : 'bg-primaryBg'
          }`}
        >
          {program}
        </div>
      ))}
    </div>
  );
};

export default ThirdParty;
