import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setToken = createAsyncThunk('auth/setToken', async (token: string) => {
    await AsyncStorage.setItem('token', token);
    return true;
});

export const getToken = createAsyncThunk('auth/getToken', async () => {
    const token = await AsyncStorage.getItem('token');
    return token;
});

export const remove = createAsyncThunk('auth/removew', async () => {
    await AsyncStorage.removeItem('token');
    return true;
});

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuth: false,
        token: ""
    },
    reducers: {},
    extraReducers: builder => {

        /**
         * set token
         */
        builder.addCase(setToken.pending, state => {
            state.isAuth = false
        });
        builder.addCase(setToken.fulfilled, (state, action) => {
            state.isAuth = true
        });
        builder.addCase(setToken.rejected, state => {
            state.isAuth = false
        });

        /**
         * get token
         */
        builder.addCase(getToken.pending, state => {
            state.isAuth = false
        })
        builder.addCase(getToken.fulfilled, (state, action) => {
            if (action.payload) {
                state.token = String(action.payload);
                state.isAuth = true;
            } else {
                state.isAuth = false;
            }
        })
        builder.addCase(getToken.rejected, state => {
            state.isAuth = false
        })

        /**
         * remove token
         */
        builder.addCase(remove.pending, state => {
            state.isAuth = false
        })
        builder.addCase(remove.fulfilled, (state, action) => {
            if (action.payload) {
                state.isAuth = false;
            } else {
                state.isAuth = true;
            }
        })
        builder.addCase(remove.rejected, state => {
            state.isAuth = false
        })
    }
})

export const { } = authSlice.actions
export default authSlice.reducer