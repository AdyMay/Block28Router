import React from 'react';
import "./Header";
import { Link } from "react-router-dom";

function Header() {
  return (
  <header className='header'>
      <nav>
        <Link to="/" className='link'>
        Home</Link>
        <Link to="/blue" className='link'>
        Blue</Link>
        <Link to="/red" className='link'>
        Red</Link>
      </nav>
    </header>
  );
};

export default Header;