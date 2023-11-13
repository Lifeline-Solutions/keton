import { useState } from 'react';
import { PiCaretDownBold, PiCaretUpBold } from 'react-icons/pi';
import programsArray from './programs';

const Programs = () => {
  const [programs, setPrograms] = useState(programsArray);

  const toggleProgram = (programId) => {
    const updatedPrograms = programs.map((program) => {
      if (program.id === programId) {
        return { ...program, isOpen: !program.isOpen };
      } else {
        return { ...program, isOpen: false };
      }
    });
    setPrograms(updatedPrograms);
  };

  return (
    <div>
      <div className="h-full flex flex-col justify-center items-center bg-primaryBg py-10 px-4 ">
        <h2 className="uppercase sm:text-2xl font-medium mt-2">
          KETON EQA PROGRAMS
        </h2>
        <hr className="w-44 border-4 border-primaryGreen rounded my-1" />
        <ul className="text-left mt-8 text-sm leading-6 list-none flex flex-col gap-4 w-full">
          {programs.map((program, index) => (
              <div
                key={program.id}
                className={`py-10 flex flex-col justify-center items-center relative ${
                  index % 2 === 0 ? 'bg-secondaryBlue/10' : 'bg-primaryBg'
                }`}
              >
                <h5 className="text-xl font-semibold capitalize flex justify-center items-center gap-3">
                  <span onClick={() => toggleProgram(program.id)}>
                    {program.title}
                  </span>
                  <span onClick={() => toggleProgram(program.id)}>
                    {program.isOpen ? <PiCaretUpBold /> : <PiCaretDownBold />}
                  </span>
                </h5>

                <div>
                  {program.isOpen && (
                    <div
                      className={`absolute top-20 sm:right-60 right-10 bg-white flex flex-col z-10 items-center justify-center rounded shadow-lg gap-4 sm:w-[50rem] w-72 py-6 ${
                        program.isOpen ? 'block' : 'hidden'
                      }`}
                    >
                      <div className="w-full">
                        {program.courses.map((course, index) => (
                          <div
                            key={index}
                            className="flex flex-col justify-center items-center"
                          >
                            <h5 className="text-xs capitalize my-4">
                              {course}
                            </h5>
                          </div>
                        ))}
                      </div>

                      <button
                        className="bg-primaryGreen text-white px-4 py-2 rounded-full capitalize"
                        onClick={() => {
                          window.open(
                            '/ESfEQA_Catalogue_2023_40.pdf',
                            '_blank'
                          );
                        }}
                      >
                        Download file
                      </button>
                    </div>
                  )}
                </div>
              </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Programs;
