import NavBar from './Navbar';
const TopBar = () => {
  return (
    <>
      <nav className="bg-primaryBlue p-4 flex sm:flex-row flex-col sm:items-center items-start justify-between sm:text-sm text-xs font-bold text-white fixed w-full z-[12] shadow-lg sm:space-y-0 space-y-4">
        <div className="flex items-center space-x-4">
          <div>Opening Hours : Monday to Saturday - 8am to 5pm</div>
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

export default TopBar;
