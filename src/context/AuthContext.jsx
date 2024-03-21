"use strict";
import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

const CustomContext = createContext();

export const useCustom = () => useContext(CustomContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("🚀 ----- user:", user);

      if (user?.uid) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <CustomContext.Provider value={{ user }}>{children}</CustomContext.Provider>
  );
};
