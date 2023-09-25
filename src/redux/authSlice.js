import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userData: null,
    token: null,
  },
  reducers: {
    authenticate: (state, action) => {
      const { userData, token } = action.payload;
      state.userData = userData;
      state.token = token;
    },
    logout: (state, action) => {
      state.userData = null;
      state.token = null;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { authenticate, logout } = authSlice.actions;
