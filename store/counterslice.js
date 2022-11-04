import { createSlice } from "@reduxjs/toolkit";
/* CreateSlice :=> A function that accepts an initial state, an object full 
of reducer functions, and a "slice name", and automatically 
generates action creators and action types that correspond to the reducers and state.
The reducer argument is passed to createReducer().*/
const initialState = {
    count: 0,
  }

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment : (state, action) => {
            state.count = state.count + 1;
        }
    }
})

export const {increment} = counterSlice.actions
export default counterSlice.reducer