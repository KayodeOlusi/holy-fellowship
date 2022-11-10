import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  book: null,
  chapter: null,
  chapterLength: null,
  loading: false 
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
    isLoading: (state, action) => {
      state.loading = action.payload.loading
    }
  }
});

export default bibleSlice.reducer;
export const selectBook = (state) => state.bible.book;
export const selectChapter = (state) => state.bible.chapter;
export const selectLoading = (state) => state.bible.loading;
export const selectChapterLength = (state) => state.bible.chapterLength;
export const { keepBook, keepChapter, holdChapterLength, incrementChapter, decrementChapter, isLoading } = bibleSlice.actions;
