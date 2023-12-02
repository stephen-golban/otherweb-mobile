import { userEndpoints } from './user/index';
import { authEndpoints } from './auth/index';
import { productsEndpoints } from './products/index';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// TODO: add this to .env
const BASE_URL = 'https://api.escuelajs.co/api/v1';

export const apiService = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    ...authEndpoints(builder),
    ...userEndpoints(builder),
    ...productsEndpoints(builder),
  }),
});

export const { useGetProductsQuery, useLoginMutation, useRegisterMutation, useGetProfileQuery, useUpdateUserMutation } = apiService;
