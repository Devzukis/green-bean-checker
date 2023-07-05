import SectionTitle from "../../../common/sectionTitle";
import AboutStyleWrapper from "./About.style";
import greenBean from "../../../assets/images/greenBean.webp";

import { useContractRead } from 'wagmi';
import { getCanClaims } from "../../../contract/config";
import { useState } from "react";

const ClaimStatus = (props) => {
  let text = "";
  let element = "";
  
  if(props.claimStatus !== null) {
    if(props.claimStatus === true) {
      element = <p class="bean-bar green">
                  <img src={greenBean} />
                  Green Bean Available!
                </p>;
    } else {
      element = <p class="bean-bar red">
                  <img src={greenBean} />
                  Green Bean Unavailable!
                </p>;
    }
  }

  return element;
}

const ClaimStatusText = (props) => {
  let text = "Green Bean Checker";
  if(props.claimStatus !== null) {
    if(props.claimStatus) {
      text = "THIS AZUKI HAS NOT CLAIMED THEIR BEAN YET";
    } else {
      text = "THIS AZUKI HAS CLAIMED THEIR BEAN";
    }
  }

  return <SectionTitle
    className="text-center"
    isCenter={true}
    title={text}
    subtitle="Green Bean Checker"
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
      <div className="container mx-auto">
        <div className='flex flex-col items-center gap-4 -mt-5'>
          <img src={greenBean} className='w-72'/>
          <p className='text-4xl text-black font-bold -mt-10'>GREEN BEAN CHECKER</p>
        </div>
        <div className='flex flex-col gap-4 items-center w-full pt-20 text-center'>
          <p>Enter an Azuki ID below to check if they have claimed their green bean airdrop.</p>
          <div className='flex w-fit'>
              <input className='rounded-l-lg' type="text" id="azukiNumber" placeholder="Search Azuki ID" style={{padding: "0.5rem 2rem"}} onChange={e=>setTokenID([e.target.value+''])}/>
              <button onClick={getClaimData} className='rounded-r-lg' style={{background: "#be3142", color: "#fff", border: "none", boxShadow: "none", padding: "0.5rem 1rem"}}>Check</button>
          </div>
          <div className='flex justify-center w-fit'>
            <button className='text-sm text-white bg-red rounded-l-lg p-2 w-fit'>Unclaimed</button>
            <button className='text-sm bg-white rounded-r-lg p-2 w-fit' disabled>Recent Claims (Soon)</button>
          </div>
        </div>
        {/* <ClaimStatusText claimStatus={claimStatus} /> */}
        <div className="v2_about_us_content">
          <div className="v2_about_us_text">
            <div class="imgBox" style={{width: "fit-content", margin: "0 auto", position: "relative"}}>
              <img src={azukiImage} style={{ width: "300px", margin: "0px auto 3rem", display: "block" }}/>
              <ClaimStatus claimStatus={claimStatus} />
            </div>
            
          </div>
        </div>
      </div>
    </AboutStyleWrapper>
  );
};

export default About;
