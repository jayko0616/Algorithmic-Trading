import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'


const MenuItem = ({active, children, to}) => (
  <Link to={to} className='menu-item'>{children}</Link>
);

const Header = () => {


  return(
    <header className='header'>
      <div>
        
        <div className='menu'>
          <MenuItem to={'/main'}>홈</MenuItem>
          <MenuItem to={'/portfolio'}>포트폴리오</MenuItem>
          <MenuItem to= {'/myinformation'}>내정보</MenuItem>
          <MenuItem to={'/notice'}>공지</MenuItem>
        </div>
      </div>
    </header>
  )
}

export default Header;