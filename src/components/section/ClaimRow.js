import { useEffect, useState } from "react";
import greenbean from "../../assets/images/greenBean.webp";
import ReactTimeAgo from 'react-time-ago';

const ClaimRow = (props) => {
    const { claim } = props;
    const { thumbnailUrl, tokenId, claimedAt } = claim;
    const [source, setSource] = useState(thumbnailUrl);
    const onImageLoadError = () => {
        setSource(greenbean);
    };

    useEffect(() => {
        setSource(thumbnailUrl);
    }, [thumbnailUrl]);

    return (
        <div className='flex flex-row justify-between items-center bg-white rounded-md relative p-[10px]'>
          <img
            className="rounded-md w-12 h-12"
            src={source}
            onError={onImageLoadError}
            alt="azuki img"
          />
          <p className='text-center text-black text-xs sm:text-sm font-bold'>
            {`Azuki #${tokenId} just claimed it's green bean`}
          </p>
          <p className="text-black/50 sm:pr-[15px]">
            <ReactTimeAgo date={new Date(claimedAt)} locale="en-US" timeStyle='twitter'/>
          </p>
        </div>
      );
};

export default ClaimRow;