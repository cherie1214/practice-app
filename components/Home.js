import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons, Feather } from '@expo/vector-icons';

const window = Dimensions.get('window');
const ww = window.width;
const wh = window.height;

export default class Home extends Component{
  render(){
    return(
      <LinearGradient colors={['#9c44f9', '#726ef8', '#4fcef9']} style={styles.container}>
        <Text style={styles.h1}>Main</Text>
        <TouchableOpacity
          style={styles.linkBox}
          onPress={() => this.props.navigation.navigate('Login')}
        >
          <Feather name="log-in" color="#fff" size={15} style={{marginRight:5}}/>
          <Text style={styles.linkText}>Sign In</Text>
        </TouchableOpacity>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    marginBottom:20,
    color:'#fff',
    fontSize:60,
    fontWeight: '200',
  },
  linkBox: {
    marginTop:10,
    padding:10,
    width: ww * 0.7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    color: '#fff',
    fontSize: 16,
  },
})
