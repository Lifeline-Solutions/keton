import { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';

const EqaDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="relative flex flex-col items-center">
      <button
        className="hover:underline flex flex-row items-center justify-center uppercase"
        onClick={toggle}
      >
        eqa
        {isOpen ? (
          <AiOutlineCaretUp className="ml-1" />
        ) : (
          <AiOutlineCaretDown className="ml-1" />
        )}
      </button>
      <div
        className={`absolute top-10 bg-primaryBlue w-64 h-20 flex flex-col items-center justify-center rounded shadow-lg z-[20] ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <a
          href="/eqa"
          className="text-white text-center"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          EQA programs
        </a>
        <hr className="w-3/4 my-2" />
        <a
          href="/eqa/third-party-controls"
          className="text-white text-center"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          EQA process
        </a>
      </div>
    </div>
  );
};
export default EqaDropDown;
