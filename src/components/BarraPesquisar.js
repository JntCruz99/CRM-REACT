import React, { useState } from 'react';
import axios from 'axios';

const BarraPesquisar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            console.log('Fazendo solicitação de pesquisa. Termo:', searchTerm);
    
            const token = localStorage.getItem('token');
            console.log('Token de autenticação:', token);
    
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/clientes?search=${searchTerm}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
    
            console.log('Resposta da pesquisa:', response.data);
    
            setSearchResults(response.data);
        } catch (error) {
            console.error('Erro ao buscar resultados:', error);
        }
    };

    return (
        <div>
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control bg-light border-0 small"
                        placeholder="Pesquisar..."
                        aria-label="Pesquisar..."
                        aria-describedby="basic-addon2"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-success"
                            type="button"
                            style={{ backgroundColor: 'green', color: 'white' }}
                            onClick={handleSearch}
                        >
                            <i className="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form>

            {/* Exibir resultados da pesquisa */}
            {searchResults.length > 0 && (
                <div className="search-results">
                    <h4>Resultados da pesquisa:</h4>
                    <ul>
                        {searchResults.map((result) => (
                            <li key={result.id}>{result.nome}</li>
                            // Adicione mais detalhes conforme necessário
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default BarraPesquisar;
