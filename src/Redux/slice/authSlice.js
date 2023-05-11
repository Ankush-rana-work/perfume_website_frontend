import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user:null
  },
  reducers: {
    addUserInfo: (state, action) => {
        state.user = action.payload.data;
    },
    logout: (state, action)=>{
        state.user = null;
    }
  },
});

// this is for dispatch
export const { addUserInfo, logout } = authSlice.actions;

// this is for configureStore
export default authSlice.reducer;
