import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery =fetchBaseQuery({
    baseUrl:
})

const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery:
});
