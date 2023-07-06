import Card from "../Card";
import greenBean from "../../../assets/images/greenBean.webp";
import { useState, useEffect } from "react";
import Modal from "../../../common/modal/Modal";

const About = () => {
  const [tokenID, setTokenID] = useState();
  const [claimStatus, setClaimStatus] = useState(null);
  const [azukiImage, setAzukiImage] = useState("");
  const [tokenIds, setTokenIds] = useState([]);
  const [showAzuki, setShowAzuki] = useState(false);
  const [view, setView] = useState("unclaimed");
  const ipfs =
    "https://ipfs.io/ipfs/QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/";

  const getClaimData = async (tokenId) => {
    await getAzukiClaimStatus(tokenId);
    const src = getAzukiImage(tokenId);
    setAzukiImage(src);
    setShowAzuki(true);
    setTokenID(tokenId);
  };

  const getAzukiImage = (tokenId) => {
    return ipfs + tokenId.toString() + ".png";
  };

  const getAzukiTokenIds = async () => {
    const response = await fetch(
      "https://api.greenbean.devzukis.com/unclaimed"
    );
    const data = await response.json();
    setTokenIds(data.tokenIds);
  };

  const getAzukiClaimStatus = async (tokenId) => {
    const response = await fetch(
      "https://api.greenbean.devzukis.com/check/" + tokenId
    );
    const data = await response.json();
    setClaimStatus(data.canClaim);
  };

  const onTokenIdChange = (event) => {
    event.preventDefault();
    setTokenID(+event.target.value);
  };

  const onModalClose = () => {
    setShowAzuki(false);

    setTimeout(() => {
      setAzukiImage(undefined);
      setClaimStatus(undefined);
    }, 300);
  };

  useEffect(() => {
    getAzukiTokenIds();
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
            Unclaimed
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
            className="grid gap-x-6 gap-y-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 overflow-scroll h-96 w-full scrollbar pt-2 px-3"
          >
            {tokenIds.length > 0 &&
              tokenIds.map((tokenId) => {
                return (
                  <div
                    key={tokenId}
                    className="cursor-pointer"
                    onClick={() => getClaimData(tokenId)}
                  >
                    <Card
                      src={getAzukiImage(tokenId)}
                      title={`Azuki #${tokenId}`}
                      isSmall
                    />
                  </div>
                );
              })}
          </div>
        )}
        {view === "recent-claims" && (
          <div className="flex justify-center items-center bg-white text-red uppercase font-bold h-96 w-max-[624px] w-full rounded-lg">
            &ldquo; Coming Soon &rdquo;
          </div>
        )}
      </div>

      <Modal isOpen={showAzuki} toggleModal={onModalClose}>
        <Card
          src={`${azukiImage}`}
          title={`Azuki #${tokenID}`}
          canClaim={claimStatus}
          tokenId={tokenID}
        />
      </Modal>
    </main>
  );
};

export default About;
