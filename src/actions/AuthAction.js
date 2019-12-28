import {
    ALERT_OK,
    EMAIL_CHANGE,
    LOG_IN_FAIL,
    LOGIN_SUCCESS,
    PASSWORD_CHANGE,
    SIGN_UP_FAIL,
    SIGN_UP_SUCCESS,
    SPINNER,
} from './types';
import { AsyncStorage } from 'react-native';
import firebase from 'firebase';

export const emailChange = email => {
    return {
        type: EMAIL_CHANGE,
        payload: email,
    };
};

export const passwordChange = password => {
    return {
        type: PASSWORD_CHANGE,
        payload: password,
    };
};

export const signUserUp = (email, password) => {
    return async dispatch => {
        dispatch({ type: SPINNER });
        try {
            await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password);
            dispatch({
                type: SIGN_UP_SUCCESS,
                payload: {
                    title: 'Success',
                    message: 'Sign Up success try To login',
                },
            });
        } catch (e) {
            dispatch({
                type: SIGN_UP_FAIL,
                payload: {
                    title: 'Failed',
                    message:
                        'Some thing Wrong Please Try again With valid mail and password',
                },
            });
        }
    };
};

export const signUserIn = (email, password, nav) => {
    return async dispatch => {
        dispatch({ type: SPINNER });
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            let token = await firebase.auth().currentUser.getIdToken();
            await AsyncStorage.setItem('token', token);
            dispatch({
                type: LOGIN_SUCCESS,
            });
            nav();
        } catch (e) {
            dispatch({
                type: LOG_IN_FAIL,
                payload: {
                    title: 'Failed',
                    message:
                        'Some thing Wrong Please Try again With valid mail and password',
                },
            });
        }
    };
};

export const handleAlertPressing = type => {
    return dispatch => {
        if (type === 'ok' || type === 'ask' || type === 'cancel') {
            dispatch({
                type: ALERT_OK,
            });
        }
    };
};
