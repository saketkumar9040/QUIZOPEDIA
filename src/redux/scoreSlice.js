import { createSlice } from "@reduxjs/toolkit";

const scoreSlice = createSlice({
   name:"score",
   initialState:{
     finalScore : null,
     finalAnswers : {}
   },
   reducers :{
     setFinalAnswers : (state,action) => {
        const answerList = {...state.finalAnswers,...action.payload};
         state.finalAnswers = answerList;
     },
     setFinalScore : (state,action) => {
         state.finalScore = action.payload.finalScore;
     },
     clearScoreData : (state,action) => {
        state.finalScore = null;
        state.finalAnswers ={};
     }
   }

});

export const scoreReducer = scoreSlice.reducer;
export const { setFinalAnswers,setFinalScore, clearScoreData} =scoreSlice.actions;
