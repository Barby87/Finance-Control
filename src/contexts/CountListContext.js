import React, { createContext, useState } from 'react';

export const CountListContext = createContext();

export const CountListContextProvider = ({children}) => {
  const [countList, setCountList] = useState([]);

  return (
    <CountListContext.Provider
        value={{
            countList, 
            setCountList 
        }}
    >
        {children}
    </CountListContext.Provider>
  )
}
