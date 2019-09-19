import React from 'react';
import preval from 'preval.macro';
import './Footer.scss';
import { useTranslation } from 'react-i18next';

const updated = preval`module.exports = new Date();`;

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className="Footer">
      <div className="FooterSection Links">
        <div className="FooterSectionLabel"> {t('Links')}: </div>
        <a href="https://github.com/alpinepascia">Github</a>
        {/* <div className="Divider"> / </div>
        <a href="https://hh.ru">Head Hunter</a> */}
      </div>
      <div className="FooterSection LastUpdated">
        <div className="FooterSectionLabel">{t('Last Updated')}: </div>
        {new Date(updated).toLocaleDateString(i18n.language)}
      </div>
    </footer>
  );
};

export default Footer;
