'use client'

import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Garantir que só execute no cliente
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  const login = (email, password) => {
    if (email === "admin@teste.com" && password === "1234") {
      const userData = { email };
      setUser(userData);

      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(userData));
      }

      alert("Login correto!");
      navigate("/Dashboard");
    } else {
      alert("Usuário ou senha incorretos!");
    }
  };

  const logout = () => {
    setUser(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
    }
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);