import { configureStore } from '@reduxjs/toolkit';
import bibleReducer from "../features/bibleSlice";
import channelReducer from '../features/channelSlice';

export const store = configureStore({
  reducer: {
    channel: channelReducer,
    bible: bibleReducer
  }
});
