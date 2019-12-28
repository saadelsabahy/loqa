import { base, darkTheme, lightTheme, colorOptions } from '../theme/theme';
import { DARK_THEME, LIGHT_THEME } from '../actions/types';

const INITIAL_STATE = {
    theme: { ...base, ...darkTheme, ...lightTheme, ...colorOptions },
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DARK_THEME:
            return { ...state, theme: { ...action.payload } };
        case LIGHT_THEME:
            return { ...state, theme: { ...action.payload } };
        default:
            return state;
    }
};
