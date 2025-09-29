import React from 'react';

const Navbar = () => {


    const links = (
        <>
            <li>Home</li>
            <li>Services</li>
            <li>My Projects</li>
            <li>Reviews</li>
            <li>Contact</li>
        </>
    )


    return (
        <div className='w-11/12 py-8 mx-auto'>
            <div className="navbar shadow-sm shadow-amber-100 backdrop-blur-2xl rounded-full">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Sayed</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-4">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="p-2 px-10 text-white rounded-full bg-[#b14db6]">Contact</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;