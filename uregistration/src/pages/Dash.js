/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import earningService from "../services/earningService";
import { Helmet } from "react-helmet";
import userServices from "../services/userServices";
import Cookies from 'js-cookie';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import $ from 'jquery';




class Dash extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            today_earning: '0',
            yesterday_earning: '0',
            week_earning: '0',
            month_earning: '0',
            balance: '0',
            total_earning: '',
            username: ''

        };

    }

    componentDidMount() {
        // var user = Cookies.get('user');
        // if (user != null) {
        //     earningService.getToday(Cookies.get('user')).then(res => {
        //         this.setState({ today_earning: res.data });
        //     });

        //     earningService.getYesterdayEarning(Cookies.get('user')).then(res => {
        //         this.setState({ yesterday_earning: res.data });
        //     });

        //     earningService.getWeekEarning(Cookies.get('user')).then(res => {
        //         this.setState({ week_earning: res.data });
        //     });

        //     earningService.getMonthEarning(Cookies.get('user')).then(res => {
        //         this.setState({ month_earning: res.data });
        //     });

        //     earningService.getBalance(Cookies.get('user')).then(res => {
        //         this.setState({ balance: res.data });
        //     });
        //     earningService.getTotalEarning(Cookies.get('user')).then(res => {
        //         this.setState({ total_earning: res.data });
        //     });

        //     userServices.getUserById(Cookies.get('user')).then(res => {
        //         this.setState({ username: res.data.fname });
        //     });
        // } else {
        //     this.props.history.push('/login');
        // }

    }
    redirectToDash = (e) => {
        this.props.history.push('/dash');
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
                    <link type="text/css" rel="stylesheet" href="/assets/css/app69fd.css?id=d97cc8504a674a3a9f71" />
                    <link rel="stylesheet" href="/assets/css/dash.css" />
                    <script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>
                    <link href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css" rel="stylesheet" type="text/css" />




                </Helmet>
                <header class="header" style={{marginLeft:"63px",height:"63px" ,  zIndex:"100"}}>
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
  {/* ////////////////////preloader////////////////////////////////////////////////////////// */}
  {/* <div id="cover"> <span class="glyphicon glyphicon-refresh w3-spin preloader-Icon"></span> 
  
  <div id="preloader">
  <div id="loader"></div>
</div>

</div> */}



          {/* ////////////////////preloader////////////////////////////////////////////////////////// */}
                <div class="main" style={{ height: "100%", width: "100%", backgroundColor: "#dfeef2" }}>

                    <div class="s-layout">
                        <div class="s-layout__sidebar" style={{ height: "100%", zIndex:"100" }}>
                            <a class="s-sidebar__trigger" href="#0">
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
                                        <a class="s-sidebar__nav-link" href="/earnpage">
                                            <i class="fa fa-dollar"></i><em>Earn Points</em>
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

                        <main class="s-layout__content" style={{ height: "100%", width: "100%", backgroundColor: "#F2F5FA" }} >
                            <div class="container">
                                <div class="container-fluid" style={{ marginTop: "70px", marginRight: "-10px", marginLeft: "-10px", alignContent: "center" }}>
                                    {/* <h2 class="text-center" style={{ marginTop: "10px" }} >Overall Earnings <br /></h2> */}
                                    <h2 class="text-center" style={{ marginTop: "2%" ,fontSize:"5vh", textAlign:"center" }} >Overall Earnings </h2>
                                    <div class="row">
                                        <div class="col-sm-7">
                                            <div class="row" style={{ alignContent: "center" }}>
                                                <div class="col-sm-12" style={{ padding: "10px" }}>
                                                    <div
                                                        class="card" 
                                                        style={{
                                                            padding: "20px",
                                                            marginBottom: "10px",
                                                          border:"none",
                                                            padding: "30px",
                                                            backgroundColor: "#ffffff",
                                                            borderRadius: "17px",
                                                            boxShadow: "0 19px 38px rgba(0,0,0,0.15)",
                                                            
                                                        }}
                                                    >
                                                        <h4 class="card-title" style={{fontSize:"3.1vh"}}> &nbsp;Today(Points)</h4>
                                                        <h6 class="text-muted card-subtitle mb-2" style={{fontSize:"3.1vh"}}>
                                                        &nbsp;{this.state.today_earning}
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div class="col-sm-12" style={{ padding: "10px" }}>
                                                    <div
                                                        class="card"
                                                        style={{
                                                            padding: "20px",
                                                            marginBottom: "10px",
                                                            boxShadow: "0 19px 38px rgba(0,0,0,0.15)",
                                                            padding: "30px",
                                                            backgroundColor: "#ffffff",
                                                            borderRadius: "17px",
                                                            border:"none",
                                                        }}
                                                    >
                                                        <h4 class="card-title"  style={{fontSize:"3.1vh"}} >&nbsp;Yesterday(Points)</h4>
                                                        <h6 class="text-muted card-subtitle mb-2" style={{fontSize:"3.1vh"}}>
                                                        &nbsp;{this.state.yesterday_earning}
                                                        </h6>
                                                    </div>
                                                </div>

                                                <div class="col-sm-12" style={{ padding: "10px" }}>
                                                    <div
                                                        class="card"
                                                        style={{
                                                            padding: "20px",
                                                            marginBottom: "10px",
                                                            boxShadow: "0 19px 38px rgba(0,0,0,0.15)",
                                                            padding: "30px",
                                                            backgroundColor: "#ffffff",
                                                            borderRadius: "17px",
                                                            border:"none",
                                                        }}
                                                    >
                                                        <h4 class="card-title"  style={{fontSize:"3.1vh"}}>&nbsp;Last 7 days(Points)</h4>

                                                        <h6 class="text-muted card-subtitle mb-2" style={{fontSize:"3.1vh"}}>
                                                         {this.state.week_earning}
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div class="col-sm-12" style={{ padding: "10px"  }}>
                                                    <div
                                                        class="card"
                                                        style={{
                                                            padding: "20px",
                                                            marginBottom: "10px",
                                                            boxShadow: "0 19px 38px rgba(0,0,0,0.15)",
                                                            padding: "30px",
                                                            backgroundColor: "#ffffff",
                                                            borderRadius: "17px",
                                                            border:"none",
                                                            zIndex: 3,
                                                           
                                                        }}
                                                    >
                                                        <h4 class="card-title"  style={{fontSize:"3.1vh"}}> &nbsp;This month(Points)</h4>
                                                        <h6 class="text-muted card-subtitle mb-2" style={{fontSize:"3.1vh"}}>
                                                       {this.state.month_earning}
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
        {/* ////////////////////////////////Highlights Scores/////////////////////// */}




        {/* /////////////////////new highlight socre//////////////////////////////////////////////// */}




        {/* /////////////////////new highlight socre//////////////////////////////////////////////// */}
                                        <div class="col-sm-5" style={{marginTop:"290px" }}>
                                            <div class>


                                            <div class='wrapper'>
  <div class='carousel' style={{zIndex:2}}>
    <div class='carousel__item'>
 
      <div class='carousel__item-body'>
      <div style={{fontWeight:"500", textAlign:"center" , color:"#ffcc29"}}><h3>Highlights</h3></div>
      <div style={{fontWeight:"500", textAlign:"center" , color:"white"}}><h2>1000$ </h2></div>
      <p style={{textAlign:"center" , color:"white"}} ><h4> - Danial - </h4></p>
      </div>
    </div>
    <div class='carousel__item'>
     
    <div class='carousel__item-body'>
    <div style={{fontWeight:"500", textAlign:"center" , color:"#ffcc29"}}><h3>Highlights</h3></div>

      <div style={{fontWeight:"500", textAlign:"center",color:"white"}}><h3>456$ </h3></div>
      <p style={{textAlign:"center" , color:"white"}} ><h4> - Belx - </h4></p>
      </div>
    </div>
    <div class='carousel__item'>
    
    <div class='carousel__item-body'>
    <div style={{fontWeight:"500", textAlign:"center" , color:"#ffcc29"}}><h3>Highlights</h3></div>

      <div style={{fontWeight:"500", textAlign:"center" ,color:"white"}}><h3>978$ </h3></div>
      <p style={{textAlign:"center" , color:"white"}} ><h4> - Merex - </h4></p>
      </div>
    </div>
    <div class='carousel__item'>
     
    <div class='carousel__item-body'>
    <div style={{fontWeight:"500", textAlign:"center" , color:"#ffcc29"}}><h3>Highlights</h3></div>

      <div style={{fontWeight:"500", textAlign:"center" ,color:"white"}}><h3>236$ </h3></div>
      <p style={{textAlign:"center" , color:"white"}} ><h4>  - Nshex - </h4></p>
      </div>
    </div>
    <div class='carousel__item'>
 
    <div class='carousel__item-body'>
    <div style={{fontWeight:"500", textAlign:"center" , color:"#ffcc29"}}><h3>Highlights</h3></div>

      <div style={{fontWeight:"500", textAlign:"center",color:"white"}}><h3>497$ </h3></div>
      <p style={{textAlign:"center" , color:"white"}} ><h4> - Kesal - </h4></p>
      </div>
    </div>
    <div class='carousel__item'>
      
    <div class='carousel__item-body'>
    <div style={{fontWeight:"500", textAlign:"center" , color:"#ffcc29"}}><h3>Highlights</h3></div>

      <div style={{fontWeight:"500", textAlign:"center" ,color:"white"}}><h3>715$ </h3></div>
      <p style={{textAlign:"center" , color:"white"}} ><h4>  - Baleij - </h4></p>
      </div>
    </div>
    <div class='carousel__item'>
     
    <div class='carousel__item-body'>
    <div style={{fontWeight:"500", textAlign:"center" , color:"#ffcc29"}}><h3>Highlights</h3></div>

      <div style={{fontWeight:"500", textAlign:"center",color:"white"}}><h3>364$ </h3></div>
      <p style={{textAlign:"center" , color:"white"}} ><h4> - Yeax - </h4></p>
      </div>
    </div>
    <div class='carousel__item'>
    
    <div class='carousel__item-body'>
    <div style={{fontWeight:"500", textAlign:"center" , color:"#ffcc29"}}><h3>Highlights</h3></div>

      <div style={{fontWeight:"500", textAlign:"center",color:"white"}}><h3>916$ </h3></div>
      <p style={{textAlign:"center" , color:"white"}} ><h4> - Nefer - </h4></p>
      </div>
    </div>
    <div class='carousel__item'>
   
    <div class='carousel__item-body'>
    <div style={{fontWeight:"500", textAlign:"center" , color:"#ffcc29"}}><h3>Highlights</h3></div>

      <div style={{fontWeight:"500", textAlign:"center",color:"white"}}><h3>147$ </h3></div>
      <p style={{textAlign:"center" , color:"white"}} ><h4>  - Ruwel - </h4></p>
      </div>
    </div>
  </div>
</div>
                                       
</div>

   {/* ///////////////////////////////new slide show////////////////////////////////////////////   */}



   {/* ///////////////////////////////new slide show////////////////////////////////////////////   */}

               </div>
                                    </div>
                                    {/* <div class="allcard" style={{ marginTop: "10px", height: "30%", width: "100%" }}> */}


                                        {/* <div class="row" style={{ marginTop: "30px", alignContent: "center" }}>
                                            <div class="col-sm-12 col-md-6" style={{ padding: "10px" }}>
                                                <div class="card" style={{ padding: "20px", marginBottom: "10px", boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.2)", padding: "30px", backgroundColor: "#ffffff", borderRadius: "5px" }}>
                                                    <h4 class="card-title"> &nbsp;Today(Points)</h4>
                                                    <h6 class="text-muted card-subtitle mb-2">{this.state.today_earning}</h6>

                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-6" style={{ padding: "10px" }}>
                                                <div class="card" style={{ padding: "20px", marginBottom: "10px", boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.2)", padding: "30px", backgroundColor: "#ffffff", borderRadius: "5px" }}>
                                                    <h4 class="card-title">&nbsp; Yesterday(Points)</h4>
                                                    <h6 class="text-muted card-subtitle mb-2">{this.state.yesterday_earning}</h6>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-6" style={{ padding: "10px" }}>
                                                <div class="card" style={{ padding: "20px", marginBottom: "10px", boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.2)", padding: "30px", backgroundColor: "#ffffff", borderRadius: "5px" }}>
                                                    <h4 class="card-title">Last 7 days(Points)</h4>
                                                    <h6 class="text-muted card-subtitle mb-2">{this.state.week_earning}</h6>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-6" style={{ padding: "10px" }}>
                                                <div class="card" style={{ padding: "20px", marginBottom: "10px", boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.2)", padding: "30px", backgroundColor: "#ffffff", borderRadius: "5px" }}>
                                                    <h4 class="card-title">This month(Points)</h4>
                                                    <h6 class="text-muted card-subtitle mb-2">{this.state.month_earning}</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row" style={{ width: "100%" }}>
                                            <div class="col-sm-12 col-md-6 mx-auto" style={{ padding: "10px" }}>
                                                <div class="card" style={{ marginBottom: "10px", boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.2)", backgroundColor: "#ffffff", borderRadius: "5px" }}>
                                                    <div class="card-body text-center">
                                                        <h4 class="card-title">Balance(Points)</h4>
                                                        <h6 class="text-muted card-subtitle mb-2">{this.state.balance}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}

                                      

{/* <div class="row" style={{textAlign:"center"}}> */}

  <div className="earnset" >     
   <br/>   <br/> 
                                        <div class="row" style={{ marginTop: "5%", width: "100%" , marginLeft:"3px"  }}>
                                            <div class="col-md-6 mx-auto " >
                                                <Link to="/earnpage" >
                                                    <button class="mx-auto d-block" style={{
                                                        borderRadius: "25px", outline: "none", textDecoration: "none", display: "flex", justifyContent: "center", alignItems: "center", textTransform: "uppercase",
                                                        height: "55px",
                                                        width: "230px", opacity: " 1", backgroundColor: " #ffffff", border: "1px solid rgba(22, 76, 167, 0.6)"
                                                    }} >
                                                        <span>Earn More</span>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>

                                        <h2 class="text-center" style={{ marginTop: "5%" ,fontSize:"2.8vmax", textAlign:"center" }} >Place Your Social Media Orders <br /></h2>
                                        {/* <div style={{ alignContent: "center" }}> */}
                                            {/* <h3 style={{ marginTop: "5%", textAlign: "center" }}>Place Your Social Media Orders</h3> */}
                                            <br></br><br></br>
                                            </div>  


{/* </div> */}
<br/><br/>
                                  
{/* ////////////////////////////////////new crad/////////////////////////////////////////////////////////// */}
<div class="allcard">
  
                <div class="row">
                  <div class="col-6 col-sm-4 col-md-2">
                    <div
                      style={{
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                        padding: "0 0 20px 0",
                        textAlign: "center",
                        backgroundColor: "#ffffff",
                        borderRadius: "35px",
                      }}
                    >
                      <a
                        class="card-block stretched-link text-decoration-none"
                      ></a>

                      <div class="imageali">
                        <img
                          src="/assets/Image/new image size/icon/1.png"
                          style={{ width: "32%", height: "32%" }}
                        ></img>
                      </div>
                    </div>
                    <br />
                  </div>
                  <div class="col-6 col-sm-4 col-md-2">
                    <div
                      style={{
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                        padding: "0 0 20px 0",
                        textAlign: "center",
                        backgroundColor: "#ffffff",
                        borderRadius: "35px",
                      }}
                    >
                      <a
                        class="card-block stretched-link text-decoration-none"
                        href=""
                      ></a>
                      <div class="imageali">
                        <img
                          src="/assets/Image/new image size/icon/2.png"
                          style={{ width: "32%", height: "32%" }}
                        ></img>
                      </div>
                    </div>
                    <br />
                  </div>
                  <div class="col-6 col-sm-4 col-md-2">
                    <div
                      style={{
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                        padding: "0 0 20px 0",
                        textAlign: "center",
                        backgroundColor: "#ffffff",
                        borderRadius: "35px",
                      }}
                    >
                      <a
                        class="card-block stretched-link text-decoration-none"
                      ></a>
                      <div class="imageali">
                        {" "}
                        <img
                          src="/assets/Image/new image size/icon/5.png"
                          style={{ width: "32%", height: "32%" }}
                        ></img>
                      </div>
                    </div>
                    <br />
                  </div>
                  <div class="col-6 col-sm-4 col-md-2">
                    <div
                      style={{
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                        padding: "0 0 20px 0",
                        textAlign: "center",
                        backgroundColor: "#ffffff",
                        borderRadius: "35px",
                      }}
                    >
                      <a
                        class="card-block stretched-link text-decoration-none"
                      ></a>
                      <div class="imageali">
                        <img
                          src="/assets/Image/new image size/icon/3.png"
                          style={{ width: "32%", height: "32%" }}
                        ></img>
                      </div>
                    </div>
                    <br />
                  </div>
                  <div class="col-6 col-sm-4 col-md-2">
                    <div
                      style={{
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                        padding: "0 0 20px 0",
                        textAlign: "center",
                        backgroundColor: "#ffffff",
                        borderRadius: "35px",
                      }}
                    >
                      <a
                        class="card-block stretched-link text-decoration-none"
                      ></a>
                      <div class="imageali">
                        <img
                          src="/assets/Image/new image size/icon/4.png"
                          style={{ width: "32%", height: "32%" }}
                        ></img>
                      </div>
                    </div>
                    <br />
                  </div>

                  <div class="col-6 col-sm-4 col-md-2">
                    <div
                      style={{
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                        padding: "0 0 20px 0",
                        textAlign: "center",
                        backgroundColor: "#ffffff",
                        borderRadius: "35px",
                      }}
                    >
                      <a
                        class="card-block stretched-link text-decoration-none"
                        href="#"
                      ></a>
                      <div class="imageali">
                        <img
                          src="/assets/Image/new image size/icon/6.png"
                          style={{ width: "32%", height: "32%" }}
                        ></img>
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
              </div>

{/* ////////////////////////////////////new crad/////////////////////////////////////////////////////////// */}
                                          


                                            {/* <div class="allcard" >
                                                <div class="row">
                                                    <div class="col-6 col-sm-4 col-md-2">
                                                        <div style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", padding: "0 0 20px 0", textAlign: "center", backgroundColor: "#ffffff", borderRadius: "35px" }}>
                                                            <a class="card-block stretched-link text-decoration-none"></a>

                                                            <div class="imageali"><img src="/assets/Image/new image size/icon/1.png" style={{ width: "40%", height: "40%" }} alt=""></img>
                                                            </div>

                                                        </div>
                                                        <br />
                                                    </div>
                                                    <div class="col-6 col-sm-4 col-md-2">
                                                        <div style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", padding: "0 0 20px 0", textAlign: "center", backgroundColor: "#ffffff", borderRadius: "35px" }}>
                                                            <a class="card-block stretched-link text-decoration-none" ></a>
                                                            <div class="imageali"><img src="/assets/Image/new image size/icon/2.png" style={{ width: "40%", height: "40%" }} alt=""></img>
                                                            </div>

                                                        </div>
                                                        <br />

                                                    </div>
                                                    <div class="col-6 col-sm-4 col-md-2">
                                                        <div style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", padding: "0 0 20px 0", textAlign: "center", backgroundColor: "#ffffff", borderRadius: "35px" }}>
                                                            <a class="card-block stretched-link text-decoration-none" ></a>
                                                            <div class="imageali"> <img src="/assets/Image/new image size/icon/5.png" style={{ width: "40%", height: "40%" }} alt=""></img>
                                                            </div>

                                                        </div>
                                                        <br />

                                                    </div>
                                                    <div class="col-6 col-sm-4 col-md-2">
                                                        <div style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", padding: "0 0 20px 0", textAlign: "center", backgroundColor: "#ffffff", borderRadius: "35px" }}>
                                                            <a class="card-block stretched-link text-decoration-none" ></a>
                                                            <div class="imageali"><img src="/assets/Image/new image size/icon/3.png" style={{ width: "40%", height: "40%" }} alt=""></img>
                                                            </div>

                                                        </div>
                                                        <br />

                                                    </div>
                                                    <div class="col-6 col-sm-4 col-md-2">
                                                        <div style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", padding: "0 0 20px 0", textAlign: "center", backgroundColor: "#ffffff", borderRadius: "35px" }}>
                                                            <a class="card-block stretched-link text-decoration-none"></a>
                                                            <div class="imageali"><img src="/assets/Image/new image size/icon/4.png" style={{ width: "40%", height: "40%" }} alt=""></img>
                                                            </div>

                                                        </div>
                                                        <br />
                                                    </div>
                                                </div>
                                            </div> */}


                                            <div class="row" style={{ marginTop: "5%", marginBottom: "5%" }}>
                                                <div class="col-md-6 mx-auto " >
                                                    <Link to="/createorder" >
                                                        <button class="mx-auto d-block" style={{
                                                            borderRadius: "25px", outline: "none", textDecoration: "none", display: "flex", justifyContent: "center", alignItems: "center", textTransform: "uppercase",
                                                            height: "45px",
                                                            width: "230px", opacity: " 1", backgroundColor: " #ffffff", border: "1px solid rgba(22, 76, 167, 0.6)"
                                                        }} >
                                                            <span>Place Orders</span>
                                                        </button>
                                                    </Link>
                                                </div>

                                            </div>

                                        {/* </div> */}
                                   
                                </div>
                            </div>



                        </main>
                    </div>
                </div>

            </div >


        )
    }
}
export default Dash