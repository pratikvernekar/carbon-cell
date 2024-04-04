// Sidebar.js
import React, { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import './SideBar.css';
import { FaBars } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { MdOutlineHistory } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'close'}`}>
      <div className='carbonCellText'>Carbon Cell</div>
      <FaBars onClick={toggleSidebar} className='hamburger' />
      <div className='navLinksContainer'>
        <div className='iconNavLinkContainer'>
          <NavLink onClick={toggleSidebar} to="/" className="nav-link" activeClassName="active">
            <IoMdHome className={`homeIcon ${location.pathname === '/' ? 'active' : ''}`} />
            Home
          </NavLink>
        </div>
        <div className='iconNavLinkContainer'>
          <NavLink onClick={toggleSidebar} to="/organization" className="nav-link" activeClassName="active">
            <FaRegBuilding className={`homeIcon ${location.pathname === '/organization' ? 'active' : ''}`} />
            Organization
          </NavLink>
        </div>
        <div className='iconNavLinkContainer'>
          <NavLink onClick={toggleSidebar} to="/history" className="nav-link" activeClassName="active">
            <MdOutlineHistory  className={`homeIcon ${location.pathname === '/history' ? 'active' : ''}`} />
            History
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
