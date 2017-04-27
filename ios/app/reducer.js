 import {SET_USER} from "./actioncreators"
 
 const User = (state=null, action) => {
   switch (action.type) {
   case SET_USER:
     return action.user
     default:return state
   }
 }

 export default User