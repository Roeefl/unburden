import React from 'react';
import Firebase from 'firebase';
import { connect } from 'react-redux';

import { StyleSheet, Text, View } from 'react-native';

import { Button, Card, CardSection, Spinner } from '../components/common';
import LoginForm from '../components/login/LoginForm';

class LoginScreen extends React.Component {
  onLogout = () => {
    Firebase.auth().signOut();
  }

  renderLogin() {
    if (this.props.user) {
      return (
        <Card>
          <CardSection>
            <Button
              text='LogOut'
              onPress={this.onLogout}
            />
          </CardSection>
        </Card>
      );
    }

    if (this.props.user === false) {
      return (
        <LoginForm />
      );
    }

    return (
      <Spinner size='large' />
    );
  }

  render() {
    return (
        <View style={styles.container}>
          <View>
            <Text style={styles.welcome}>Unburden Login</Text>
          </View>

          {this.renderLogin()}

          {/* <Button
            text="Go to Login... again"
            onPress={() => this.props.navigation.push('Login')}
          />
          <Button
            text="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            text="Go back"
            onPress={() => this.props.navigation.goBack()}
          /> */}

          {/* <Header title='Resources' /> */}
          {/* <ResourceList /> */}

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#414141',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    padding: 10,
    color: '#fff'
  }
});

const mapStateToProps = (state) => {
  return (
      {
          user: state.auth.user
      }
  );
};

export default connect(
  mapStateToProps, null
)(LoginScreen);
