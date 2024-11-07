// import { Link } from "react-router-dom";
// import { IoBagHandleSharp } from "react-icons/io5";
// import { useContext } from "react";
// import { AuthContext } from "../../../../Provider/AuthProvider";
// import { IoIosLogOut } from "react-icons/io";
// import { FaUserDoctor } from "react-icons/fa6";
// import { FaHandHoldingMedical } from "react-icons/fa";


// const Navbar = ()=>{
//   const {user, logOut} = useContext(AuthContext)
//   const handleLogOut = ()=>{
//     logOut()
//     .then(()=> console.log("user logout successfully"))
//     .then(error=> console.log(error))
//   }
//     return(
//         <div>
//  <div className="navbar mx-6 md:mx-10 lg:mx-auto px-20 z-10 bg-blue-900 bg-opacity-70 fixed w-full ">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h8m-8 6h16" />
//         </svg>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content bg-base-100  rounded-box z-[1] mt-3 w-52 p-2 shadow">
//         {user ? <div className="text-white">
//           <li className=""><Link to="/">Home</Link></li>
//         <li className=""><Link to="/doctor">Doctor</Link></li>
//         <li><Link to="/consultationList">Consultation list</Link></li>
//         <li className=""><Link to="/addService">Add Service</Link></li>
//         </div>: <div className="text-white">
//         <li className=""><Link to="/">Home</Link></li>
//         <li className=""><Link to="/doctor">Doctor</Link></li>
//         <li><Link to="/consultationList">Consultation List</Link></li>
        
//         </div>}
        
//       </ul>
//     </div>
//     <Link className="flex"> <FaHandHoldingMedical className="text-[64px] text-white"></FaHandHoldingMedical>
//      <span className="text-[19px] font-bold">Services</span> </Link>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//       {user ? <div className="text-white flex">
//         <li className=" text-[17px] mx-2 rounded-[10px] font-bold"><Link to="/">Home</Link></li>
//         <li className=" text-[17px] mx-2 rounded-[10px] font-bold"><Link to="/doctor">Doctor</Link></li>
//         <li><Link className=" text-[17px] text-white mx-2 rounded-[10px] font-bold" to="/consultationList">Consultation List</Link></li>
//         <li className="text-[17px] mx-2 rounded-[10px] font-bold"><Link to="/addService">Add Service</Link></li>
//       </div> : <div className="text-white flex">
//       <li className=" text-[17px] mx-2 rounded-[10px] font-bold"><Link to="/">Home</Link></li>
//       <li className=" text-[17px] mx-2 rounded-[10px] font-bold"><Link to="/doctor">Doctor</Link></li>
//       <li className=" text-[17px] mx-2 rounded-[10px] font-bold"><Link to="/addService">Add Service</Link></li>
//       </div>}

    
//     </ul>
//   </div>
//   <div className="navbar-start lg:navbar-end">
//       {user ? <div className="relative">
//          <ul className="menu menu-horizontal px-1">
//       <li><a></a></li>
//       <li className="">
//         <details className="border-2 border-blue-500 rounded-lg ">
//           <summary className="">{user?.email}</summary>
          
          
//           <ul className="bg-base-100 rounded-t-none space-y-2">
         
//             <li className=""> 
//               <button className="bg-blue-700  text-white font-bold rounded-lg" 
//               onClick={handleLogOut}> <IoIosLogOut></IoIosLogOut>  Log Out</button> </li>
           
            
//           </ul>
//         </details>
        
//       </li>
//     </ul>
    
      
//     </div> : <div className="">
//        <li className="bg-blue-800  text-[17px] text-white
//        rounded-[10px] font-bold flex justify-center gap-2 items-center px-8 py-2">
//         <IoBagHandleSharp /> 
//         <Link to="/login" className="">
//         Log-In</Link></li>
//       </div>}  
    
  
//   </div>
  
 
// </div>
//         </div>
//     )
// }
// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaHandHoldingMedical } from "react-icons/fa";

const Navbar = () => {
    const menuItems = <>
        <li className="text-white"><Link to="/">Home</Link></li>
        <li className="text-white"><Link to="/appointment">Appointment</Link></li>
        <li className="text-white"><Link to="/review">Review</Link></li>
        <li className="text-white"><Link to="/contact">Contact</Link></li>
        <li className="text-white"><Link to="/about">About</Link></li>
        <li className="text-white"><Link to="/login">Login</Link></li>
    </>
    return (
        <div className="navbar fixed w-full px-20 bg-blue-900 bg-opacity-70 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl text-white"> < FaHandHoldingMedical /> Doctors Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;