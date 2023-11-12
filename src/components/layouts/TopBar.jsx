import NavBar from './Navbar';
import {
  BiLogoInstagram,
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoLinkedinSquare,
} from 'react-icons/bi';
import { AiOutlineYoutube } from 'react-icons/ai';
const TopBar = () => {
  return (
    <>
      <nav className="bg-primaryBlue p-4 flex sm:flex-row flex-col sm:items-center items-start justify-between sm:text-sm text-xs font-bold text-white fixed w-full z-[12] shadow-lg sm:space-y-0 space-y-4">
        <div className="flex items-center space-x-4">
          <SocialMediaIcons />
        </div>
        <div className="flex-grow text-center">
          Hazina Place, 2nd Floor, Off Ngong Road
        </div>
        <div>+254 742 32 45 53</div>
      </nav>
      <div className="relative bg-blue-900">
        <NavBar />
      </div>
    </>
  );
};

const SocialMediaIcons = () => {
  return (
    <>
      <div className="flex items-center space-x-4">
        <a
          href="https://www.instagram.com/keton.consulting/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primaryGreen"
        >
          <BiLogoInstagram className="text-2xl" />
        </a>
        <a
          href="https://www.facebook.com/ketonconsultingKE"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primaryGreen"
        >
          <BiLogoFacebook className="text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/company/keton-consulting/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primaryGreen"
        >
          <BiLogoLinkedinSquare className="text-2xl" />
        </a>
      </div>
    </>
  );
};

export default TopBar;
