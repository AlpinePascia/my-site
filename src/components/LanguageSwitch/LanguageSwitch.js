import React, { useEffect } from 'react';
import './LanguageSwitch.scss';
import { useTranslation } from 'react-i18next';


const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  // useEffect(() => {
  //   if (i18n.language === 'en') {
  //     document.title = 'kotiki';
  //   } else if (i18n.language === 'ru') {
  //     document.title = 'котики';
  //   }
  // }, [i18n.language]);

  return (
    <div className="LanguageSwitch">
      <div
        className={`LanguageLink${ i18n.language === 'en' ? ' active' : ''}`}
        onClick={() => i18n.changeLanguage('en')}>
        En
      </div>
      <div className="LanguageLinkDivider">|</div>
      <div
        className={`LanguageLink${ i18n.language === 'ru' ? ' active' : ''}`}
        onClick={() => i18n.changeLanguage('ru')}>
        Ru
      </div>
    </div>
  );
};

export default LanguageSwitch;