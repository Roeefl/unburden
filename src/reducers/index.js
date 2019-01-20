import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { todoFormReducer } from './todoFormReducer';
import { todosFetchReducer } from './todosFetchReducer';

export default combineReducers(
    {
        auth: authReducer,
        todoForm: todoFormReducer,
        todos: todosFetchReducer
    }
);
