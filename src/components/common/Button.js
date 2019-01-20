import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

class Button extends React.Component {
    static propTypes = {
        positive: PropTypes.bool,
        negative: PropTypes.bool,
        violet: PropTypes.bool
    };

    static defaultProps = {
        positive: false,
        negative: false,
        violet: false
    };

    constructor(props) {
        super(props);
        this.initStyle();
        this.setStyle();
    }

    initStyle = () => {
        this.styles = {
            button: {
                flex: 1,
                alignSelf: 'stretch',
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#007aff',
                marginLeft: 5,
                marginRight: 5,
                padding: 10,
                backgroundColor: '#fff'
            },
            text: {
                alignSelf: 'center',
                fontSize: 16,
                fontWeight: '600',
                paddingTop: 10,
                paddingBottom: 10,
                color: '#fff'
            }
        };
    }

    setStyle = () => {
        if (this.props.positive) {
            this.styles.button.backgroundColor = '#04724D';
        } else if (this.props.negative) {
            this.styles.button.backgroundColor = '#FF1654';
        } else if (this.props.violet) {
            this.styles.button.backgroundColor = '#9627BA';
        }
    }

    render() {
        return (
            <TouchableOpacity
                style={this.styles.button}
                onPress={this.props.onPress}
            >
                <Text style={this.styles.text}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        );
    }
}

export { Button };
