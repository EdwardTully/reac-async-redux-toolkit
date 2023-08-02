
import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../features/users/usersSlice'
import todosReducer from '../features/todos/todoSlice'
import companyReducer from '../features/companies/companySlice'
import postsReducer from '../features/posts/postsSlice'
import albumsReducer from '../features/albums/albumsSlice'

const store = configureStore({
    reducer: {
        users : userReducer,
        todos : todosReducer,
        company: companyReducer,
        posts: postsReducer,
        albums: albumsReducer,
    }
})

export default store