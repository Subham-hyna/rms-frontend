import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './reducers/themeReducer';
import areaSlice from './reducers/areaReducer'
import tableSlice from './reducers/tableReducer'
import categorySlice from './reducers/categoryReducer'
import itemSlice from './reducers/itemReducer'

const store = configureStore({
    reducer: {
        theme : themeSlice,
        area : areaSlice,
        table : tableSlice,
        category : categorySlice,
        item : itemSlice
    },
  });
  
export default store;
  
export const server = "http://127.0.0.1:8000/api/v1";
// //   export const server = "https://lms-server-4c06.onrender.com/api/v1";
//   export const server = "https://lms-server-yq5f.onrender.com/api/v1";
