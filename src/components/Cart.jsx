import { useOutletContext } from "react-router-dom";
import Checkout from "./Checkout";
export default function Cart() {
  const { cart, removeFromCart } = useOutletContext();

  console.log('cart',cart);


  return (
    <>
    <div className="flex justify-around items-center gap-5 py-10">
        <div>
      {cart.length === 0 ? (
        <p className="text-xl text-gray-600 font-semibold">Cart is empty!</p>
      ) : (
        cart.map((product) => (
          <div
            className="w-full max-w-xl p-4"
            key={product.id}
          >
            <div className="border-t border-gray-500 pb-4 mb-4">
              <h2 className="text-xl font-bold text-gray-800">{product.title}</h2>
            </div>
  
            <div className="flex items-center justify-between">
             
              <div className="flex flex-col gap-2">
                <span className="text-lg font-semibold text-gray-700">
                  ${product.price * product.quantity}
                </span>
                <span className="text-sm text-gray-500">
                  Quantity: {product.quantity}
                </span>
                <button
                  className="mt-2 text-sm bg-red-500 text-white py-1 px-4 rounded-md hover:bg-red-600 transition duration-200"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </div>
  
             
              <div>
                <img
                  className="w-36 h-36 object-cover rounded-md"
                  src={product.image}
                  alt=""
                />
              </div>
            </div>
           
          </div>
          
        ))
        
      )}
      </div>
   <Checkout cart={cart}/>
      
    </div>
    
  </>
  
  );
}
