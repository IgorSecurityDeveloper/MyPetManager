import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (user, password) => {
    if (user === "admin@teste.com" && password === "1234") {
      setUser({ user });
      localStorage.setItem("user", JSON.stringify({ user }));
      alert("Correto");
    //   navigate("/Dashboard");
    } else {
      alert("Usuário e ou senha incorretos!");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
