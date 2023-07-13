import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../const/axiosBaseUrl';

const addOwnRecipe = createAsyncThunk(
  'recipes/addOwnRecipe',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/recipes/ownRecipes', data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default addOwnRecipe;
