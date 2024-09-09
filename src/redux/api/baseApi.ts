import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://e-com-server-wine.vercel.app/api/v1",
    credentials: "include",
  }),
  tagTypes: ["category", "course", "enroll", "sales"],
  endpoints: () => ({}),
});
