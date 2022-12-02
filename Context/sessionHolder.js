// src/context/state.js
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [session, setsession] = useState("Waiting")
  return (
    <AppContext.Provider value={[session, setsession]}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}