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
import { Container, Text, Header, Left, Right, Body, Title,Button,Toast } from 'native-base';
import axios from "axios"
export default class Checkin extends Component {
  constructor(props) {
    super(props)
    this.state={
      warning:""
    }
  }
  render() {
  const fs = "192.168.1.53"
  const fh = "192.168.1.35"
  const temp = "192.168.1.3"
  const pres = "192.168.4.7"
    const checkin = (id, location) => {
      axios.put(`http://${pres}:1337/api/users/checkin`, { id: id, location, location })
        .then((response) => {
          console.log("I got a response that is",response)
          this.setState({warning:response.data})
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
          fontSize: 40,
          color: "white",
          paddingBottom: 50
        }}
       >Checkin</Text>
        <Button block success onPress={() => {
          var userId = this.props.user.id
          var longitude = this.props.user.longitude
          var latitude = this.props.user.latitude
          navigator.geolocation.getCurrentPosition((location) => {
            console.log("location",location)
            if (Math.abs(longitude - location.coords.longitude) < 2 &&
              Math.abs(latitude - location.coords.latitude) < 2) {
              console.log("hitif")
              checkin(userId, location)
            }
            else {
              this.setState({
                warning:"You are not at the gym!"
              })
            }
          }, () => { console.log("boo") },
            { maximumAge: 0, timeout: 0, enableHighAccuracy: true })
        }}><Text>Checkin</Text></Button>
        <Text style={{color:"white",fontSize:20}}>{this.state.warning}</Text>
      </Image>
    )
  }
}