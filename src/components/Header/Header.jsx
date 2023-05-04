import { menu } from "../../menuData";
import { Fragment } from "react";
import { useState } from "react";
import { FaMoon , FaLaptopCode } from "react-icons/fa";
import {FiSun} from "react-icons/fi"
import "./Header.css"


const Header = ({ toggelChangeBg, setToggelChangeBg }) => {

  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  const toggelBgMode = () => {
    setToggelChangeBg(!toggelChangeBg);
  };
  return (
    <Fragment>
      <div className="flex items-center justify-between px-5 md:px-8 lg:px-13 xl:px-20 py-7">
      <a href="/About.jsx">
        <FaLaptopCode className="text-green-600 h-9 w-9 md:h-12 md:w-12 cursor-pointer" />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden ">
          <div className="icon-dark-mode" onClick={toggelBgMode}>
            {toggelChangeBg ? (<FiSun />) : ( <FaMoon/>)}
          </div>
      
          <div
            className= "HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((yes) => !yes)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-7 animate-pulse bg-green-600"></span>
            <span className="block h-0.5 w-7 animate-pulse bg-green-600"></span>
            <span className="block h-0.5 w-7 animate-pulse bg-green-600"></span>
          </div>

          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
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
       
            
            <div className="MENU-LINK-MOBILE-OPEN flex flex-col items-center overflow-y-hidden min-h-[200px] font-bold font-mono">
              {menu.map((list) => (
              <a href={list.link} className={` ${list.name === 'Contact' ?
              "active bg-green-500 px-6 py-3 rounded-sm hover:text-white" 
              : "py-3 hover:text-green-600"}}`}>{list.name}</a>
            ))}
            </div>
      
          </div>
        </section>

        <div className="DESKTOP-MENU  hidden space-x-10 lg:flex lg:justify-center menu-list font-bold font-mono">
          
        <div className="icon-dark-mode" onClick={toggelBgMode}>
            {toggelChangeBg ? (<FiSun />) : ( <FaMoon/>)}
          </div>

          {menu.map((list) => (
            <a href={list.link} className={` ${list.name === 'Contact' ?
             "bg-green-500 px-6 py-2 -mt-1 rounded-sm block hover:text-white" 
             : "hover:text-green-600"}}`}>{list.name}</a>
          ))}
        </div>
      </nav>
    </div>
    </Fragment>
  );
}
export default Header;
