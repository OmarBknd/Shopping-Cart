import { useState } from "react";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
AddProduct.propTypes = {
    productId : PropTypes.number,
    onAddToCart : PropTypes.func,
    onRemoveFromCart: PropTypes.func,
    cart : PropTypes.array,
}
export default function AddProduct({productId,}) {  
  const [quantity, setQuantity] = useState(1);
  const { cart, addToCart, removeFromCart} = useOutletContext()
  
  const isProductInCart = cart.find((item) => item.id === productId)
  function handleIncrement() { 
    setQuantity((prev) => prev + 1)
  }
  function handleDecrement() {
    if(quantity !== 0)
    setQuantity((prev) => prev + -1)
    }
 function handleAddToCart() {
      if(isProductInCart){
        removeFromCart(productId)
      }
      else{
        addToCart(productId, quantity); 
      }
     
    }
  
  return (
    <>
    <div className="flex items-center justify-around gap-2">
      <button
        className="p-1 bg-transparent rounded-md hover:bg-gray-500  transition duration-200"
        onClick={handleDecrement}
      >
        -
      </button>
      <input
        className="w-16 text-center  rounded-md px-2 py-1 focus:outline-none focus:bg-gray-500 "
        type="text"
        value={quantity}
        onChange={(e) => {
          const newQuantity = Number(e.target.value);
          if (newQuantity >= 1) setQuantity(newQuantity);
        }}
      />
      <button
        className="p-1 bg-transparent rounded-md hover:bg-gray-500  transition duration-200"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
    <div className="mt-3 ">
      <button
        className={`px-4 py-1 mb-2 font-bold rounded-md transition duration-200 ${
          isProductInCart
            ? "bg-red-500 text-white hover:bg-red-600 active:bg-red-700"
            : "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700"
        }`}
        onClick={handleAddToCart}
      >
        {isProductInCart ? "Added" : "Add"}
      </button>
    </div>
  </>
  
  );
}
