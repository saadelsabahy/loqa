import { AsyncStorage } from 'react-native';
import { darkTheme, lightTheme } from '../theme/theme';
import { DARK_THEME, LIGHT_THEME } from './types';
export const togglingTheme = () => {
    return async dispatch => {
        try {
            await AsyncStorage.getItem('theme', async (err, res) => {
                if (res === null || res === 'light') {
                    await AsyncStorage.setItem('theme', 'dark', () => {
                        dispatch({
                            type: DARK_THEME,
                            payload: darkTheme,
                        });
                    });
                } else {
                    await AsyncStorage.setItem('theme', 'light', () => {
                        dispatch({
                            type: LIGHT_THEME,
                            payload: lightTheme,
                        });
                    });
                }
            });
        } catch (e) {
            console.log('setting theme error', e);
        }
    };
};
