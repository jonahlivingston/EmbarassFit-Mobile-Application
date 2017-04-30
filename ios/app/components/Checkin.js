import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  TextInput,
  InputContainer,
  Alert,
  Image
} from 'react-native';
import { Container,Toast, Text, Header, Left, Right, Body, Title,Button } from 'native-base';
import axios from "axios"

export default class Checkin extends Component {
  constructor(props) {
    super(props)
  }
  render() {
  const fs = "192.168.1.53"
  const fh = "192.168.1.35"
    const checkin = (id, location) => {
      axios.put(`http://${fh}:1337/api/users/checkin`, { id: id, location, location })
        .then((response) => {
          Toast.show({
              text: response.data,
              position: 'center',
              buttonText: 'Okay'
            })
        })
    }

    const userInfo = this.props.user && `Hey ${this.props.user.name}`

    return (
      <Image
         style={{borderWidth:5,flex:1,justifyContent:"center",alignItems:"center",width:null,height:null,backgroundColor:"rgba(0,0,0,0)",resizeMode:"cover"}}
        source={require("../../../fitness.jpg")}
       >
       <Text
       style={{
          fontWeight: "600",
          fontSize: 45,
          color: "white",
          paddingBottom: 50
        }}
       >Checkin</Text>
        <Text>{userInfo}</Text>
        <Button  block success onPress={() => {
          var userId = this.props.user.id
          var longitude = this.props.user.longitude
          var latitude = this.props.user.latitude
          navigator.geolocation.getCurrentPosition((location) => {
            if (Math.abs(longitude - location.coords.longitude) < 2 &&
              Math.abs(latitude - location.coords.latitude) < 2) {
              checkin(userId, location)
            }
            else {
              Toast.show({
              text: "You are not at the gym!",
              position: 'center',
              buttonText: 'Okay'
            })
            }
          }, () => { console.log("boo") },
            { maximumAge: 0, timeout: 0, enableHighAccuracy: true })
        }}
        ><Text>I'm At The Gym</Text></Button>
      </Image>
    )
  }
}