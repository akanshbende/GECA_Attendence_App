import React from "react";
import { createContext } from "react";

export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {

// };
function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value="Test value">{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
