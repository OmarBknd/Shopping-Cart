import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavBar from "./NavBar";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([])

  const addToCart = (productId, quantity) => {
    const product = data.find(item => item.id === productId);
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productId);
      if (existingProduct) {
        
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      return [...prevCart, { ...product, quantity }];
    });
   
  };
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item)=> item.id !== productId))
  }
  

  return (
    <div>
    
      <NavBar />
      
      
      <Outlet context={{data, setData, cart, addToCart, removeFromCart}} />
    </div>
  );
}
