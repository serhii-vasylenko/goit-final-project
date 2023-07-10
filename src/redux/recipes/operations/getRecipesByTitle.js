import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../const/axiosBaseUrl';

const getRecipesByTitle = createAsyncThunk(
  'recipes/getRecipesByTitle',
  async (title, thunkAPI) => {
    try {
      const response = await axios.get(`/search/q=${title}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default getRecipesByTitle;
