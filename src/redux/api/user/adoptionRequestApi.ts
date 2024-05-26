import baseApi from "../baseApi";
import { tagTypes } from "../tag-types";

const adoptionRequestApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAdoptionRequest: build.mutation({
      query: (data) => {
        return {
          url: "/adoption-request",
          method: "POST",
          data,
        };
      },
      invalidatesTags: [tagTypes.adoptionRequest],
    }),
    getAllAdoptionRequest: build.query({
      query: (args) => {
        return {
          url: "/pets",
          method: "GET",
          params: args,
        };
      },
      transformResponse: (response: any) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: [],
    }),
    getMyAdoptionRequests: build.query({
      query: (id) => {
        return {
          url: `/pets`,
          method: "GET",
        };
      },

      providesTags: [],
    }),
    updateAdoptionRequest: build.mutation({
      query: (data) => ({
        url: `/adoption-requests/${data.id}`,
        method: "PUT",
        contentType: "application/json",
        data: data.updatedData,
      }),
      invalidatesTags: [tagTypes.adoptionRequest],
    }),
  }),
});

export const {
  useCreateAdoptionRequestMutation,
  useGetAllAdoptionRequestQuery,
  useGetMyAdoptionRequestsQuery,
  useUpdateAdoptionRequestMutation,
} = adoptionRequestApi;
