import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = (props) => {
    return (
        <View>
            <ActivityIndicator
                size={props.size || 'large'}
                style={styles.spinner}
            />
        </View>
    );
};

const styles = {
    spinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { Spinner };
