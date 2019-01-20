import React from 'react';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { Button, Card, CardSection } from '../common';
import { todoCreate } from '../../actions';
import TodoForm from './TodoForm';

class TodoCreate extends React.Component {
    onCreatePress = () => {
        const { title, priority, scheduledTo } = this.props;

        this.props.todoCreate(
            this.props.navigation.goBack,
            {
                title: title || 'Take out the garbage',
                priority: priority || 0,
                scheduledTo: scheduledTo || null,
            }
        );
    }

    render() {
        return (
            <Card>
                <TodoForm {...this.props} />

                <CardSection>
                    <Button
                        text='Create Todo Item'
                        violet
                        onPress={this.onCreatePress}
                    />
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {title, priority, scheduledTo } = state.todoForm;
    return ({ title, priority, scheduledTo });
};

export default connect(
    mapStateToProps,
    { todoCreate }
)(
    withNavigation(TodoCreate)
);
