import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.user.token;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: ({pageSize, page, sortby_column, sort_type, search}) =>
        `v1/product/show?per_page=${pageSize}&page_no=${(page+1)}&search=${search}&sortby_column=${sortby_column}&sort_type=${sort_type}`,
    }),
  }),
});

export const { useGetProductQuery } = productApi;
