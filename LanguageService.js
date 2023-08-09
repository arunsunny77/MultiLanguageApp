// import { IntlProvider } from 'react-intl';
import * as RNLocalize from 'react-native-localize';
import enTranslation from './translations/en.json'; // English translation file
import frTranslation from './translations/fr.json'; // French translation file

const translations = {
  en: enTranslation,
  fr: frTranslation,
  // Add more languages as needed
};

export const getLanguage = () => {
  const locales = RNLocalize.getLocales();
  if (locales && locales.length > 0) {
    return locales[0].languageTag;
  }
  return 'fr'; // Default language if no locale is found
};

export const getMessages = (language) => {
  return translations[language];
};

export const LanguageProvider = ({ children }) => {
  const language = getLanguage();
  const messages = getMessages(language);

  return (
    <IntlProvider locale={language} messages={messages}>
      {children}
    </IntlProvider>
  );
};