import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImg from '../img/FESVIP - borda branca.png';
import axios from 'axios';
import BarraPesquisar from './BarraPesquisar';



const Main = ({ children }) => {
  const navigate = useNavigate();
  const [nome, setNome] = useState(0);

  


  useEffect(() => {

    const token = localStorage.getItem('token');



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


          <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/dashboard">

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


              <BarraPesquisar/>


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


              {children}

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

export default Main;