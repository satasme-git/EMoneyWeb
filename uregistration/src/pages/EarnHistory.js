/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from 'react-router-dom';
import earningService from "../services/earningService";
import userServices from "../services/userServices";
import { Helmet } from "react-helmet";
import Cookies from 'js-cookie';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import paymentService from "../services/paymentService";
import $ from 'jquery';

class EarnHistory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            total_earning: '$0.00',
            percent: 'You reached 0% of payment threshold',
            social_earn: '$0.00',
            watch_earn: '$0.00',
            other_earn: '$0.00',
            total_withdraw: '$0.0',
            total_earning: '',
            username: '',
            pay_list: []

        }


    }

    componentDidMount() {
        // var user = Cookies.get('user');
        // if (user != null) {
        //     earningService.getTotalEarning(Cookies.get('user')).then(res => {
        //         this.setState({ total_earning: res.data });
        //     });

        //     earningService.getSocialEarning(Cookies.get('user')).then(res => {
        //         this.setState({ social_earn: res.data });
        //     });

        //     earningService.getVideoEarning(Cookies.get('user')).then(res => {
        //         this.setState({ watch_earn: res.data });
        //     });

        //     earningService.getOtherEarning(Cookies.get('user')).then(res => {
        //         this.setState({ other_earn: res.data });
        //     });

        //     earningService.getPercent(Cookies.get('user')).then(res => {
        //         this.setState({ percent: res.data });
        //     });

        //     earningService.getTotalEarning(Cookies.get('user')).then(res => {
        //         this.setState({ total_earning: res.data });
        //     });

        //     userServices.getUserById(Cookies.get('user')).then(res => {
        //         this.setState({ username: res.data.fname });
        //     });

        //     paymentService.getPayedAll(Cookies.get('user')).then(res => {
        //         this.setState({ total_withdraw: '$ ' + res.data });
        //     });

        //     paymentService.getPayedList(Cookies.get('user')).then(res => {
        //         this.setState({ pay_list: res.data });
        //     });
        // } else {
        //     this.props.history.push('/login');
        // }

    }

    redirectToOrders = (e) => {
        this.props.history.push('/myorders');
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
            <div >
                <Helmet>
                
               
                    <link type="text/css" rel="stylesheet" href="/assets/css/app69fd.css?id=d97cc8504a674a3a9f71" />
                    <link rel="stylesheet" href="/assets/css/dash.css" />
                    <script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>
                    <link href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css" rel="stylesheet" type="text/css" />
                    
                </Helmet>
                <header class="header" style={{marginLeft:"63px",height:"63px"}}>
                    <section class="container header__inner">
                        <div class="header__right">

                                <span class="utext">{this.state.total_earning}</span>
                                <Link to="/profile" >
                                    <li class="nav-item dropdown  user-menu">
                                        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" aria-haspopup="true" aria-expanded="false">

                                            <i class="fa fa-user"></i>
                                            <span class="hidden-xs">{this.state.username}</span>
                                        </a>
                                    </li>
                                </Link>
                        </div>
                    </section>

                </header>

                <div class="main">

                    <div class="s-layout">
                        <div class="s-layout__sidebar" style={{ height: "100%" }}>
                            <a class="s-sidebar__trigger" href="#0" style={{ width: "63px" }}>
                                <i class="fa fa-bars"></i>
                            </a>

                            <nav class="s-sidebar__nav" style={{ height: "100%" }}>
                                <ul>
                                    <li>
                                        <a class="s-sidebar__nav-link" href="/dash">
                                            <i class="fa fa-th-large"></i><em>Dashbboard</em>
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

                          {/* ////////////////////preloader////////////////////////////////////////////////////////// */}
  <div id="cover"> <span class="glyphicon glyphicon-refresh w3-spin preloader-Icon"></span> 
  
  <div id="preloader">
  <div id="loader"></div>
</div>

</div>



          {/* ////////////////////preloader////////////////////////////////////////////////////////// */}
                        <main class="s-layout__content" style={{ width: "100%", height: "100%", backgroundColor: "#F5F6F9" }}>
                            <div>
                                <div class="container">
                                    <div class="container-fluid" style={{ marginTop: "70px", marginRight: "-10px", marginLeft: "-7px", alignContent: "center" }}>
                                        <h1 style={{textAlign:"center", color: "rgb(3,23,44)", marginTop: "3%" , fontSize:"5.5vh" }}>Earning Summary</h1>


                                        <div class="row" style={{ padding: "padding: 40px" }}>
                                            <div class="col-sm-12" style={{ padding: "10px" }}>
                                                <div class="card" style={{ padding: "20px", marginBottom: "10px", boxShadow: "0 19px 38px rgba(0,0,0,0.15)", padding: "30px", backgroundColor: "#ffffff",  borderRadius: "17px",border:"none" }}>
                                                    <div class="title1" style={{ fontSize: "25px", fontWeight: "600", textAlign: "left", color: "rgb(3,23,44)" }} >Total  Earning Amount</div>
                                                    <div class="title2" style={{ fontSize: "15px", fontWeight: "200", textAlign: "left", color: "rgb(3,23,44)" }}> we will send your payment once your payment threshold is reached</div><br />
                                                    <div class="title3" style={{ fontSize: "30px", fontWeight: "600", textAlign: "left", color: "rgb(3,23,44)" }}> {this.state.total_earning}</div>
                                                    <br />
                                                    <div class="title4" style={{ fontSize: "14px", fontWeight: "100", textAlign: "left", color: "rgb(3,23,44)" }}> {this.state.percent}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-12 col-md-4" style={{ padding: "10px" }}>
                                                <div class="card" style={{ padding: "20px", marginBottom: "10px", boxShadow: "0 19px 38px rgba(0,0,0,0.15)",  padding: "30px", backgroundColor: "#ffffff",  borderRadius: "17px",border:"none"}}>
                                                    <div class="title1" style={{ fontSize: "25px", fontWeight: "600", textAlign: "left", color: "rgb(3,23,44)" }}>Social Media Earnings</div>
                                                    <div class="title3" style={{ fontSize: "30px", fontWeight: "600", textAlign: "left", color: "rgb(3,23,44)" }}> {this.state.social_earn}</div>

                                                </div>
                                            </div>


                                            <div class="col-sm-12 col-md-4" style={{ padding: "10px" }} >
                                                <div class="card " style={{ padding: "20px", marginBottom: "10px", boxShadow: "0 19px 38px rgba(0,0,0,0.15)",  padding: "30px", backgroundColor: "#ffffff",  borderRadius: "17px",border:"none"}}>
                                                    <div class="title1" style={{ fontSize: "25px", fontWeight: "600", textAlign: "left", color: "rgb(3,23,44)" }}>Watched Video Earnings</div>
                                                    <div class="title3" style={{ fontSize: "30px", fontWeight: "600", textAlign: "left", color: "rgb(3,23,44)" }}> {this.state.watch_earn}</div>

                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-4" style={{ padding: "10px" }} >
                                                <div class="card" style={{ padding: "20px",  borderRadius: "17px", marginBottom: "10px",boxShadow: "0 19px 38px rgba(0,0,0,0.15)",  padding: "30px", backgroundColor: "#ffffff",border:"none" }}>
                                                    <div class="title1" style={{ fontSize: "25px", fontWeight: "600", textAlign: "left", color: "rgb(3,23,44)" }}>Others Earnings </div>
                                                    <div class="title3" style={{ fontSize: "30px", fontWeight: "600", textAlign: "left", color: "rgb(3,23,44)" }}> {this.state.other_earn}</div>

                                                </div>
                                            </div>
                                        </div>




                                        <h1 style={{textAlign:"center",  color: "rgb(3,23,44)", marginTop: "3%" , fontSize:"5vh"  , marginBottom:"13px"}}>Withdraw Summary</h1>

                                        <div class="row">
                                        
                                
                                            <div class="col-sm-12" >
                                                <div class="card" style={{ padding: "30px" , boxShadow: "0 19px 38px rgba(0,0,0,0.15)",border:"none", borderRadius: "17px" }}>
                                                    <div class="title1" style={{ fontSize: "25px", fontWeight: "600", textAlign: "left", color: "rgb(3,23,44)"  }}> Total Withdrawal Amount
                                                    </div>
                                                    <div class="title3" style={{ fontSize: "30px", fontWeight: "600", textAlign: "left", color: "rgb(3,23,44)" }}> {this.state.total_withdraw}</div>
                                                    <br />




                                                    <table class="table">
                                                        <thead>
                                                            <tr>

                                                                <th scope="col" style={{ color: "rgb(3,23,44)" }}>Withdraw Earning Amount</th>
                                                                <th scope="col" style={{ color: "rgb(3,23,44)" }}>Withdraw Date</th>
                                                                <th scope="col" style={{ color: "rgb(3,23,44)" }}>Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {this.state.pay_list.map((data) => {
                                                                return (
                                                                    <tr>
                                                                        <th scope="row" style={{ color: "rgb(3,23,44)" }}>{"$" + data.amount}</th>
                                                                        <td style={{ color: "rgb(3,23,44)" }}>{data.date}</td>
                                                                        <td style={{ color: "rgb(3,23,44)" }}>{data.status}</td>

                                                                    </tr>
                                                                );
                                                            })}








                                                        </tbody>
                                                    </table>
                                                

                                                </div>
                                            </div>

                                        </div><br></br><br></br><br></br>

                                    </div>
                                </div>


                            </div>
                        </main>
                    </div>
                </div>

            </div >
        )
    }
}
export default EarnHistory