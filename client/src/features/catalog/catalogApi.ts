import { createApi } from '@reduxjs/toolkit/query/react';
import { Product } from '../../app/models/product';
import { baseQueryWithErrHandling } from '../../app/api/baseApi';
import { ProductParams } from '../../app/models/productParams';
import { ignoreEmptyFilters } from '../../lib/util';
import { Pagination } from '../../app/models/pagination';

export const catalogApi = createApi({
  reducerPath: 'catalogApi',
  baseQuery: baseQueryWithErrHandling,
  endpoints: (builder) => ({
    fetchProducts: builder.query<
      { items: Product[]; pagination: Pagination },
      ProductParams
    >({
      query: (productParams) => {
        return {
          url: 'products',
          params: ignoreEmptyFilters(productParams),
        };
      },
      transformResponse: (items: Product[], meta) => {
        const paginationHeader = meta?.response?.headers.get('Pagination');
        const pagination = paginationHeader
          ? JSON.parse(paginationHeader)
          : null;
        return { items, pagination };
      },
    }),
    fetchProductDetails: builder.query<Product, number>({
      query: (productId) => `products/${productId}`,
    }),
    fetchFilters: builder.query<{ brands: string[]; types: string[] }, void>({
      query: () => 'products/filters',
    }),
  }),
});

export const {
  useFetchProductDetailsQuery,
  useFetchProductsQuery,
  useFetchFiltersQuery,
} = catalogApi;
