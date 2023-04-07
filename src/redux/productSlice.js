import { createSlice } from "@reduxjs/toolkit";
import products from '../data/products'


const initialState = {
    products: products,
    selectedProduct: products[0]
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload
        }
    }
})

export const { setSelectedProduct } = productSlice.actions;
