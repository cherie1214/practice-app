import React, { Component } from 'react';
import Store from "../store";
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity, Dimensions, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons, Feather, SimpleLineIcons } from '@expo/vector-icons';
import { logout } from '../lib/serverFn'

const window = Dimensions.get('window');
const ww = window.width;
const wh = window.height;

class Home extends Component{
  async _handleLogout(){
    // result = logout(key);
    // alert(result)

    try {
      await AsyncStorage.removeItem('@RouteTestKey');

      //로그아웃
      this.props.actions.logout();
    } catch(error){
      return alert("ERROR")
    }
  }

  render(){
    const { store } = this.props;
    return(
      <LinearGradient colors={['#9c44f9', '#726ef8', '#4fcef9']} style={styles.container}>

        <Text style={styles.h1}>Welcome</Text>

        { store.isSigned ? (
          <View>
            <View style={styles.welcomeText}>
              <Text style={styles.h2}>{store.userName}</Text>
              <Text style={styles.h3}>님, 환영합니다</Text>
              <SimpleLineIcons name="emotsmile" color="#fff" size={15} style={{marginLeft: 5}} />
            </View>
            <TouchableOpacity
              style={styles.btn}
              onPressOut={() => {this._handleLogout()}}
              >
              <Text style={styles.btnText}>SIGN OUT</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <View style={styles.welcomeText}>
              <Text style={styles.h3}>Please Sign in</Text>
            </View>
            <TouchableOpacity
              style={styles.linkBox}
              onPress={() => this.props.navigation.navigate('Login')}
              >
              <Feather name="log-in" color="#fff" size={15} style={{marginRight:7}}/>
              <Text style={styles.linkText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        )}

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
    marginBottom:50,
    color:'#fff',
    fontSize:60,
    fontWeight: '200',
  },
  welcomeText: {
    marginBottom:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  h2: {
    color:'#fff',
    fontSize:25,
    fontWeight: '400',
  },
  h3: {
    color:'#fff',
    fontSize:20,
    fontWeight: '300',
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
    width: ww * 0.4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 30,
  },
  linkText: {
    color: '#fff',
    fontSize: 16,
  },
})

const HomeContainer = ({ navigation }) => {
  return(
    <Store.Consumer>
      {({state, actions}) => (
        <Home
          store={state}
          actions={actions}
          navigation={navigation}
          />
        )
      }
    </Store.Consumer>
  )
}

export default HomeContainer;
