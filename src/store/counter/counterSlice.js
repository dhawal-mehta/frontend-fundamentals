import { createSlice } from '@reduxjs/toolkit'

import counterReducer from "./counterReducer";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 4 },
    reducers: counterReducer
})

export const actions = counterSlice.actions;
export default counterSlice;