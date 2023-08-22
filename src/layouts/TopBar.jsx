const Navbar = () => {
  return (
    <nav className="bg-primaryBlue p-4 flex sm:flex-row flex-col items-center justify-between text-sm font-bold text-white">
      <div className="flex items-center space-x-4">
        <div>
          Opening Hours : Monday to Saturday - 8am to 5pm
        </div>
      </div>
      <div className="flex-grow text-center">
        Hazina Place, 2nd Floor, Off Ngong Road
      </div>
      <div>+254 742 32 45 53</div>
    </nav>
  );
};

export default Navbar;
