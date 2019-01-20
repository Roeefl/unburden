import React from 'react';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { Button, Card, CardSection, Confirm } from '../common';
import TodoForm from './TodoForm';
import { updateTodoAllProps, toodUpdate, todoDelete } from '../../actions';

const INITIAL_STATE = {
    title: '',
    priority: '',
    scheduledTo: ''
};

class TodoEdit extends React.Component {
    constructor(props) {
        super(props);
        this.model = {};
    }

    state = {
        showModal: false
    };

    componentDidMount() {
        this.model = this.props.navigation.getParam('todo', INITIAL_STATE);
        this.props.updateTodoAllProps(this.model);
    }

    onSavePress = () => {
        const { title, priority, scheduledTo } = this.props;
        
        this.props.toodUpdate(
            this.props.navigation.goBack,
            this.model.uid,
            {
                title, priority, scheduledTo
            }
        );
    }

    onDecline = () => {
        this.setState({ showModal: false });
    }

    onAccept = () => {
        this.props.todoDelete(
            this.props.navigation.goBack,
            this.model.uid
        );
    }

    render() {
        return (
            <Card>
                <TodoForm {...this.props} />

                <CardSection>
                    <Button
                        text='Save Changes'
                        positive
                        onPress={this.onSavePress}
                    />
                </CardSection>

                <CardSection>
                    <Button
                        text='Delete Task'
                        negative
                        onPress={() => this.setState({ showModal: !this.state.showModal })}
                    />
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept}
                    onDecline={this.onDecline}
                >
                    Are you sure you want to discard your changes?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { title, priority, scheduledTo } = state.todoForm;
    return ({ title, priority, scheduledTo });
};

export default connect(
    mapStateToProps, 
    { updateTodoAllProps, toodUpdate, todoDelete }
)(
    withNavigation(TodoEdit)
);
