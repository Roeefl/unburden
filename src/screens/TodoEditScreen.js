import React from 'react';
import TodoEdit from '../components/todo/TodoEdit';

class TodoEditScreen extends React.Component {
    static navigationOptions = {
        title: 'Edit Todo Item'
    };

    render() {
        return (
            <TodoEdit />
        );
    }
}

export default TodoEditScreen;
