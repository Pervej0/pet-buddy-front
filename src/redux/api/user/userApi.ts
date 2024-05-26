import baseApi from "../baseApi";
import { tagTypes } from "../tag-types";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMyProfile: build.query({
      query: () => {
        return {
          url: "/profile",
          method: "GET",
        };
      },
      providesTags: [tagTypes.user, tagTypes.admin],
    }),
    getAllUser: build.query({
      query: () => {
        return {
          url: "/profiles",
          method: "GET",
        };
      },
      providesTags: [tagTypes.user, tagTypes.admin],
    }),
    updateUser: build.mutation({
      query: (data) => ({
        url: `/profile`,
        method: "PUT",
        contentType: "application/json",
        data,
      }),
      invalidatesTags: [tagTypes.admin, tagTypes.user],
    }),
    deleteUser: build.mutation({
      query: (id) => {
        return {
          url: `/profiles/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetMyProfileQuery,
  useUpdateUserMutation,
  useGetAllUserQuery,
  useDeleteUserMutation,
} = userApi;
