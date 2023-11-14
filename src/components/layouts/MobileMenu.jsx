import PropTypes from 'prop-types';
import { IoCloseSharp } from 'react-icons/io5';
import EqaDropDown from './EqaDropDown';
import TrainingDropDown from './TrainingDropDown';
import ThirdPartyControlsDropDown from './ThirdPartyControlsDropDown';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isMobileMenu, toggle }) => {
  return (
    isMobileMenu && (
      <ul className="flex-col flex items-center fixed inset-0 left-1/4 bg-primaryBlue gap-8 justify-center p-10  text-white font-normal capitalize xs:text-sm text-xs">
        <div className="absolute sm:right-16 right-6 sm:top-10 top-40 z-[12]">
          <IoCloseSharp className="text-xl" onClick={toggle} />
        </div>
        <li onClick={toggle} className="sm:mt-0 mt-12">
          <Link to="/">home</Link>
        </li>
        <li onClick={toggle}>
          <Link to="about-us">about us</Link>
        </li>
        <li onClick={toggle}>
          <Link to="/consulting">consulting</Link>
        </li>
        <li>
          <EqaDropDown />
        </li>
        <li>
          <TrainingDropDown />
        </li>
        <li>
          <ThirdPartyControlsDropDown />
        </li>
        <li onClick={toggle}>
          <Link to="/lab-equipment-and-supplies">
            lab equipment and supplies
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="/gallery">gallery</Link>
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
