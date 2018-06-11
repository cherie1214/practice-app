import React, { Component } from 'react';
import Store from "../store";
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity, Dimensions, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons, Feather } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation';
import Base64 from '../lib/Base64';
import { login } from '../lib/serverFn';

const window = Dimensions.get('window');
const ww = window.width;
const wh = window.height;

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      id: "",
      pw: "",
    }
  }

  async _handleSubmit(){
    result = login(this.state.id, this.state.pw);
    // alert(result)

    if(result.status === 'ERROR'){
      alert(result.message);
      this.setState({pw: ''});
      return;
    }

    const key = result.data.key;

    try {
      await AsyncStorage.setItem('@RouteTestKey', key);
      //로그인
      this.props.actions.login(this.state.id);
      this.props.navigation.navigate('Home');
    } catch(error){
      return alert("ERROR")
    }
  }

  render(){
    return(
      <LinearGradient colors={['#9c44f9', '#726ef8', '#4fcef9']} style={styles.container}>
        <Text style={styles.h1}>Sign in</Text>
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
          onPressOut={() => {this._handleSubmit()}}
          >
          <Text style={styles.btnText}>SUBMIT</Text>
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
    width: 150,
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

const LoginContainer = ({ navigation }) => {
  return(
    <Store.Consumer>
      {({state, actions}) => (
        <Login
          store={state}
          actions={actions}
          navigation={navigation}
          />
        )
      }
    </Store.Consumer>
  )
}

export default LoginContainer;
