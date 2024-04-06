import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { readPostData } from "../../services/firebaseDatabase.service";
import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

export const getPost = createAsyncThunk('auth/getPost', async (category : string) => {
    const post = await readPostData(category);
    return post.docs;
});

// Define a type for the slice state
interface PostState {
    loading: boolean;
    data : QueryDocumentSnapshot<DocumentData>[]
  }
  
  // Define the initial state using that type
  const initialState: PostState = {
    loading: true,
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
            state.loading = true
        });
        builder.addCase(getPost.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(getPost.rejected, state => {
            state.loading = true
        });
    }
})

export const { } = postSlice.actions
export default postSlice.reducer