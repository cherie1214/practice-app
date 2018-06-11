import React from 'react';
import { DrawerActions, createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import Login from '../components/Login';
import Home from '../components/Home';

export const FromLoginToHome = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Login: {
      screen: Login,
    }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    // navigationOptions(props) {
    //   return {
    //     ...props.navigationOptions,
    //   };
    // },
    // navigationOptions: ({ navigation }) => ({
    //   headerTransparent: true,
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //   },
    // }),
  }
)
