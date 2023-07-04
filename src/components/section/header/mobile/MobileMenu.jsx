import { useState } from "react";
import { useModal } from "../../../../utils/ModalContext";
import { FaDiscord, FaTwitter, FaWallet } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import logo from "../../../../assets/images/logo.jpg";
import openseaIcon from "../../../../assets/images/icon/opensea.svg";

import MobileMenuStyleWrapper from "./MobileMenu.style";

import { ConnectButton } from '@rainbow-me/rainbowkit';

const MobileMenu = ({ mobileMenuhandle }) => {
  const { walletModalHandle } = useModal();
  const [isSubmenu, setSubmenu] = useState(false);

  const handleSubmenu = () => {
    setSubmenu(!isSubmenu);
  };
  return (
    <MobileMenuStyleWrapper className="bithu_mobile_menu">
      <div className="bithu_mobile_menu_content">
        <div className="mobile_menu_logo">
          <img className="bithu_logo" src={logo} alt="devzukis logo" />
          <button
            className="mobile_menu_close_btn"
            onClick={() => mobileMenuhandle()}
          >
            {" "}
            <BsXLg />{" "}
          </button>
        </div>
        <div className="mobile_menu_social_links">
          <a href="https://twitter.com/devzukis" target="_blank">
            <FaTwitter />
          </a>
          <a href="https://discord.com/invite/2F9XuN8s" target="_blank">
            <FaDiscord />
          </a>
        </div>
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
    </MobileMenuStyleWrapper>
  );
};

export default MobileMenu;
