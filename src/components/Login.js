// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/login', {
        username: username,
        senha: password,
      });

      if (response.status === 200) {
        // Salvar o token no localStorage
        localStorage.setItem('token', response.data.token);
        
        // Redirecionar para a página Dashboard
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Erro ao fazer login', error);
      // Lógica de tratamento de erro, como exibir uma mensagem de erro para o usuário
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
