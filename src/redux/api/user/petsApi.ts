import baseApi from "../baseApi";

const petsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
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
      providesTags: [],
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
  }),
});

export const { useGetAllPetsQuery, useGetSinglePetQuery } = petsApi;
