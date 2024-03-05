import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactSliceReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

const rootReducer = combineReducers({
  contacts: contactSliceReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
