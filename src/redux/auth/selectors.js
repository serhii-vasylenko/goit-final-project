import { createSelector } from '@reduxjs/toolkit';

export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsError = state => state.auth.fetchError;

export const selectAuth = createSelector(
  [selectUser, selectIsLoggedIn, selectIsRefreshing, selectIsError],
  (user, isLoggedIn, isRefreshing, fetchError) => {
    return { user, isLoggedIn, isRefreshing, fetchError };
  }
);