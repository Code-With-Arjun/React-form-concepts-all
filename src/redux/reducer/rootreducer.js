
import { AddItemsReducer } from "./index"
import {  UpdateItemsReducer } from "./index"
import { UpdatedItemsReducer } from "./index"
import {combineReducers} from 'redux'

const RootReducer=combineReducers({
    AddItemsReducer,
    UpdateItemsReducer,
    UpdatedItemsReducer
})

export default RootReducer