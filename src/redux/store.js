import { configureStore } from "@reduxjs/toolkit";
import animeReducer from './features/animeSlice'
import authReducer from './features/authSlice'
import storage from 'redux-persist/lib/storage'
import{ persistReducer} from 'redux-persist'
import { combineReducers } from "@reduxjs/toolkit";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';


const persistConfig = {
    key:"root",
    version:1,
    storage
}

const reducer = combineReducers({
    anime: animeReducer,
    auth: authReducer
})

const persistedReducer = persistReducer(persistConfig,reducer)

export default configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    }),

})

// export default configureStore({
//     reducer:{
//         anime: animeReducer,
        
//     }
// })


