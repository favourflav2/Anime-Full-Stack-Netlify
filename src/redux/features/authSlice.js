import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { googleSign_Up, like_Anime, log_In, saved_Arr, sign_Up } from "../../api/authAPI";


export const signUp = createAsyncThunk("signup", async({formData,toast,navigate},{rejectWithValue})=>{
    try{
        const res = await sign_Up(formData)
        toast.success("Sign Up Successfull")
        navigate('/')
        return res.data
    }catch(e){
        return rejectWithValue(e.response.data.msg)
    }
})

export const logIn = createAsyncThunk("login", async({formData,toast,navigate},{rejectWithValue})=>{
    try{
        const res = await log_In(formData)
        toast.success("Sign Up Successfull")
        navigate('/')
        return res.data
    }catch(e){
        return rejectWithValue(e.response.data.msg)
    }
})

export const googleSignUp = createAsyncThunk("googleSignup", async({result,toast,navigate},{rejectWithValue})=>{
  try{
      const res = await googleSign_Up(result)
      toast.success("Sign Up Successfull")
      navigate('/')
      return res.data
  }catch(e){
      return rejectWithValue(e.response.data.msg)
  }
})

export const likeAnime = createAsyncThunk("likeAnime", async(id,{rejectWithValue})=>{
  try{
      const res = await like_Anime(id)
      //toast.success("You have added to your library")
      //console.log(res.data)
      return res.data
  }catch(e){
      return rejectWithValue(e.response.data.msg)
  }
})

export const savedArr = createAsyncThunk("savedAnimesArray", async(_,{rejectWithValue})=>{
  try{
      const res = await saved_Arr()
      //toast.success("You have added to your library")
      //console.log(res.data)
      return res.data
  }catch(e){
      return rejectWithValue(e.response.data.msg)
  }
})

const authSlice = createSlice({
    name: "auth",
    initialState:{
        user:null,
        error:'',
        loading:false,
        updatedUser:null,
        savedAnimes:[]
    },
    reducers:{
        setLogout: (state)=>{
          localStorage.clear()
            state.user = null
            state.savedAnimes = []
        },
        setError:(state)=>{
          state.error= ''
        },
        setUpdatedUser:(state)=>{
          state.updatedUser = state.user
        },
        setSavedAnimes:(state,action)=>{
          state.savedAnimes = action.payload
        }
    },
    extraReducers: (builder) =>{
        builder
          .addCase(signUp.pending, (state) => {
            state.loading = true;
          })
          .addCase(signUp.fulfilled, (state, action) => {
            // console.log(action);
            localStorage.setItem('profile',JSON.stringify({...action.payload}))
            state.loading = false;
            state.user = action.payload
          })
          .addCase(signUp.rejected, (state, action) => {
            //console.log(action);
            state.loading = false;
            state.error = action.payload
          })


          .addCase(
            logIn.pending, (state) => {
            state.loading = true;
          })
          .addCase(
            logIn.fulfilled, (state, action) => {
            // console.log(action);
            localStorage.setItem('profile',JSON.stringify({...action.payload}))
            state.loading = false;
            state.user = action.payload
          })
          .addCase(
            logIn.rejected, (state, action) => {
            //console.log(action);
            state.loading = false;
            state.error = action.payload
          })


          .addCase(googleSignUp.pending, (state) => {
            state.loading = true;
          })
          .addCase(
            googleSignUp.fulfilled, (state, action) => {
            // console.log(action);
            localStorage.setItem('profile',JSON.stringify({...action.payload}))
            state.loading = false;
            state.user = action.payload
          })
          .addCase(
            googleSignUp.rejected, (state, action) => {
            //console.log(action);
            state.loading = false;
            state.error = action.payload
          })


          .addCase(likeAnime.pending, (state) => {
            state.loading = true;
          })
          .addCase(
            likeAnime.fulfilled, (state, action) => {
            // console.log(action);
            state.loading = false;
            state.updatedUser = action.payload
          })
          .addCase(
            likeAnime.rejected, (state, action) => {
            //console.log(action);
            state.loading = false;
            state.error = action.payload
          })


          .addCase(savedArr.pending, (state) => {
            state.loading = true;
          })
          .addCase(
            savedArr.fulfilled, (state, action) => {
            // console.log(action);
            state.loading = false;
            state.savedAnimes = action.payload
          })
          .addCase(
            savedArr.rejected, (state, action) => {
            //console.log(action);
            state.loading = false;
            state.error = action.payload
          })
    }
})

export default authSlice.reducer

export const {setLogout,setError,setUpdatedUser,setSavedAnimes} = authSlice.actions