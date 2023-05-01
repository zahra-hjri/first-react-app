import { Fragment } from "react";
import webDevelope from "../../assets/Web-Developer-removebg-preview.png"
import "./Main.css"

// import Header from "../Header/Header";

const Main = ({ toggelChangeBg, setToggelChangeBg }) => {
  
  return (
    <Fragment>
    <section className={`flex-col md:flex md:flex-row-reverse md:justify-between px-5 lg:px-18 xl:px-20 ${toggelChangeBg ? "dark" : "light"}`}>
    
    {/* "flex-col md:flex md:flex-row-reverse md:justify-between px-5 lg:px-18 xl:px-20 main"> */}
      <img
        src={webDevelope}
        alt="developer"
        className="sm:w-11/12 sm:h-3/4 md:w-7/12 md:h-2/5 xl:w-9/12 xl:h-2/4 pt-6"
      ></img>
      <div className="px-2 sm:px-8 py-7 md:pt-14 md:px-16 lg:pt-24 xl:text-xl font-mono font-bold">
        <p className= {`sm:font-bold  ${toggelChangeBg ? "text-white" : "text-black"}`}>
          Hi, My name is
          <span className="text-green-600 px-2 sm:text-xl">
            Zahra Hozhabri
          </span>
          <br />
          <p className={` ${toggelChangeBg ? "text-white" : "text-black"}`}>
          {/* <span className={`h-screen ${toggelChangeBg && "text-white"}`}> */}

            I'm a frontend developer intern ,
            <span>I enjoy when I code ... :)</span>
          </p>
          
          <button className="bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-6 my-8 border border-green-500 hover:border-transparent rounded">
            a little aboute me
          </button>
          
        </p>
      </div>
    </section>
  
    </Fragment>
  );
}
export default Main;