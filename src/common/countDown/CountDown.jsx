import { zeroPad } from 'react-countdown';
import { CountdownWrapper, CountdownElementWrapper } from "./CountDown.style"

const CountdownElement = ({ days, hours, minutes, seconds, ...props }) => {
    return (
        <CountdownElementWrapper className="countdown_wrapper" {...props}>
            <div className="count_number">
                {zeroPad(days)} <span className="label">D</span>
            </div>
            <div className="count_number">
                {zeroPad(hours)} <span className="label">H</span>
            </div>
            <div className="count_number">
                {zeroPad(minutes)} <span className="label">M</span>
            </div>
            <div className="count_number">
                {zeroPad(seconds)} <span className="label">S</span>
            </div>
        </CountdownElementWrapper>
    )
}


const Countdown = ({ ...props }) => {
    return (
        <CountdownWrapper {...props} renderer={CountdownElement} />
    )
}

export default Countdown;

