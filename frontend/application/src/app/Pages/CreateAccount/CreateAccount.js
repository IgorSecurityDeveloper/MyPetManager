'use client'

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Usuário cadastrado com sucesso!");
    navigate("/"); // Redireciona para o Login após cadastro
  };

  return (
    <div className="register-container">
      <h2>Cadastre-se</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Cadastrar</button>
      </form>
      <p onClick={() => navigate("/")} className="toggle-link">Já tem uma conta? Faça login</p>
    </div>
  );
};

export default Register;
