import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducer';

const store = configureStore({
  reducer: rootReducer
  // Add other middleware, enhancers, and options as needed
});

export default store;
