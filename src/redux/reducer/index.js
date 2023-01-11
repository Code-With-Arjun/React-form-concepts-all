



const AddItemsReducer=(state=[],action)=>{
    switch(action.type){
        case "ADD_ITEMS__DATA":
            return [...state,action.payload]
        default:
            return state;
    }
}

const UpdatedItemsReducer=(state=[],action)=>{
switch(action.type){
    case "UPDATED_ITEMS_DATA":
        return action.payload
    default:
        return state;
}
}
const UpdateItemsReducer=(state=[],action)=>{
    switch(action.type){
        case "UPDATE_ITEMS_DATA":
            return action.payload
        default:
            return state;
    }
}

export {AddItemsReducer,UpdateItemsReducer,UpdatedItemsReducer}