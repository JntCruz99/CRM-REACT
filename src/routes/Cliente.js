import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Main from '../components/Main';


const Cliente = () => {
    const { id } = useParams();
    const [cliente, setCliente] = useState(null);
    const [vendas, setVendas] = useState([]);

    const getStatusColor = (status) => {
        switch (status) {
            case 'PENDENTE':
                return 'gradient-warning';
            case 'CONVERTIDO':
                return 'gradient-success';
            case 'NAO_CONVERTIDO':
                return 'gradient-danger';
            default:
                return 'gradient-secondary';
        }
    };

    useEffect(() => {
        const fetchClienteDetalhes = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/clientes/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setCliente(response.data);
                setVendas(response.data.venda || []);
            } catch (error) {
                alert('Erro ao buscar detalhes do cliente:', error);
            }
        };

        fetchClienteDetalhes();
    }, [id]);

    if (!cliente) {
        return <p>Carregando...</p>;
    }

    return (
        <Main>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <div className="container-fluid" >
                        <span># {cliente.id}</span>
                        <h1 className="h3 mb-1 text-gray-800" style={{ textTransform: 'uppercase' }}>{cliente.nome}</h1>
                        <div className="row" style={{ marginTop: '20px' }}>
                            <div className="col-lg-6">
                                <div className="card position-relative">
                                    <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-success">INFORMAÇÕES DO CLIENTE:</h6>
                                    </div>
                                    <div className="card-body">
                                        <form id="adicionarClienteForm">
                                            <form id="adicionarClienteForm">
                                                <div class="form-group">
                                                    <label for="nome">Nome:</label>
                                                    <input value={cliente.nome} type="text" class="form-control" id="nome" name="nome" required />
                                                </div>
                                                <div class="form-group">
                                                    <label for="numeroTelefone1">Telefone 1:</label>
                                                    <input type="text" class="form-control" value={cliente.numeroTelefone1} id="numeroTelefone1" name="numeroTelefone1" required />
                                                </div>
                                                <div class="form-group">
                                                    <label for="numeroTelefone2">Telefone 2:</label>
                                                    <input type="text" class="form-control" value={cliente.numeroTelefone2} id="numeroTelefone2" name="numeroTelefone2" required />
                                                </div>
                                                <div class="form-group">
                                                    <label for="plataforma">Plataforma:</label>
                                                    <select class="form-control" value={cliente.plataforma} id="plataforma" name="plataforma" required >
                                                        <option value="facebook">Facebook</option>
                                                        <option value="instagram">Instagram</option>
                                                        <option value="google">Google</option>
                                                    </select>
                                                </div>
                                                <div class="form-group">
                                                    <label for="email">Email:</label>
                                                    <input type="email" value={cliente.email} class="form-control" id="email" name="email" required />
                                                </div>
                                                <button class="btn btn-success"
                                                >Salvar</button>
                                            </form>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card position-relative">
                                    <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-success">VENDAS:</h6>
                                    </div>
                                    <div className="card-body">
                                        {vendas.map((venda) => (
                                            <div key={venda.id} className={`card border-${getStatusColor(venda.status)} mb-3`}>
                                                <div className={`card-header text-light bg-${getStatusColor(venda.status)} border-${getStatusColor(venda.status)}`}>{venda.status}
                                                    <a href="#" class="btn btn-transparent btn btn-sm" style={{ marginLeft: '10px', color: 'white' }}>
                                                        <i class="fas fa-edit"></i>
                                                    </a>
                                                </div>

                                                <div className={`card-body text-${getStatusColor(venda.status)}`}>
                                                    <h5 className="card-title">{venda.curso}</h5>
                                                    <p className="card-text text-dark ">Valor: R${venda.valor}</p>
                                                </div>
                                                <div className={`card-footer bg-transparent border-${getStatusColor(venda.status)}`}>Observações: {venda.obs}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
};

export default Cliente;
