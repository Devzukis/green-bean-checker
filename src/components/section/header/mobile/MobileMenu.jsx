import { FaDiscord, FaTwitter } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import logo from "../../../../assets/images/logo.jpg";

import MobileMenuStyleWrapper from "./MobileMenu.style";

const MobileMenu = ({ mobileMenuhandle }) => {

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
          <a href="https://twitter.com/devzukis" rel="noreferrer" target="_blank">
            <FaTwitter />
          </a>
          <a href="https://discord.com/invite/2F9XuN8s" rel="noreferrer" target="_blank">
            <FaDiscord />
          </a>
        </div>
      </div>
    </MobileMenuStyleWrapper>
  );
};

export default MobileMenu;
