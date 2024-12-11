import { Link } from "react-router-dom"
import { ShoppingCartIcon } from "lucide-react"
export default function NavBar(){
   
    return(
        <>
        <nav className="w-full flex justify-between items-center px-8 py-2 bg-blue-500 shadow-md">
          
          <button className="text-white text-lg font-medium hover:underline">
            About
          </button>
      
         
          <Link to="/" className="text-white text-2xl font-bold tracking-wide">
            PixyShop
          </Link>
      
         
          <Link
            to="/cart"
            className="text-white text-lg font-medium hover:underline flex items-center gap-2"
          >
            <span>Cart</span>
           <ShoppingCartIcon/>
          </Link>
        </nav>
      </>
      
        
    )
}