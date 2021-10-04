import { addToCart } from "./actions";

export const addToCartThunk = (product) => (dispatch) => {
    const list = JSON.parse(localStorage.getItem("cart")) || []

    list.push(product)

    //const newList = [...list, product];

    localStorage.setItem("cart", JSON.stringify(list))

    dispatch(addToCart(product))
}

export default addToCartThunk;