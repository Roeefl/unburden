import {
    LOGIN_EMAIL_CHANGE,
    LOGIN_PASSWORD_CHANGE,
    ON_AUTH_STATE_CHANGE,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    loading: false,
    error: null,
    user: null
};

export const authReducer = (auth = INITIAL_STATE, action) => {
    if (action.type === LOGIN_EMAIL_CHANGE) {
        return {
            ...auth,
            email: action.payload
        };
    }

    if (action.type === LOGIN_PASSWORD_CHANGE) {
        return {
            ...auth,
            password: action.payload
        };
    }

    if (action.type === ON_AUTH_STATE_CHANGE) {
        return {
            ...auth,
            user: action.payload
        }
    }

    if (action.type === LOGIN_USER) {
        return {
            ...auth,
            loading: true,
            error: ''
        };
    }

    if (action.type === LOGIN_USER_SUCCESS) {
        return {
            ...auth,
            user: action.payload,
            error: '',
            loading: false,
            email: '',
            password: ''
        };
    }

    if (action.type === LOGIN_USER_FAIL) {
        return {
            ...auth,
            error: action.payload,
            password: '',
            loading: false
        };
    }

    return auth;
};