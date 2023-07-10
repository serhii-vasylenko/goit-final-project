import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshUser,
  uploadAvatar,
} from 'redux/auth/operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    avatarUrl: null,
  },
  extraReducers: builder => {
    builder.addCase(registerUser.fulfilled, (state, actions) => {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.isLoggedIn = true;
      toast.info(`Successfully registered`);
    });
    builder.addCase(loginUser.fulfilled, (state, actions) => {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.isLoggedIn = true;
      toast.info(`Successfully logged in`);
    });
    builder.addCase(logoutUser.fulfilled, state => {
      state.user = { name: null, email: null };
      state.token = '';
      state.isLoggedIn = false;
      toast.info(`Successfully logged out`);
    });
    builder.addCase(refreshUser.pending, state => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshUser.fulfilled, (state, actions) => {
      state.user = actions.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    });
    builder.addCase(refreshUser.rejected, state => {
      state.isRefreshing = false;
    });
    builder.addCase(uploadAvatar.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(uploadAvatar.fulfilled, (state, action) => {
      state.loading = false;
      state.avatarUrl = action.payload;
    });
    builder.addCase(uploadAvatar.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;
