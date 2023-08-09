import React from 'react';
import Home from './Home';
import {useTranslation} from 'react-i18next';
import i18n from './services/i18n';

const initI18n = i18n;
const App = () => {
  const {t, i18n} = useTranslation();
  return <Home screenProps={{t, i18n}} />;
};

export default App;