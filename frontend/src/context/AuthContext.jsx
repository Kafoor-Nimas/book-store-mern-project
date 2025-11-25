import { useContext } from "react";
import { createContext } from "react";

const AuthContext = createContext();
const useAuth = () => {
  return useContext(AuthContext);
};

// authProvider
export const AuthProvider = ({ children }) => {
  const value = {};
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
