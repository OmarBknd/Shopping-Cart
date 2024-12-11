import { useEffect } from "react";
import { useState } from "react";
import DisplayData from "./DisplayData";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";

DataRequest.propTypes = {
    addToCart : PropTypes.func
}
export default function DataRequest(){
    const {data, setData, addToCart, removeFromCart} = useOutletContext()

    
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const dataFetch = async () => {
        try{ 
         const response = await fetch ('https://fakestoreapi.com/products')
            if(!response.ok){
                throw new Error(`HTTP error: Status ${response.status}`);
                
            }
        
         let result = await response.json()
            
         setData(result)
         setError(null)
        } catch(error){
            setError(error.message)
            setData(null)
        }finally{
            setLoading(false)
        }
    };
    
    
        dataFetch();
      }, [setData]);
     
      return(
        <>
        <div>
        {loading && (<div>Loading ...</div>)}
        {error && (<div>{error}</div>)}
        </div>
           
           
            <DisplayData
            addToCart={(productId, quantity) => addToCart(productId, quantity, data)}
            removeFromCart={removeFromCart}
            data={data}
            />
           
        </>
      )
      
 

}