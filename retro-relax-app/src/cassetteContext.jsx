import React, { createContext, useState, useContext } from "react";

const CassetteContext = createContext();

export const CassetteProvider = ({ children }) => {
  const [selectedCassette, setSelectedCassette] = useState(null);

  return (
    <CassetteContext.Provider value={{ selectedCassette, setSelectedCassette }}>
      {children}
    </CassetteContext.Provider>
  );
};

export const useCassette = () => useContext(CassetteContext);