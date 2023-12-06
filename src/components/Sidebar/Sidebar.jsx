import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./sidebar.css";

import TwitterLogo from '../../assets/imgs/twitter-logo-4 1.svg'
import userLogo from '../../assets/imgs/user.png'
import { FaEllipsis } from "react-icons/fa6";



const Sidebar = () => {

  return (
    <div className="sidebar">
      <Link to="/">
        <img src={TwitterLogo} alt="twitter-logo" className="twitter__logo" />
      </Link>

      <ul className="sidebar__menu">
        <li className="sidebar__menu-list">
          <NavLink to="/" className="sidebar__menu-link">
            <i class="fa-solid fa-house"></i> <h2>Home</h2>
          </NavLink>
        </li>
        <li className="sidebar__menu-list">
          <NavLink to="/explore" className="sidebar__menu-link">
            {" "}
            <i class="fa-solid fa-hashtag"></i> <h2>Explore</h2>
          </NavLink>
        </li>
        <li className="sidebar__menu-list">
          <NavLink to="/notifications" className="sidebar__menu-link">
            <i class="fa-regular fa-bell"></i> <h2>Notifications</h2>
          </NavLink>
        </li>
        <li className="sidebar__menu-list">
          <NavLink to="/messages" className="sidebar__menu-link">
            {" "}
            <i class="fa-regular fa-envelope"></i> <h2>Messages</h2>
          </NavLink>
        </li>
        <li className="sidebar__menu-list">
          <NavLink to="/bookmarks" className="sidebar__menu-link">
            {" "}
            <i class="fa-regular fa-bookmark"></i> <h2>Bookmarks</h2>
          </NavLink>
        </li>
        <li className="sidebar__menu-list">
          <NavLink to="/lists" className="sidebar__menu-link">
            {" "}
            <i class="fa-solid fa-list"></i> <h2>Lists</h2>
          </NavLink>
        </li>
        <li className="sidebar__menu-list">
          <NavLink to="/profile" className="sidebar__menu-link">
            {" "}
            <i class="fa-regular fa-user"></i> <h2>Profile</h2>
          </NavLink>
        </li>
        <li className="sidebar__menu-list">
          <NavLink to="/more" className="sidebar__menu-link">
            {" "}
            <i class="fa-solid fa-circle-right"></i> <h2>More</h2>
          </NavLink>
        </li>
        <li className="sidebar__menu-list">
          <button className="sidebar__tweet">Tweet</button>
        </li>
      </ul>

      <div className="sidebar__user">
        <img
          src={userLogo}
          alt='user-logo'
          className="user__logo"
        />
        <div className="sidebar__user-info">
          <h2>Bobo</h2>
          <h3>@bobor_mansurov</h3>
        </div>
        <FaEllipsis />
      </div>
    </div>
  );
}

export default Sidebar;   