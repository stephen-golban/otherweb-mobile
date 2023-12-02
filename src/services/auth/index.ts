import type { User } from '../user/type';
import type { LoginRequest, LoginResponse, RegisterRequest } from './type';
import type { EndpointBuilder } from '../type';

export const authEndpoints = (builder: EndpointBuilder) => {
  return {
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: credentials => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),

    register: builder.mutation<User, RegisterRequest>({
      query: newUser => ({
        url: '/users',
        method: 'POST',
        body: newUser,
      }),
    }),
  };
};
