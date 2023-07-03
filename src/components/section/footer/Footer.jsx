import backToTopIcon from "../../../assets/images/icon/back_to_top.svg";
import footerShapesLeft from "../../../assets/images/icon/footer_shapes_left.png";
import footerShapesRight from "../../../assets/images/icon/footer_shapes_right.png";
import FooterStyleWrapper from "./Footer.style";
const Footer = () => {
  return (
    <FooterStyleWrapper>

      <div className="bithu_v1_main_footer">

        <div className="footer_bottom">
          <div className="footer_bottom_content">
            <span className="footer_shapes_left">
              <img src={footerShapesLeft} alt="devzukis nft footer" />
            </span>
            <span className="footer_shapes_right">
              <img src={footerShapesRight} alt="devzukis nft footer" />
            </span>
            <div className="container">
              <div className="footer_menu">
                <div className="bottom_footer_left">
                  <div className="copiright_text">
                    <p>Copyright © 2023 Devzukis</p>
                  </div>
                </div>
                <a href="# " className="bact_to_top_btn">
                  <img src={backToTopIcon} alt="devzukis nft back to top" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterStyleWrapper>
  );
};

export default Footer;
