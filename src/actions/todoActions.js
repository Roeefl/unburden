import Firebase from 'firebase';
import {
    TODO_CREATE,
    TODO_MODIFICIATION_SUCCESS,
    TODO_UPDATE,
    TODO_UPDATE_ALL_PROPS,
    TODOS_FETCH_SUCCESS
} from './types';

export const updateTodoSingleProp = ({ prop, value }) => {
    return {
        type: TODO_UPDATE,
        payload: { prop, value }
    };
};

export const updateTodoAllProps = (todo) => {
    return {
        type: TODO_UPDATE_ALL_PROPS,
        payload: todo
    };
};

export const todoCreate = (goBack, { title, priority, scheduledTo }) => {
    return async (dispatch) => {
        try {
            const { currentUser } = Firebase.auth();

            await Firebase.database().ref(`/users/${currentUser.uid}/todos`)
                .push(
                    {
                        title,
                        priority,
                        scheduledTo
                    }
                );

            dispatch(
                {
                    type: TODO_CREATE
                }
            );

            goBack();
        } catch (error) {
            console.log(error);
        }
    };
};

/* 
    Should only be called ONE TIME in the app init process.
     will automatically detect with firebase and dispatch an action on EVERY hange to the collection of the user
*/
export const todoFetchAll = () => {
    return async (dispatch) => {
        try {
            const { currentUser } = Firebase.auth();

            await Firebase.database().ref(`/users/${currentUser.uid}/todos`)
                .on('value', snapshot => {
                    dispatch( 
                        {
                            type: TODOS_FETCH_SUCCESS,
                            payload: snapshot.val()
                        }
                    );
                });
        } catch (error) {
            console.log(error);
        }
    };
};

export const toodUpdate = (goBack, todoUid, { title, priority, scheduledTo }) => {
    return async (dispatch) => {
        try {
            const { currentUser } = Firebase.auth();

            await Firebase.database().ref(`/users/${currentUser.uid}/todos/${todoUid}`)
                .set({ title, priority, scheduledTo });

            console.log(`firebase document ${todoUid} modified!`);

            dispatch(
                {
                    type: TODO_MODIFICIATION_SUCCESS
                }
            );

            goBack();
        } catch (error) {
            console.log(error);
        }
    };
};

export const todoDelete = (goBack, todoUid) => {
    return async (dispatch) => {
        try {
            const { currentUser } = Firebase.auth();

            await Firebase.database().ref(`/users/${currentUser.uid}/todos/${todoUid}`)
                .remove();

            console.log(`firebase document ${todoUid} deleted!`);

            dispatch(
                {
                    type: TODO_MODIFICIATION_SUCCESS
                }
            );

            goBack();
        } catch (error) {
            console.log(error);
        }
    };
};
