import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import "./styles.scss";
import { IconContext } from "react-icons";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { SidebarData } from "../NavBar/SidebarData";
import { SidebarProfileData } from "./SidebarProfileData";
import { useAuth } from "../../hooks/auth";

const NavBarAuth = () => {
  const [sidebar, setSidebar] = useState(false);
  const [sidebarProfile, setSidebarProfile] = useState(false);
  const { signOut } = useAuth();

  const showSidebar = () => setSidebar(!sidebar);
  const showSidebarProfile = () => setSidebarProfile(!sidebarProfile);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <AiIcons.AiFillAppstore onMouseOver={showSidebar} />
          </Link>
          <div>
            <NavLink to="/signin" className="navbar-login">
              <FaUserCircle size={30} onMouseOver={showSidebarProfile} />
            </NavLink>

            {/* <NavLink to="/signup" className="navbar-register"></NavLink> */}
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              {/* <Link to="#" className="menu-bars">
                <AiIcons.AiFillAppstore />
              </Link> */}
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <nav
          className={
            sidebarProfile ? "nav-menu-profile active" : "nav-menu-profile"
          }
        >
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              {/* <Link to="#" className="menu-bars">
                <AiIcons.AiFillAppstore />
              </Link> */}
            </li>
            {SidebarProfileData.map((item, index) => {
              return (
                <>
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                  <div className="sidebar-logout" onClick={signOut}>
                    <AiIcons.AiOutlinePoweroff /> Logout
                  </div>
                </>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBarAuth;
