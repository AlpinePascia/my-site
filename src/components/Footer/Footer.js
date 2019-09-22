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
        <a className="FooterLink Github" href="https://github.com/alpinepascia">Github</a>
        <a className="FooterLink Telegram" href="https://github.com/alpinepascia">Telegram</a>
      </div>
      <div className="FooterSection LastUpdated">
        <div className="FooterSectionLabel">{t('Last Updated')}: </div>
        {new Date(updated).toLocaleDateString(i18n.language)}
      </div>
    </footer>
  );
};

export default Footer;
