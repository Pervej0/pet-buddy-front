import baseApi from "../baseApi";
import { tagTypes } from "../tag-types";

const adoptionRequestApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAdoptionRequest: build.mutation({
      query: (data) => {
        return {
          url: "/adoption-requests",
          method: "POST",
          data,
        };
      },
      invalidatesTags: [tagTypes.adoptionRequest],
    }),
    getAllAdoptionRequest: build.query({
      query: (args) => {
        return {
          url: "/adoption-requests",
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
      providesTags: [tagTypes.adoptionRequest],
    }),
    getMyAdoptionRequests: build.query({
      query: () => {
        return {
          url: `/adoption-requests/my-request`,
          method: "GET",
        };
      },

      providesTags: [tagTypes.adoptionRequest],
    }),
    updateAdoptionRequest: build.mutation({
      query: (data) => {
        console.log(data.id, data.updateData, "pypypypy");
        return {
          url: `/adoption-requests/${data.id}`,
          method: "PUT",
          contentType: "application/json",
          data: data.updateData,
        };
      },
      invalidatesTags: [tagTypes.adoptionRequest],
    }),
    deleteAdoptionRequest: build.mutation({
      query: (id) => ({
        url: `/adoption-requests/${id}`,
        method: "DELETE",
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
  useDeleteAdoptionRequestMutation,
} = adoptionRequestApi;
