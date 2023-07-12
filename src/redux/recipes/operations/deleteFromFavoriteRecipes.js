import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../const/axiosBaseUrl';

const deleteFromFavoriteRecipes = createAsyncThunk(
  'recipes/deleteFromFavoriteRecipes',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/recipes/favorite/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default deleteFromFavoriteRecipes;
