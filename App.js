import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import { FromLoginToHome } from './navigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <FromLoginToHome />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
