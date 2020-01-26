import React from 'react';
import { root, link, active, divider } from './LanguageSwitch.module.scss';
import { useTranslation } from 'react-i18next';
import join from 'classnames';


const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  return (
    <div className={root}>
      <div
        className={join(link, { [active]: i18n.language === 'ru' })}
        onClick={() => i18n.changeLanguage('ru')}>
        Ru
      </div>
      <div className={divider}>|</div>
      <div
        className={join(link, { [active]: i18n.language === 'en' })}
        onClick={() => i18n.changeLanguage('en')}>
        En
      </div>
    </div>
  );
};

export default LanguageSwitch;
