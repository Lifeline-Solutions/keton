import { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import PropTypes from 'prop-types';

const EqaDropDown = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex flex-col items-center">
      <button
        className={`hover:underline flex flex-row items-center justify-center uppercase ${
          activePage === 'eqa' ? 'border-b-2 border-green-500 font-bold' : ''
        }`}
        onClick={() => {
          setActivePage('eqa');
          setIsOpen(!isOpen);
        }}
      >
        eqa
        {isOpen ? (
          <AiOutlineCaretUp className="ml-1" />
        ) : (
          <AiOutlineCaretDown className="ml-1" />
        )}
      </button>
      <div
        className={`absolute top-10 bg-primaryBlue/80 w-64 h-20 flex flex-col items-center justify-center rounded shadow-lg ${
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
          external quality assessment{' '}
        </a>
        <hr className="w-3/4 my-2" />
        <a
          href="/eqa/third-party-controls"
          className="text-white text-center"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          third party controls
        </a>
      </div>
    </div>
  );
};

EqaDropDown.propTypes = {
  activePage: PropTypes.string,
  setActivePage: PropTypes.func,
};

export default EqaDropDown;
