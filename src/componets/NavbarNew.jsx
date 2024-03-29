import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from'../assets/images/logo/logo.png'

const NavbarNew = () => {

  const [menuToggle ,setMenuToggle] = useState(false);
  const [socialToggle ,setSocialToggle] = useState(false);
  const [headerFixed ,setHeaderFixed] = useState(false);

  window.addEventListener("scroll",() =>{
    if(window.scrollY > 200){
      setHeaderFixed(true)
    }else {
      setHeaderFixed(false)
    }
  })
  
  return (
    <header className={`header-section style-4 ${ headerFixed ? 'header-fixed fadeInUp' : '' }`}>
      {/* header top section */}
      <div className={`header-top d-md-none ${socialToggle ? 'open' : ''}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/registration" className='lab-btn me-3'> <span>Registration</span> </Link>
            <Link to="/login" >Log in</Link>
          </div>
        </div>
      </div>
      {/* header bottom section */}
      <div className="header-bottom ">
        <div className="container ">
          <div className="header-wrapper">
            {/* logo area */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to={"/home"}>
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            {/* menu area */}
            <div className="menu-area">
                <div className="menu">
                  <ul className={`lab-ul ${menuToggle ? 'active' : ''}`}>
                    <li> <Link to="/home"> Home</Link> </li>
                    <li> <Link to="/shop"> Shop</Link> </li>
                    <li> <Link to="/blog"> Blog</Link> </li>
                    <li> <Link to="/about"> About</Link> </li>
                    <li> <Link to="/contact"> Contact</Link> </li>
                  </ul>
                </div>
                {/* sign in and login */}
                <Link to="/" className="lab-btn me-3 d-none d-md-block">Registar</Link>
                <Link to="/" className="d-none d-md-block">Log In</Link>
                {/* menu toggler */}
                <div onClick={()=> setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                {/* social toggler */}
                <div className='ellepsis-bar d-md-none' onClick={()=>setSocialToggle(!socialToggle)}>
                  <i className="icofont-info"></i>
                </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarNew;