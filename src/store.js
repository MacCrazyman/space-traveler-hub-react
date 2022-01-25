import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionsReducer from './redux/missions/missions';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
  middleware: [logger],
});

export default store;
