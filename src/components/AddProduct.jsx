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
    <div className="flex items-center justify-around">
      <button className="p-2" onClick={handleDecrement}>-</button>
      <input
        className="w-14"
        type="text"
        value={quantity}
        onChange={(e) => {
          const newQuantity = Number(e.target.value);
          if (newQuantity >= 1) setQuantity(newQuantity); 
        }}
      />
      <button className="p-2" onClick={handleIncrement}>+</button>
      </div>
      <div onClick={handleAddToCart}><button >Add{isProductInCart ? 'ed' : ' to cart'}</button></div>
    </>
  );
}
