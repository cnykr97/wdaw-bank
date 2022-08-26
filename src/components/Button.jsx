import React from 'react'

const Button = ({ styles, content }) => {
    return (
        <button type='button' className={`${styles} py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none`}>{content}</button>
    )
}

export default Button