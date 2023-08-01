import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    todos: [],
    error: ''
}

export const fetchTodos = createAsyncThunk('todo/fetchTodos', ()=>{
    return axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .then(response=>response.data.map((todo)=>{
        if(todo.completed === false){
            return todo.title
        }else{
            return `***Thank you for completing: ${todo.title} User ${todo.userId}`
        }
    }))
})


const todosSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchTodos.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(fetchTodos.fulfilled, (state, action)=>{
            state.loading = false
            state.todos = action.payload
            state.error = ''
        })
        builder.addCase(fetchTodos.rejected, (state, action)=>{
            state.loading = false
            state.todos = []
            state.error = action.error.message
        })
    }
})
export default todosSlice.reducer

