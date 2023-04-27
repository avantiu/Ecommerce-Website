let initialState = {
    carts: []
}

export let cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-CART":

            let itemIndex = state.carts.findIndex((item)=> item.id === action.payload.id)

            if(itemIndex >= 0){
                state.carts[itemIndex].quantity +=1 
            }else{
                let temp = {...action.payload, quantity:1}
                return {
                        ...state,
                        carts: [...state.carts, temp]
                    }
            }


        case "DLT-CART":
            let data = state.carts.filter((e)=>e.id !== action.payload)    
            return {
                ...state,
                carts: data
            }

        case "DEC-CART":
            let itemIndexDec = state.carts.findIndex((item)=> item.id === action.payload.id)
        
            if(state.carts[itemIndexDec].quantity >= 1){
                let dltitem = state.carts[itemIndexDec].quantity -= 1
              console.log(...state.carts, dltitem);

              return {
                ...state,
                carts: [...state.carts]
              }
            }else if(state.carts[itemIndexDec].quantity === 1){
                let data = state.carts.filter((e)=>e.id !== action.payload)    
            return {
                ...state,
                carts: data
            }
            }
              

        default:
            return state
    }
}