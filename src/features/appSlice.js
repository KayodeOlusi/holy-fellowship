import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,

  reducers: {
    holdInput: (state, action) => {

    }
  }
});

export const { holdInput } = appSlice.actions;
export const selectApp = (state) => state.app.value;
export default appSlice.reducer;
