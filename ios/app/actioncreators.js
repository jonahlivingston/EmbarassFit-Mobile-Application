import axios from "axios"
import store from "./store"
const fs = "192.168.1.53"
const fh = "192.168.1.35"
const temp = "192.168.1.3"
const pres = "192.168.4.7"
export const SET_USER = "SET_USER"
import { Container,Text, Header, Left, Right, Body, Title } from 'native-base';

export const setUser = (user)=>{
    var a = {
        type:"SET_USER",
        user: user
    }
    return a;
}


export const login = (email,password)=>(dispatch)=>{
    console.log("email",email,"password",password)
    axios.post(`http://${pres}:1337/api/auth/login/local`,{username:email,password:password})
    .then((response)=>{
    return axios.get(`http://${pres}:1337/api/users/${email}`)
    })
    .then((user)=>{
        dispatch(setUser(user.data))
    }).catch(()=>console.log("somethingwentwrong"))
}


