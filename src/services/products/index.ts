import type { Product } from './type';
import type { EndpointBuilder } from '../type';

export const productsEndpoints = (builder: EndpointBuilder) => {
  return {
    getProducts: builder.query<Product[], void>({
      query: () => '/products',
    }),
  };
};
