import { Link, NavLink } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import useAuth from "../../../Hooks/useAuth";
import { useEffect, useRef, useState } from "react";
import logo from "../../../assets/Logo/logo.png";
import useUser from "../../../Hooks/useUser";

const Navbar = () => {
  const { user, logout } = useAuth();
  // console.log(user?.email);
  const [users, refetch] = useUser();
  // console.log(users[0].data.email);

  // const filter = users.find(user=> console.log(user.data.email) )

    // const filter = users.filter((item) => item?.email === user?.email);
    // console.log(filter);
  

  const handleLogout = () => {
    logout();
  };

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

  // console.log(user?.email);
  const profile = (
    <div className="relative" ref={dropdownRef}>
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
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            {user?.email}{" "}
            <span className="badge bg-blue-500 text-white">New</span>
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Account Blance: <span className="text-red-500">40Tk</span>{" "}
          </a>
          <a
            onClick={handleLogout}
            href="#"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Logout
          </a>
        </div>
      )}
    </div>
  );

  const navLink = (
    <div className="flex flex-col p-2 md:p-0 lg:flex-row justify-center items-center gap-10 text-[#000000]">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "  font-roboto text-[18px] font-semibold px-2 py-1 rounded text-[#ED1B24]"
            : " font-roboto text-[18px]  font-semibold  "
        }
      >
        <a>Home</a>
      </NavLink>
      <NavLink
        to="/campains"
        className={({ isActive }) =>
          isActive
            ? "  font-roboto text-[18px] font-semibold px-2 py-1 rounded text-[#ED1B24]"
            : " font-roboto text-[18px]  font-semibold  "
        }
      >
        <a>Campains</a>
      </NavLink>
      <NavLink
        to="/appoinment"
        className={({ isActive }) =>
          isActive
            ? "  font-roboto text-[18px] font-semibold px-2 py-1 rounded text-[#ED1B24]"
            : "font-roboto  text-[18px] font-semibold   "
        }
      >
        <a>Services</a>
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive
            ? "  font-roboto text-[18px] font-semibold px-2 py-1 rounded text-[#ED1B24]"
            : " font-roboto text-[18px] font-semibold  "
        }
      >
        <a>Bussiness</a>
      </NavLink>
      <NavLink
        to="/aboutus"
        className={({ isActive }) =>
          isActive
            ? "  font-roboto text-[18px] font-semibold px-2 py-1 rounded text-[#ED1B24]"
            : " font-roboto text-[18px] font-semibold  "
        }
      >
        <a>Career</a>
      </NavLink>
      <NavLink
        to="joinUs"
        className={({ isActive }) =>
          isActive
            ? "  font-roboto text-[18px] font-semibold px-2 py-1 rounded text-[#ED1B24]"
            : " font-roboto text-[18px] font-semibold   "
        }
      >
        <a>Join Us</a>
      </NavLink>
      <NavLink
        to="contact"
        className={({ isActive }) =>
          isActive
            ? "  font-roboto text-[18px] font-semibold px-2 py-1 rounded text-[#ED1B24]"
            : " font-roboto text-[18px] font-semibold   "
        }
      >
        <a>Get App</a>
      </NavLink>
    </div>
  );

  return (
    <div className="navbar bg-base-200   ">
      <div className="navbar-start   lg:ml-24">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu   menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>

        <a className=" flex justify-center items-center font-semibold font-jost text-xl md:text-2xl drop-shadow-2xl text-[#000000]">
          {" "}
          <img className="w-6" src={logo} alt="" />
          My<span className="text-[#ED1B24]">Wallet</span>
        </a>
      </div>

      <div className="navbar-center lg:-ml-96 hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>

      <div>
        {user ? (
          <div className="navbar-end flex md:ml-96 ml-32  gap-5">{profile}</div>
        ) : (
          <div className="navbar-end  flex lg:mr-10 gap-5 ml-32 md:ml-96">
           
           
        
      
      <SignedIn className ="bg-red-500 px-2 py-1 text-white rounded-md font-semibold">
        <UserButton />
      </SignedIn>
          
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
