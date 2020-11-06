import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "./productSlice";
import { addToCart } from "../cart/cartSlice";
// import { getProduct, selectProduct} from "./productSlice";
// css
//          THIS SHOULD BE MOVED TO THE APP.JS

export function Product() {
  const selectProduct = (state) => state.products.products;
  const products = useSelector(selectProduct);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProduct());
  }, []);
  return (
    <div className="productDiv">
      <ul className="productContainer">
        {products.map((item) => (
          <li className="productInfo">
            <span className="freeShippingLabel">Free shipping</span>
            <img className="itemImage" src={item.img.normal}/>
            <span className="itemTitle">{item.title}</span> 
            <span className="yellowHr"></span>
            <div className="cost">
              <span className="currency">{item.currencyFormat}</span>
              <span className="price">{item.price}</span>
            </div>
            <button className="addToCartBtn" onClick={() => dispatch(addToCart())} type="submit" value='submit'>Add to cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// {console.log(item.price[0].length)}
// function () {
//   switch(item.price.length){
//     case 4:
//       return item.price + '0';
//       break;
//     case 3:
//       return item.price + '0';
//       break;
//       case 2:
//       return item.price + '.00';
//       break;
//     case 1:
//       return item.price + '.00';
//       break;
//   } 
// }
