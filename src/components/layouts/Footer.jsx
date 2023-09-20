import { BiLogoInstagram, BiLogoFacebook, BiLogoTwitter } from 'react-icons/bi';

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
            <a className="hover:text-primaryGreen" href="/">
              about us
            </a>
            <a className="hover:text-primaryGreen" href="/about">
              consulting
            </a>
            <a className="hover:text-primaryGreen uppercase" href="/services">
              eqa
            </a>
            <a className="hover:text-primaryGreen" href="/about">
              training services
            </a>
            <a className="hover:text-primaryGreen" href="/about">
              lab equipment and supplier
            </a>
          </div>
        </div>

        <div className="col-span-1">
          <h1 className="font-bold text-sm mt-4 capitalize">our location</h1>
          <div className="mt-4 capitalize flex flex-col gap-4 text-sm font-light leading-6">
            <p>Hazina Place, 2nd Floor, Off Ngong Road</p>
            <p>+254 724 491 757,+254 779 865 372</p>
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
          <a
            href="https://www.instagram.com/kentonconsulting/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primaryGreen"
          >
            <BiLogoInstagram className="text-2xl" />
          </a>
          <a
            href="https://www.facebook.com/kentonconsulting/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primaryGreen"
          >
            <BiLogoFacebook className="text-2xl" />
          </a>
          <a
            href="https://twitter.com/kentonconsultin"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primaryGreen"
          >
            <BiLogoTwitter className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
