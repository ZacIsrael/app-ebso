// import React from 'react';
// import "./Featured.css";
// import {useStateValue} from "./StateProvider";
//
// function Featured({id, title, image, price}) {
//     const [{}, dispatch ] = useStateValue();
//
//     const addToBasket = () => {
//         dispatch({
//             type:"ADD_TO_BASKET",
//             item: {
//                 id: id,
//                 title: title,
//                 image: image,
//                 price: price,
//
//             },
//         });
//
//
//     };
//     return (
//         <div className="featProduct">
//
//
//             <img src={image} alt="" />
//
//
//
//             <p className="product_title">
//                 {title}
//             </p>
//             <p className= "product_price">
//                 <small>$</small>
//                 <strong>{price}</strong>
//             </p>
//
//             <button onClick= {addToBasket}> Add to cart </button>
//
//
//         </div>
//
//     );
// }
//
// export default Featured;