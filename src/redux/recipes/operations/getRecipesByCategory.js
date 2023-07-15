import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../const/axiosBaseUrl';

const getRecipesByCategory = createAsyncThunk(
  'recipes/getRecipesByCategory',
  async (category, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/category/${category}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default getRecipesByCategory;
