import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import users from "./userSlice";
import counter from "./counterslice";

const combinedReducer = combineReducers({
  counter,
  users,
});

// to link client side vlaue to server side
const masterReducer = (state, action) => {
    if(action.type == HYDRATE){
        const nextState = {
            ...state,  // use preivous state
            counter : {
                count : state.counter.count + action.payload.counter.count,
            },
            users : {
                users : [...action.payload.users.users, ...state.users.users],
            },
        }
        return nextState;
    }else {
        return combinedReducer(state, action)
    }
}

export const makeStore = () => 
    configureStore({
        reducer: masterReducer,
    })

// export const makeStore = () =>
//   configureStore({
//     reducer: combinedReducer,
//   });

// export const wrapper = createWrapper(makeStore);
export const wrapper = createWrapper(makeStore, {debug: true});

// To use dispatch, get state Value inside react component : can use : react-redux
// next-redux-wrapper :=> it act as a main wrapper around redux store. so that it will next js friendly.
