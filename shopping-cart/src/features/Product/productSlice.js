import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

// const GET_PRODUCTS = "Products/GET_PRODUCTS
//         S L I C E 
export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
//         R E D U C E R S 
  reducers: {
    display: (state, action) => {
      state.products = action.payload;
    },
  },
});
//         A C T I O N S   
export const { display } = productSlice.actions;
//         DISPATCH  ACTION  TO  REDUCER  AFTER  GET
export const getProduct = () => (dispatch) => {
  axios
    .get("http://localhost:3001/products")
    .then((item) => dispatch(display(item.data)));
};

export default productSlice.reducer;

// const selectProduct = (state) => state.products.products
