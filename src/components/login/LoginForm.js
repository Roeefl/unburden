import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from '../common';
import { loginEmailChanged, loginPasswordChanged, loginUser } from '../../actions';

class LoginForm extends React.Component {
    onLogin = async () => {
        console.log('onLogin');
        this.props.loginUser(this.props.email, this.props.password);
    }

    renderButton() {
        if (this.props.loading) {
            return (
                <Spinner size='large' />
            );
        }

        return (
            <Button
                text='Log In'
                onPress={this.onLogin}
            />
        );
    }

    renderError() {
        if (this.props.error) {
            return (
                <CardSection>
                    <Text style={styles.error}>
                        {this.props.error}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='your-email@gmail.com'
                        value={this.props.email}
                        onChangeText={email => this.props.loginEmailChanged(email)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label='Password'
                        placeholder='1337savage'
                        secureTextEntry
                        value={this.props.password}
                        onChangeText={password => this.props.loginPasswordChanged(password)}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    error: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    }
};

const mapStateToProps = (state) => {
    return (
        {
            email: state.auth.email,
            password: state.auth.password,
            error: state.auth.error,
            loading: state.auth.loading
        }
    );
};

export default connect(
    mapStateToProps,
    { loginEmailChanged, loginPasswordChanged, loginUser }
)(LoginForm);
