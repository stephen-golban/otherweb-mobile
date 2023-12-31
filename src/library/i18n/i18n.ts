import { initReactI18next } from 'react-i18next';

import i18n, { LanguageDetectorAsyncModule, Resource } from 'i18next';

import { resources } from './locales';

const DEFAULT_FALLBACK_LNG_I18n = 'en';

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',

  async: true,
  detect: (callback: (lng: string | readonly string[] | undefined) => void) => {
    callback(DEFAULT_FALLBACK_LNG_I18n);
  },
  init: () => {
    console.log('init I18n');
  },
  cacheUserLanguage: () => {},
};

export const initOptionsI18n = (source: Resource) => {
  return {
    fallbackLng: DEFAULT_FALLBACK_LNG_I18n,

    resources: source,

    ns: ['en'],
    defaultNS: 'en',
    debug: false,

    interpolation: {
      escapeValue: false,
    },
    compatibilityJSON: 'v3',
  };
};

/**
 * Config i18n for app
 */
i18n.use(languageDetector).use(initReactI18next).init(initOptionsI18n(resources));

export default i18n;
