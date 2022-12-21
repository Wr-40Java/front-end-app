import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import HeaderLoggedOut from "./HeaderLoggedOut"
import HeaderLoggedIn from "./HeaderLoggedIn"
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import BurgerMenuData from './BurgerMenuData.js';
import {AuthContext} from '../index'

function Header(props) {
  const [sidebar, setSidebar] = useState(false)
  const {loggedIn} = useContext(AuthContext)

  const showSidebar = () => { setSidebar(!sidebar); } 

  return (
    <header className="header-bar bg-primary mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <div className="navbar-sided menu-bars">
              <div className="social-icons">
                <span>
                  <FaIcons.FaBars onClick={showSidebar}/>
                </span>
              </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items">
            {BurgerMenuData.map((item, index) => {
              return (
                <li key={index} className={item.cName} onClick={showSidebar}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>  
        <h4 className="my-0 mr-md-auto font-weight-normal">
            <Link to="/" className="text-white">
              Car Diary
            </Link>
        </h4>
        { loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
      </div>
    </header>
  )
}

export default Header


