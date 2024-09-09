import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: (args: Record<string, any>) => ({
        url: "/product",
        method: "GET",
        params: args,
      }),
    }),

    createProduct: builder.mutation({
      query: (formData) => ({
        url: "/product/create",
        method: "POST",
        body: formData,
        // headers: "Content-Type- Multiple",
      }),
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useGetSingleProductQuery,
  useCreateProductMutation,
} = productApi;
