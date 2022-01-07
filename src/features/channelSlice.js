import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  channelId: null,
  channelState: false,
  showChat: false
};

export const channelSlice = createSlice({
  name: 'channel',
  initialState,

  reducers: {
    enterChannel: (state, action) => {
      state.channelId = action.payload.channelId;
    },
    closeChannel: (state, action) => {
      state.channelState = action.payload.channelState;
    },
    showTheChat: (state, action) => {
      state.showChat = action.payload.showChat;
    }
  }
});

export const { enterChannel, closeChannel, showTheChat } = channelSlice.actions;
export const selectChannel = (state) => state.channel.channelId;
export const selectChannelState = (state) => state.channel.channelState;
export const selectShowChat = (state) => state.channel.showChat;
export default channelSlice.reducer;
