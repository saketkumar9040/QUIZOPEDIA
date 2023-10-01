import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
  name: "question",
  initialState: {
    questionData: {},
  },
  reducers: {
    setQuestionData: (state, action) => {
      
    },
    clearQuestionData: (state, action) => {
      state.questionData = {};
    },
  },
});

export const questionReducer = questionSlice.reducer;
export const { setQuestionData, clearQuestionData } = questionSlice.actions;