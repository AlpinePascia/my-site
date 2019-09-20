import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'Alexey Khodov': 'Alexey Khodov',
      'Links': 'Links',
      'Last Updated': 'Last Updated',
    },
  },
  ru: {
    translation: {
      'Alexey Khodov': 'Алексей Ходов',
      'Links': 'Ссылки',
      'Last Updated': 'Обновлено',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
