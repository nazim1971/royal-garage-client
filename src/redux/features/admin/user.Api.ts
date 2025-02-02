/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";
import { TUser } from "../auth/authSlice";


const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserByEmail: builder.query({
      query: (email) => ({
        url: `/auth/user/${email}`,
        method: "GET",
      }),
    }),

    resetUserPass: builder.mutation<
      any,
      { userData: Partial<TUser> }
    >({
      query: ({  userData }) => ({
        url: `/auth/reset-password`,
        method: "PUT",
        body: userData,
      }),
    }),
    
    updateUserName: builder.mutation<
      any,
      { email: string; userData: Partial<TUser> }
    >({
      query: ({ email, userData }) => ({
        url: `/auth/user/${email}`,
        method: "PUT",
        body: userData,
      }),
    }),

    getAllUsers: builder.query({
      query: () => ({
        url: "/auth/user",
        method: "GET",
      }),
    }),

    updateUserBlockedStatus: builder.mutation<
    any,
    { email: string; isBlocked: boolean }
  >({
    query: ({ email, isBlocked }) => ({
      url: `/auth/user/block-status`,
      method: "PATCH",
      body: {isBlocked, email },
    }),
  }),

  }),
});

export const { useGetUserByEmailQuery, useResetUserPassMutation, useUpdateUserNameMutation , useGetAllUsersQuery, useUpdateUserBlockedStatusMutation } = userApi;
