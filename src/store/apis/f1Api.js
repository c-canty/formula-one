import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const f1Api = createApi({
  reducerPath: 'f1',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://ergast.com/api/f1/'
  }),
  endpoints(builder) {
    return {
      fetchDrivers: builder.query({
        query: () => {
          return {
            url: '2024/drivers.json',
            method: 'GET',
          };
        },
      }),
      fetchConstructors: builder.query({
        query: () => {
          return {
            url: '2024/constructors.json',
            method: 'GET',
          };
        },
      }),
      fetchCircuits: builder.query({
        query: () => {
          return {
            url: '2024/circuits.json',
            method: 'GET',
          };
        },
      }),
      fetchLastResults: builder.query({
        query: () => {
          return {
            url: 'current/last/results.json',
            method: 'GET',
          };
        },
      })
    };
  },
});

console.log("f1Api: ", f1Api);

export const {
  useFetchDriversQuery,
  useFetchConstructorsQuery,
  useFetchCircuitsQuery,
  useFetchLastResultsQuery
} = f1Api;
export { f1Api };
