import React from 'react';
import Firebase from 'firebase';
import { connect } from 'react-redux';

import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import * as actions from '../actions';

class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);

        this.initFirebase();
    }

    onAuthChange = (user) => {
        if (user) {
            this.props.onAuthStateChange(user);
            this.props.navigation.navigate('App');
        } else {
            this.props.onAuthStateChange(false);
            this.props.navigation.navigate('Auth');
        }
    }

    initFirebase = () => {
        // Initialize Firebase
        const config = {
            apiKey: 'AIzaSyBeNCnvnQE4EGYgWStOmf84XU6Z2ALyXu4',
            authDomain: 'unburden-dz.firebaseapp.com',
            databaseURL: 'https://unburden-dz.firebaseio.com',
            projectId: 'unburden-dz',
            storageBucket: 'unburden-dz.appspot.com',
            messagingSenderId: '595815460654'
        };

        Firebase.initializeApp(config);
        console.log('Firebase init');

        Firebase.auth().onAuthStateChanged(user => {
            this.onAuthChange(user);
        });
    }

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle='default' />
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

export default connect(
    null,
    actions
)(AuthLoadingScreen);
  
