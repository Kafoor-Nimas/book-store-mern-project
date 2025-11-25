import { useContext, useState } from "react";
import { createContext } from "react";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

const googleProvider = new GoogleAuthProvider();


// authProvider
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // register a user
  const registerUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  //login the user
 const loginUser =async (email , password)=>{
    return await signInWithEmailAndPassword(auth, email, password)
 }

 //sign in with google
 const SignInWithGoogle = async ()=> {
    return await signInWithPopup(auth, googleProvider)

 }


  const value = {
    currentUser,
    registerUser,
    loginUser,
    SignInWithGoogle
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
