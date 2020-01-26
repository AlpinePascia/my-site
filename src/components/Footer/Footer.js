import React from 'react';
import preval from 'preval.macro';
import {
  root,
  content,
  section,
  links,
  link,
  githubLink,
  telegramLink,
  lastUpdated,
  updateLabel,
} from './Footer.module.scss';
import { useTranslation } from 'react-i18next';
import join from 'classnames';

const updated = preval`module.exports = new Date();`;

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className={root}>
      <div className={content}>
        <div className={join(section, links)}>
          <a className={join(link, githubLink)} href="https://github.com/alpinepascia">Github</a>
          <a className={join(link, telegramLink)} href="https://t.me/a_xodov">Telegram</a>
        </div>
        <div className={join(section, lastUpdated)}>
          <div className={updateLabel}>{t('Last Updated')}: </div>
          {new Date(updated).toLocaleDateString(i18n.language)}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
