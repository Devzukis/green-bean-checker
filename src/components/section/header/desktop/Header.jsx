import { useModal } from "../../../../utils/ModalContext";
import { useEffect, useState } from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { MdNotes } from "react-icons/md";
import Button from "../../../../common/button";
import NavWrapper from "./Header.style";
import MobileMenu from "../mobile/MobileMenu";
import logo from "../../../../assets/images/logo.jpg";

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

  const onDiscordClick = () => {
    window.open('https://discord.com/invite/2F9XuN8s', '_blank');
  }

  const onTwitterClick = () => {
    window.open('https://twitter.com/devzukis', '_blank');
  }

  return (
    <>
      <NavWrapper className="bithu_header" id="navbar">
        <div className="container">
          {/* Main Menu Start */}
          <div className="bithu_menu_sect">
            <div className="bithu_menu_left_sect">
              <div className="logo flex">
                <a href="/">
                  <img src={logo} alt="devzukis nft logo" style={{width: "60px", borderRadius: "50%"}} />
                </a>
              </div>
            </div>
            <div className="bithu_menu_right_sect bithu_v1_menu_right_sect">
              <div className="bithu_menu_btns">
                <button className="menu_btn px-[6px]" onClick={() => handleMobileMenu()}>
                  <MdNotes />
                </button>
                <Button sm variant="outline" className="join_btn" onClick={onDiscordClick}>
                  <FaDiscord /> Join
                </Button>
                <Button sm variant="outline" className="join_btn" onClick={onTwitterClick}>
                  <FaTwitter /> Follow
                </Button>
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
