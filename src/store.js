import { combineReducers, configureStore } from "@reduxjs/toolkit";
import missionsReducer from "./redux/missions";

const store = configureStore({
  reducer:{
    missionsReducer,
  }
})

export default store;