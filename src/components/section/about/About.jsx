import Card from '../Card';
import greenBean from "../../../assets/images/greenBean.webp";
import { useContractRead } from 'wagmi';
import { getCanClaims } from "../../../contract/config";
import { useState, useEffect } from "react";

const About = () => {
  const [tokenID, setTokenID] = useState(["1"]);
  const [claimStatus, setClaimStatus] = useState(null);
  const [azukiImage, setAzukiImage] = useState("");
  const [tokenIds, setTokenIds] = useState([]);
  const { data: claimData } = useContractRead({ ...getCanClaims([tokenID.toString()]) })
  const ipfs = "https://ipfs.io/ipfs/QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/";

  const getClaimData = () => {
    setAzukiImage(ipfs + tokenID.toString() + ".png");
    setClaimStatus(claimData[0]);
  }

  const getAzukiImage = (tokenId) => {
    return ipfs + tokenId.toString() + ".png";
  }

  const getAzukiTokenIds = async () => {
    const response = await fetch('https://api.greenbean.devzukis.com/unclaimed');
    const data = await response.json();
    console.log('data: ', data);
    setTokenIds(data.tokenIds);
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
              <input className='rounded-l-lg w-full' type="text" id="azukiNumber" placeholder="Search Azuki ID" style={{padding: "0.5rem 2rem"}} onChange={e=>setTokenID([e.target.value+''])}/>
              <button onClick={getClaimData} className='rounded-r-lg' style={{background: "#be3142", color: "#fff", border: "none", boxShadow: "none", padding: "0.5rem 1rem"}}>Check</button>
          </div>
          <div className='flex justify-center w-full'>
            <button className='cursor-pointer text-sm text-white bg-red rounded-l-lg p-2 w-full'>Unclaimed</button>
            <button className='cursor-pointer text-sm bg-white rounded-r-lg p-2 w-full' disabled>Recent Claims</button>
          </div>
          <div id='azukis' className='grid gap-x-6 gap-y-8 grid-cols-3 sm:grid-cols-4 pt-10 overflow-scroll w-full h-96 scrollbar pr-4'>
            {
              tokenIds.length > 0 && tokenIds.map(
                tokenId => {
                  return (
                    <Card key={tokenId} src={getAzukiImage(tokenId)} title={`Azuki #${tokenId}`}/>
                  )
                }
              )
            }
          </div>
        </div>
      </div>
  );
};

export default About;
