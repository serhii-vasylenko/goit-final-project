import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../const/axiosBaseUrl';

const addToFavoriteRecipes = createAsyncThunk(
  'recipes/addToFavoriteRecipes',
  async (id, thunkAPI) => {
    try {
      const response = await axios.put(`/recipes/favorite/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default addToFavoriteRecipes;
