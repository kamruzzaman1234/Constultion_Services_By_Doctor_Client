import { Link } from "react-router-dom";
import { IoBagHandleSharp } from "react-icons/io5";

const Navbar = ()=>{
    return(
        <div>
            <div className="navbar max-w-7xl mx-auto bg-base-100">
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
        <li className=""><Link to="/">Home</Link></li>
        <li className=""><Link to="/service">Service</Link></li>
        <li className=""><Link to="/login"> <IoBagHandleSharp /> Log-In</Link></li>
      </ul>
    </div>
    <Link className="btn btn-ghost text-[19px] font-bold text-blue-700">Doctor <sub>Services</sub> </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li className="bg-blue-800 text-[17px] text-white mx-2 rounded-[10px] font-bold"><Link to="/">Home</Link></li>
    <li className="bg-blue-800 text-[17px] text-white mx-2 rounded-[10px] font-bold"><Link to="/service">Service</Link></li>
    <li className="bg-blue-800 text-[17px] text-white mx-2 rounded-[10px] font-bold"><Link to="/login"><IoBagHandleSharp />  Log-In</Link></li>
    
    </ul>
  </div>
 
</div>
        </div>
    )
}
export default Navbar;