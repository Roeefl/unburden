import React from 'react';
import { View, Text, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = (props) => {
    return (
        <Modal
            animationType='slide'
            onRequestClose={() => {}}
            transparent
            visible={props.visible}
        >
            <View style={styles.container}>
                <CardSection>
                    <Text style={styles.text}>
                        {props.children}
                    </Text>
                </CardSection>

                <CardSection>
                    <Button
                        text='Yas'
                        positive
                        onPress={props.onAccept}
                    />
                    <Button
                        text='Ney'
                        negative
                        onPress={props.onDecline}
                    />
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = {
    cardSection: {
        justifyContent: 'center'
    },
    text: {
        flex: 1,
        lineHeight: 40,
        fontSize: 18,
        textAlign: 'center'
    },
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20
    }
};

export { Confirm };
