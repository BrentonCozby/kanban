import { combineReducers } from 'redux'

import columnsReducer from './columns.js'

const rootReducer = combineReducers({
    columns: columnsReducer
})

export default rootReducer
