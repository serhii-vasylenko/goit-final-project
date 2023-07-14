import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../const/axiosBaseUrl';

const getPopularRecipes = createAsyncThunk(
  'recipes/getPopularRecipes',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get('/recipes/popular-recipe');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default getPopularRecipes;
