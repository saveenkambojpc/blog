

import helperReducer from "./features/helper"
import blogReducer from "./features/blogs"
import adminReducer from "./features/admin"


const rootReducer = {

    helper: helperReducer,
    blogs:blogReducer,
    admin:adminReducer
}



export default rootReducer;