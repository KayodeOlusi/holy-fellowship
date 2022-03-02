import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  book: null,
  chapter: null,
  chapterLength: null
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
    },
    holdChapterLength: (state, action) => {
      state.chapterLength = action.payload.chapterLength
    },
    incrementChapter: (state) => {
      state.chapter += 1;
    },
    decrementChapter: (state) => {
      state.chapter -= 1;
    }, 
  }
});

export const { keepBook, keepChapter, holdChapterLength, incrementChapter, decrementChapter } = bibleSlice.actions;
export const selectBook = (state) => state.bible.book;
export const selectChapter = (state) => state.bible.chapter;
export const selectChapterLength = (state) => state.bible.chapterLength;
export default bibleSlice.reducer;
