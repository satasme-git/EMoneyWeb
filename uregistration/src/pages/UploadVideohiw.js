/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Helmet } from "react-helmet";
import Cookies from 'js-cookie';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Link } from "react-router-dom";


class UploadVideohit extends React.Component {


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
            <div id="homepage" className="is-header" style={{ backgroundColor: "white", height: "100%", width: "100%" }}>
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
                            <header class="header" style={{ backgroundColor: "white", height: "10", width: "100%" }}>

                                <section class="container header__inner" >
                                    <a class="action" href="/howitworks1">
                                        <i
                                            class="fa fa-arrow-circle-left"
                                            style={{  fontSize: "34px", paddingTop: "14px" }}
                                        ></i>
                                    </a>
                                    &emsp;
                                    <div class="header__left" >

                                    <Link to="/UserHome">
                    <img
                      src="/assets/webicon.png"
                      style={{ width: "15vh", height: "8vh" }}
                    />
    
                    <br />
                  </Link>
                                    </div>
                                    <div class="header__right">
                                        <a href="/register" class="button-register button_yellow ">
                                            Registration
                            </a>
                                        <a href="/login" class="button-enter button_yellow ">
                                            <div class="button-enter__text">
                                                <span>Login</span>
                                            </div>
                                            <img class="button-enter__icon" src="assets/Image/earn/user.svg" alt=""></img>
                                        </a>
                                    </div>
                                </section>

                            </header>
                        )
                    } else {
                        return (
                            <header class="header" style={{ padding: "0 20px", backgroundColor: "#f9f9f9", boxShadow: "0 4px 4px rgba(0,0,0,.05)" }}>

                                <section class="container header__inner">
                                    <a class="action" href="/howitworks1">
                                        <i
                                            class="fa fa-arrow-circle-left"
                                            style={{ fontSize: "34px", paddingTop: "5px" }}
                                        ></i>
                                    </a>
                                    &emsp;&emsp;
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
                <div class="article-list">

                    <div class="container" style={{ width: "100%", height: "100% ", backgroundColor: "white" }}>
                    <div class="intro">
              <h2
                class="text-center"
                style={{ color: "rgb(3,23,44)", marginTop: "100px" , paddingLeft:"10px", paddingRight:"10px"}}
              >
               Browsing Videos, ads, Websites 
              </h2>
              <p class="text-center" style={{ color: "rgb(3,23,44)" ,paddingLeft:"5px", paddingRight:"5px" }}>
            Focus on what you are good at and what works best for you.B All you have to do is upload videos and earn points 
              </p>
            </div>
                        <div class="row articles">
                            <div class="col-sm-6 col-md-4 col-lg-5 offset-lg-1 offset-xl-0 item"> <h3 style={{ color: "rgb(3,23,44)" }}>Step 01</h3><a href="#"><img class="img-fluid" src="assets/Image/earn/cme.png" alt="" /></a>

                                <p class="description">Focus on what you are good at and what works best for you. There are 3 ways to earn money on emoneyTag and each of them is distinguished by a feature that might suit you best. Engagement and your time are key to high earnings.</p></div>

                            <div
                                class="col-sm-6 col-md-4 col-lg-5 offset-lg-1 offset-xl-0 item"> <h3 style={{ color: "rgb(3,23,44)" }}>Step 02</h3><a href="#"><img class="img-fluid" src="assets/Image/earn/uve.png" alt="" /></a>

                                <p class="description">By uploading videos you can earn points. If you are a content creator, this is the most suitable method of earnings.Your video should be 50MB  and it should not exceeded 5 minutes.</p></div>
                        </div>
                    </div>

                </div>
                <div class="footer-dark">
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
                                    <p>You can choose this method easily. Only you have to do is complete the
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
        )
    }
}
export default UploadVideohit