// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImg from '../img/FESVIP - borda branca.png';
import ChartComponent from './ChartComponent';
import DoughnutChart from './DoughnutChart';
import axios from 'axios';
import moment from 'moment';



const Dashboard = () => {
  const navigate = useNavigate();
  const [quantidadeVendas, setQuantidadeVendas] = useState(0);
  const [qtdVendasConvertidas, setQtdVendasConvertidas] = useState(0);
  const [qtdVendasUser, setQtdVendasUser] = useState(0);
  const [cliente, setCliente] = useState(0);
  const [nome, setNome] = useState(0);

  const porcentagemConversao = () => {
    const porcentagem = (qtdVendasConvertidas / quantidadeVendas) * 100;
    
    if (isNaN(porcentagem)) {
      return 0;
    }

    return porcentagem.toFixed(2);
  };


  useEffect(() => {

    const token = localStorage.getItem('token');

    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/vendas/last30days`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const quantidadeVendas = response.data.totalElements;
        setQuantidadeVendas(quantidadeVendas);
      } catch (error) {
        console.error('Erro ao obter a quantidade de vendas:', error);
      }
    };

    const vendasUser = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/vendas/last30daysuser`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const quantidadeVendas = response.data.totalElements;
        setQtdVendasUser(quantidadeVendas);
      } catch (error) {
        console.error('Erro ao obter a quantidade de vendas do usuario:', error);
      }
    };

    

    const clientesUltimos = async () => {
      try {
        let allClientes = [];
        let currentPage = 0;
    
        while (true) {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/clientes`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              page: currentPage,
              size: 10,
            },
          });
    
          const clientesUltimos30Dias = response.data.content.filter(cliente => {
            if (cliente.data) {
              const [ano, mes, dia] = cliente.data.slice(0, 3); 
              const clienteDate = moment(`${ano}-${mes}-${dia}`);
              const limite30Dias = moment().subtract(30, 'days');
              return clienteDate.isAfter(limite30Dias);
            }
    
            return false;
          });
    
          allClientes = allClientes.concat(clientesUltimos30Dias);
    
          if (response.data.last) {
            break;
          }
    
          currentPage++;
        }
    
        setCliente(allClientes.length);
    
      } catch (error) {
        console.error('Erro ao obter a quantidade de clientes:', error);
      }
    };

    const conversao = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/vendas/convertidos`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const quantidadeVendas = response.data.totalElements;
        setQtdVendasConvertidas(quantidadeVendas);
      } catch (error) {
        console.error('Erro ao obter a quantidade de vendas do usuario:', error);
      }
    };

    if (!token) {
      navigate('/');
    } else {
      axios.get(`${process.env.REACT_APP_API_URL}/logado`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          setNome(response.data.nome);
          // Chama fetchData aqui após verificar o token, se necessário
          fetchData();
          vendasUser();
          conversao();
          clientesUltimos();
        })
        .catch((error) => {
          console.error('Erro ao validar o token:', error);
          navigate('/');
        });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };


  return (
    <body id="page-top">


      <div id="wrapper">


        <ul class="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar" style={{ backgroundColor: 'green', color: 'white' }}>


          <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">

            <div class="sidebar-brand-text mx-3"><img src={logoImg} alt="Logo FESVIP" style={{ width: '200px', height: 'auto', marginTop: '15px', marginBottom: '15px' }} /></div>
          </a>


          <hr class="sidebar-divider my-0" />


          <li class="nav-item active">
            <a class="nav-link" href="/dashboard">
              <i class="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span></a>
          </li>


          <hr class="sidebar-divider" />


          <div class="sidebar-heading">
            Interface
          </div>

          <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
              aria-expanded="true" aria-controls="collapseTwo">
              <i class="fas fa-fw fa-money-bill"></i>
              <span>Vendas</span>
            </a>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
              <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">vendas:</h6>
                <a class="collapse-item" href="buttons.html">Geral</a>
                <a class="collapse-item" href="cards.html">Minhas vendas</a>
              </div>
            </div>
          </li>


          <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
              aria-expanded="true" aria-controls="collapseUtilities">
              <i class="fas fa-fw fa-user"></i>
              <span>Clientes</span>
            </a>
            <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
              data-parent="#accordionSidebar">
              <div class="bg-white py-2 collapse-inner rounded">
                <a class="collapse-item" href="utilities-color.html">Geral</a>
                <a class="collapse-item" href="utilities-border.html">Vazio</a>
              </div>
            </div>
          </li>


          <hr class="sidebar-divider" />


          <div class="sidebar-heading">
            Outros
          </div>


          <li class="nav-item">
            <a class="nav-link" href="charts.html">
              <i class="fas fa-fw fa-chart-area"></i>
              <span>Graficos</span></a>
          </li>


          <li class="nav-item">
            <a class="nav-link" href="tables.html">
              <i class="fas fa-fw fa-table"></i>
              <span>Tabelas</span></a>
          </li>


          <hr class="sidebar-divider d-none d-md-block" />


          <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
          </div>


        </ul>

        <div id="content-wrapper" class="d-flex flex-column">


          <div id="content">


            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">


              <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                <i class="fa fa-bars"></i>
              </button>


              <form
                class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div class="input-group">
                  <input type="text" class="form-control bg-light border-0 small" placeholder="Pesquisar..."
                    aria-label="Pesquisar..." aria-describedby="basic-addon2" />
                  <div class="input-group-append">
                    <button class="btn btn-success" type="button" style={{ backgroundColor: 'green', color: 'white' }}>
                      <i class="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>


              <ul class="navbar-nav ml-auto">


                <li class="nav-item dropdown no-arrow d-sm-none">
                  <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-search fa-fw"></i>
                  </a>

                  <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                    aria-labelledby="searchDropdown">
                    <form class="form-inline mr-auto w-100 navbar-search">
                      <div class="input-group">
                        <input type="text" class="form-control bg-light border-0 small"
                          placeholder="Search for..." aria-label="Search"
                          aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                          <button class="btn btn-primary" type="button">
                            <i class="fas fa-search fa-sm"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>

                <li class="nav-item dropdown no-arrow mx-1">
                  <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-bell fa-fw"></i>

                    <span class="badge badge-danger badge-counter">1</span>
                  </a>

                  <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in "
                    aria-labelledby="alertsDropdown">
                    <h6 class="dropdown-header " style={{ backgroundColor: 'green', border: 'green' }}>
                      Notificações
                    </h6>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                      <div class="mr-3">
                        <div class="icon-circle bg-primary">
                          <i class="fas fa-file-alt text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div class="small text-gray-500">20 novembro, 2023</div>
                        <span class="font-weight-bold">Bem-vindo ao CRM-FESVIP!!</span>
                      </div>
                    </a>

                    <a class="dropdown-item text-center small text-gray-500" href="#">Veja mais!</a>
                  </div>
                </li>


                <li class="nav-item dropdown no-arrow mx-1">
                  <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-envelope fa-fw"></i>

                    <span class="badge badge-danger badge-counter">1</span>
                  </a>

                  <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="messagesDropdown">
                    <h6 class="dropdown-header" style={{ backgroundColor: 'green', border: 'green' }}>
                      Menssagens
                    </h6>

                    <a class="dropdown-item d-flex align-items-center" href="#">
                      <div class="dropdown-list-image mr-3">
                        <img class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                          alt="..." />
                        <div class="status-indicator bg-success"></div>
                      </div>
                      <div>
                        <div class="text-truncate">Futuramente vai existir algo aqui.</div>
                        <div class="small text-gray-500">Doguinho · 2d</div>
                      </div>
                    </a>
                    <a class="dropdown-item text-center small text-gray-500" href="#">Ler mais mensagens</a>
                  </div>
                </li>

                <div class="topbar-divider d-none d-sm-block"></div>


                <li class="nav-item dropdown no-arrow">
                  <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="mr-2 d-none d-lg-inline text-gray-600 small">{nome}</span>
                    <img class="img-profile rounded-circle"
                      src="img/undraw_profile.svg" />
                  </a>

                  <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown">
                    <a class="dropdown-item" href="#">
                      <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                      Perfil
                    </a>
                    <a class="dropdown-item" href="#">
                      <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                      Configurações
                    </a>

                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                      <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" ></i>
                      Sair
                    </a>
                  </div>
                </li>

              </ul>

            </nav>
            <div class="container-fluid">


              <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn shadow-sm" style={{ backgroundColor: 'green', color: 'white' }}><i
                  class="fas fa-user fa-sm text-white-50"></i> Adicionar Cliente</a>
              </div>


              <div class="row">


                <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card border-left-primary shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Vendas(Mês)</div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">{quantidadeVendas}</div>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-calendar fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card border-left-success shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                            Minhas vendas(mes)</div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">{qtdVendasUser}</div>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card border-left-info shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Conversão Geral
                          </div>
                          <div class="row no-gutters align-items-center">
                            <div class="col-auto">
                              <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">{porcentagemConversao()}%</div>
                            </div>
                            <div class="col">
                              <div class="progress progress-sm mr-2">
                                <div class="progress-bar bg-info" role="progressbar"
                                  style={{ width: `${porcentagemConversao()}%` }} aria-valuenow="50" aria-valuemin="0"
                                  aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card border-left-warning shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                            Clientes(mês)</div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">{cliente}</div>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-comments fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              <div class="row">


                <div class="col-xl-8 col-lg-7">
                  <div class="card shadow mb-4">

                    <div
                      class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 class="m-0 font-weight-bold " style={{ color: 'green' }}>Vendas convertidas</h6>

                    </div>

                    <div class="card-body">
                      <div class="chart-area">
                        <ChartComponent />
                      </div>
                    </div>
                  </div>
                </div>


                <div class="col-xl-4 col-lg-5">
                  <div class="card shadow mb-4">

                    <div
                      class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 class="m-0 font-weight-bold" style={{ color: 'green' }}>Status</h6>

                    </div>

                    <div class="card-body">

                      <DoughnutChart />

                    </div>
                  </div>
                </div>
              </div>

            </div>





          </div>

          <footer class="sticky-footer bg-white">
            <div class="container my-auto">
              <div class="copyright text-center my-auto">
                <span>Copyright &copy; Crm-fesvip 2023</span>
              </div>
            </div>
          </footer>


        </div>


      </div>

      <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
      </a>


      <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Tem certeza?</h5>
              <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">Selecione "Sair" para encerrar a sessão.</div>
            <div class="modal-footer">
              <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
              <a class="btn btn-success" onClick={handleLogout}>Sair</a>
            </div>
          </div>
        </div>
      </div>


    </body>
  );
};

export default Dashboard;
