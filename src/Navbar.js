// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import FontAwsome from "@/FontAwsome";

function Navbar() {
  return (
    <div className="Navbar">
      <nav className="container flex justify-between px-4 py-8 mx-auto">
        <div>
          <h3 className="text-2xl font-bold text-green-600">LOGO</h3>
        </div>
        <ul className="hidden space-x-8 font-medium lg:flex text-green-600 lg:justify-center">
          <li>Home</li>
          <li>About</li>
          <li>Gallery</li>
          <li>Regular</li>
        </ul>

        <div className="space-y-2 lg:hidden">
          <span className="block w-7 h-0.5 bg-green-600 animate-pulse"></span>
          <span className="block w-7 h-0.5 bg-green-600 animate-pulse"></span>
          <span className="block w-7 h-0.5 bg-green-600 animate-pulse"></span>
        </div>
        <div className="icons">
          <i className="fa fa-user"></i>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
