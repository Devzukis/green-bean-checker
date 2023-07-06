import { useEffect, useState } from "react";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import NavWrapper from "./Header.style";
import MobileMenu from "../mobile/MobileMenu";
import logo from "../../../../assets/images/logo.png";

const Header = () => {
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };
  useEffect(() => {
    const header = document.getElementById("navbar");
    const handleScroll = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });

    return () => {
      window.removeEventListener("sticky", handleScroll);
    };
  }, []);

  return (
    <>
      <NavWrapper id="navbar">
        <div className="container">
          {/* Main Menu Start */}
          <div className="bithu_menu_sect">
            <div className="bithu_menu_left_sect">
              <div className="logo flex">
                <a href="https://www.devzukis.com" target='_blank'>
                  <img src={logo} alt="devzukis nft logo" style={{width: "100px"}} />
                </a>
              </div>
            </div>
            <div className="bithu_menu_right_sect bithu_v1_menu_right_sect pr-4">
              <div className="flex fjustify-end">
                <div id='links' className='flex gap-4'>
                  <a href='http://twitter.com/devzukis' target='_blank' className='text-lg text-black'>
                    <FaTwitter />
                  </a>
                  <a href='https://discord.com/invite/2F9XuN8s' target='_blank' className='text-lg text-black'>
                    <FaDiscord />
                  </a>
                  <a href='https://github.com/Devzukis' target='_blank' className='text-lg text-black'>
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Main Menu END --> */}
        </div>
      </NavWrapper>
      {isMobileMenu && <MobileMenu mobileMenuhandle={handleMobileMenu} />}
    </>
  );
};

export default Header;
