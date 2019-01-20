import {
    TODO_CREATE,
    TODO_MODIFICIATION_SUCCESS,
    TODO_UPDATE,
    TODO_UPDATE_ALL_PROPS
} from '../actions/types';

const INITIAL_STATE = {
    title: '',
    priority: '',
    scheduledTo: ''
};

export const todoFormReducer = (form = INITIAL_STATE, action) => {
    if (action.type === TODO_UPDATE_ALL_PROPS) {
        return action.payload;
    }

    if (action.type === TODO_UPDATE) {
        return {
            ...form,
            [action.payload.prop]: action.payload.value
        };
    }

    if (action.type === TODO_CREATE || action.type === TODO_MODIFICIATION_SUCCESS) {
        return INITIAL_STATE;
    }

    return form;
};
