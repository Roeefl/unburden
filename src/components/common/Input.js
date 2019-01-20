import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {props.label}
            </Text>
            <TextInput
                value={props.value}
                onChangeText={props.onChangeText}
                style={styles.input}
                autoCorrect={false}
                placeholder={props.placeholder}
                secureTextEntry={props.secureTextEntry}
            />
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 2
    },
    label: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    }
};

export { Input };
