import { Link } from "react-router-dom"
export default function NavBar(){
   
    return(
        <>
        <nav className="w-full flex justify-around">
            <button>About</button>
            <Link to='/'>  <h2 className="">PixyShop</h2></Link>
      <Link to='/cart'>  <button>Cart</button></Link>
        </nav>
            

        </>
        
    )
}