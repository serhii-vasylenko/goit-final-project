import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../const/axiosBaseUrl';

const addOwnRecipe = createAsyncThunk(
  'recipes/addOwnRecipe',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/recipes/ownRecipes', data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export default addOwnRecipe;
