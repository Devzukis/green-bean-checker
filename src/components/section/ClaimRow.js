import { useEffect, useState } from "react";
import greenbean from "../../assets/images/greenBean.webp";

const ClaimRow = (props) => {
    const { claim } = props;
    const { thumbnailUrl, tokenId, claimTime } = claim;
    const [source, setSource] = useState(thumbnailUrl);
    const onImageLoadError = () => {
        setSource(greenbean);
    };

    useEffect(() => {
        setSource(thumbnailUrl);
    }, [thumbnailUrl]);

    return (
        <div className='flex flex-row justify-between items-center bg-white rounded-md relative gap-2 p-2'>
          <img
            className="rounded-md w-12 h-12"
            src={source}
            onError={onImageLoadError}
            alt="azuki img"
          />
          <p className='text-center text-black font-bold mb-0 text-sm'>
            {`Azuki #${tokenId} just claimed it's green bean`}
          </p>
          <p className="pr-[25px]">
            {claimTime}
          </p>
        </div>
      );
};

export default ClaimRow;