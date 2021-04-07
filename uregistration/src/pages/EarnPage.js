/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from 'react-router-dom';
import userServices from "../services/userServices";
import earningService from "../services/earningService";
import { Helmet } from "react-helmet";
import Cookies from 'js-cookie';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class EarnPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            total_earning: '',
            username: '',
            earnstatus: ''

        }

    }

    componentDidMount() {
        var user = Cookies.get('user');
        if (user != null) {
            earningService.getTotalEarning(Cookies.get('user')).then(res => {
                this.setState({ total_earning: res.data });
            });

            userServices.getUserById(Cookies.get('user')).then(res => {
                this.setState({ username: res.data.fname });
            });

            userServices.getProfileCompletion(Cookies.get('user')).then(res => {
                var earnblock = document.getElementById("earnblock");
                if (res.data == "compeleted") {
                    this.setState({ earnstatus: '' });
                    var social = document.getElementById("socialearn");
                    var upload = document.getElementById("uplaodearn");
                    // social.href = "/earnmanagement";
                    // upload.href = "/uploadvideo";
                    earnblock.setAttribute("style", "color: #FF4019;display:none");
                } else {
                    this.setState({ earnstatus: res.data + ' Complete your profile to start earning' });
                    earnblock.setAttribute("style", "color: #FF4019;display:''");
                }
            });
        } else {
            this.props.history.push('/login');
        }

    }

    redirectToUpload = (e) => {
        this.props.history.push('/uploadvideo');
        window.location.reload();

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
        return (
            <div style={{ backgroundColor: "#dfeef2" }}>
                <Helmet>
                    <link rel="stylesheet" href="assets/css/Earn_page_css.css" />
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
                        <main class="s-layout__content" style={{ height: "100%", backgroundColor: "#dfeef2", padding: "50px" }}>
                            <div>
                                {/* ////////////////////////////////////////////old emoney card ///////////////////////////////////////////////////// */}
                                <div class="" style={{ marginTop: "80px" }}>
                                    <h1 class="text-center" style={{ fontSize: "3.5vmax" }}>Choose the method of Earning</h1>
                                    <h5 class="text-center" id="earnblock" >{this.state.earnstatus} <a style={{ color: "blue" }} href="/profile">Go To Profile</a></h5>

                                    {/*                                
                                    <div class="row text-center" style={{ marginTop: "-5%", height: "100%", padding: "80px" }}>
                                        <div class="col-md-4" style={{ padding: "10px" }}>
                                            <div class="cardearn">
                                                <img src="assets\images\Browse websites.png" alt="" style={{ width: "60%", height: "20%" }} />
                                                <div class="cradtext">
                                                    Browse Videos in Youtube
                                                </div>
                                     
                                                <button class="button">
                                                    <a id="videoearn"><span>EARN</span></a>
                                                </button>
                                    
                                            </div>
                                        </div>
                                        <br />
                                        <div class="col-md-4 " style={{ padding: "10px", marginLeft: "10px" }}>
                                            <div class="cardearn">
                                                <img src="assets\images\socialmedia.png" alt="" style={{ width: "60%", height: "10%" }} />
                                                <div class="cradtext">
                                                    Leave Engagement On Social Media
                                                </div>
                                                <button class="button" >
                                               
                                                    <a id="socialearn"><span>EARN</span></a>
                                                </button>
                                            </div>
                                        </div>



                                        <div class="col-md-4 text-center" style={{ padding: "10px" }}>
                                            <div class="cardearn">


                                                <div class="wrapper">
                                                    <div class="file-upload">
                                                        <i class="fa fa-arrow-up"></i>
                                                    </div>
                                                </div>

                                                <div class="cradtext">
                                                    Upload Video
                                                </div>
                                   
                                                <button class="button" >
                                                    <a id="uplaodearn"><span>EARN</span></a>
                                                </button>
                                                <br />


                                            </div>
                                        </div>





                                    </div> */}

                                </div>


{/* ////////////////////////////////////////////old emoney card ///////////////////////////////////////////////////// */}




{/* ///////////////////////////////////////////new card view////////////////////////////// */}

<div class="container">
<div class="row">
  <div class="col-sm-4" style={{padding:"20px", marginLeft:"-8px"}}>
<div class="card">
    
  <img
   src="assets\Earnpage-images\watchvideoimg.png"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title" style={{textAlign:"center"}}> Browse Videos in Youtube  </h5>
<br/>
    <a href="#!" class="btn btn-primary" style={{ backgroundColor:"#16c79a" , border:"none" , width:"100%"}}>EARN NOW</a>
    <br/>
  </div>
</div>
</div>


  <div class="  col-sm-4" style={{padding:"20px" , marginLeft:"-8px"}}>
<div class="card">
  <img
   src="assets\Earnpage-images\sociaimg,.png"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title"  style={{textAlign:"center"}}>Leave Engagement On Social Media  </h5>

    <a href="#!" class="btn btn-primary" style={{backgroundColor:"#16c79a" , border:"none",width:"100%"}}>EARN NOW</a>
  </div>
</div>
</div>


  <div class=" col-sm-4"style={{padding:"20px" ,marginLeft:"-8px"}} >
<div class="card">
  <img
   src="assets\Earnpage-images\videouploadimg.jpg"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title"  style={{textAlign:"center"}}>    Upload Video </h5>
    <br/>
    <a href="#!" class="btn btn-primary" style={{backgroundColor:"#16c79a" , border:"none", width:"100%"}}>EARN NOW</a>
  </div>
</div>

</div>
</div>
</div>


{/* ///////////////////////////////////////////new card view////////////////////////////// */}

<br/>
{/* ///////////////////////////////////////////new card view////////////////////////////// */}

<div class="container">
<div class="row" >
  <div class="col-sm-4" style={{padding:"20px", marginLeft:"-8px"}}>
<div class="card" >
  <img
    src="assets\Earnpage-images\surveyimg.png"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title"  style={{textAlign:"center"}}>       Fill out surveys </h5>
    
    <a href="#!" class="btn btn-primary" style={{backgroundColor:"#16c79a" , border:"none" ,width:"100%"}}>EARN NOW</a>
  </div>
</div>
</div>
  <div class="  col-sm-4" style={{padding:"20px" , marginLeft:"-8px"}}>
<div class="card">
  <img
    src="assets\Earnpage-images\linkclick.png"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title"  style={{textAlign:"center"}}>Link Click </h5>
  
    <a href="#!" class="btn btn-primary" style={{backgroundColor:"#16c79a" , border:"none" , width:"100%"}}>EARN NOW</a>
  </div>
</div></div>




</div>
</div>


{/* ///////////////////////////////////////////new card view////////////////////////////// */}






                            </div>
                        </main>
                    </div></div>



                <br /><br />




            </div>
        )
    }
}
export default EarnPage