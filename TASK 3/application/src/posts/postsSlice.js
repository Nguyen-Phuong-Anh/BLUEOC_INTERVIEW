import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return res.data;
});

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        value: {}
    },
    reducers: {
        addPost(state, action) {
            state.value.unshift(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchPosts.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.value = action.payload; // Assign the fetched posts
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message; // Capture the error
        });

    }
})

export const { addPost } = postsSlice.actions
export const selectPosts = (state) => state.posts.value
export default postsSlice.reducer