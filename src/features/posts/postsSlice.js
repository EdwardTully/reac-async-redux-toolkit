import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    posts: [],
    error: ''

}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', ()=>{
    return axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response)=> response.data)
})

const postsSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    extraReducers: 
        (builder)=>{
            builder.addCase(fetchPosts.pending, (state)=>{
                state.loading = true
            })
            builder.addCase(fetchPosts.fulfilled, (state, action)=>{
                state.loading =false
                state.posts = action.payload
                state.error = ''
            })
            builder.addCase(fetchPosts.rejected, (state, action)=>{
                state.loading = false
                state.posts = []
                state.error = action.error.message
            })
        }
        
        
    }

)

export default postsSlice.reducer
