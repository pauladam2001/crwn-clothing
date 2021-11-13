import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN            // we don't need a payload here bcs. we don't use it
})