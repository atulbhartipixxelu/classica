import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (

    <div className={'site-header'}>

      {/* ----- Header ----- */}

      <header class="header_area">
        <div class="main_header_area animated">
          <div class="container">
            <nav id="navigation1" class="navigation">
              <div class="nav-header"> <NavLink to="/" class="nav-brand"><img src="images/logo.svg" alt="#" /></NavLink>
                <div class="nav-toggle"></div>
              </div>
              <div class="nav-menus-wrapper">
                <ul class="nav-menu align-to-right">
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/about-us" class="active">About</NavLink></li>
                  <li><NavLink to="/course">Course</NavLink></li>
                  <li><NavLink to="/blog">Blog</NavLink></li>
                  <li><NavLink to="/contact-us">Contact</NavLink></li>

                </ul>

              </div>
              <div class="login-hed"> <NavLink to="/login" className="lgn-bt">Login</NavLink> <NavLink to="/sign-up" className="lgn-bt signb">Sign up for Free</NavLink> </div>
            </nav>
          </div>
        </div>
      </header>

      {/* ----- Header ----- */}

    </div>

  )
}
export default Header