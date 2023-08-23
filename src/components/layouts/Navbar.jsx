import { useState } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import MobileMenu from './MobileMenu';
import logo from '/logo.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [activeTab, setActiveTab] = useState('home');

  return (
    // <nav className="flex justify-between items-center mx-auto py-20 px-10 right-0 top-60 transition-all duration-500 ease-in-out text-white w-full bg-red-500 absolute">
    <nav className='flex justify-between items-center mx-auto py-10 px-10 right-0 transition-all duration-500 ease-in-out text-white w-full absolute top-10 z-10'>
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
              activeTab === 'home'
                ? 'border-b-2 border-green-500 font-bold'
                : ''
            }`}
            onClick={() => setActiveTab('home')}
          >
            home
          </a>
        </li>
        <li>
          <a
            href="/about-us"
            className={`hover:underline ${
              activeTab === 'about'
                ? 'border-b-2 border-green-500 font-bold'
                : ''
            }`}
            onClick={() => setActiveTab('about')}
          >
            about us
          </a>
        </li>
        <li>
          <a
            href="/eqa"
            className={`hover:underline ${
              activeTab === 'eqa' ? 'border-b-2 border-green-500 font-bold' : ''
            }`}
            onClick={() => setActiveTab('eqa')}
          >
            eqa
          </a>
        </li>
        <li>
          <a
            href="/training"
            className={`hover:underline ${
              activeTab === 'training'
                ? 'border-b-2 border-green-500 font-bold'
                : ''
            }`}
            onClick={() => setActiveTab('training')}
          >
            training services
          </a>
        </li>
        <li>
          <a
            href="/lab"
            className={`hover:underline ${
              activeTab === 'lab' ? 'border-b-2 border-green-500 font-bold' : ''
            }`}
            onClick={() => setActiveTab('lab')}
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
