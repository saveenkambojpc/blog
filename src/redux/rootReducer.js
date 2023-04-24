

import helperReducer from "./features/helper"
import blogReducer from "./features/blogs"


const rootReducer = {

    helper: helperReducer,
    blogs:blogReducer,
}



export default rootReducer;