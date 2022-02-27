import { configureStore } from '@reduxjs/toolkit';
import channelReducer from '../features/channelSlice';
import bibleReducer from "../features/bibleSlice";

export const store = configureStore({
  reducer: {
    channel: channelReducer,
    bible: bibleReducer
  }
});
