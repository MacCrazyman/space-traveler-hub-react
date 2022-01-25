import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './redux/missions';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

export default store;
