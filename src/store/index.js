import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { f1Api } from './apis/f1Api'; // Changed import to f1Api


export const store = configureStore({
  reducer: {
    [f1Api.reducerPath]: f1Api.reducer, // Updated reducer reference to f1Api
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(f1Api.middleware); // Updated middleware to use f1Api.middleware
  }
});

setupListeners(store.dispatch);

// Export hooks for accessing F1 API queries
export {
  useFetchDriversQuery,
  useFetchConstructorsQuery,
  useFetchCircuitsQuery,
  useFetchLastResultsQuery
} from './apis/f1Api'; // Updated export to f1Api
