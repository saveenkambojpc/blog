import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    blog_arr: []



}

const Blog = createSlice({
    name: 'helper',
    initialState,
    reducers: {

        set_blog_arr: (state, action) => {
            state.blog_arr = action.payload
        }
    }
})

export const { set_blog_arr } = Blog.actions

export default Blog.reducer