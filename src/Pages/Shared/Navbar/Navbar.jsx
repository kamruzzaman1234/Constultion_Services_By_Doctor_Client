import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHandHoldingMedical } from 'react-icons/fa';
import { IoIosLogOut } from 'react-icons/io';
import { AuthContext } from '../../../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Handle logout functionality
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("User logged out successfully");
                setDropdownOpen(false);
            })
            .catch((error) => console.log(error.message));
    };

    // Menu items for the navbar
    const menuItems = <>
        <li className="text-black lg:text-white"><Link to="/">Home</Link></li>
        <li className="text-black lg:text-white"><Link to="/appointment">Appointment</Link></li>
        <li className="text-black lg:text-white"><Link to="/review">Review</Link></li>
        <li className="text-black lg:text-white"><Link to="/contact">Contact</Link></li>
        <li className="text-black lg:text-white"><Link to="/about">About</Link></li>
        <li className="text-black lg:text-white">{user ? <></>: <Link to="/login">Login</Link>}</li>
    </>;

    return (
        <div className="navbar fixed w-full px-20 bg-blue-900 bg-opacity-70 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                        {user && (
                            <div className="p-2 mt-2">
                                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="w-full text-left flex items-center justify-between bg-blue-700 text-white py-2 px-4 rounded-lg">
                                    {/* <span>{user.displayName || 'Profile'}</span> */}
                                    <span className="ml-2">▼</span>
                                </button>
                                {dropdownOpen && (
                                    <ul className="mt-2 bg-white shadow-md rounded-lg">
                                        <li className="p-2">
                                            <button className="w-full text-left" onClick={handleLogOut}>
                                                <IoIosLogOut className="inline mr-2" />
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        )}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl text-white">
                    <FaHandHoldingMedical className="text-white" /> Doctors Portal
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                    {user && (
                        <div className="relative">
                            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center space-x-2 text-white">
                                <img src={user?.photoURL} alt="Profile" className="w-8 h-8 border-2 border-white rounded-full" />
                                {/* <span>{user.displayName || 'Profile'}</span> */}
                                <span>▼</span>
                            </button>
                            {dropdownOpen && (
                                <div className="absolute top-full right-0 mt-2 bg-white shadow-md rounded-lg p-2 w-40">
                                    <button onClick={handleLogOut} className="w-full text-left text-red-500 hover:bg-gray-200 p-2 rounded-lg">
                                        <IoIosLogOut className="inline mr-2" />
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
