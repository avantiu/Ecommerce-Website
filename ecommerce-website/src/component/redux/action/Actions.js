export let add = (item)=>{
    return {
        type: "ADD-CART",
        payload: item
    }
}

//Remove Items
export let remove = (id)=>{
    return {
        type: "DLT-CART",
        payload: id
    }
}

//decrement
export let DEC = (item)=>{
    return {
        type: "DEC-CART",
        payload: item
    }
}