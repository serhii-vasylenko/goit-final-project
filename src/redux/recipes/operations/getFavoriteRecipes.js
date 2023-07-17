import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../const/axiosBaseUrl';

const getFavoriteRecipes = createAsyncThunk(
  'recipes/getFavoriteRecipes',
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(`recipes/favorite?page=${data.page}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default getFavoriteRecipes;
