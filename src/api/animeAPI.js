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

export function anime_Search(searchValue,page){
    return API.post(`/anime/search?page=${page}`,searchValue)
}

export function top_Anime(){
    return API.get('/anime/top')
}

export function top_AnimeQuery(page){
    return API.get(`/anime/topQ?page=${page}`)
}

export function best_Anime(){
    return API.get('/anime/best')
}






