/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Cookies from 'js-cookie';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import $ from 'jquery';

class Howitworks extends React.Component {
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
      $("#cover").fadeOut(1000);
      });
    


    return (
      <div
        id="homepage"
        className="is-header"
        style={{ backgroundColor: "white", height: "100%", width: "100%" }}
      >


        
        <Helmet>
          <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/assets/assets/fonts/ionicons.min.css" />
          <link rel="stylesheet" href="/assets/assets/css/Footer-Dark.css" />
          <link rel="stylesheet" href="/assets/assets/css/styles.css"></link>
          <link type="text/css" rel="stylesheet" href="assets/css/app69fd.css?id=d97cc8504a674a3a9f71" />
          <link rel="stylesheet" href="/assets/css/Article-Cards.css" />
          <link rel="stylesheet" href="/assets/css/Team-Boxed.css" />
          <link rel="stylesheet" href="/assets/css/Article-List.css" />
        </Helmet>
        {(() => {
          if (Cookies.get('user') == null) {
            return (
              <header
              class="header"
              style={{ backgroundColor: "white", height: "10", width: "100%" }}
            >
              <section class="container header__inner">
                <Link to="/homebl">
                  <a class="action">
                    <i
                      class="fa fa-arrow-circle-left"
                      style={{ fontSize: "34px", paddingTop: "14px" }}
                    ></i>
                  </a>
                </Link>
                &emsp;
                <div class="header__left">
                 
                <Link to="/UserHome">
                    <img
                      src="/assets/webicon.png"
                      style={{ width: "15vh", height: "8vh" }}
                    />
    
                    <br />
                  </Link>
                  
                </div>
                <div class="header__right">
                  <a href="/register" class="button-register button_yellow " style={{ textDecoration: 'none' }}>
                    Registration
                  </a>
    
                  <a href="/login" class="button-enter button_yellow " style={{ textDecoration: 'none' }}>
                    <div class="button-enter__text">
                      <span>Login</span>
                    </div>
                    <img
                      class="button-enter__icon"
                      src="assets/Image/earn/user.svg"
                      alt=""
                    ></img>
                  </a>
                </div>
              </section>
            </header>
            )
          } else {
            return (
              <header class="header" style={{ padding: "0 20px", backgroundColor: "#f9f9f9", boxShadow: "0 4px 4px rgba(0,0,0,.05)" }}>

                <section class="container header__inner">

                  <div class="header__left">
                    <a href="/userhome">
                      <img src="/assets/webicon.png" style={{ width: "161px", height: "61px" }} alt="Emoneytag" title="Emoneytag" />
                    </a>
                    <br />
                  </div>
                  <div class="header__right">
                    <div class="accounticon">
                      <a href="/contactus">  Contact us </a>
                    </div>&nbsp;&nbsp;&nbsp;&nbsp;
                    <div class="accounticon">
                      <a href="/dash">  Dashboard&nbsp; </a>
                    </div>
                    <li class="nav-item dropdown no-arrow" role="presentation">
                      <div class="nav-item dropdown no-arrow">
                        <a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">
                          <i class="fa fa-2x fa-user-circle-o"></i>
                        </a>
                        <div
                          class="dropdown-menu shadow dropdown-menu-right animated--grow-in" role="menu">
                          <a class="dropdown-item" role="presentation" href="/profile">
                            <i class="fa fa-user fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Profile
                        </a>
                          <a class="dropdown-item" role="presentation" onClick={this.logout}>
                            <i class="fa fa-sign-out fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Logout
                          </a>
                        </div>
                      </div>
                    </li>



                  </div>
                </section>

              </header>
            )
          }
        })()}
        
        <div
          style={{ height: "100%", width: "100%", backgroundColor: "white" }}
        >
     {/* ////////////////////preloader////////////////////////////////////////////////////////// */}
     {/* <div id="cover"> <span class="glyphicon glyphicon-refresh w3-spin preloader-Icon"></span> 
  
  <div id="preloader">
  <div id="loader"></div>
</div>

</div> */}



          {/* ////////////////////preloader////////////////////////////////////////////////////////// */}
      

          <div class="row">
            <h1
              style={{
                marginRight: " 20%",
                marginLeft: "30%",
                color: "rgb(17,53,89)",
                backgroundColor: "white",
                marginTop: "150px",
              }}
            >
              Discover How It's Easy to Use 
            </h1>
            <div
              class="col-md-6 col-lg-4 item"
              style={{ marginLeft: "7%", marginRight: "7%", marginTop: "2%" }}
            >
              <div class="card">
                <div class="image">
                  <img src="assets/Image/earn/10.png" alt="sample52" />
                </div>

                <p style={{ textAlign: "center", fontSize: "25px" }}>
                  How to Make Money Online
                </p>

                <div style={{ textAlign: "center" }}> <a class="action" href="/howitworks1"><i class="fa fa-arrow-circle-right" style={{ fontSize: "60px" }} ></i></a></div><br/>
                {/* <a class="action" href="/howitworks1">
                  <i
                    class="fa fa-arrow-circle-right"
                    style={{ fontSize: "64px" }}
                  ></i>
                </a> */}
              </div>
            </div>
            <div
              class="col-md-6 col-lg-4 item"
              style={{ marginLeft: "7%", marginRight: "7%", marginTop: "2%" }}
            >
              <div class="card">
                <div class="image">
                  <img src="assets/Image/earn/see.png" alt="sample59" />
                </div>
                <p style={{ textAlign: "center", fontSize: "25px" }}>
                  Promote your YouTube/ Social media
                </p>
                <div style={{ textAlign: "center" }}> <a class="action" href="/howitworks2"><i class="fa fa-arrow-circle-right" style={{ fontSize: "60px" }} ></i></a></div><br/>
                {/* <a class="action" href="/howitworks2">
                  <i
                    class="fa fa-arrow-circle-right"
                    style={{ fontSize: "64px" }}
                  ></i>
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div class="footer-dark" style={{ marginTop: "5%" }}>
          <footer>
            <div class="container">
              <div class="row">
                <div class="col-sm-6 col-md-3 item">
                  <h3>Services</h3>
                  <ul>
                    <li><a href="/termsofservice">Terms of Service</a></li>
                    <li><a href="/privacypolicy">Privacy Policy</a></li>
                    <li><a href="#"></a></li>
                  </ul>
                </div>
                <div class="col-sm-6 col-md-3 item">
                  <h3>Contacts Us</h3>
                  <ul>
                    <li><a href="#">support@emoneytag.com</a></li>
                    <li><a href="#">FAQ</a></li>

                  </ul>
                </div>
                <div class="col-md-6 item text">
                  <h3>EmoneyTag</h3>
                  <p style={{color:"white"}}>You can choose this method easily. Only you have to do is complete the
                  tasks provided by us, By using your social media account and earn points.
                  You can earn points by using Facebook, Twitter, Instagram, YouTube and TikTok social
                                           media accounts.your one tap can earn points for you.</p>
                </div>
                <div class="col item social"><a href="#">
                  <i class="icon ion-social-facebook"></i></a><a href="#">
                    <i class="icon ion-social-twitter"></i></a><a href="#">
                    <i class="icon ion-social-youtube"></i></a><a href="#">
                    <i class="icon ion-social-instagram"></i></a></div>
              </div>
              <p class="copyright">©️ 2021 — EMONEYTAG.COM</p>

            </div>
          </footer>
        </div>
      </div>
    );
  }
}
export default Howitworks;
