import { EndpointBuilder } from '../type';
import { UpdateUserRequest, User } from './type';

export const userEndpoints = (builder: EndpointBuilder) => {
  return {
    getProfile: builder.query<User, string>({
      query: accessToken => ({
        url: '/auth/profile',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
    updateUser: builder.mutation<User, UpdateUserRequest>({
      query: updateData => ({
        url: `/users/${updateData.id}`,
        method: 'PUT',
        body: updateData,
      }),
    }),
  };
};
