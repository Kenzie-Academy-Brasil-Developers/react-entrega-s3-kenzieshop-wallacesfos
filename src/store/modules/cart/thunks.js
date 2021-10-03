import { addToCart } from "./actions";

export const addToCartThunk = (product) => (dispatch, getState) => {
    const list = JSON.parse(localStorage.getItem("cart")) || []

    const newList = [...list, product];

    localStorage.setItem("cart", JSON.stringify(newList))

    dispatch(addToCart(product))
}

export default addToCartThunk;