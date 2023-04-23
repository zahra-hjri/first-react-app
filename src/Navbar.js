function Navbar() {
  return (
    <div className="Navbar">
      <nav className="container flex justify-between px-8 py-8 mx-auto">
        <div>
          <h3 className="text-2xl font-bold text-white cursor-pointer hover:text-gray-200">
            Planti
          </h3>
        </div>
        <ul className="hidden space-x-8 font-medium lg:flex text-white lg:justify-center">
          <li className="cursor-pointer hover:text-gray-300 font-bold">Shop</li>
          <li className="cursor-pointer hover:text-gray-300 font-bold">
            About us
          </li>
          <li className="cursor-pointer hover:text-gray-300 font-bold">
            Products
          </li>
          <li className="cursor-pointer hover:text-gray-300 font-bold">News</li>
          <li className="cursor-pointer hover:text-gray-300 font-bold">
            Contact
          </li>
        </ul>

        <div className="space-y-2 lg:hidden">
          <span className="block w-7 h-0.5 bg-white animate-pulse"></span>
          <span className="block w-7 h-0.5 bg-white animate-pulse"></span>
          <span className="block w-7 h-0.5 bg-white animate-pulse"></span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
