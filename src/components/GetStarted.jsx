import styles from '../style'
import { arrowUp } from '../assets'
import { useState } from 'react'

const GetStarted = () => {
    const [isHover, setIsHover] = useState(false);

    return (
        <button className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full flex-col ${isHover ? "color2" : "bg-transparent"} p-[2px] cursor-pointer get-started`}
            onMouseOver={() => (setIsHover(true))}
            onMouseOut={() => (setIsHover(false))}
        >
            <div className={`${styles.flexStart} flex-row`}>
                <p className="font-poppins font-medium text-[18px] leading-[23px]">
                    <span className={`${isHover ? "text-white" : "text-gradient"}`}>Get</span>
                </p>
                <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain ml-3" />
            </div>
            <p className="font-poppins font-medium text-[18px] leading-[23px]">
                <span className={`${isHover ? "text-white" : "text-gradient"}`}>Started</span>
            </p>
        </button>
    )


}

export default GetStarted