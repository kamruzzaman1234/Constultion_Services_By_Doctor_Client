import { Link } from "react-router-dom";
import { IoBagHandleSharp } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { IoIosLogOut } from "react-icons/io";

const Navbar = ()=>{
  const {user, logOut} = useContext(AuthContext)
  const handleLogOut = ()=>{
    logOut()
    .then(()=> console.log("user logout successfully"))
    .then(error=> console.log(error))
  }
    return(
        <div>
 <div className="navbar max-w-7xl mx-6 lg:mx-auto bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {user ? <>
          <li className=""><Link to="/">Home</Link></li>
        <li className=""><Link to="/doctor">Doctor</Link></li>
        <li><Link to="/consultationList"></Link>Consultation List</li>
        <li className="bg-blue-800 text-[17px] text-white mx-2 rounded-[10px] font-bold"><Link to="/addService">Add Service</Link></li>
        </>: <>
        <li className=""><Link to="/">Home</Link></li>
        <li className=""><Link to="/doctor">Doctor</Link></li>
        <li><Link to="/consultationList"></Link>Consultation List</li>
        <li className="bg-blue-800 text-[17px] text-white mx-2 rounded-[10px] font-bold"><Link to="/addService">Add Service</Link></li>
        </>}
        
      </ul>
    </div>
    <Link className="btn btn-ghost text-[19px] hidden
     lg:block font-bold text-blue-700">Doctor <sub>Services</sub> </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {user ? <>
        <li className="bg-blue-800 text-[17px] text-white mx-2 rounded-[10px] font-bold"><Link to="/">Home</Link></li>
        <li className="bg-blue-800 text-[17px] text-white mx-2 rounded-[10px] font-bold"><Link to="/doctor">Doctor</Link></li>
        <li><Link className="bg-blue-800 text-[17px] text-white mx-2 rounded-[10px] font-bold" to="/consultationList">Consultation List</Link></li>
        <li className="bg-blue-800 text-[17px] text-white mx-2 rounded-[10px] font-bold"><Link to="/addService">Add Service</Link></li>
      </> : <>
      <li className="bg-blue-800 text-[17px] text-white mx-2 rounded-[10px] font-bold"><Link to="/">Home</Link></li>
      <li className="bg-blue-800 text-[17px] text-white mx-2 rounded-[10px] font-bold"><Link to="/doctor">Doctor</Link></li>
      <li className="bg-blue-800 text-[17px] text-white mx-2 rounded-[10px] font-bold"><Link to="/addService">Add Service</Link></li>
      </>}

    
    </ul>
  </div>
  <div className="navbar-end">
      {user ? <div className="relative">
         <ul className="menu menu-horizontal px-1">
      <li><a></a></li>
      <li className="">
        <details className="border-2 border-blue-500 rounded-lg ">
          <summary className="">{user?.email}</summary>
          
          <ul className="bg-base-100 rounded-t-none space-y-2">
          <li><Link to="/" className="bg-[#FF5A3A]
          text-white font-bold">Bookings</Link></li>
            <li className=""> 
              <button className="bg-blue-700 text-white font-bold rounded-lg" 
              onClick={handleLogOut}> <IoIosLogOut></IoIosLogOut>  Log Out</button> </li>
           
            
          </ul>
        </details>
      </li>
    </ul>
    
      
    </div> : <div className="">
       <li className="bg-blue-800  text-[17px] text-white
       rounded-[10px] font-bold flex justify-center gap-2 items-center px-8 py-2">
        <IoBagHandleSharp /> 
        <Link to="/login" className="">
        Log-In</Link></li>
      </div>}  
    
  
  </div>
  
 
</div>
        </div>
    )
}
export default Navbar;