import axios from '../../const/axiosBaseUrl';
import { createAsyncThunk } from '@reduxjs/toolkit';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/users/register', user);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', user);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.auth.token;
  
      if (!token) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
  
      try {setAuthHeader(token);
        const response = await axios.get('/users/current');
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const uploadAvatar = createAsyncThunk(
    'auth/uploadAvatar',
    async (avatarData, thunkAPI) => {
      try {
        const response = await axios.patch('/users/avatars', avatarData);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const changeUserName = createAsyncThunk(
    'auth/changeUserName',
    async (userName, thunkAPI) => {
      try {
        const response = await axios.patch('/users', userName);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const subscribeUser = createAsyncThunk(
    'auth/subscribeUser',
    async (_, thunkAPI) => {
      try {
        const response = await axios.patch('/users/subscribe');
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );