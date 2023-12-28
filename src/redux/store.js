import { configureStore } from '@reduxjs/toolkit';

// import { filterReducer } from './filter/filter-slice';
import { contactsReducer } from './contactSlice';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });
export const store = configureStore({
  reducer: contactsReducer,
});