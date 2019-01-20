import React from 'react';
import TodoCreate from '../components/todo/TodoCreate';

class TodoCreateScreen extends React.Component {
    static navigationOptions = {
        title: 'Create a new Todo Item'
    };

    render() {
        return (
            <TodoCreate />
        );
    }
}

export default TodoCreateScreen;
