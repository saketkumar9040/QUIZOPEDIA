import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
  name: "question",
  initialState: {
    questionData: null,
  },
  reducers: {
    setQuestionData: (state, action) => {
      state.questionData = action.payload;
    },
    clearQuestionData: (state, action) => {
      state.questionData = null;
    },
  },
});

export const questionReducer = questionSlice.reducer;
export const { setQuestionData, clearQuestionData } = questionSlice.actions;
