// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './CardSlice'

const store = configureStore({
  reducer: {
    cards: cardReducer
  }
});

export default store;
