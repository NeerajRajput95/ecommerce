import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FaUser } from 'react-icons/fa';
import './Header.css';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='title'>
        <h1 className=''><Link to="/">CMD Preparation Tool</Link></h1> 
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Products</Link></li>
            <li><Link to="/password">passwordGen</Link></li>
          </ul>
        </nav>  
         <Link to="/login">
          <FaUser/>
          </Link>      
          
      </div>
      <div className='bar'>
        
       
       
        <div className="search-container">
          {/* <input type="text" placeholder="Search..." /> */}
          {/* Add search button if needed */}
          {/* <button type="submit">Search</button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
