import { useEffect, useState } from "react";
import { useModal } from "../../../../utils/ModalContext";
import { FaWallet } from "react-icons/fa";
import Navigation from "./Navigation";
import Button from "../../../../common/button";
import HeaderStyleWrapper from "./Header.style";

import logo from "../../../../assets/images/mint-logo.png";
import menuIcon from "../../../../assets/images/icon/mint-menu_icon.svg";

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

  return (
    <>
      <HeaderStyleWrapper id="navbar">
        <div className="header_wrapper">
          <div className="header_left">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="header_right">
            <div className="bithu_menu_btns">
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
              <Button
                variant="outline"
                className="menu_btn"
                onClick={() => handleMobileMenu()}
              >
                <img src={menuIcon} alt="menu bar icon" />
              </Button>
            </div>
          </div>
        </div>
      </HeaderStyleWrapper>
      {isMobileMenu && <Navigation mobileMenuHandle={handleMobileMenu} />}
    </>
  );
};

export default Header;
