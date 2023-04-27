
import { Fragment } from "react";
import { useState } from "react"; // import state
import Logo from "../../assets/logoDev.png";
import classes from "./HeaderStyle.module.css"


const Header = (props) => {

  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <Fragment>
      <div className="flex items-center justify-between px-5 md:px-8 lg:px-13 xl:px-20 mt-5 lg:mt-10">
      <a href="/About.jsx">
        <img src={Logo} className="h-12 w-12 " alt="logo" />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((yes) => !yes)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-7 animate-pulse bg-green-600"></span>
            <span className="block h-0.5 w-7 animate-pulse bg-green-600"></span>
            <span className="block h-0.5 w-7 animate-pulse bg-green-600"></span>
          </div>

          <div className={isNavOpen ? classes['showMenuNav'] : classes['hideMenuNav']}>
            {" "}
            <div
              className="CROSS-ICON absolute top-0 right-0 px-6 py-7"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-green-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              
            </div>
       
            
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center overflow-y-hidden text-black min-h-[200px] font-bold font-mono">
              
              <li className="my-3 hover:text-green-600">
                <a href="/about">Work</a>
              </li>
              <li className="my-3 hover:text-green-600">
                <a href="/portfolio">About</a>
              </li>
              <li className="my-3 hover:text-green-600">
                <a href="/contact">Services</a>
              </li>
              <li className="my-3 ">
                <a href="/contact" className="active px-6 py-3 rounded-sm hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
      
          </div>
        </section>

        <ul className="DESKTOP-MENU  hidden space-x-10 lg:flex text-black lg:justify-center menu-list font-bold font-mono">
          <li>
            <a href="/about" className="hover:text-green-600">
              Work
            </a>
          </li>

          <li>
            <a href="/portfolio" className="hover:text-green-600">
              About
            </a>
          </li>
          <li>
            <a href="/service" className="hover:text-green-600">
              Services
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:text-white active px-6 py-2 -mt-1 rounded-sm block"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
    </Fragment>
  );
}
export default Header;
