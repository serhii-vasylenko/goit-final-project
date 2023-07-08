import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../const/axiosBaseUrl';

const getMainPageRecipes = createAsyncThunk(
  'recipes/getMainPageRecipes',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/recipes/main-page');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default getMainPageRecipes;
