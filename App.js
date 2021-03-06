import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import AppContainer from './components/AppContainer';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <AppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
