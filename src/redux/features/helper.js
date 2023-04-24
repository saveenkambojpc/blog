import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    dialogObj: {
        logout: false
    }



}

const Helper = createSlice({
    name: 'helper',
    initialState,
    reducers: {
        setDialogObj: (state, action) => {
            state.dialogObj = action.payload
        }

    }
})

export const {setDialogObj } = Helper.actions

export default Helper.reducer