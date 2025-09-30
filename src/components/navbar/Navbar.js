import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {MdOutlineClose} from 'react-icons/md'
import {MdMenu} from 'react-icons/md'
import { links } from '../../data'
import './navbar.styles.css'
import Logo from '../../assets/logo/logowhite.png';

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className='logo'>
                <img src={Logo} alt="Global BTP" className="logo" />
            </Link>
            <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                {
                    links.map(({name, path}, index)=>{
                        return (
                            <li key={index}>
                                <NavLink to={path} end={path==='/'} className={({isActive})=>isActive? 'active-nav' : ''}
                                onClick={()=>setIsNavShowing(prev=>!prev)}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="nav__toggle-btn" onClick={()=>setIsNavShowing(prev=>!prev)}>
               { isNavShowing ? <MdOutlineClose/> : <MdMenu size={24} /> }
            </button>
        </div>
    </nav>
  )
}

export default Navbar
