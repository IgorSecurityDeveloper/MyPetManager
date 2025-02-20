import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; // para poder utilizar o ViaCep

const createAccount = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");//senha
  const [userType, setUserType] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [cpf, setCpf] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [businessOption, setBusinessOption] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Usuário cadastrado com sucesso!");
    navigate("/"); // Redireciona para o Login após cadastro
  };


const handleCepChange = (e) => { //Endereço: Utilize APIs como ViaCEP (para Brasil) ou Google Maps API para facilitar o preenchimento automático.
  setCep(e.target.value);
  if (e.target.value.length === 8) {
    axios.get(`https://viacep.com.br/ws/${e.target.value}/json/`)
      .then(response => {
        setAddress(response.data.logradouro);
        setCity(response.data.localidade);
        setState(response.data.uf);
      })
      .catch(error => {
        console.error("Erro ao buscar CEP:", error);
    });
  }
};

  return (
    
      <div>

      <form onSubmit={handleRegister}>
        <label htmlfor="nome">Nome:</label>
        <input type="text" id="nome" value={name} onChange={(e) => setName(e.target.value)} required />

        <label htmlfor="sobrenome">Sobrenome:</label>
        <input type="text" id="sobrenome" value={surname} onChange={(e) => setSurname(e.target.value)} required />

        <label htmlfor="email">Email:</label>
        <input type="email" id="" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlfor="senha">Senha:</label>
        <input type="password" id="sobrenome" value={password} onChange={(e) => setPassword(e.target.value)} required />


        <label htmlfor="tipo_usuario">Tipo de Usuário:</label>
        <select id="tipo_usuario" value={userType} onChange={(e) => setUserType(e.target.value)} required>
          <option value="Pessoa Física">Pessoa Física</option>
          <option value="Pessoa Jurídica">Pessoa Jurídica (Empresa)</option>
        </select>

        {userType === "Pessoa Física" && ( //PF ou PJ
          <>
            <label htmlfor="data_nascimento">Data de Nascimento:</label>
            <input type="date" id="data_nascimento" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} required />

            <label htmlfor="cpf">CPF (Opcional):</label>
            <input type="text" id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} />
          </>
        )}

        {userType === "Pessoa Jurídica" && (
          <>
            <label htmlfor="cnpj">CNPJ:</label>
            <input type="text" id="cnpj" value={cnpj} onChange={(e) => setCnpj(e.target.value)} required />

            <label htmlfor="razao_social">Razão Social:</label>
            <input type="text" id="razao_social" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
          </>
        )}

        <label htmlfor="endereco">Endereço:</label>
        <input type="address" id="endereco" value={address} anchange={(e) => setaddress(e.target.value)} required />

        <label htmlfor="numeroDoEndereco">Número do endereço:</label>
        <input type="cpf" id="cpf" value={cpf} anchange={(e) => setCpf(e.target.value)} required />

        <label htmlfor="complemento">Complemento:</label>
        <input type="address" id="endereco" value={address} anchange={(e) => setAddress(e.target.value)} required />

        <label htmlfor="cidade">Cidade:</label>
        <input type="city" id="cidade" value={city} anchange={(e) => setCity(e.target.value)} required />

        <label htmlfor="estado">Estado:</label>        
        <input type="state" id="estado" value={state} anchange={(e) => setState(e.target.value)} required />

        <label htmlfor="cep">CEP::</label>
        <input type="cep" id="cep" value={cep} anchange={(e) => setCep(e.target.value)} required />

        <label htmlfor="opcao_negocio">Opção de negócio:</label>
        <select id="opcao_negocio" value={businessOption} onChange={(e) => setBusinessOption(e.target.value)} required>
          <option value="veterinaria">Veterinária</option>
          <option value="petshop">Petshop</option>
          <option value="agropecuaria">Agropecuária</option>
        </select>

        <label htmlfor="metodo_pagamento">Método de Pagamento:</label>
        <select id="metodo_pagamento" required>
          <option value="">Selecione</option>
          <option value="cartao">Cartão de Crédito</option>
          <option value="boleto">Boleto</option>
          <option value="pix">Pix</option>
        </select>

        </form>

      </div>

  );
};

export default createAccount;
