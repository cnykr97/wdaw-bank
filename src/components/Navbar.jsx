import React from 'react'
import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <div className="flex flex-col text-[25px] cursor-pointer">
                <p className='text-white text-center'>{`< / >`}</p>
                <p className="text-white">Wdaw<span style={{ color: '#5CE1E6' }}>Bank</span></p>
            </div>
            {/* navbar for bigger devices */}
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`nav-link font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
                    >
                        <a href={`#${nav.id}`}> {nav.title}</a>
                    </li>
                ))}
            </ul>
            {/* /navbar for bigger devices */}

            {/* navbar for smaller devices */}
            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img src={toggle ? close : menu} alt="menu toggler" className='w-[28px] h-[28px] object-contain cursor-pointer'
                    onClick={() => setToggle((prev) => !prev)}
                />
            </div>
            <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                <ul className="list-none flex flex-col justify-end items-center flex-1">
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-10'} text-white`}
                        >
                            <a href={`#${nav.id}`}> {nav.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            {/* navbar for smaller devices */}

        </nav>
    )
}

export default Navbar