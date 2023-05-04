

import { Fragment } from "react";
import introductionImg from "../../assets/web-development.png"
import "./Introduction.css"

// import Header from "../Header/Header";

const Introduction = ({ toggelChangeBg, setToggelChangeBg }) => {
  
  return (
    <Fragment>
    <section className={`flex-col md:flex md:flex-row-reverse md:justify-between px-5 lg:px-18 xl:px-20 ${toggelChangeBg ? "dark" : "light"}`}>

      
      <div className="px-2 sm:px-8 py-7 md:pt-14 md:px-16 lg:pt-24 xl:text-xl font-mono font-bold">
        <p className= {`sm:font-bold  ${toggelChangeBg ? "text-white" : "text-black"}`}>
        LET’S
        INTRODUCE ABOUT
        <p>
        MYSELF
        Whose given</p>
          <p>
        Is give may shall likeness made 
        </p>
          
        </p>
      
      </div>
      <img
        src={introductionImg}
        alt="developer"
        className="sm:w-11/12 sm:h-3/4 md:w-7/12 md:h-2/5 pt-6"
      ></img>
    </section>
  
    </Fragment>
  );
}
export default Introduction;