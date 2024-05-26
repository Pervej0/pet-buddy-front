import axiosBaseQuery from "@/helpers/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "./tag-types";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.BACK_END_URL as string,
  }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});

export default baseApi;
