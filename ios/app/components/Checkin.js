import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  InputContainer,
  Button
} from 'react-native';
import {checkin} from "../actioncreators"


export default class Checkin extends Component {
  constructor(props){
    super(props)
  } 
    render(){
      const userInfo =this.props.user&&this.props.user.name
      
    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent:"center"}}>
        <Text>{userInfo}</Text>
        <Button title="checkin" onPress={()=>{
          var userId = this.props.user.id
          var longitude = this.props.user.longitude
          var latitude = this.props.user.latitude
          navigator.geolocation.getCurrentPosition((location)=>{
            if (Math.abs(longitude-location.coords.longitude)<2&&
            Math.abs(latitude-location.coords.latitude)<2){
              this.props.checkIn(userId,location)
            }
            else{
              console.log("you are not at the gym")
            }
          },()=>{console.log("boo")},
          {maximumAge:0, timeout:0, enableHighAccuracy:true})
        }}
        />
      </View>
    )
}
}