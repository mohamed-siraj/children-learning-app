import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { deletePostData, readPostData } from "../../services/firebaseDatabase.service";
import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

export const getPost = createAsyncThunk('auth/getPost', async (category: string) => {
    const post = await readPostData(category);
    return post.docs;
});

export const removePost = createAsyncThunk('auth/removePost', async (id: string) => {
    return await deletePostData(id);
});

// Define a type for the slice state
interface PostState {
    loading: boolean;
    deleteItem: boolean;
    data: QueryDocumentSnapshot<DocumentData>[]
}

// Define the initial state using that type
const initialState: PostState = {
    loading: true,
    deleteItem: false,
    data: []
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: builder => {

        /**
         * get post
         */
        builder.addCase(getPost.pending, state => {
            state.loading = true;
            state.deleteItem = false;
        });
        builder.addCase(getPost.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.deleteItem = false;
        });
        builder.addCase(getPost.rejected, state => {
            state.loading = true;
            state.deleteItem = false;
        });

        /**
         * remove post
         */
        builder.addCase(removePost.pending, state => {
            state.deleteItem = false
        });
        builder.addCase(removePost.fulfilled, (state, action) => {
            state.deleteItem = true;
        });
        builder.addCase(removePost.rejected, state => {
            state.deleteItem = false
        });
    }
})

export const { } = postSlice.actions
export default postSlice.reducer