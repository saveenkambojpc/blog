import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    blogs_obj: [],




}

const Blog = createSlice({
    name: 'helper',
    initialState,
    reducers: {

        set_blogs_obj: (state, action) => {
            state.blogs_obj = action.payload
        }
    }
})

export const { set_blogs_obj } = Blog.actions

export default Blog.reducer