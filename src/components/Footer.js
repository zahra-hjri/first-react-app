import LinkedIn from "./Linkedin";
import Github from "./Github";
import Email from "./Email";
import Telegram from "./Telegram";

export default function Footer() {
  return (
    <section className="w-full h-32 md:h-48 bg-teal-950 flex justify-center items-center md:space-x-5 mt-20">
      <LinkedIn />
      <Github />
      <Email />
      <Telegram />
    </section>
  );
}
