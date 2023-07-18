import { createSlice } from '@reduxjs/toolkit';
import { showMessageToast } from 'components/ReusableComponents/ToastCustom/showToast';
import { toast } from 'react-toastify';
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshUser,
  uploadAvatar,
  changeUserName,
  subscribeUser,
} from 'redux/auth/operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
      avatarUrl: null,
      userId: null,
      subscribe: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    fetchError: null,
  },
  extraReducers: builder => {
    builder.addCase(registerUser.fulfilled, (state, actions) => {
      //console.log('Payload', actions.payload);
      state.user = actions.payload.data.user;
      state.token = actions.payload.data.token;
      state.isLoggedIn = true;
      state.fetchError = null;
      toast.info(`Successfully registered`);
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.fetchError = action.payload;
    });
    builder.addCase(loginUser.fulfilled, (state, actions) => {
      state.user = actions.payload.data.user;
      state.token = actions.payload.data.token;
      state.isLoggedIn = true;
      state.fetchError = null;
      toast.info(`Successfully logged in`);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.fetchError = action.payload;
    });
    builder.addCase(logoutUser.fulfilled, state => {
      state.user = { name: null, email: null, userId: null, avatarURL: null };
      state.token = '';
      state.isLoggedIn = false;
      toast.info(`Successfully logged out`);
    });
    builder.addCase(refreshUser.pending, state => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshUser.fulfilled, (state, actions) => {
      state.user = actions.payload.data.user;
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
      state.user = {
        ...state.user,
        avatarURL: action.payload.data.user.avatarURL,
      };
    });
    builder.addCase(uploadAvatar.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(changeUserName.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(changeUserName.fulfilled, (state, action) => {
      state.loading = false;
      state.user = { ...state.user, name: action.payload.data.user.name };
    });
    builder.addCase(changeUserName.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(subscribeUser.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(subscribeUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = { ...state.user, subscribe: true };
      showMessageToast(action.payload.message);
    });
    builder.addCase(subscribeUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;
