

import Cart from "./Cart";
import Home from "./Home";
import DataRequest from "./DataRequest";



const routes = [
    {
        path: '/',
        element:<Home/>,
        children:[
            {
                path :'/',
                element: <DataRequest/>
            },
            {
                path:'/cart',
                element:<Cart/>
            }
        ]
    },
   
]

export default routes