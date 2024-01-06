import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'userFilter',
  initialState: {
    filter: '',
  },
  reducers: {
    addFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export default filterSlice.reducer;

export const filterReducer = filterSlice.reducer;
export const { addFilter } = filterSlice.actions;
