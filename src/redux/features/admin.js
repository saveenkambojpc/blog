import { createSlice } from '@reduxjs/toolkit'

const initialState = {


    activeTab: 0,

    feedbackObj: {}


}

const Admin = createSlice({
    name: 'admin',
    initialState,
    reducers: {

        setActiveTab: (state, action) => {
            state.activeTab = action.payload
        },
        setFeedbackObj: (state, action) => {
            state.feedbackObj = action.payload
        }
    }
})

export const { setActiveTab, setFeedbackObj } = Admin.actions

export default Admin.reducer