import { combineReducers } from 'redux';
import Auth from './AuthReducer';
import Localization from './LocalizationReducer';
import Theme from './ThemeReducer';

export default combineReducers({
    Auth,
    Localization,
    Theme,
});
