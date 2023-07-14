import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../const/axiosBaseUrl';

const getFavoriteRecipes = createAsyncThunk(
  'recipes/getFavoriteRecipes',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('recipes/favorite');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default getFavoriteRecipes;
