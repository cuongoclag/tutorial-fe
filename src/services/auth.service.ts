import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { resLogin } from '../types/login.type'
import { User } from '../types/user.type'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: import.meta.env.VITE_API_URL, 
        prepareHeaders: (headers) => {
        // If we have a token set in state, let's assume that we should be passing it.
        headers.set('Authorization', `Bearer ${JSON.parse(localStorage.getItem('access_token') as string)}`);
        return headers;
        }, 
    }),
    endpoints: build => ({
        login: build.mutation<resLogin, void>({
            query: (body) => ({
                url: 'auth/login',
                method: 'POST',
                body,
            }),
        }),
        getUser: build.query<User, void>({
            query: () => 'auth/user/profile'
        })
    })
})

export const { useLoginMutation, useGetUserQuery } = authApi