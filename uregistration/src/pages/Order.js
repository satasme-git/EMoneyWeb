/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from 'react-router-dom';
import moment from 'moment'
import userServices from "../services/userServices";
import earningService from "../services/earningService";
import { Helmet } from "react-helmet";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import Cookies from 'js-cookie';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


import { MDBDataTable } from 'mdbreact';

class Order extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            orders: [],
            total_earning: '',
            username: ''
        };

    }

    componentDidMount() {
        var user = Cookies.get('user');
        if (user != null) {
            this.getOrders();

            earningService.getTotalEarning(Cookies.get('user')).then(res => {
                this.setState({ total_earning: res.data });
            });

            userServices.getUserById(Cookies.get('user')).then(res => {
                this.setState({ username: res.data.fname });
            });
        } else {
            this.props.history.push('/login');
        }


    }

    componentDidUpdate() {
        //initialize datatable
        
            $("#example").DataTable();
       

    }

    getOrders() {
        fetch("/api/getoprice/allorders/" + Cookies.get('user'))
            .then(response => response.json())
            .then(response => this.setState({ orders: response }))
            .catch(error => console.log(error));
    }

    redirectToOrders = (e) => {
        window.location.reload();

    }

    logout = (e) => {

        confirmAlert({
            title: 'Logout',
            message: 'Are you sure?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        Cookies.remove('user')
                        this.props.history.push('/homebl')
                    }
                },
                {
                    label: 'No'
                }
            ]
        });
    }

    render() {
        $(window).on('load', function () {
            $("#cover").fadeOut(2050);
            });
    

            
        return (
            <div>
                <Helmet>
                    {/* <link rel="stylesheet" href="/assets/css/Bootstrap-DataTables.css" />
                    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css"
                        crossorigin="anonymous" />
                    <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
                    <script src="https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js"></script>
                    <script src="/assets/js/Bootstrap-DataTables.js"></script> */}

                    <link type="text/css" rel="stylesheet" href="/assets/css/app69fd.css?id=d97cc8504a674a3a9f71" />
                    <link rel="stylesheet" href="/assets/css/dash.css" />
                    <script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>
                    <link href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css" rel="stylesheet" type="text/css" />
                </Helmet>
                <header class="header" style={{ marginLeft: "63px", height: "63px" }}>
                    <section class="container header__inner">
                        <div class="header__right">

                            <span class="utext">{this.state.total_earning}</span>
                            <Link to="/profile" >
                                <li class="nav-item dropdown  user-menu">
                                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" aria-haspopup="true" aria-expanded="false">

                                        <i class="fa fa-user"></i>
                                        <span class="hidden-xs"> &nbsp;  {this.state.username}</span>
                                    </a>
                                </li>
                            </Link>
                        </div>

                        
                        <div class="header__left">

<span class="utext"></span>
<Link to="/userhome" >
    <li class="nav-item dropdown  user-menu">
        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" aria-haspopup="true" aria-expanded="false">

            <i class="fa fa-home"></i>
            <span class="hidden-xs"></span>
        </a>
    </li>
</Link>
</div>
                    </section>

                </header>

                <div class="main" style={{ backgroundColor: "#dfeef2"}}>

                      {/* ////////////////////preloader////////////////////////////////////////////////////////// */}
  {/* <div id="cover"> <span class="glyphicon glyphicon-refresh w3-spin preloader-Icon"></span> 
  
  <div id="preloader">
  <div id="loader"></div>
</div>

</div> */}



          {/* ////////////////////preloader////////////////////////////////////////////////////////// */}

                    <div class="s-layout">
                        {/* <!-- Sidebar --> */}
                        <div class="s-layout__sidebar">
                            <a class="s-sidebar__trigger" href="#0">
                                <i class="fa fa-bars"></i>
                            </a>

                            <nav class="s-sidebar__nav">
                                <ul>
                                    <li>
                                        <a class="s-sidebar__nav-link" href="/dash">
                                            <i class="fa fa-th-large"></i><em>Dashbboard</em>
                                        </a>
                                    </li>

                                    <li>
                                        <a class="s-sidebar__nav-link" href="/earnpage">
                                            <i class="fa fa-dollar"></i><em>Earn Points</em>
                                        </a>
                                    </li>

                                    
                                    <li>
                                        <a class="s-sidebar__nav-link" href="/referal">
                                            <i class="fa fa-share-alt"></i><em>Referral</em>
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <a class="s-sidebar__nav-link" href="/createorder">
                                            <i class="fa fa-plus"></i><em>Promote Youtube/Social</em>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="s-sidebar__nav-link" href="/myorders">
                                            <i class="fa fa-list"></i><em>My Orders</em>
                                        </a>
                                    </li>
                                 
                                    <li>
                                        <a class="s-sidebar__nav-link" href="/earnhistory">
                                            <i class="fa fa-bitcoin"></i><em>Billings</em>
                                        </a>
                                    </li>

                                    <br></br>
                                    <li>
                                        <a class="s-sidebar__nav-link" onClick={this.logout}>
                                            <i class="fa fa-flash"></i><em>Logout</em>
                                        </a>
                                    </li>

                                </ul>
                            </nav>
                        </div>

                        {/* <!-- Content --> */}
                        <main class="s-layout__content" style={{ backgroundColor: "#dfeef2", height: "100%",width:"100%" }}>

                            {/* ////////////////////////////////////////new table///////////////////////////// */}
                            <div class="table-responsive">
<table class="table" style={{marginTop:"100px" , backgroundColor:"white"}}>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Social Name</th>
      <th scope="col">Service</th>
      <th scope="col">Url</th>
      <th scope="col">Date</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Status</th>

    </tr>

  

    
  </thead>
  <tbody>
                                                                    {this.state.orders.map((order, index) => {
                                                                        return (
                                                                            <tr key={order.id}>
                                                                                <td>{index + 1}</td>
                                                                                <td>{order.social}</td>
                                                                                <td>{order.service}</td>
                                                                                <td>{order.social_link}</td>
                                                                                <td>{moment(order.date).format('DD/MM/YYYY')}</td>
                                                                                <td>{order.cost}</td>
                                                                                <td>{order.qty}</td>
                                                                                <td>{order.status}</td>
                                                                            </tr>
                                                                        );
                                                                    })}
                                                                </tbody>
</table>
</div>

{/* ////////////////////////////////////////new table///////////////////////////// */}

                                    {/* <div className="row">
                                       
                                        <div className="col-12 mt-5">
                                            <div className="card" >
                                                <div className="card-body">
                                                    <h4 className="header-title">My Promoted Social Accounts </h4>



                                                    <div className="data-tables">
                                                        <div className="">
                                                            <table id="example" class="display" style={{border:1}}>
                                                                <thead>
                                                                    <tr>
                                                                        <th >ID</th>
                                                                        <th >Social Name</th>
                                                                        <th >Service</th>
                                                                        <th >Url</th>
                                                                        <th >Date</th>
                                                                        <th >Price</th>
                                                                        <th >Quantity</th>
                                                                        <th >Status</th>
                                                                    </tr>
                                                                </thead>
                                                                               
                                                                <tbody>
                                                                    {this.state.orders.map((order, index) => {
                                                                        return (
                                                                            <tr key={order.id}>
                                                                                <td>{index + 1}</td>
                                                                                <td>{order.social}</td>
                                                                                <td>{order.service}</td>
                                                                                <td>{order.social_link}</td>
                                                                                <td>{moment(order.date).format('DD/MM/YYYY')}</td>
                                                                                <td>{order.cost}</td>
                                                                                <td>{order.qty}</td>
                                                                                <td>{order.status}</td>
                                                                            </tr>
                                                                        );
                                                                    })}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>








                                                </div>
                                            </div>
                                        </div>
                                      


                                </div> */}





      


                        </main>
                    </div>
                </div>
                {/* <script src="assets/js/jquery.min.js"></script>
                <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script> */}

            </div>
        );
    }

}
export default Order