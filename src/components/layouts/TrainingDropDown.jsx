import { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import {Link} from "react-router-dom";

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
        <Link to="/training-services/iso-training"
          className="text-white text-center"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          ISO training
        </Link>
        <hr className="w-3/4 my-2" />
        <Link to="/training-services/bio-medicine-courses"
          className="text-white text-center"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Bio medicine courses
        </Link>
      </div>
    </div>
  );
};

export default TrainingDropDown;
