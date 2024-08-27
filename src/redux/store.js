import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './reducers/themeReducer';

const store = configureStore({
    reducer: {
        theme : themeSlice,
    },
  });
  
  export default store;
  
//   // export const server = "http://127.0.0.1:8000/api/v1";
// //   export const server = "https://lms-server-4c06.onrender.com/api/v1";
//   export const server = "https://lms-server-yq5f.onrender.com/api/v1";
