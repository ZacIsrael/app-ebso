import React from 'react';
import "./Featured.css";


// export default function Featured(props) {

//     const displayProducts = (props) => {
//         const {menu, products} = props;
//         if(products.length > 0){
//             return(
//                 products.map((product, index) => {
//                     console.log(product)
//                     return(
//                         <div className="featProduct">
//                             <p className="product_title">{product.displayName} </p>
//                             <p className= "product_price">{product.price}</p>
//                         </div>
//                     )
//                 })
//             )
//         } else{
//             return (<h3>No products</h3>)
//         }
//     }



// }



function Featured() {
  
  //const products =  ProductService.getProducts()[0];
 
    return (
        <div className="featProduct">
            <p className="product_title">
               
            </p>
            <p className= "product_price">
                <small>$</small>
              
            </p>
           
    
        {}
        <button className="button"> Add to cart</button>

        </div>

    );
}

export default Featured;

