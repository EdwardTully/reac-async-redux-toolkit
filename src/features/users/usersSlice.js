
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

//step one, initial state and the three standard keys
const initialState = {
   loading: false,
   users: [],
   error: ''
}
//step three create the asynchronous function that fetches the data
//createAsyncThunk has two parameters: action name, and the call back that gets the payload.  the asyncthunk
//automatically returns lifecycle: pending, fulfilled or rejected action types.  we can listen for these and make state changes using 
//the extraReducers.  in the extraReducers builder function, addCase manage the state based on lifecycle.  addCase takes two parameters:
//the the lifecycle of the action and a function designed to update the state for that lifecycle.

export const fetchUsers = createAsyncThunk('user/fetchUsers', ()=>{
    return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.data)
})


//step two, make the slice with createSlice, name, initial state and the extrareducer
const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder)=> {
        builder.addCase(fetchUsers.pending, (state)=>{
            state.loading=true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action)=>{
            state.loading = false
            state.users=action.payload
            state.error = ''
            
        })
        builder.addCase(fetchUsers.rejected, (state, action)=>{
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    },

})
export default userSlice.reducer
