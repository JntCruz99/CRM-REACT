// src/components/Dashboard.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImg from '../img/FESVIP - borda branca.png';
import { hover } from '@testing-library/user-event/dist/hover';
import ChartComponent from './ChartComponent';
import DoughnutChart from './DoughnutChart';



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
  
  const handleLogout = () => {
    // Lógica para fazer logout, como limpar o token do localStorage
    localStorage.removeItem('token');

    // Redirecionar para a página de login
    navigate('/');
  };

  return (
    <body id="page-top">


      <div id="wrapper">


        <ul class="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar" style={{backgroundColor:  'green', color: 'white'}}>


          <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
            
            <div class="sidebar-brand-text mx-3"><img src={logoImg} alt="Logo FESVIP" style={{ width: '200px', height: 'auto' , marginTop: '15px', marginBottom:'15px'}} /></div>
          </a>


          <hr class="sidebar-divider my-0"/>


            <li class="nav-item active">
              <a class="nav-link" href="index.html">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></a>
            </li>


            <hr class="sidebar-divider"/>


              <div class="sidebar-heading">
                Interface
              </div>

              <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                  aria-expanded="true" aria-controls="collapseTwo">
                  <i class="fas fa-fw fa-cog"></i>
                  <span>Components</span>
                </a>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                  <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Custom Components:</h6>
                    <a class="collapse-item" href="buttons.html">Buttons</a>
                    <a class="collapse-item" href="cards.html">Cards</a>
                  </div>
                </div>
              </li>


              <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                  aria-expanded="true" aria-controls="collapseUtilities">
                  <i class="fas fa-fw fa-wrench"></i>
                  <span>Utilities</span>
                </a>
                <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                  data-parent="#accordionSidebar">
                  <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Custom Utilities:</h6>
                    <a class="collapse-item" href="utilities-color.html">Colors</a>
                    <a class="collapse-item" href="utilities-border.html">Borders</a>
                    <a class="collapse-item" href="utilities-animation.html">Animations</a>
                    <a class="collapse-item" href="utilities-other.html">Other</a>
                  </div>
                </div>
              </li>


              <hr class="sidebar-divider"/>


                <div class="sidebar-heading">
                  Addons
                </div>


                <li class="nav-item">
                  <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                  </a>
                  <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                      <h6 class="collapse-header">Login Screens:</h6>
                      <a class="collapse-item" href="login.html">Login</a>
                      <a class="collapse-item" href="register.html">Register</a>
                      <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
                      <div class="collapse-divider"></div>
                      <h6 class="collapse-header">Other Pages:</h6>
                      <a class="collapse-item" href="404.html">404 Page</a>
                      <a class="collapse-item" href="blank.html">Blank Page</a>
                    </div>
                  </div>
                </li>


                <li class="nav-item">
                  <a class="nav-link" href="charts.html">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></a>
                </li>


                <li class="nav-item">
                  <a class="nav-link" href="tables.html">
                    <i class="fas fa-fw fa-table"></i>
                    <span>Tables</span></a>
                </li>


                <hr class="sidebar-divider d-none d-md-block"/>


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
                            aria-label="Pesquisar..." aria-describedby="basic-addon2"/>
                            <div class="input-group-append">
                              <button class="btn btn-success" type="button" style={{backgroundColor:  'green', color: 'white'}}>
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
                                  aria-describedby="basic-addon2"/>
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
                            <h6 class="dropdown-header " style={{backgroundColor: 'green', border: 'green'}}>
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
                            <h6 class="dropdown-header" style={{backgroundColor: 'green', border: 'green'}}>
                              Menssagens
                            </h6>
                            
                            <a class="dropdown-item d-flex align-items-center" href="#">
                              <div class="dropdown-list-image mr-3">
                                <img class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                  alt="..."/>
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
                            <span class="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                            <img class="img-profile rounded-circle"
                              src="img/undraw_profile.svg"/>
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
                        <a href="#" class="d-none d-sm-inline-block btn btn-sm btn shadow-sm" style={{backgroundColor:  'green', color: 'white'}}><i
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
                                  <div class="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
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
                                    Minhas vendas</div>
                                  <div class="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
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
                                  <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Conversão
                                  </div>
                                  <div class="row no-gutters align-items-center">
                                    <div class="col-auto">
                                      <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                    </div>
                                    <div class="col">
                                      <div class="progress progress-sm mr-2">
                                        <div class="progress-bar bg-info" role="progressbar"
                                          style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0"
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
                                    Mensagens(mês)</div>
                                  <div class="h5 mb-0 font-weight-bold text-gray-800">18</div>
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
                              <h6 class="m-0 font-weight-bold " style={{color:'green'}}>Vendas convertidas</h6>
                      
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
                              <h6 class="m-0 font-weight-bold" style={{color:'green'}}>Status</h6>
                              
                            </div>

                            <div class="card-body">
                              
                              <DoughnutChart/>
                              
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
