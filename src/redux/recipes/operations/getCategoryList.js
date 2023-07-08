import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../const/axiosBaseUrl';

const getCategoryList = createAsyncThunk(
  'recipes/getCategoryList',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/recipes/category-list');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default getCategoryList;
