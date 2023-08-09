import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';
import i18nHttpLoader from 'i18next-http-backend';
import Axios from 'axios';
i18n
  .use(initReactI18next)
  .use(i18nHttpLoader)
  .init({
    interpolation: {
      escapeValue: false,
    },
    lng: getLocales()[0].languageCode,
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    // initImmediate: true,
    react: {
      useSuspense: false,
    },
    backend: {
      loadPath: 'http://172.17.3.136:3000/api/language/{{lng}}',
      parse: (data) => {
        return data;
      },
      request: (options, url, payload, callback) => {
        console.log("url------>",url)
        Axios.get(url)
          .then((res) => {
            console.log("rep data------>",res.data)
            callback(null, res);
          })
          .catch((err) => {
            console.log("error------>",err)
            callback(err, null);
          });
      },
    },

    //   resources: {
    //     en: {
    //       translation: {
    //         'Hey Yo Im at home': 'Hey Yo Im at home',
    //         'Hey Yo Im inside Room': 'Hey Yo Im inside Room',
    //       },
    //     },
    //     es: {
    //       translation: {
    //         'Hey Yo Im at home': 'Hey yo estoy en casa',
    //         'Hey Yo Im inside Room': 'Hola, yo estoy dentro de la habitación',
    //       },
    //     },
    //     de: {
    //       translation: {
    //         'Hey Yo Im at home': 'Hey Yo Ich bin zu Hause',
    //         'Hey Yo Im inside Room': 'Hey Yo Ich bin im Zimmer',
    //       },
    //     },
    //   },
  });
export default i18n;