import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut,onAuthStateChanged } from "firebase/auth";
import {   useNavigate } from "react-router-dom";

const Navbar = () => {
  const auth = getAuth();
  const navigate = useNavigate()

  const hendelLogin = () => {
    signOut(auth).then(() => {
      navigate('/registration')
    }).catch((error) => {
      console.log(error)
    });
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
    } else {
      navigate("/login")
    }
  });

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="  p-4 bg-slate-700 -z-50 ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between flex-wrap">
          <div className="text-black font-extrabold text-3xl uppercase">Ai-<span className="text-red-600">bd</span> </div>

          {/* Hamburger icon for smaller screens */}
          <div className="block lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          {/* Regular navigation links for larger screens */}
          <div
            className={`w-full lg:flex lg:items-center lg:w-auto ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex items-center space-x-4">
              <Link className="text-black font-bold" to='/home'>Home</Link>
              <Link className="text-black font-bold" to='/about'>About</Link>
              <Link className="text-black font-bold" to='/services'>Services</Link>
              <Link className="text-black font-bold" to='/blog'>Blog</Link>
              <Link className="text-black font-bold" to='/contact'>Contact</Link>
              
              <Link to="/registration">
                <button
                  to="/login"
                  onClick={hendelLogin}
                  className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded sm:mr-2 md:mr-4 lg:mr-6"
                >
                  LogOut
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
