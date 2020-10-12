// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";


// export function Cart() {
//   // const selectCart = (state) => state.items.products;
//   const products = useSelector(selectCart);
//   const dispatch = useDispatch()
//   useEffect(() => {
//     dispatch(getCart());
//   }, []);
//   return (
//     <div className="cartDiv">
//       {/* <ul className="productContainer">
//         {products.map((item) => (
//           <li className="productInfo">
//             <span className="freeShippingLabel">Free shipping</span>
//             <img className="itemImage" src={item.img.normal}/>
//             <span className="itemTitle">{item.title}</span> 
//             <span className="yellowHr"></span>
//             <div className="cost">
//               <span className="currency">{item.currencyFormat}</span>
//               <span className="price">{item.price}</span>
//             </div>
//             <button className="addToCartBtn" onClick={() => dispatch(addToCart())}type="submit" value='submit'>Add to cart</button>
//           </li>
//         ))}
//       </ul> */}
//     </div>
//   );
// }
