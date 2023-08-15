import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./features/auth.slice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { authApi } from "./services/auth.service"
import { setupListeners } from "@reduxjs/toolkit/dist/query"

export const store = configureStore({
    reducer: {
        auth: authSlice,
        [authApi.reducerPath]: authApi.reducer
    },

    middleware(getDeafultMiddleware) {
        return getDeafultMiddleware().concat(authApi.middleware)
    }
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector