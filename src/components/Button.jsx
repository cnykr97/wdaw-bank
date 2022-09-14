import React, { useState } from 'react'

const Button = ({ styles, content }) => {
    const [isHover, setIsHover] = useState(false)
    return (
        <button type='button' className={`${styles} py-4 px-6 font-poppins font-medium text-[18px] ${isHover ? "text-white" : "text-primary"} bg-blue-gradient rounded-[10px] outline-none`}
            onMouseOver={() => { setIsHover((prev) => (!prev)) }}
            onMouseOut={() => { setIsHover((prev) => (!prev)) }}
        >{content}</button>
    )
}

export default Button