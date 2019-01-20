import React from 'react';
import { createBottomTabNavigator, createMaterialTopTabNavigator, createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';

import AuthLoadingScreen from './src/screens/AuthLoadingScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import TodoListScreen from './src/screens/TodoListScreen';
import TodoCreateScreen from './src/screens/TodoCreateScreen';
import TodoEditScreen from './src/screens/TodoEditScreen';

const STORE = createStore(
  reducers,
  {},
  applyMiddleware(ReduxThunk)
);

const AppStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Todos: {
      screen: TodoListScreen
    },
    TodoCreate: {
      screen: TodoCreateScreen
    },
    TodoEdit: {
      screen: TodoEditScreen
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#EE1B24',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          fontWeight: 'bold',
      }
    }
  }
);

// const TabNavigator = createBottomTabNavigator({
//   Home: {
//     screen: HomeScreen
//   },
//   Stash: {
//     screen: StashScreen
//   },
//   Community: {
//     screen: CommunityScreen
//   },
//   More: {
//     screen: MoreScreen
//   }
// });

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen
    }
  }
);

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={STORE}>
        <AppContainer />
      </Provider>
    );
  }
}
