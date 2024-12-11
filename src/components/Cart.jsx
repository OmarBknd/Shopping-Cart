import { useOutletContext } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart } = useOutletContext();

console.log(cart);


  return (
    <div>
      <h2>Cart</h2>
      
        <ul>
        <div className="flex flex-col gap-5">
        {cart.map((product) => (
          <div
            className=" w-40 h-60  flex flex-col items-center justify-around border rounded-md  "
            key={product.id}
          >
            <p>{product.title} </p>
            <span>${product.price}</span>
            <span>
             <p>{product.quantity}</p>
              <img className="w-10 h-10" src={product.image} alt="" />
            </span>
            <button onClick={()=> removeFromCart(product.id)}>Remove</button>
         
          </div>
        ))}
        
      </div>
        </ul>
      
    </div>
  );
}
