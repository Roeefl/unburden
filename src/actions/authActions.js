import Firebase from 'firebase';

import {
    LOGIN_EMAIL_CHANGE,
    ON_AUTH_STATE_CHANGE,
    LOGIN_PASSWORD_CHANGE,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from './types';

const AUTH_FAILED = 'Authentication Failed';

export const loginEmailChanged = (email) => {
    return {
        type: LOGIN_EMAIL_CHANGE,
        payload: email
    };
};

export const loginPasswordChanged = (password) => {
    return {
        type: LOGIN_PASSWORD_CHANGE,
        payload: password
    };
};

const loginUserFail = (dispatch, error) => {
    dispatch(
        {
            type: LOGIN_USER_FAIL,
            payload: error.message || error.code || AUTH_FAILED
        }
    );
};

const loginUserSuccesss = (dispatch, credential) => {
    dispatch(
        {
            type: LOGIN_USER_SUCCESS,
            payload: credential
            // payload: credential.user.toJSON()
        }
    );
};

export const loginUser = (email, password) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_USER });

        try {
            const credential = await Firebase.auth().signInWithEmailAndPassword(email, password);
            loginUserSuccesss(dispatch, credential);
        } catch (error) {
            console.log(error);

            loginUserFail(dispatch, error);
            // const regUser = await Firebase.auth().createUserWithEmailAndPassword(email, password);
            // loginUserSuccesss(dispatch, regUser);
        }
    };
};

export const onAuthStateChange = (user) => {
    return {
        type: ON_AUTH_STATE_CHANGE,
        payload: user
    };
};
