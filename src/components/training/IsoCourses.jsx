const courses = [
  'ISO/IEC 17043:2010 Implementation training',
  'ISO/IEC 17025:2017 Implementation training',
  'ISO/IEC 15189:2012 Implementation',
  'ISO 13528:2015 Statistical methods for use in proficiency testing by interlaboratory comparison',
  'ISO 19011:2011 Guidelines for Auditing Management Systems',
  'ISO 9001:2015 Quality Management Systems Requirements Implementation',
  'ISO 31000 Risk Management Training',
];

const IsoCourses = () => {
  return (
    <header
      className="bg-cover bg-top sm:h-[28rem] h-[36rem] flex flex-col justify-start items-start text-black bg-no-repeat relative"
      style={{
        backgroundImage: `url(/images/consulting-3.png)`,
      }}
    >
      <div className="absolute top-0 left-0 w-full sm:h-[28rem] h-[36rem] bg-primaryBlue opacity-80"></div>
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

export default IsoCourses;
