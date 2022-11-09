import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


export const newUser = createAsyncThunk(
    'newUser/registerUser', async (payload, {rejectWithValue}) => {
        try{
            const { data } = await axios.post('https://motion.propulsion-home.ch/backend/api/auth/registration/', payload)
            return data;
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
);


const registerUser = createSlice({
    name:'registerUser',
    initialState: {
        email: '',
        loading: null,
        error: '',

    },
    reducers: {},
    extraReducers: {
        [newUser.pending] : (state) => {
            state.loading = 'loading'
        },
        [newUser.fulfilled] : (state, action) => {
            console.log(action)
            state.email = action.meta.arg.email
            state.loading = 'loading complete'
        },
        [newUser.rejected] : (state, action) => {
            //console.log(action)
            state.error = action.payload.email
            state.loading = 'Error Loading'
        }
    }
});

const reducer = registerUser.reducer;

export { reducer }



