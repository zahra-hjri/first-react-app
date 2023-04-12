function Navbar() {
  function menuBar(e) {
    console.log(e.target.classList);
  }
  return (
    <div className="Navbar">
      <nav className="container flex justify-between px-4 py-8 mx-auto">
        <div>
          <h3 className="text-2xl font-medium text-slate-200">LOGO</h3>
        </div>
        <ul className="hidden space-x-8 lg:flex text-slate-100">
          <li>Home</li>
          <li>About</li>
          <li>Gallery</li>
          <li>Regular</li>
        </ul>
        <div
          className="flex lg:hidden text-slate-200 cursor-pointer mt-1"
          onClick={(e) => menuBar(e)}
        >
          <div className="space-y-2">
            <span className="block w-8 h-0.5 bg-white animate-pulse"></span>
            <span className="block w-8 h-0.5 bg-white animate-pulse"></span>
            <span className="block w-8 h-0.5 bg-white animate-pulse"></span>
          </div>
          {/* <ul className="space-x-8 flex-column text-slate-100">
            <li>Home</li>
            <li>About</li>
            <li>Gallery</li>
            <li>Regular</li>
          </ul> */}
        </div>
      </nav>

      {/* <ul className="flex flex-row container mx-auto text-slate-100">
        <li className="mx-2">Home</li>
        <li className="mx-2">About</li>
        <li className="mx-2">Gallery</li>
      </ul> */}
    </div>
  );
}

export default Navbar;
