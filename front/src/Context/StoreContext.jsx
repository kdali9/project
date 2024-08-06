import { createContext, useState } from "react";
import { cause_list, charity_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props)=>{

    const url = "http://localhost:4000"
    const [token,setToken] = useState("")

    
    
    const contextValue ={
        cause_list,
        charity_list,
        url,
        token,
        setToken
        


    }
    return(
        <StoreContext.Provider value={contextValue}>
        {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider