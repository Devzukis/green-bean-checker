import { useState } from 'react';
import greenbean from '../../assets/images/greenBean.webp';

const Card = (props) => {
    const { src, title } = props;
    const [source, setSource] = useState(src);

    const onImageLoadError = () => {
        setSource(greenbean);
    }

    return (
        <div className='flex flex-col bg-white gap-2 sm:gap-4 p-2.5 sm:p-4 rounded-lg'>
            <img className='rounded-lg' src={source} onError={onImageLoadError}/>
            <p className='text-sm sm:text-lg text-black font-bold mb-0'>{title}</p>
        </div>
    )
}

export default Card;