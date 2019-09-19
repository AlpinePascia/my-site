import React from 'react';
import './Header.scss';
import ProfileImg from '../ProfileImg';
import LanguageSwitch from '../LanguageSwitch';
import { useTranslation } from 'react-i18next';


const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="Header">
      <ProfileImg />
      <div className="HeaderMainText">
        {t('Alexey Khodov')}
      </div>
      <LanguageSwitch />
    </header>
  );
};

export default Header;
