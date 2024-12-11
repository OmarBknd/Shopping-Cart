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
     <div className="w-full flex flex-wrap justify-center pt-20 gap-8">
  {data.map((product) => (
    <div
      className="w-56 p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-between border border-gray-200"
      key={product.id}
    >
      <div className="w-full flex justify-center mb-3">
        <img
          className="w-24 h-24 object-contain"
          src={product.image}
          alt=""
        />
      </div>
      <p className="w-full text-sm font-medium text-gray-800 p-2 truncate">
        {product.title}
      </p>
      <span className="text-lg font-semibold text-blue-500 mb-3">
        ${product.price}
      </span>
      
        <AddProduct productId={product.id} />
      
    </div>
  ))}
</div>

    </>
  );
}
