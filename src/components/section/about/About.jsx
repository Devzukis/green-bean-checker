import Card from "../Card";
import greenBean from "../../../assets/images/greenBean.webp";
import { useState, useEffect } from "react";
import Modal from "../../../common/modal/Modal";
import ClaimRow from "../ClaimRow";

const About = () => {
  const [tokenID, setTokenID] = useState();
  const [azuki, setAzuki] = useState();
  const [azukis, setAzukis] = useState([]);
  const [showAzuki, setShowAzuki] = useState(false);
  const [recentClaims, setRecentClaims] = useState([]);
  const [view, setView] = useState("unclaimed");
  const ipfs = "https://ipfs.io/ipfs/QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg";

  const getClaimData = async (tokenId) => {
    const response = await fetch(
      "https://api.greenbean.devzukis.com/v1/check/" + tokenId
    );
    const data = await response.json();
    setAzuki(data);
    setTokenID(tokenId);
    setShowAzuki(true);
  };

  const getAzukis = async () => {
    const response = await fetch(
      "https://api.greenbean.devzukis.com/v1/can-claim"
    );
    const data = await response.json();
    setAzukis(data);
  };

  const getRecentClaims = async () => {
    const response = await fetch(
      "https://api.greenbean.devzukis.com/v1/recent-claims"
    );
    const data = await response.json();
    setRecentClaims(data);
  }

  const onTokenIdChange = (event) => {
    event.preventDefault();
    setTokenID(+event.target.value);
  };

  const onModalClose = () => {
    setShowAzuki(false);

    setTimeout(() => {
      setAzuki(undefined);
    }, 300);
  };

  useEffect(() => {
    getAzukis();
    getRecentClaims();
  }, []);

  return (
    <main className="mx-auto px-4 max-w-2xl w-full mb-auto">
      <div className="flex flex-col items-center gap-4 -mt-5">
        <img src={greenBean} alt="green bean" className="w-[400px] -mt-24" />
        <p className="text-2xl sm:text-4xl text-black text-center font-bold -mt-20">
          GREEN BEAN CHECKER
        </p>
      </div>

      <div className="flex flex-col gap-5 items-center pt-6 sm:pt-8 text-center">
        <h1 className="text-white font-bold text-sm mb-0">
          Enter an Azuki ID below to check if they have claimed their green bean
          airdrop.
        </h1>
        <div className="flex justify-end w-full">
          <input
            className="rounded-l-lg w-full text-xl sm:text-2xl p-x font-helvetica px-4 py-2 sm:px-6 sm:py-3 font-bold text-black placeholder:text-placeholder outline-none"
            type="text"
            id="azukiNumber"
            placeholder="#1337"
            onChange={onTokenIdChange}
          />
          <button
            onClick={() => getClaimData(tokenID)}
            disabled={!tokenID}
            className="rounded-r-lg bg-red text-white text-xl sm:text-2xl px-4 py-2 sm:px-6 sm:py-3 font-bold outline-none hover:opacity-80 disabled:opacity-80 font-helvetica"
          >
            Check
          </button>
        </div>
        <div className="flex justify-center w-full">
          <button
            className={`${
              view === "unclaimed"
                ? "bg-red text-white"
                : "bg-white text-black/50"
            } h-auto rounded-l-lg rounded-r-none p-[10px] sm:p-3 w-full text-sm font-bold font-helvetica hover:opacity-80`}
            onClick={() => setView("unclaimed")}
          >
            Unclaimed { azukis.length > 0 && `(${azukis.length})`}
          </button>
          <button
            className={`${
              view === "recent-claims"
                ? "bg-red text-white"
                : "bg-white text-black/50"
            } h-auto rounded-r-lg rounded-l-none p-[10px] sm:p-3 w-full text-sm font-bold font-helvetica hover:opacity-80`}
            onClick={() => setView("recent-claims")}
          >
            Recent Claims
          </button>
        </div>
        {view === "unclaimed" && (
          <div
            id="azukis"
            className="grid gap-x-6 gap-y-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 overflow-scroll h-96 w-full scrollbar pt-2 pr-2"
          >
            {azukis.length > 0 &&
              azukis.map((azuki) => {
                return (
                  <div
                    key={azuki.tokenId}
                    className="cursor-pointer"
                    onClick={() => getClaimData(azuki.tokenId)}
                  >
                    <Card
                      src={azuki.thumbnailUrl}
                      title={`Azuki #${azuki.tokenId}`}
                      isSmall
                    />
                  </div>
                );
              })}
          </div>
        )}
        {view === "recent-claims" && (
          <div id='recent' className="grid gap-y-2 grid-cols-1 overflow-scroll h-96 w-full scrollbar pt-2 pr-2">
            {recentClaims.length > 0 &&
              recentClaims.map((claim) => {
                return (
                  <div
                    key={claim.tokenId}
                    className='cursor-pointer w-full'
                    onClick={() => {getClaimData(claim.tokenId)}}
                  >
                    <ClaimRow claim={claim}/>
                  </div>
                )
              })

            }
          </div>
        )}
      </div>

      {azuki && (
        <Modal isOpen={showAzuki} toggleModal={onModalClose}>
        <Card
          src={`${ipfs}/${tokenID}.png`}
          title={`Azuki #${tokenID}`}
          canClaim={azuki.canClaim}
          tokenId={tokenID}
        />
      </Modal>
      )}
    </main>
  );
};

export default About;
