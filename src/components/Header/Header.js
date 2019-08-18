import React from 'react';
import './Header.scss';
import ProfileImg from '../ProfileImg';
import LanguageSwitch from '../LanguageSwitch';


const Header = () => {
  return (
    <header className="Header">
      <ProfileImg />
      <div className="HeaderMainText">
        Alexey Khodov
      </div>
      <LanguageSwitch />
    </header>
  );
};

export default Header;
