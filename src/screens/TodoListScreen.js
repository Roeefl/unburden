import React from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { todoFetchAll } from '../actions';
import { Button } from '../components/common';
import TodoItem from '../components/todo/TodoItem';

class TodoListScreen extends React.Component {
     static navigationOptions = ({ navigation }) => {
        return {
            title: 'Your Todo Tasks',
            headerRight: (
                <Button
                    onPress={() => navigation.navigate('TodoCreate')}
                    text="Add"
                    positive
                />
            ),
        };
    }

    componentWillMount() {
        this.props.todoFetchAll();
    }

    renderItem(todo) {
        return (
            <TodoItem todo={todo.item} />
        );
    }
 
    render() {
        return (
            <FlatList
                // enableEmptySections
                data={this.props.todos}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index}
            />
        );
    }
}

function jsonToArr(jsonObj) {
    const arr = [];

    for (const uid in jsonObj) {
        arr.push(
            { ...jsonObj[uid], uid }
        );
    }

    return arr;
}

const mapStateToProps = (state) => {
    return (
        {
            todos: jsonToArr(state.todos)
        }
    );
};

export default connect(
    mapStateToProps,
    { todoFetchAll }
)(TodoListScreen);
