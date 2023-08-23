import PropTypes from 'prop-types';
import { IoCloseSharp } from 'react-icons/io5';

const MobileMenu = ({ isOpen, toggle }) => {
  return (
    isOpen && (
      <ul className="flex-col flex items-center fixed inset-0 left-1/4 bg-primaryBlue gap-8 justify-center p-10  text-white font-normal capitalize xs:text-sm text-xs">
        <div className="absolute sm:right-16 right-6 sm:top-10 top-40 z-1">
          <IoCloseSharp className="text-xl" onClick={toggle} />
        </div>
        <li onClick={toggle}>
          <a href="/">home</a>
        </li>
        <li onClick={toggle}>
          <a href="#about">about us</a>
        </li>
        <li onClick={toggle}>
          <a href="/eqa" className=" uppercase">
            eqa
          </a>
        </li>
        <li onClick={toggle}>
          <a href="/training">training services</a>
        </li>
        <li onClick={toggle}>
          <a href="/lab">lab equipment and services</a>
        </li>
      </ul>
    )
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default MobileMenu;
