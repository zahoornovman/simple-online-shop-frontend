import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(

  'user/login', async (payload, {rejectWithValue}) => {
    try{
      const { data } = await axios.post("https://motion.propulsion-home.ch/backend/api/auth/token/", payload)
      return data;
    } catch (err) {
        return rejectWithValue(err.response.data)
    }
  }
)


const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: '',
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        token: '',
        refresh: '',
        loading: null,
        error: ''
      },
      reducers: {},
      extraReducers: {
        [loginUser.pending]: (state) => {
          state.loading = 'loading'
        },
        [loginUser.fulfilled]: (state, action) => {
          state.loading = 'loading complete'
          console.log(action);
          state.email = action.payload.user.email
          state.username = action.payload.user.loginUser
          state.password = action.meta.arg.password
          state.firstName = action.payload.user.first_name
          state.lastName = action.payload.user.last_name
          state.token = action.payload.access
          state.refresh = action.payload.refresh
        },
        [loginUser.rejected]: (state, action) => {
          state.error = action.payload.detail
          state.loading = 'Error loading'
        }
      }
    });



const reducer = userSlice.reducer;

export { reducer }