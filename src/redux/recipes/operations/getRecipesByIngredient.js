import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../const/axiosBaseUrl';

const getRecipesByIngredient = createAsyncThunk(
  'recipes/getRecipesByTitle',
  async (ingredient, thunkAPI) => {
    try {
      const response = await axios.get(`/search?q=${ingredient}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default getRecipesByIngredient;