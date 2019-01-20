import React from 'react';
import { withNavigation } from 'react-navigation';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from '../common';

class TodoItem extends React.Component {
    onItemPress = () => {
        this.props.navigation.navigate('TodoEdit', {
            todo: this.props.todo
        });
    }

    render() {
        const { title } = this.props.todo;

        return (
            <TouchableWithoutFeedback onPress={this.onItemPress}>
                <View>
                    <CardSection>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    title: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default withNavigation(TodoItem);
