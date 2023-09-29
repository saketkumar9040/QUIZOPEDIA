import { createSlice } from "@reduxjs/toolkit";

const scoreSlice = createSlice({
   name:"score",
   initialState:{
     finalScore : null
   },
   reducers :{
     calculateScore : (state,action) => {
      console.log(action.payload)
         state.finalScore = state.finalScore + action.payload.score;
     },
     clearScore : (state,action) => {
        state.finalScore = null
     }
   }

});

export const scoreReducer = scoreSlice.reducer;
export const { calculateScore,clearScore } =scoreSlice.actions;
