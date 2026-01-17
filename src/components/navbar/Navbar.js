import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineClose, MdMenu } from "react-icons/md";
import { links } from "../../data";
import './navbar.styles.css';

// 🔹 Logo depuis public/assets
const Logo = '/assets/logo/logowhite.png';

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  const toggleNav = () => setIsNavShowing(prev => !prev);

  return (
    <nav role="navigation" className="nav">
      <div className="container nav__container">
        <Link to="/" className="logo-link" aria-label="Global BTP Home">
          <img src={Logo} alt="Global BTP" className="logo-img" />
        </Link>

        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
          {links.map(({ name, path }, index) => (
            <li key={name}>
              <NavLink
                to={path}
                end={path === '/'}
                className={({ isActive }) => isActive ? 'active-nav' : ''}
                onClick={toggleNav}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="nav__toggle-btn"
          onClick={toggleNav}
          aria-label={isNavShowing ? "Close menu" : "Open menu"}
        >
          {isNavShowing ? <MdOutlineClose /> : <MdMenu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
