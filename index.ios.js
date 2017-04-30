/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Image,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  InputContainer
} from 'react-native';
import { login } from "./ios/app/actioncreators"
import { connect, Provider } from "react-redux"
import store from './ios/app/store'
import { StackNavigator } from 'react-navigation'
import CheckinReduxContainer from "./ios/app/reduxcontainers/CheckinReduxContainer"
import main from "./index.ios"
import { Content, Container, Toast, Header, Left, Right, Body, Title, Item, Input, Button, Center } from 'native-base';
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
    var output = { text: "asd" };
    const setEmail = function () {
      output.text = this.state.email
    }
    return (
      <Image
        style={{ borderWidth: 5, flex: 1, justifyContent: "center", alignItems: "center", width: null, height: null, backgroundColor: "rgba(0,0,0,0)", resizeMode: "cover" }}
        source={require("./running.jpg")}
      >
        {/*<Container
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >*/}
        {/*<Item>*/}

        {/*</Item>*/}
        <Text style={{
          fontWeight: "800",
          fontSize: 50,
          color: "white",
          paddingBottom: 50

        }}>BlushFit</Text>
        <Item >
          <Input placeholder='Email'
            onChangeText={(email) => this.setState({ email })}
          />
        </Item>
        <Item>
          <Input placeholder='password'
            onChangeText={(password) => this.setState({ password })}
          />
        </Item>
        <Button bordered primary
          style={{
            marginTop: 20,
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 100,
          }}
          onPress={() => {
            store.dispatch(login(this.state.email, this.state.password))
            setTimeout(()=>{
               if (store.getState()) {
              navigate('Checkin')
            }
            },1000)
            }
          }
          
        >
          <Text>Login</Text>
        </Button>
        {/*<Button title="Signin" color="yellow" onPress={() => {
          store.dispatch(login(this.state.email, this.state.password))
          navigate('Checkin')
        }} />*/}

        {/*</Container >*/}
      </Image>
    );
  }
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

const Bav =
  StackNavigator({
    Main: { screen: Home },
    Checkin: { screen: CheckinReduxContainer },
  })

const AwesomeProject = () => {
  return (
    <Provider store={store}>
      <Bav />
    </Provider>
  )
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
