import { CHANGE_LANGUAGE, CHANGE_LANGUAGE_ENGLISH } from '../actions/types';
const INITIAL_STATE = {
    RTL: false,
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return { ...state, RTL: true };
        case CHANGE_LANGUAGE_ENGLISH:
            return { ...state, RTL: false };
        default:
            return state;
    }
};
