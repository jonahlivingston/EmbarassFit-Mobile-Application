 import {SET_USER} from "./actioncreators"
 
 const User = (state=null, action) => {
     console.log("hit",action.type,SET_USER)
     console.log(action)
   switch (action.type) {
   case "SET_USER":
    console.log("aaaa")
     return action.user
     default:
     console.log("boo")
     return state
   }
 }

 export default User