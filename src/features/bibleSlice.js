import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  book: null,
  bookId: null,
  chapter: null,
};

export const bibleSlice = createSlice({
  name: 'bible',
  initialState,

  reducers: {
    holdBook: (state, action) => {
      state.book = action.payload.book
    },
    holdId: (state, action) => {
      state.bookId = action.payload.bookId
    }
  }
});

export const { holdBook, holdId } = bibleSlice.actions;
export const selectBook = (state) => state.bible.book;
export const selectId = (state) => state.bible.bookId;
export default bibleSlice.reducer;
