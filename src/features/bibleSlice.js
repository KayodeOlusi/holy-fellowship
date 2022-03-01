import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  book: null,
  chapter: null,
};

export const bibleSlice = createSlice({
  name: 'bible',
  initialState,

  reducers: {
    keepBook: (state, action) => {
      state.book = action.payload.book
    },
    keepChapter: (state, action) => {
      state.chapter = action.payload.chapter
    }
  }
});

export const { keepBook, keepChapter } = bibleSlice.actions;
export const selectBook = (state) => state.bible.book;
export const selectChapter = (state) => state.bible.chapter;
export default bibleSlice.reducer;
