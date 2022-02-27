import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  book: null,
  chapter: null,
  open: false
};

export const bibleSlice = createSlice({
  name: 'bible',
  initialState,

  reducers: {
    openModal: (state, action) => {
      state.open = action.payload.open;
    }
  }
});

export const { openModal } = bibleSlice.actions;
export const selectOpen = (state) => state.bible.open;
export default bibleSlice.reducer;
