const courses = [
  'Bio risk Management',
  'Method Verification and Validation and Uncertainty of Measurement Training.',
  'Advanced Root Cause Analysis and CAPA Training',
  'Risk Management',
  'Competency in Malaria Microscopy Training.',
  'Good Clinical Laboratory Practice Training',
  'Best Practices in Safe Phlebotomy',
];

const BioMedicineCourses = () => {
  return (
    <header
      className="bg-cover bg-top h-[28rem] flex flex-col justify-start items-start text-black bg-no-repeat relative"
      style={{
        backgroundImage: `url(/images/consulting-3.png)`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-[28rem] bg-primaryBlue opacity-30"></div>
      <div className="relative z-8  md:mt-8 mt-20 sm:ml-8 ml-4">
        <h1 className="md:text-2xl text-lg font-bold uppercase mt-2">
          <p>based courses</p>
        </h1>

        <ul className="text-left mt-8 text-sm leading-6 list-disc flex flex-col gap-4 sm:ml-0 ml-8">
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default BioMedicineCourses;
