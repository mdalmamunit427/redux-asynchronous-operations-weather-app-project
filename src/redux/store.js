import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../redux/features/todos/todoSlice';
import { thunk } from 'redux-thunk';
import { createLogger } from 'redux-logger';
import usersReducer from '../redux/features/users/usersSlice';
import weatherReducer from '../redux/features/weather/weatherSlice';

// Create a logger middleware
const logger = createLogger();

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger),
});
