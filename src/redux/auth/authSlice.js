import { createSlice } from '@reduxjs/toolkit';
import { showMessageToast } from 'components/ReusableComponents/ToastCustom/showToast';
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshUser,
  changeUserData,
  subscribeUser,
  getUserInfo,
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
      newUser: null,
      daysInApp: null,
      addedRecipes: null,
      favoriteRecipes: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    fetchError: null,
  },
  extraReducers: builder => {
    builder.addCase(registerUser.fulfilled, (state, actions) => {
      state.user = actions.payload.data.user;
      state.token = actions.payload.data.token;
      state.isLoggedIn = true;
      state.fetchError = null;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.fetchError = action.payload;
    });
    builder.addCase(loginUser.fulfilled, (state, actions) => {
      state.user = actions.payload.data.user;
      state.token = actions.payload.data.token;
      state.isLoggedIn = true;
      state.fetchError = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.fetchError = action.payload;
    });
    builder.addCase(logoutUser.fulfilled, state => {
      state.user = { name: null, email: null, userId: null, avatarURL: null };
      state.token = '';
      state.isLoggedIn = false;
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
    builder.addCase(changeUserData.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(changeUserData.fulfilled, (state, action) => {
      state.loading = false;
      state.user = { ...state.user, name: action.payload.data.user.name, avatarURL: action.payload.data.user.avatarURL };
    });
    builder.addCase(changeUserData.rejected, (state, action) => {
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
    builder.addCase(getUserInfo.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.user = {
        ...state.user, ...action.payload.data.user
      };
    });
    builder.addCase(getUserInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;
