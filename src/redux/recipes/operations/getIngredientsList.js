import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../const/axiosBaseUrl';

const getIngredientsList = createAsyncThunk(
  'recipes/getIngredientsList',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/ingredients/list');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default getIngredientsList;
