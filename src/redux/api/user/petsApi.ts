import baseApi from "../baseApi";
import { tagTypes } from "../tag-types";

const petsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPet: build.mutation({
      query: (data) => {
        return {
          url: "/pets",
          method: "POST",
          contentType: "multipart/form-data",
          data,
        };
      },
      invalidatesTags: [tagTypes.pets],
    }),
    getAllPets: build.query({
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
      providesTags: [tagTypes.pets],
    }),
    getSinglePet: build.query({
      query: (id) => {
        return {
          url: `/pets/${id}`,
          method: "GET",
        };
      },

      providesTags: [],
    }),
    updatePet: build.mutation({
      query: (data) => ({
        url: `/pets/${data.id}`,
        method: "PUT",
        contentType: "application/json",
        data: data.updatedData,
      }),
      invalidatesTags: [tagTypes.pets],
    }),
  }),
});

export const {
  useUpdatePetMutation,
  useCreatePetMutation,
  useGetAllPetsQuery,
  useGetSinglePetQuery,
} = petsApi;
