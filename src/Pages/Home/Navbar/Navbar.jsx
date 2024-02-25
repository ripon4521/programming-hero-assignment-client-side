import { Link, NavLink } from "react-router-dom";
// import logo from '../../../../public/Logo/Standard Collection 12.png'
// import useAuth from "../../../Hooks/useAuth";
import { useEffect, useRef, useState } from "react";



const Navbar = () => {
  // const {user}=useAuth();









  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };














  
  // console.log(user);
  const profile =  <div className="relative" ref={dropdownRef}>
  <button
    className="btn btn-ghost btn-circle avatar"
    onClick={toggleDropdown}
    aria-expanded={isOpen}
  >
    <div className="w-10 rounded-full">
      <img
        alt="Profile"
        src="https://cdn3.vectorstock.com/i/1000x1000/08/37/profile-icon-male-user-person-avatar-symbol-vector-20910837.jpg"
        className="img-fluid"
      />
    </div>
  </button>
  {isOpen && (
    <div className="absolute top-full right-0 mt-1 p-2 shadow bg-white rounded w-52 z-10">
      <a href="#" className="block px-4 py-2 hover:bg-gray-100">Profile <span className="badge bg-blue-500 text-white">New</span></a>
      <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
      <a href="#" className="block px-4 py-2 hover:bg-gray-100">Logout</a>
    </div>
  )}
</div>

    const navLink = <div className="flex flex-col p-2 md:p-0 lg:flex-row justify-center items-center gap-10 text-[#000000]">
    <NavLink to='/' className={({ isActive }) =>
          isActive
            ? "  font-roboto text-[18px] font-semibold px-2 py-1 rounded text-[#ED1B24]"
            : " font-roboto text-[18px]  font-semibold  "
        }><a>Home</a></NavLink>
    <NavLink to='/campains' className={({ isActive }) =>
          isActive
            ? "  font-roboto text-[18px] font-semibold px-2 py-1 rounded text-[#ED1B24]"
            : " font-roboto text-[18px]  font-semibold  "
        }><a>Campains</a></NavLink>
    <NavLink to='/appoinment' className={({ isActive }) =>
          isActive
            ? "  font-roboto text-[18px] font-semibold px-2 py-1 rounded text-[#ED1B24]"
            : "font-roboto  text-[18px] font-semibold   "
        }><a>Services</a></NavLink>
    <NavLink to='/services' className={({ isActive }) =>
          isActive
            ? "  font-roboto text-[18px] font-semibold px-2 py-1 rounded text-[#ED1B24]"
            : " font-roboto text-[18px] font-semibold  "
        }><a>Bussiness</a></NavLink>
    <NavLink to='/aboutus' className={({ isActive }) =>
          isActive
            ? "  font-roboto text-[18px] font-semibold px-2 py-1 rounded text-[#ED1B24]"
            : " font-roboto text-[18px] font-semibold  "
        }><a>Career</a></NavLink>
    <NavLink to='contact' className={({ isActive }) =>
          isActive
            ? "  font-roboto text-[18px] font-semibold px-2 py-1 rounded text-[#ED1B24]"
            : " font-roboto text-[18px] font-semibold   "
        }><a>Blog</a></NavLink>
    <NavLink to='contact' className={({ isActive }) =>
          isActive
            ? "  font-roboto text-[18px] font-semibold px-2 py-1 rounded text-[#ED1B24]"
            : " font-roboto text-[18px] font-semibold   "
        }><a>Get App</a></NavLink>
   
      

    </div>

    return (
        <div  className="navbar z-50 bg-base-200   fixed">
  <div className="navbar-start   lg:ml-24">
    <div className="dropdown">

      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu   menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    {navLink}
      </ul>
    </div>
    
    <a className=" flex justify-center items-center font-semibold font-jost text-xl md:text-2xl drop-shadow-2xl text-[#000000]"> <img className="w-6" src="https://play-lh.googleusercontent.com/5AZVZe91KivSlONIRM0NgfUeLheaA_QU7D6Ll5MfTKX9lmTr2iFbqbchAYSmcNyNXG4" alt="" />My<span className="text-[#ED1B24]">Wallet</span></a>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLink}
    </ul>
  </div>
  <div className="navbar-end flex lg:mr-10 gap-5">
 
    
    <Link to='/login' className="font-roboto px-5 py-3 rounded-2xl bg-white shadow-lg  font-semibold ">SignIn</Link>
    <Link to='/signUp' className=" font-roboto text-white hidden md:block font-semibold shadow-lg bg-[#ED1B24] px-5 py-3 rounded-2xl">Regester</Link>

  </div>

  

</div>
    )
    };

export default Navbar;