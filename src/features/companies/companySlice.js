import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    company: [],
    error: '',
}

export const companyFetch = createAsyncThunk('company/companyFetch', ()=>{
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response=>
            response.data.map((user)=> `${user.name} is from ${user.company.name} and is involved in ${user.company.catchPhrase}.`)
        )
})


const companySlice = createSlice({
    name: 'company',
    initialState,
    extraReducers: builder=>{
        builder.addCase(companyFetch.pending, (state)=>{
            state.loading=true
        })
        builder.addCase(companyFetch.fulfilled, (state, action)=>{
            state.loading = false
            state.company = action.payload
            state.error = ''
        })
        builder.addCase(companyFetch.rejected, (state, action)=>{
            state.loading = false
            state.company = []
            state.error = action.error.message
        })
    }

    
})

export default companySlice.reducer

