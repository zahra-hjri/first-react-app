
import { Fragment } from "react";
import LinkedInIcon from "../LinkedInIcon/LinkedInIcon";
import GithubIcon from "../GithubIcon/GithubIcon";
import EmailIcon from "../EmailIcon/EmailIcon";
import TelegramIcon from "../TelegramIcon/TelegramIcon";

const Footer = ({ toggelChangeBg, setToggelChangeBg }) => {
  return (
    <Fragment>
      <footer className="w-full h-32 md:h-48 flex justify-center items-center space-x-2 md:space-x-5 pt-10">
      <a
        href="/"
        className="transform hover:scale-125 hover:transition duration-500 ease-in-out"
      >
        <LinkedInIcon />
      </a>
      <a
        href="/"
        className="transform hover:scale-125 hover:transition duration-500 ease-in-out"
      >
        <GithubIcon />
      </a>
      <a
        href="/"
        className="transform hover:scale-125 hover:transition duration-500 ease-in-out"
      >
        <EmailIcon />
      </a>
      <a
        href="/"
        className="transform hover:scale-125 hover:transition duration-500 ease-in-out"
      >
        <TelegramIcon />
      </a>
    </footer>
    </Fragment>
  );
}
export default Footer;