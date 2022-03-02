import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  channelId: null,
  themodal: false
};

export const channelSlice = createSlice({
  name: 'channel',
  initialState,

  reducers: {
    enterChannel: (state, action) => {
      state.channelId = action.payload.channelId;
    },
    showModal: (state, action) => {
      state.themodal = action.payload.themodal;
    }
  }
});

export const { enterChannel, showModal } = channelSlice.actions;
export const selectChannel = (state) => state.channel.channelId;
export const selectModalState = (state) => state.channel.themodal;
export default channelSlice.reducer;
