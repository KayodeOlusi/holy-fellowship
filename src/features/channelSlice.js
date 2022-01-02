import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  channelId: null
};

export const channelSlice = createSlice({
  name: 'channel',
  initialState,

  reducers: {
    enterChannel: (state, action) => {
      state.channelId = action.payload.channelId
    }
  }
});

export const { enterChannel } = channelSlice.actions;
export const selectChannel = (state) => state.channel.channelId;
export default channelSlice.reducer;
