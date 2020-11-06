// import { Product } from "./features/Product/product";
import { createSlice as createCartSlice } from "@reduxjs/toolkit";

export const cartSlice = createCartSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
  //   add: (state, action) => {
  //     state.items = action.payload;
  //   },
  // },
  addToTheCart: (state, action) => {
    state.value += action.payload;
  }
}});
//          A C T I O N S   
export const { addToTheCart } = cartSlice.actions;


export const addToCart = () => (dispatch) => {
  // axios
  //   .get("http://localhost:3001/products")
  //   .then((item) => dispatch(display(item.data)));
};

const selectCart = (state) => state.items.products;