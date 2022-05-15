import {configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter/counterSlice';


const store = configureStore({
    reducer: counterSlice.reducer

})

export default store;