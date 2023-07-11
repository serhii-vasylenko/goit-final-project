import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../const/axiosBaseUrl';

const getRecipesById = createAsyncThunk(
  'recipes/getRecipesById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default getRecipesById;
