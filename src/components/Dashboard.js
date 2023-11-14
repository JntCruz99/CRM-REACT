// src/components/Dashboard.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Recuperar o token do localStorage
    const token = localStorage.getItem('token');

    // Se o token não estiver presente, redirecionar para a página de login
    if (!token) {
      navigate('/'); // ou a rota correspondente à página de login
    }

    // Faça o que quiser com o token, por exemplo, enviá-lo nas solicitações para autenticar

    // Se necessário, você pode limpar o token do localStorage quando o usuário faz logout
    // localStorage.removeItem('token');
  }, [navigate]);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Bem-vindo à sua página de dashboard!</p>
    </div>
  );
};

export default Dashboard;
