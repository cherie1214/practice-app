import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons, Feather } from '@expo/vector-icons';
import Base64 from '../lib/Base64'

const window = Dimensions.get('window');
const ww = window.width;
const wh = window.height;

export default class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      id: "",
      pw: "",
    }
  }

  render(){
    return(
      <LinearGradient colors={['#9c44f9', '#726ef8', '#4fcef9']} style={styles.container}>
        <Text style={styles.h1}>Welcome</Text>
        <View style={styles.inputBox}>
          <Feather name="user" color="#fff" size={20} />
          <TextInput
            value={this.state.id}
            onChangeText={(id) => this.setState({id: id})}
            style={styles.inputText}
            placeholder="ID"
            placeholderTextColor="#fff"
          >
          </TextInput>
        </View>
        <View style={styles.inputBox}>
          <Feather name="lock" color="#fff" size={20} />
          <TextInput
            value={this.state.pw}
            onChangeText={(pw) => this.setState({pw: pw})}
            style={styles.inputText}
            placeholder="PASSWORD"
            placeholderTextColor="#fff"
          >
          </TextInput>
        </View>
        <TouchableOpacity style={[styles.inputBox, styles.btn]}>
          <Text style={styles.btnText}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkBox}>
          <Feather name="arrow-right" color="#fff" size={15} style={{marginRight:5}}/>
          <Text style={styles.linkText}>Go back</Text>
        </TouchableOpacity>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    marginBottom:20,
    color:'#fff',
    fontSize:60,
    fontWeight: '200',
  },
  inputBox: {
    marginTop:10,
    padding: 10,
    paddingLeft:30,
    width: ww * 0.7,
    height:60,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  inputText: {
    marginLeft:10,
    fontSize:18,
    color: '#fff',
  },
  btn: {
    paddingLeft:10,
    justifyContent: 'center',
    backgroundColor: '#8920f8',
  },
  btnText: {
    fontWeight: '700',
    fontSize:18,
    color: '#fff',
  },
  linkBox: {
    marginTop:10,
    padding:10,
    width: ww * 0.7,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  linkText: {
    color: '#fff',
    fontSize: 16,
  },
})
