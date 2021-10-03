import { addToCart } from "./actions"

const def = JSON.parse(localStorage.getItem("cart")) || []

const cartReducer = (state = def, action) => {
    console.log(action)
    switch(action.type){
        case addToCart:
            const {product} = action
            return [...state, product]
        default:
            return state
    }
} 

export default cartReducer;