import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons, Feather } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation';
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

  _handleSubmit = () => {
    //전송
    // alert(JSON.stringify(this.state,0,2));
    //fetch 생략

    //서버 로직
    let id = this.state.id;
    let pw = this.state.pw;
    pw = Base64.btoa(pw);
    // alert(pw)

    //id와 password로 DB검색 결과
    let result = require('./users.json');
    let resultId = result[0].id;
    let resultPw = result[0].pw;
    // alert(resultPw);
    // alert(Base64.atob(result[0].password));
    // alert(JSON.stringify(result,0,2));

    // 입력 pw와 DB비교
    if(id === resultId && pw === resultPw){
      return this.props.navigation.navigate('Home')
    } else if (pw !== resultPw){
      return alert("비밀번호가 일치하지 않습니다.")
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
            onChangeText={(id) => this.setState({id: id.toLowerCase()})}
            style={styles.inputText}
            placeholder="ID"
            placeholderTextColor="#fff"
            returnKeyType={"done"}
            autoCorrect={false}
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
            secureTextEntry
            returnKeyType={"done"}
            autoCorrect={false}
          >
          </TextInput>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPressOut={this._handleSubmit}
        >
          <Text style={styles.btnText}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.linkBox}
          onPress={() => this.props.navigation.navigate('Home')}
        >
          <Feather name="home" color="#fff" size={15} style={{marginRight:5}}/>
          <Text style={styles.linkText}>Go Home</Text>
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
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft:30,
    paddingRight:30,
    width: ww * 0.7,
    height:60,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  inputText: {
    paddingTop:6,
    paddingBottom:4,
    marginLeft:10,
    fontSize:18,
    color: '#fff',
  },
  btn: {
    marginTop:10,
    padding:10,
    width: ww * 0.7,
    height:60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
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
