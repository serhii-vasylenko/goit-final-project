import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../const/axiosBaseUrl';

const getRecipesByIngredient = createAsyncThunk(
  'search/getRecipesByIngredient',
  async (ingredient, thunkAPI) => {
    try {
      const response = await axios.get(`/ingredients?ing=${ingredient}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default getRecipesByIngredient;
