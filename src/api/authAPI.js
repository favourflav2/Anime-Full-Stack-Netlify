import axios from 'axios'

const devEnv = process.env.NODE_ENV !== "production"

const {REACT_APP_LOCALHOST_API,REACT_APP_PROD_API} = process.env

const API = axios.create({baseURL:`${devEnv ? REACT_APP_LOCALHOST_API : REACT_APP_PROD_API}`})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
    }
    return req
})

export function log_In(formData){
    return API.post('/auth/login',formData)
}

export function sign_Up(formData){
    return API.post('/auth/signup',formData)
}
export function googleSign_Up(formData){
    return API.post('/auth/googleSignup',formData)
}

export function like_Anime(id){
    return API.put('/auth/like',id)
}

export function saved_Arr(){
    return API.get('/auth/savedArr')
}