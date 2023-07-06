import { useEffect, useState } from 'react';
import greenbean from '../../assets/images/greenBean.webp';
import opensea from '../../assets/images/opensea.svg';
import blur from '../../assets/images/blur.jpeg';

const Card = (props) => {
    const { src, title, canClaim, tokenId } = props;
    const [source, setSource] = useState(src);
    const openseaURI = 'https://opensea.io/assets/ethereum/0xed5af388653567af2f388e6224dc7c4b3241c544';
    const blurURI = 'https://blur.io/asset/0xed5af388653567af2f388e6224dc7c4b3241c544';

    const onImageLoadError = () => {
        setSource(greenbean);
    }

    useEffect(() => {
        setSource(src);
    }, [src])

    return (
        <div className='flex flex-col bg-white gap-4 sm:gap-4 p-2 sm:p-4 rounded-lg'>
            <img className='rounded-lg' src={source} onError={onImageLoadError}/>
            <p className='text-sm text-center sm:text-lg text-black font-bold mb-0'>{title}</p>
            {
                canClaim !== undefined && 
                <div className='flex justify-center gap-2'>
                    <a href={`${openseaURI}/${tokenId}`} target='_blank'>
                        <img className='rounded-full w-6' src={opensea}/>
                    </a>
                    <a href={`${blurURI}/${tokenId}`} target='_blank'>
                        <img className='rounded-full w-6' src={blur}/>
                    </a>
                </div>
            }
            {
                canClaim === true && 
                <p className='text-center text-black uppercase bg-green rounded-sm'>
                    green bean unclaimed
                </p>
            }
            {
                canClaim === false &&
                <p className='text-center text-white uppercase bg-red rounded-sm'>
                    green bean claimed
                </p>
            }
        </div>
    )
}

export default Card;