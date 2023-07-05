
const Card = (props) => {
    const { src, title } = props;

    return (
        <div className='flex flex-col bg-white gap-2 sm:gap-4 p-2 sm:p-4 rounded-lg'>
            <img className='rounded-lg' src={src}/>
            <p className='text-sm sm:text-lg text-black font-bold'>{title}</p>
        </div>
    )
}

export default Card;