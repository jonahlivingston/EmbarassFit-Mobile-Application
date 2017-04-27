import axios from "axios"

export const SET_USER = "SET_USER"


const setUser = (user)=>(
    {
        type:SET_USER,
        user: user
    }
)


export const login = (email,password)=>(dispatch)=>{
    axios.post("http://192.168.1.53:1337/api/auth/login/local",{username:email,password:password})
    .then((user)=>{
        console.log("did axios work",user.data)
        dispatch(setUser(user))
    })
}