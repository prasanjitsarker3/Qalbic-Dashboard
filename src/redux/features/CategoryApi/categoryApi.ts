import { baseApi } from "../../api/baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategory: builder.query({
      query: (args: Record<string, any>) => ({
        url: "/category",
        method: "GET",
        params: args,
      }),
    }),
    createBike: builder.mutation({
      query: (bikeInfo) => ({
        url: "/bikes/create",
        method: "POST",
        body: bikeInfo,
      }),
    }),
    updateBikeInfo: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/bikes/${id}`,
        method: "PUT",
        body: updatedData,
      }),
    }),
    // singleBikeInfo: builder.query({
    //   query: ({ id }) => ({
    //     url: `/bikes/${id}`,
    //     method: "GET",
    //   }),
    // }),
    // deleteBike: builder.mutation({
    //   query: ({ id }) => ({
    //     url: `/bikes/${id}`,
    //     method: "DELETE",
    //   }),
    // }),

    // bulkDeleteBike: builder.mutation({
    //   query: (bikeInfo) => ({
    //     url: "/bikes/bulkDelete",
    //     method: "POST",
    //     body: bikeInfo,
    //   }),
    // }),
  }),
});

export const {
  useCreateBikeMutation,
  useGetAllCategoryQuery,
  useUpdateBikeInfoMutation,
  // useSingleBikeInfoQuery,
  // useDeleteBikeMutation,
  // useBulkDeleteBikeMutation,
} = categoryApi;
