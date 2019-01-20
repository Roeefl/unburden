import {
    TODOS_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export const todosFetchReducer = (todos = INITIAL_STATE, action) => {
    if (action.type === TODOS_FETCH_SUCCESS) {
        return action.payload;
    }

    return todos;
};
