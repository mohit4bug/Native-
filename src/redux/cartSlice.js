import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: [],
    quantity: 0,
    subTotal: 0,
}

export const cartSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isExists = state.cart.find(item => item.id === action.payload.id)
            state.subTotal += action.payload.price

            if (isExists) {
                isExists.quantity += 1
            }
            else {
                state.quantity += 1
                state.cart.push({ ...action.payload, quantity: 1 })
            }

            if (state.subTotal > 500) {
                state.deliveryCharge = 0
            }
            else {
                state.deliveryCharge += (action.payload.price / 100) * 10
            }

        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload.id)
            item.quantity += 1
            state.subTotal += action.payload.price
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload.id)
            if (item.quantity > 1) {
                item.quantity -= 1
                state.subTotal -= action.payload.price
            }
        },

    }
})

export const { addToCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
