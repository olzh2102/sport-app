import React from 'react';
import { Link } from 'react-router-dom';

import style from './header.css'
import FontAwesome from 'react-fontawesome';

const Header = () => {

  const navBars = () => (
    <div className={style.bars}>
      <FontAwesome name="bars" 
        style={{
          color: '#70A288',
          padding: '8px',
          courser: 'pointer'
        }}
      />
    </div>
  );

  const logo = () => (
    <Link to="/" className={style.logo}>
      <img src="/images/nba_logo.png" alt="nba logo"/>
    </Link>    
  );


  return (
    <header className={style.header}>
      <div className={style.headerOption}>
        {navBars()}
        {logo()}
      </div>
    </header>
  );
};

export default Header;