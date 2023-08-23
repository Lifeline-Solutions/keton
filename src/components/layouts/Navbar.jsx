import { useState } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import MobileMenu from './MobileMenu';
import logo from '/logo.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  // I have path pages eg '/', '/about-us', '/eqa', '/training', '/lab'
  // I want to set the active page based on the path
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
            href="/eqa"
            className={`hover:underline uppercase ${
              activePage === 'eqa'
                ? 'border-b-2 border-green-500 font-bold'
                : ''
            }`}
            onClick={() => setActivePage('eqa')}
          >
            eqa
          </a>
        </li>
        <li>
          <a
            href="/training-services"
            className={`hover:underline ${
              activePage === 'training-services'
                ? 'border-b-2 border-green-500 font-bold'
                : ''
            }`}
            onClick={() => setActivePage('training-services')}
          >
            training services
          </a>
        </li>
        <li>
          <a
            href="/lab-equipment-and-services"
            className={`hover:underline ${
              activePage === 'lab-equipment-and-services'
                ? 'border-b-2 border-green-500 font-bold'
                : ''
            }`}
            onClick={() => setActivePage('lab-equipment-and-services')}
          >
            lab equipment and services
          </a>
        </li>
      </ul>
      <div>
        <div className="absolute md:hidden right-4 sm:mt-0 mt-4">
          {!isOpen && (
            <HiOutlineMenuAlt2 className="text-xl" onClick={toggle} />
          )}
        </div>
        <MobileMenu isOpen={isOpen} toggle={toggle} />
      </div>
    </nav>
  );
};

export default NavBar;
