import { useEffect, useState } from 'react';
import greenbean from '../../assets/images/greenBean.webp';

const Card = (props) => {
    const { src, title, canClaim } = props;
    const [source, setSource] = useState(src);

    const onImageLoadError = () => {
        setSource(greenbean);
    }

    useEffect(() => {
        setSource(src);
    }, [src])

    return (
        <div className='flex flex-col bg-white gap-2 sm:gap-4 p-2 sm:p-4 rounded-lg'>
            <img className='rounded-lg' src={source} onError={onImageLoadError}/>
            <p className='text-sm text-center sm:text-lg text-black font-bold mb-0'>{title}</p>
            {
                canClaim === true && 
                <p className='text-center text-white uppercase bg-green rounded-sm'>
                    green bean unclaimed
                </p>
            }
            {
                canClaim === false &&
                <p className='text-center text-black uppercase bg-red rounded-sm'>
                    green bean claimed
                </p>
            }
        </div>
    )
}

export default Card;