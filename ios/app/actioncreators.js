import axios from "axios"

export const SET_USER = "SET_USER"


export const setUser = (user)=>{
    var a = {
        type:"SET_USER",
        user: user
    }
    console.log("!!!!",a)
    return a;
}


export const login = (email,password)=>(dispatch)=>{
    axios.post("http://192.168.4.7:1337/api/auth/login/local",{username:email,password:password})
    .then((response)=>{
        console.log("response",response)
    return axios.get(`http://192.168.4.7:1337/api/users/${email}`)
    })
    .then((user)=>{
        console.log("finnally",user)
        dispatch(setUser(user.data))
    })
}

export const checkin = (id,location)=>(dispatch)=>{
axios.put("http://192.168.4.7:1337/api/users/checkin",{id:id,location,location})
.then((response)=>{
    console.log(response.data)
})
}
