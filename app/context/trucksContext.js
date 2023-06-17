'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';

const TrucksContext = createContext();

const TrucksContextProvider = ({ children }) => {
  const [trucksQtt, setTrucksQtt] = useState()
  
  useEffect(() => {
    console.log(trucksQtt)
  }, [trucksQtt])
  return (
    <TrucksContext.Provider  value={{trucksQtt, setTrucksQtt}}>
      {children}
    </TrucksContext.Provider>
  );
};

function useTrucks() {
  const context = useContext(TrucksContext);
  return context;
}

export { TrucksContextProvider, useTrucks };
