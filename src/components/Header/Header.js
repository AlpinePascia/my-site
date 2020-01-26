import React from 'react';
import { root, mainText } from  './Header.module.scss';
import ProfileImg from '../ProfileImg';
import LanguageSwitch from '../LanguageSwitch';
import { useTranslation } from 'react-i18next';


const Header = () => {
  const { t } = useTranslation();
  return (
    <header className={root}>
      <ProfileImg />
      <div className={mainText}>
        {t('Alexey Khodov')}
      </div>
      <LanguageSwitch />
    </header>
  );
};

export default Header;
