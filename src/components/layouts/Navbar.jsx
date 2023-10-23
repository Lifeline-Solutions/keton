import { useState } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import MobileMenu from './MobileMenu';
import logo from '/logo.png';
import EqaDropDown from './EqaDropDown';
import TrainingDropDown from './TrainingDropDown';
import ThirdPartyControlsDropDown from './ThirdPartyControlsDropDown';

const NavBar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const toggle = () => setIsMobileMenu(!isMobileMenu);

  const path = window.location.pathname;
  const page = path.split('/')[1];

  const [activePage, setActivePage] = useState(page);

  return (
    <nav className="flex justify-between items-center mx-auto py-10 px-10 right-0 transition-all duration-500 ease-in-out text-white w-full absolute top-10 z-10">
      <div className="sm:mt-0 mt-4">
        <a href="/">
          <img
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="sm:mt-0 mt-8"
          />
        </a>
      </div>
      <ul className="hidden md:flex gap-6 p-2 font-normal text-sm capitalize ml-auto">
        <li>
          <a
            href="/"
            className={`hover:underline ${
              activePage === '' ? 'border-b-2 border-green-500 font-bold' : ''
            }`}
            onClick={() => setActivePage('')}
          >
            home
          </a>
        </li>
        <li>
          <a
            href="/about-us"
            className={`hover:underline ${
              activePage === 'about-us'
                ? 'border-b-2 border-green-500 font-bold'
                : ''
            }`}
            onClick={() => setActivePage('about-us')}
          >
            about us
          </a>
        </li>
        <li>
          <a
            href="/consulting"
            className={`hover:underline ${
              activePage === 'consulting'
                ? 'border-b-2 border-green-500 font-bold'
                : ''
            }`}
            onClick={() => setActivePage('consulting')}
          >
            consulting
          </a>
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
        <li>
          <a
            href="/lab-equipment-and-supplies"
            className={`hover:underline ${
              activePage === 'lab-equipment-and-supplies'
                ? 'border-b-2 border-green-500 font-bold'
                : ''
            }`}
            onClick={() => setActivePage('lab-equipment-and-supplies')}
          >
            lab equipment and supplies
          </a>
        </li>
        <li>
          <a
            href="/gallery"
            className={`hover:underline ${
              activePage === 'gallery'
                ? 'border-b-2 border-green-500 font-bold'
                : ''
            }`}
            onClick={() => setActivePage('gallery')}
          >
            gallery
          </a>
        </li>
      </ul>
      <div>
        <div className="absolute md:hidden right-8 sm:mt-0 mt-4">
          {!isMobileMenu && (
            <HiOutlineMenuAlt2
              className="text-2xl text-primaryGreen"
              onClick={toggle}
            />
          )}
        </div>
        <MobileMenu isMobileMenu={isMobileMenu} toggle={toggle} />
      </div>
    </nav>
  );
};

export default NavBar;
