import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Picker, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { CardSection, Input } from '../common';
import { updateTodoSingleProp } from '../../actions';

class TodoForm extends React.Component {
    state = {
        isDateTimePickerVisible: false
    };

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    }
    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    }
    handleDatePicked = (date) => {
        console.log(`This task scheduled-to date has been picked: ${date.toLocaleTimeString()}`);
        this.props.updateTodoSingleProp({ prop: 'scheduledTo', value: date.toLocaleTimeString() });
        this.hideDateTimePicker();
    };

    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label='Title'
                        placeholder='Take out the garbage and stuff'
                        value={this.props.title}
                        onChangeText={value => this.props.updateTodoSingleProp({ prop: 'title', value })}
                    />
                </CardSection>

                <CardSection>
                    <Text style={styles.pickerLabel}>
                        Priority
                    </Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={this.props.priority}
                        onValueChange={value => this.props.updateTodoSingleProp({ prop: 'priority', value })}
                    >
                        <Picker.Item value='0' label='ASAP' />
                        <Picker.Item value='1' label='Soon' />
                        <Picker.Item value='2' label='Anytime' />
                    </Picker>
                </CardSection>

                <CardSection>
                    <TouchableOpacity onPress={this.showDateTimePicker}>
                        <Text>
                            Scheduled For
                        </Text>
                    </TouchableOpacity>

                    <Text>
                        {this.props.scheduledTo}
                    </Text>

                    <DateTimePicker
                        mode='datetime'
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this.handleDatePicked}
                        onCancel={this.hideDateTimePicker}
                    />
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerLabel: {
        fontSize: 18,
        paddingLeft: 20
    },
    picker: {
        flex: 1
    }
};

export default connect(
    null,
    { updateTodoSingleProp }
)(TodoForm);
