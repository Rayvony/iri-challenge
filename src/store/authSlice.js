import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated",
    user: null,
  },
  reducers: {
    onLogin: (state, action) => {
      state.status = "authenticated";
      state.user = action.payload;
    },
    onLogout: (state) => {
      state.status = "not-authenticated";
      state.user = null;
    },
  },
});

export const { onLogin, onLogout } = authSlice.actions;
