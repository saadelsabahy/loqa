import {
    EMAIL_CHANGE,
    PASSWORD_CHANGE,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL,
    SPINNER,
    ALERT_OK,
    LOGIN_SUCCESS,
    LOG_IN_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    spinner: false,
    showAlert: false,
    title: '',
    message: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGE:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGE:
            return { ...state, password: action.payload };
        case SPINNER:
            return { ...state, spinner: true };
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                ...INITIAL_STATE,
                showAlert: true,
                title: action.payload.title,
                message: action.payload.message,
            };
        case ALERT_OK:
            return { ...state, showAlert: false };
        case SIGN_UP_FAIL:
            return {
                ...state,
                showAlert: true,
                title: action.payload.title,
                message: action.payload.message,
                spinner: false,
            };
        case LOGIN_SUCCESS:
            return { ...INITIAL_STATE, spinner: false };
        case LOG_IN_FAIL:
            return {
                ...state,
                showAlert: true,
                title: action.payload.title,
                message: action.payload.message,
                spinner: false,
            };
        default:
            return state;
    }
};
