import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filterSlice from './filterSlice';

export const store = configureStore({
  reducer: {
    userContacts: contactsReducer,
    userFilter: filterSlice,
  },
});
