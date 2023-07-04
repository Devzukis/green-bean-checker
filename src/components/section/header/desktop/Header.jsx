import { useModal } from "../../../../utils/ModalContext";
import { useEffect, useState } from "react";
import { FaDiscord, FaTwitter, FaWallet } from "react-icons/fa";
import { MdNotes } from "react-icons/md";
import Button from "../../../../common/button";
import NavWrapper from "./Header.style";
import MobileMenu from "../mobile/MobileMenu";
import logo from "../../../../assets/images/logo.jpg";

import { ConnectButton } from '@rainbow-me/rainbowkit';

const Header = () => {
  const { walletModalHandle } = useModal();
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
              <div className="logo">
                <a href="/">
                  <img src={logo} alt="devzukis nft logo" style={{width: "60px", borderRadius: "50%"}} />
                </a>
              </div>
            </div>
            <div className="bithu_menu_right_sect bithu_v1_menu_right_sect">
              <div className="bithu_menu_btns">
                <button className="menu_btn" onClick={() => handleMobileMenu()}>
                  <MdNotes />
                </button>
                <Button sm variant="outline" className="join_btn" onClick={onDiscordClick}>
                  <FaDiscord /> Join
                </Button>
                <Button sm variant="outline" className="join_btn" onClick={onTwitterClick}>
                  <FaTwitter /> Follow
                </Button>

                <ConnectButton
                 label="Connect"
                 chainStatus="none"//icon,name,none
                 showBalance={false}//true,false
                 accountStatus="address"//avatar,address,
                 //className="connect_btn"
                />

                {/* <Button
                  sm
                  variant="hovered"
                  className="connect_btn"
                  onClick={() => walletModalHandle()}
                >
                  <FaWallet /> Connect
                </Button> */}
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
