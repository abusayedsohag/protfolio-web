"use client";
import React, { useState } from 'react';

const Navbar = () => {

    const [active, setActive] = useState("Home");

    const handleLinkClick = (title) => {
        setActive(title);
    };

    const links = (
        <>
            <a onClick={() => {handleLinkClick("Home")}} className={`cursor-pointer transition-colors p-2 ${active === "Home"? 'border-b' : 'hover:bg-pink-600/50'}`}>Home</a>
            <a href='#services'  onClick={() => {
                handleLinkClick("Services")
            }} className={`cursor-pointer transition-colors p-2 ${active === "Services"
                ? 'border-b'
                : 'hover:bg-pink-600/50'
                }`} >Services</a>
            <a href='#myprojects'  onClick={() => {
                handleLinkClick("My Projects")
            }} className={`cursor-pointer transition-colors p-2 ${active === "My Projects"
                ? 'border-b'
                : 'hover:bg-pink-600/50'
                }`} >My Projects</a>
            <a href='#reviews'  onClick={() => {
                handleLinkClick("Reviews")
            }} className={`cursor-pointer transition-colors p-2 ${active === "Reviews"
                ? 'border-b'
                : 'hover:bg-pink-600/50'
                }`} >Reviews</a>
            <a href="#about" onClick={() => {
                handleLinkClick("About")
            }} className={`cursor-pointer transition-colors p-2 ${active === "About"
                ? 'border-b'
                : 'hover:bg-pink-600/50'
                }`} >About</a>
        </>
    )


    // const links = (
    //     <>
    //         {linkTitles.map((title) => (
    //             <li
    //                 key={title}
    //                 onClick={() => {
    //                     handleLinkClick(title)
    //                 }}
    //                 className={`cursor-pointer transition-colors p-2 ${active === title
    //                     ? 'border-b'
    //                     : 'hover:bg-pink-600/50'
    //                     }`}
    //             >
    //                 {title}
    //             </li>
    //         ))}
    //     </>
    // )


    return (
        <div className='w-11/12 py-8 mx-auto'>
            <div className="flex p-2 px-3 bg-pink-600/30 backdrop-blur-2xl rounded-full">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="bg-transparent px-4 text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-transparent" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="text-xl text-white px-4">Sayed</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-white space-x-4">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="md:p-2 px-5 md:px-10 text-white rounded-full bg-[#b14db6]">Contact</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;