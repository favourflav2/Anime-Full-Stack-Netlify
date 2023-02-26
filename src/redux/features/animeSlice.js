import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { anime_Search, best_Anime, top_Anime, top_AnimeQuery } from '../../api/animeAPI'

export const animeSearch = createAsyncThunk("animeSearch", async({searchValue,currentPage},{rejectWithValue})=>{
    try{
        const res = await anime_Search(searchValue,currentPage)
        //console.log(res.data)
        return res.data
    }catch(e){
        return rejectWithValue(e.response.data.msg)
    }
})

export const topAnime = createAsyncThunk("topAnime", async(_,{rejectWithValue})=>{
    try{
        const res = await top_Anime()
        //console.log(res.data)
        return res.data
    }catch(e){
        return rejectWithValue(e.response.data.msg)
    }
})

export const topAnimeQuery = createAsyncThunk("topAnimeQ", async(page,{rejectWithValue})=>{
    try{
        const res = await top_AnimeQuery(page)
        //console.log(res.data)
        return res.data
    }catch(e){
        return rejectWithValue(e.response.data.msg)
    }
})


export const bestAnime= createAsyncThunk("bestAnime", async(_,{rejectWithValue})=>{
  try{
      const res = await best_Anime()
      //console.log(res.data)
      return res.data
  }catch(e){
      return rejectWithValue(e.response.data.msg)
  }
})






const animeSlice = createSlice({
    name:"anime",
    initialState:{
        topAnimes: [],
        animesQuery: [],
        searchAnimes:[],
        bestAnime:[],
        loading: false,
        currentPage: 1,
        homeCurrentPage:1,
        homeNumberOfPages:null,
        numberOfPages:null,
        error:''
    },
    reducers:{
        setCurrentPage: (state, action) =>{
            state.currentPage = action.payload
        },
        clearCurrentPage:(state)=>{
            state.currentPage = 1
        },
        clearSearchAnime:(state)=>{
            state.searchAnimes = []
            state.numberOfPages= null
        },
        clearTopAnime:(state)=>{
            state.topAnimes = []
        },
        setHomeCurrentPage:(state,action)=>{
          state.homeCurrentPage = action.payload
        }
    },
    extraReducers:(builder) =>{
        builder
        .addCase(animeSearch.pending, (state) => {
          state.loading = true;
        })
        .addCase(animeSearch.fulfilled, (state, action) => {
          // console.log(action);
          state.loading = false;
          state.searchAnimes = action.payload.data
          state.currentPage = action.payload.currentPage
          state.numberOfPages = action.payload.numberOfPages
        })
        .addCase(animeSearch.rejected, (state, action) => {
          //console.log(action);
          state.loading = false;
          state.error = action.payload
        })


          .addCase(topAnime.pending, (state) => {
            state.loading = true;
          })
          .addCase(topAnime.fulfilled, (state, action) => {
            // console.log(action);
            state.loading = false;
            state.topAnimes = [action.payload]
          })
          .addCase(topAnime.rejected, (state, action) => {
            //console.log(action);
            state.loading = false;
            state.error = action.payload
          })



          .addCase(topAnimeQuery.pending, (state) => {
            state.loading = true;
          })
          .addCase(topAnimeQuery.fulfilled, (state, action) => {
            // console.log(action);
            state.loading = false;
            state.animesQuery = action.payload.data
            state.homeCurrentPage = action.payload.currentPage
            state.homeNumberOfPages = action.payload.numberOfPages
          })
          .addCase(topAnimeQuery.rejected, (state, action) => {
            //console.log(action);
            state.loading = false;
            state.error = action.payload
          })


          .addCase(bestAnime.pending, (state) => {
            state.loading = true;
          })
          .addCase(bestAnime.fulfilled, (state, action) => {
            // console.log(action);
            state.loading = false;
            state.bestAnime = action.payload
          })
          .addCase(bestAnime.rejected, (state, action) => {
            //console.log(action);
            state.loading = false;
            state.error = action.payload
          })
      },
    
})

export default animeSlice.reducer

export const {setCurrentPage,clearCurrentPage, clearSearchAnime, clearTopAnime,setHomeCurrentPage} = animeSlice.actions