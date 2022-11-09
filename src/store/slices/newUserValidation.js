import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const newUserInfoValidation = createAsyncThunk(
    'userValidation', async (payload, {rejectWithValue}) => {
        try{
            console.log(payload)
            const { data } = 
            await axios.patch('https://motion.propulsion-home.ch/backend/api/auth/registration/validation/', payload)
            return data;
        } catch (err){
            return rejectWithValue(err.response.data)
        }
    }
);

const newUserValidation = createSlice({
    name: 'newUserValidation',
    initialState:{
        status: null,
        errorUserName: '',
        errorCode: ''

    },
    reducers: {},
    extraReducers:{
        [newUserInfoValidation.pending] : (state) => {
            state.status = 'loading'
        },
        [newUserInfoValidation.fulfilled] : (state, action) => {
            console.log(action)
            state.status = 'loading complete'
        },
        [newUserInfoValidation.rejected] : (state, action) => {
            //console.log(action)
            state.errorUserName = action.payload.username
            state.errorCode = action.payload.code
            state.status = 'status error'
        }
        
    }
});

const reducer = newUserValidation.reducer;

export { reducer }