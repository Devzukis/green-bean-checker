import Card from '../Card';
import greenBean from "../../../assets/images/greenBean.webp";
import { useState, useEffect } from "react";
import { Button, Modal } from 'antd';

const About = () => {
  const [tokenID, setTokenID] = useState();
  const [claimStatus, setClaimStatus] = useState(null);
  const [azukiImage, setAzukiImage] = useState("");
  const [tokenIds, setTokenIds] = useState([]);
  const [showAzuki, setShowAzuki] = useState(false);
  const ipfs = "https://ipfs.io/ipfs/QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/";

  const getClaimData = async (tokenId) => {
    await getAzukiClaimStatus(tokenId);
    const src = getAzukiImage(tokenId);
    setAzukiImage(src);
    setShowAzuki(true);
    setTokenID(tokenId);
  }

  const getAzukiImage = (tokenId) => {
    return ipfs + tokenId.toString() + ".png";
  }

  const getAzukiTokenIds = async () => {
    const response = await fetch('https://api.greenbean.devzukis.com/unclaimed');
    const data = await response.json();
    setTokenIds(data.tokenIds);
  }

  const getAzukiClaimStatus = async (tokenId) => {
    const response = await fetch('https://api.greenbean.devzukis.com/check/' + tokenId);
    const data = await response.json();
    setClaimStatus(data.canClaim);
  }

  const onTokenIdChange = (event) => {
    event.preventDefault();
    setTokenID(+event.target.value);
  }

  const onModalClose = () => {
    setShowAzuki(false);
    setAzukiImage(undefined);
    setClaimStatus(undefined);
  }

  useEffect(() => {
    getAzukiTokenIds();
  }, [])

  return (
      <div className="mx-auto max-w-2xl px-4">
        <div className='flex flex-col items-center gap-4 -mt-5'>
          <img src={greenBean} className='w-[200px]'/>
          <p className='text-4xl text-black text-center font-bold -mt-10'>GREEN BEAN CHECKER</p>
        </div>

        <div className='flex flex-col gap-4 items-center pt-20 text-center'>
          <p>Enter an Azuki ID below to check if they have claimed their green bean airdrop.</p>
          <div className='flex justify-end w-full'>
              <input className='rounded-l-lg w-full' type="text" id="azukiNumber" placeholder="Search Azuki ID" style={{padding: "0.5rem 2rem"}} onChange={onTokenIdChange}/>
              <button onClick={() => getClaimData(tokenID)} className='rounded-r-lg' style={{background: "#be3142", color: "#fff", border: "none", boxShadow: "none", padding: "0.5rem 1rem"}}>Check</button>
          </div>
          <div className='flex justify-center w-full'>
            <Button className='text-white bg-red rounded-l-lg rounded-r-none h-10 p-2 w-full' type='danger'>Unclaimed</Button>
            <Button className='bg-white rounded-r-lg rounded-l-none h-10 p-2 w-full' disabled>Recent Claims</Button>
          </div>
          <div id='azukis' className='grid gap-x-6 gap-y-8 grid-cols-3 sm:grid-cols-4 pt-10 overflow-scroll w-full h-96 scrollbar pr-4'>
            {
              tokenIds.length > 0 && tokenIds.map(
                tokenId => {
                  return (
                    <div key={tokenId} className='cursor-pointer' onClick={() => getClaimData(tokenId)}>
                      <Card src={getAzukiImage(tokenId)} title={`Azuki #${tokenId}`}/>
                    </div>
                  )
                }
              )
            }
          </div>
        </div>

        <Modal open={showAzuki} closable={false} okCancel={false} footer={false} onCancel={onModalClose}>
          <Card src={`${azukiImage}`} title={`Azuki #${tokenID}`} canClaim={claimStatus} tokenId={tokenID}/>
        </Modal>
      </div>
  );
};

export default About;
