import SectionTitle from "../../../common/sectionTitle";
import aboutImageLeft from "../../../assets/images/nft/about_image_left.png";
import aboutImageRight from "../../../assets/images/nft/about_image_right.png";
import AboutStyleWrapper from "./About.style";
import greenBean from "../../../assets/images/icon/bean.png";

import { useContractRead } from 'wagmi';
import { getCanClaims } from "../../../contract/config";
import { useState } from "react";

const ClaimStatus = (props) => {
  let text = "";

  if(props.hasOwnProperty('claimStatus') && props.claimStatus) {
    text = "Green Bean Available!";
  } else {
    text = "Green Bean Unavailable!";
  }

  return <p class="bean-bar red">
          <img src={greenBean} />
          {text}
         </p>;
}

const ClaimStatusText = (props) => {
  let text = "CHECK IF AN AZUKI HAS CLAIMED THEIR BEAN";

  if(props.hasOwnProperty('claimStatus') && props.claimStatus) {
    text = "THIS AZUKI HAS NOT CLAIMED THEIR BEAN YET";
  } else {
    text = "THIS AZUKI HAS CLAIMED THEIR BEAN";
  }
  
  return <SectionTitle
    className="text-center"
    isCenter={true}
    title={text}
    subtitle="GREEN BEAN CHECKER"
  />;
}

const About = () => {
  const [tokenID, setTokenID] = useState(["1"]);
  const [claimStatus, setClaimStatus] = useState(null);
  const [azukiImage, setAzukiImage] = useState("");
  const { data: claimData } = useContractRead({ ...getCanClaims([tokenID.toString()]) })

  const getClaimData = () => {
    setAzukiImage("https://ipfs.io/ipfs/QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/" + tokenID.toString() + ".png");
    setClaimStatus(claimData[0]);
  }

  return (
    <AboutStyleWrapper className="v2_about_us_section" id="about">
      <div className="v2_about_overlay"></div>
      <div className="container">
        <ClaimStatusText claimStatus={claimStatus} />
        <div className="v2_about_us_content">
          <div className="v2_about_us_text">
            <div class="imgBox" style={{width: "fit-content", margin: "0 auto", position: "relative"}}>
              <img src={azukiImage} style={{ width: "300px", margin: "0px auto 3rem", display: "block" }}/>
              <ClaimStatus claimStatus={claimStatus} />
            </div>
            <p>
              Enter the ID number of an azuki to check its green bean claim status.
            </p>
            <div style={{display: "flex", width: "fit-content", margin: "1rem auto 0"}}>
              <input type="text" id="azukiNumber" placeholder="Enter azuki token number" style={{padding: "0.5rem 2rem"}} onChange={e=>setTokenID([e.target.value+''])}/>
              <button onClick={getClaimData} style={{background: "#be3142", color: "#fff", border: "none", boxShadow: "none", padding: "0.5rem 1rem"}}>Check</button>
            </div>
          </div>
          <div className="v2_about_img v2_about_img_left">
            <span>
              <img src={aboutImageLeft} alt="devzukis nft about" />
            </span>
          </div>
          <div className="v2_about_img v2_about_img_right">
            <span>
              <img src={aboutImageRight} alt="devzukis nft thumb" />
            </span>
          </div>
        </div>
      </div>
    </AboutStyleWrapper>
  );
};

export default About;
