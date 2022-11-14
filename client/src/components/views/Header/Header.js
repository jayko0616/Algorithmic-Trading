import React from 'react';
import { Button } from 'react-bootstrap';
import './Header.css'
import { useNavigate } from 'react-router-dom';


const MenuItem = ({active, children, to}) => (
  <div className='menu-item'>{children}</div>
);

const Header = () => {

  const navigate = useNavigate();

  const portfolio = ()=> {
    navigate('/portfolio')
    }

  return(
    <header className='header'>
      <div>
        
        <div className='menu'>
          <Button className='btn_inputstock'>주식</Button>
          <Button className='btn_inputcoin'>코인</Button>
          <MenuItem>홈</MenuItem>
          <MenuItem onclick = {portfolio}>포트폴리오</MenuItem>
          <MenuItem>내정보</MenuItem>
          <MenuItem>공지</MenuItem>
        </div>
      </div>
    </header>
  )
}

export default Header;