import { createContext, useState } from "react";


export const Usercontext = createContext();




export const Usercontextprovider =({children})=> {
  
  const [token, settoken] = useState(localStorage.getItem("token") || null);

  const handlelogin =(value)=>{
    settoken(value);
    localStorage.setItem("token",value)
  }
    return (
      <Usercontext.Provider value={{token,handlelogin}}>
        {children}
      </Usercontext.Provider>
    );
  };

