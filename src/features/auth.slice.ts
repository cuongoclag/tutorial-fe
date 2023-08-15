import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import requestApi from '../helpers/api'
import { RequestMethods } from '../enums/RequestMethod.enum'
import { resLogin } from '../types/login.type';

// export const login = createAsyncThunk<
// resLogin,
// {
//     body: object;
// } | void
// >(
//     'login',
//     async (body, thunkApi) => {
//         try {
//             const res = await requestApi('/auth/login', RequestMethods.POST, body)
//             return res.data
//         } catch (error: any) {
//             return thunkApi.rejectWithValue(error.data)
//         }
//     }
// )
const initialState = {
    access_token: JSON.parse(localStorage.getItem('access_token') as string) ?? ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAccessToken: (state, action:PayloadAction<string>) => {
            state.access_token =  action.payload
            localStorage.setItem('access_token', JSON.stringify(action.payload))
        }
    },
    // extraReducers(builder) {
    //     builder
    //         .addCase(login.fulfilled, (state, action) => {
    //             state.access_token = action.payload.access_token
    //         })
    // }
})

export const { setAccessToken } = authSlice.actions

const authReducer = authSlice.reducer

export default authReducer