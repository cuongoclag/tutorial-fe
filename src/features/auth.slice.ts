import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requestApi from "../helpers/api";
import { RequestMethods } from "../enums/RequestMethod.enum";
import { resLogin } from "../types/login.type";

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

interface IState {
  access_token: string
  profile: {
    // address: string
    // created_at: string
    // dateOfBirth: string
    // email: string
    // firstName: string
    // id: string
    // lastName: string
    // password: string
    // phone1: number
    // phone2: number
    // refreshToken: string
    // role: {
    //   id: string
    //   roleName: string
    //   description: string
    //   created_at: string
    //   updated_at: string
    // };
    // updated_at: string
    [key:string]: any
  };
}
const initialState: IState = {
  access_token:
    JSON.parse(localStorage.getItem("access_token") as string) ?? "",
  profile: JSON.parse(localStorage.getItem("profile") as string) ?? {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.access_token = action.payload;
      localStorage.setItem("access_token", JSON.stringify(action.payload));
    },
    getProfile: (state, action: PayloadAction<string>) => {
      (state.profile as any) = action.payload;
      localStorage.setItem("profile", JSON.stringify(action.payload))
    },
  },
  // extraReducers(builder) {
  //     builder
  //         .addCase(login.fulfilled, (state, action) => {
  //             state.access_token = action.payload.access_token
  //         })
  // }
});

export const { setAccessToken, getProfile } = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
