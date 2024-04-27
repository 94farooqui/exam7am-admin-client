import React, { createContext, useState, useContext } from 'react';

// Create the header context
const HeaderContext = createContext();

// Create a provider component to wrap your app and provide the context value
export const HeaderProvider = ({ children }) => {
  const [headerValue, setHeaderValue] = useState(['Home']);

  return (
    <HeaderContext.Provider value={{ headerValue, setHeaderValue }}>
      {children}
    </HeaderContext.Provider>
  );
};

// Custom hook to consume the header context
export const useHeader = () => useContext(HeaderContext);
