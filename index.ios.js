/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  InputContainer,
  Button
} from 'react-native';
import {login} from "./ios/app/actioncreators"
import {connect,Provider} from "react-redux"
import store from './ios/app/store'
import {StackNavigator} from 'react-navigation'
import CheckinReduxContainer from "./ios/app/reduxcontainers/CheckinReduxContainer"
import main from "./index.ios"
// import {setUser} from "./ios/app/actioncreators"
class Home extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: ""
    }
  }

  render() {
  const { navigate } = this.props.navigation;
   var output = {text:"asd"};
   const setEmail = function(){
     output.text = this.state.email
   }
    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent:"center"}}>
          <View style={{borderWidth:4,
          borderRadius:10,
            height: 40,
            width:200}}>
          <TextInput
            style={{ height: 40, width:200}}
            placeholder="email"
            onChangeText={(email) => this.setState({ email })}
          />
          </View>
          <View style={{borderWidth:4,
            borderRadius:10,
            height: 40,
            width:200}}>
          <TextInput
            style={{ height: 40, width:200}}
            placeholder="password"
            onChangeText={(password) => this.setState({password})}
          />
          </View>
          <Text>{output.text}</Text>
          <Button title="Signin" color="yellow" onPress={()=>{
            store.dispatch(login(this.state.email,this.state.password))
            navigate('Checkin')
            }}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const Bav = 
StackNavigator({
  Main: {screen: Home},
  Checkin: {screen: CheckinReduxContainer},
})

const AwesomeProject = ()=>{
  return(
<Provider store={store}>
  <Bav/>
  </Provider>
  )
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
