import { CHANGE_LANGUAGE } from './types';
import { AsyncStorage, I18nManager } from 'react-native';
import Reactotron from 'reactotron-react-native';
import * as Expo from 'expo';

export const changeLanguageArabic = (language, direction) => {
    return async dispatch => {
        try {
            await AsyncStorage.setItem('language', language, () =>
                AsyncStorage.setItem(
                    'direction',
                    direction,
                    async (err, res) => {
                        Reactotron.log('res from action', res, err);
                        await dispatch({
                            type: CHANGE_LANGUAGE,
                            payload: { lang: language, dir: direction },
                        });
                        Reactotron.log('direction from action', direction);
                    }
                )
            );
        } catch (e) {
            Reactotron.log('change language arabic Error', e);
        }
        await AsyncStorage.getItem('direction', (err, res) => {
            if (res === 'RTL') {
                I18nManager.forceRTL(true);
            } else {
                I18nManager.forceRTL(false);
            }
        });
        await Expo.Updates.reload();
    };
};
