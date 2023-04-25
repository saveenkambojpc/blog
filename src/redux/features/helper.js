import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    dialogObj: {
        logout: false
    },
    is_loading: false



}

const Helper = createSlice({
    name: 'helper',
    initialState,
    reducers: {
        setDialogObj: (state, action) => {
            state.dialogObj = action.payload
        },
        set_is_loading:(state,action) => {
            state.is_loading= action.payload
        }

    }
})

export const { setDialogObj, set_is_loading } = Helper.actions

export default Helper.reducer