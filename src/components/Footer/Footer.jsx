import LinkedInIcon from "../LinkedInIcon/LinkedInIcon";
import GithubIcon from "../GithubIcon/GithubIcon";
import EmailIcon from "../EmailIcon/EmailIcon";
import TelegramIcon from "../TelegramIcon/TelegramIcon";

const Footer = () => {
  return (
    <section className="w-full h-32 md:h-48 bg-teal-950 flex justify-center items-center md:space-x-5 mt-20">
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
    </section>
  );
}
export default Footer;