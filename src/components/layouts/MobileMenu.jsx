import PropTypes from 'prop-types';
import { IoCloseSharp } from 'react-icons/io5';
import EqaDropDown from './EqaDropDown';

const MobileMenu = ({ isMobileMenu, toggle }) => {
  return (
    isMobileMenu && (
      <ul className="flex-col flex items-center fixed inset-0 left-1/4 bg-primaryBlue gap-8 justify-center p-10  text-white font-normal capitalize xs:text-sm text-xs">
        <div className="absolute sm:right-16 right-6 sm:top-10 top-40 z-[12]">
          <IoCloseSharp className="text-xl" onClick={toggle} />
        </div>
        <li onClick={toggle} className="sm:mt-0 mt-12">
          <a href="/">home</a>
        </li>
        <li onClick={toggle}>
          <a href="about-us">about us</a>
        </li>
        <li onClick={toggle}>
          <a href="/consulting">consulting</a>
        </li>
        <li onClick={toggle}>
          <EqaDropDown />
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
  isMobileMenu: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default MobileMenu;
