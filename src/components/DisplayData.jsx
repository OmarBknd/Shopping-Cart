//import { useState } from "react";
import PropTypes from "prop-types";
import AddProduct from "./AddProduct";



DisplayData.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
    }),
  ),
  addToCart:PropTypes.func,
  removeFromCart:PropTypes.func,
 
};
export default function DisplayData({ data,  }) {
  
 

  return (
    <>
      <div className="flex flex-col gap-5">
        {data.map((product) => (
          <div
            className=" w-40 h-60  flex flex-col items-center justify-around border rounded-md  "
            key={product.id}
          >
            <p>{product.title} </p>
            <span>${product.price}</span>
            <span>
             
              <img className="w-10 h-10" src={product.image} alt="" />
            </span>
         <span> <AddProduct
         
         productId={product.id}
        
         /></span>
         
          </div>
        ))}
        
      </div>
    </>
  );
}
