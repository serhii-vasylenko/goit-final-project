import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../const/axiosBaseUrl';

const getOwnRecipes = createAsyncThunk(
  'recipes/getOwnRecipes',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/ownRecipes/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default getOwnRecipes;
