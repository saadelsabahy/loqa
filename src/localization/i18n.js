import i18n from 'i18n-js';
import en from './locals/en.json';
import ar from './locals/ar.json';
import { AsyncStorage } from 'react-native';

const getLocale=async ()=>{
    const lang = await AsyncStorage.getItem('language');
    return i18n.locale=  lang;
};
getLocale()
    .then(lan=>console.log(lan))
    .catch(e=>console.log('no lang',e));

i18n.defaultLocale = 'en';
i18n.fallbacks = true;
i18n.translations = { en, ar };

export default i18n;