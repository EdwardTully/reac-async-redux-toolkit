import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    albums: [],
    error: '',
}

export const fetchAlbums = createAsyncThunk("albums/fetchAlbums", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/albums")
    .then((response) =>
      response.data)//.map((ea) => {
       // if (ea.userId === 3 || ea.userId ===5) {
         // return `Provided by ${ea.userId}, id = ${ea.id}, //entitled ${ea.title}`;
       // } else {
          //  return 'Album not used'
       // }
    //  })
   // );
   //This logic is moved to the view component, the album array take all the data here and the sorting happens in AlbumView
});
const albumsSlice = createSlice({
    name: 'albums',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchAlbums.pending,(state)=>{
            state.loading = true

        })
        builder.addCase(fetchAlbums.fulfilled,(state, action)=>{
            state.loading = false
            state.albums = action.payload
            state.error = ''
        })
        builder.addCase(fetchAlbums.rejected, (state, action)=>{
            state.loading = false
            state.albums = []
            state.error = action.error.message
        })
    }
})

export default albumsSlice.reducer
