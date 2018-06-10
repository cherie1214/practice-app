import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Login from './components/Login';
import Main from './components/Main';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
