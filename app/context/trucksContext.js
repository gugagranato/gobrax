'use client'
import React, { createContext, useContext, useState } from 'react';

const TrucksContext = createContext();

const TrucksContextProvider = ({ children }) => {
  const [trucksQtt, setTrucksQtt] = useState()
  
  console.log(trucksQtt, 'trucks')
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
