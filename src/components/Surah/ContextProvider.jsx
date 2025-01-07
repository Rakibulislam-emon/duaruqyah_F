"use client"
import React, { createContext, useState, useContext } from "react";


const DuaContext = createContext();


export const DuaProvider = ({ children }) => {
  const [subcategoryId, setSubcategoryId] = useState(null);
 
  const [sectionTitle, setSectionTitle] = useState(null)

  return (
    <DuaContext.Provider value={{ subcategoryId, setSubcategoryId, sectionTitle, setSectionTitle }}>
      {children}
    </DuaContext.Provider>
  );
};


export const useDuaContext = () => useContext(DuaContext);
