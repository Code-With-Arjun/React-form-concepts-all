
// let totalData;
//action
const AddItemsData=(data)=>{
    // console.log(data)
    // totalData=data
return {
    type:"ADD_ITEMS__DATA",
    payload:data
}
}
const UpdatedItemsData=(data)=>{
    // console.log(data)
 return {
    type:"UPDATED_ITEMS_DATA",
    payload:data
 }
}
const UpdateItemsData=(data)=>{
    // console.log(data)
    return {
  type:"UPDATE_ITEMS_DATA",
  payload:data
    }
}

export {AddItemsData, UpdateItemsData,UpdatedItemsData}