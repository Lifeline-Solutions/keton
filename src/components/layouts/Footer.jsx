import {
  BiLogoInstagram,
  BiLogoFacebook,
  BiLogoLinkedinSquare,
} from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondaryBlue h-full py-4 px-10 text-white">
      <img src="/logo.png" alt="logo" className="w-44" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-6">
        <div className="col-span-1">
          <h1 className="font-bold text-sm mt-4">About Keton Consulting.</h1>
          <p className="text-sm mt-4 font-light leading-6 w-9/12">
            Keton Consulting Limited is a multiagency consulting and service
            firm grounded on creating communities where people continually
            expand their capacity to create the results they truly desire, where
            new and expansive patterns of thinking are nurtured, where
            collective aspiration is set free, and where people are continually
            learning to see the whole together.
          </p>
        </div>

        <div className="col-span-1">
          <h1 className="font-bold text-sm mt-4">Quick access</h1>
          <div className="mt-4 capitalize flex flex-col gap-4 text-sm font-light leading-6">
            <Link className="hover:text-primaryGreen capitalize" to="/about-us">
              about us
            </Link>
            <Link className="hover:text-primaryGreen capitalize" to="/consulting">
              consulting
            </Link>
            <Link className="hover:text-primaryGreen capitalize" to="/eqa/programs">
              eqa programs
            </Link>
            <Link className="hover:text-primaryGreen capitalize" to="/training-services/iso-training">
              iso training services
            </Link>
            <Link className="hover:text-primaryGreen capitalize" to="/lab-equipment-and-supplies">
              lab equipment and supplier
            </Link>
          </div>
        </div>

        <div className="col-span-1">
          <h1 className="font-bold text-sm mt-4 capitalize">our location</h1>
          <div className="mt-4 capitalize flex flex-col gap-4 text-sm font-light leading-6">
            <p>Hazina Place, 2nd Floor, Off Ngong Road, Nairobi, Kenya.</p>
            <p>+254 724 491 757, +254 779 865 372</p>
            <p>Mon – Fri 08:00am – 05:00pm</p>
            <p>Saturday-9:00am – 1:00pm</p>
          </div>
        </div>
      </div>
      <hr className="border-0.5 border-white mt-10 mb-6 w-3/4 justify-center mx-auto" />
      <div className="flex sm:flex-row flex-col gap-8 justify-between items-center sm:px-28">
        <p className="sm:text-sm text-xs font-bold">
          Copyrights @2023 Kenton Consulting
        </p>
        <div className="flex gap-4">
          <Link
            to="https://www.instagram.com/keton.consulting/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primaryGreen"
          >
            <BiLogoInstagram className="text-2xl" />
          </Link>
          <Link
            to="https://www.facebook.com/ketonconsultingKE"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primaryGreen"
          >
            <BiLogoFacebook className="text-2xl" />
          </Link>
          <Link
            to="https://www.linkedin.com/company/keton-consulting/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primaryGreen"
          >
            <BiLogoLinkedinSquare className="text-2xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
