import { Fragment } from "react";
import webDevelope from "../../assets/Web-Developer-removebg-preview.png"
// import Header from "../Header/Header";

const Main = ({ toggelChangeBg, setToggelChangeBg }) => {
  
  return (
    <Fragment>
    <section className="flex-col sm:flex sm:flex-row-reverse md:justify-between px-5 lg:px-18 xl:px-20">
      <img
        src={webDevelope}
        alt="developer"
        className=""
      ></img>
      <div className="pt-2 px-2 sm:pt-10 sm:px-8 md:px-18 lg:px-16 xl:pr-28 xl:text-xl font-mono font-bold lg:pt-16">
        <p className= {`sm:font-bold ${toggelChangeBg ? "text-gray-600" : "text-white"}`}>
          Hi, My name is
          <strong className="text-green-600 px-2 sm:text-xl">
            Zahra Hozhabri
          </strong>
          <br />
          <span className={` ${toggelChangeBg ? "text-black" : "text-white"}`}>
          {/* <span className={`h-screen ${toggelChangeBg && "text-white"}`}> */}

            I'm a frontend developer from the Iran,
            <br />I enjoy when I code ... :)
          </span>
          <br />
          <button className="bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
            a little aboute me
          </button>
          
        </p>
      </div>
    </section>
  
    </Fragment>
  );
}
export default Main;