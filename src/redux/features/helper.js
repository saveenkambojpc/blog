import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    dialogObj: {
        logout: false
    },
    is_loading: false,
    customAlert: {
        visibility: false,
        message: "",
        type: ""
    },
    is_authenticated: false,



}

const Helper = createSlice({
    name: 'helper',
    initialState,
    reducers: {
        setDialogObj: (state, action) => {
            state.dialogObj = action.payload
        },
        set_is_loading: (state, action) => {
            state.is_loading = action.payload
        },
        setCustomAlert: (state, action) => {
            state.customAlert = action.payload
        },
        setIsAuthenticated: (state, action) => {
            state.is_authenticated = action.payload
        }

    }
})

export const { setDialogObj, set_is_loading, setCustomAlert, setIsAuthenticated } = Helper.actions

export default Helper.reducer