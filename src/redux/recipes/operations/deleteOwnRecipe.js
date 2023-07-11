import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../const/axiosBaseUrl';

const deleteownRecipe= createAsyncThunk(
  'recipes/deleteownRecipe',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/recipes/ownRecipes/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export default deleteownRecipe;
