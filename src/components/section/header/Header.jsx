import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import logo from "../../../assets/images/logo.svg";

const Header = () => (
  <header className="flex items-center justify-between p-6 md:px-12 md:py-8 z-10">
    <a
      href="https://www.devzukis.com"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2"
    >
      <img
        src={logo}
        alt="devzukis nft logo"
        className="w-8 h-5 sm:w-9 sm:h-6"
      />
      <span className="text-lg sm:text-2xl font-bold text-black">DEVZUKIS</span>
    </a>

    <div id="links" className="flex gap-6 sm:gap-8">
      {[
        {
          href: "http://twitter.com/devzukis",
          icon: <FaTwitter />,
        },
        {
          href: "https://discord.com/invite/2F9XuN8s",
          icon: <FaDiscord />,
        },
        {
          href: "https://github.com/Devzukis",
          icon: <FaGithub />,
        },
      ].map(({ href, icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          className="text-xl text-black hover:text-red"
          rel="noreferrer"
        >
          {icon}
        </a>
      ))}
    </div>
  </header>
);

export default Header;
