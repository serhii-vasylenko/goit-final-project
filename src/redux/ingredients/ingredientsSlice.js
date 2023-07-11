import { createSlice } from '@reduxjs/toolkit';
import { ingredientOperations } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  ingredientsList: null,
  isLoading: false,
  error: null,
};
const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(ingredientOperations.getIngredientsList.pending, handlePending)
      .addCase(
        ingredientOperations.getIngredientsList.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.ingredientsList = action.payload.data.ingredients;
        }
      )
      .addCase(ingredientOperations.getIngredientsList.rejected, handleRejected);
  },
});

export default ingredientsSlice.reducer;
