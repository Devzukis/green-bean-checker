import { useEffect, useState } from "react";
import greenbean from "../../assets/images/greenBean.webp";
import opensea from "../../assets/images/opensea.svg";
import blur from "../../assets/images/blur.jpeg";

const Card = (props) => {
  const { src, title, canClaim, tokenId, isSmall } = props;
  const [source, setSource] = useState(src);
  const openseaURI =
    "https://opensea.io/assets/ethereum/0xed5af388653567af2f388e6224dc7c4b3241c544";
  const blurURI =
    "https://blur.io/asset/0xed5af388653567af2f388e6224dc7c4b3241c544";

  const onImageLoadError = () => {
    setSource(greenbean);
  };

  useEffect(() => {
    setSource(src);
  }, [src]);

  return (
    <div
      className={`flex flex-col bg-white rounded-md relative ${
        isSmall ? "gap-2 p-2" : "gap-4 p-4"
      }`}
    >
      <img
        className="rounded-md min-w-full min-h-full"
        src={source}
        onError={onImageLoadError}
        alt="azuki img"
      />
      <p
        className={`text-center text-black font-bold mb-0 ${
          isSmall ? "text-sm " : "text-lg"
        }`}
      >
        {title}
      </p>
      {canClaim !== undefined && (
        <div className="flex justify-center gap-2 absolute top-6 right-6">
          <a href={`${openseaURI}/${tokenId}`} target="_blank" rel="noreferrer">
            <img
              className="rounded-full w-6 hover:scale-[1.06] transition"
              src={opensea}
              alt="opensea icon"
            />
          </a>
          <a href={`${blurURI}/${tokenId}`} target="_blank" rel="noreferrer">
            <img
              className="rounded-full w-6 hover:scale-[1.06] transition"
              src={blur}
              alt="blur icon"
            />
          </a>
        </div>
      )}
      {canClaim === true && (
        <p className="text-center text-base font-bold text-black uppercase bg-green rounded-lg px-2 py-2">
          green bean unclaimed
        </p>
      )}
      {canClaim === false && (
        <p className="text-center text-base font-bold text-white uppercase bg-red rounded-lg px-2 py-2">
          green bean claimed
        </p>
      )}
    </div>
  );
};

export default Card;
