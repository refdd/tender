// import * as Google from "expo-google-app-auth";
import React, { createContext, useContext } from "react";
const AuthContaxt = createContext({});
export const AuthProvider = ({ children }) => {
  // const signInWithGoogle = async () => {
  //   await Google.logInAsync();
  // };
  return (
    <AuthContaxt.Provider
      value={{
        user: "refatr",
      }}
    >
      {children}
    </AuthContaxt.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContaxt);
}
