"use server";

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
 
      <> </>
  );
};

export default Register;
