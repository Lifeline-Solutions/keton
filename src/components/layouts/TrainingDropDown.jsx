import { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';

const TrainingDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      <button
        className="hover:underline flex flex-row items-center justify-center capitalize"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        training services
        {isOpen ? (
          <AiOutlineCaretUp className="ml-1" />
        ) : (
          <AiOutlineCaretDown className="ml-1" />
        )}
      </button>
      <div
        className={`absolute top-10 bg-primaryBlue w-64 h-20 flex flex-col items-center justify-center rounded shadow-lg ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <a
          href="/training-services/iso-training"
          className="text-white text-center"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          ISO training
        </a>
        <hr className="w-3/4 my-2" />
        <a
          href="/training-services/bio-medicine-courses"
          className="text-white text-center"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Bio medicine courses
        </a>
      </div>
    </div>
  );
};

export default TrainingDropDown;
