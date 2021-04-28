/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Cookies from 'js-cookie';
import pointService from "../services/pointService";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import $ from 'jquery';

class Howitworks1 extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      profile: '0',
      referal: '0',
      social: '0',
      yvideos: '0',
      uvideos: '0',

    }
  }

  componentDidMount() {
    pointService.getServicePoints("Profile Completion").then(res => {
      this.setState({ profile: res.data });
    });

    pointService.getServicePoints("Referal").then(res => {
      this.setState({ referal: res.data });
    });

    pointService.getServicePoints("social").then(res => {
      this.setState({ social: res.data });
    });

    pointService.getServicePoints("Youtube Video Watch").then(res => {
      this.setState({ yvideos: res.data });
    });

    pointService.getServicePoints("Video Upload").then(res => {
      this.setState({ uvideos: res.data });
    });
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
        {/* <header
          class="header"
          style={{ backgroundColor: "white", height: "10%", width: "100%" }}
        >
          <section class="container header__inner">
            <Link to="/Howitworks">
              <a class="action">
                <i
                  class="fa fa-arrow-circle-left"
                  style={{ fontSize: "34px", paddingTop: "5px" }}
                ></i>
              </a>
            </Link>
            &emsp;&emsp;
            <div class="header__left">
              <a href="/homebl" class="nav__link pricing__link text_violet">
                <div style={{ paddingTop: "14px" }}> Home </div>
              </a>
            </div>
            <div class="header__right">
              <a href="/register" class="button-register button_yellow ">
                Registration
              </a>
              <a href="/login" class="button-enter button_yellow ">
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
        </header> */}
        {(() => {
          if (Cookies.get('user') == null) {
            return (
              <header class="header" style={{ backgroundColor: "white", height: "10", width: "100%" }}>

                <section class="container header__inner" >
                  <a class="action" href="/howitworks">
                    <i
                      class="fa fa-arrow-circle-left"
                      style={{ fontSize: "34px", paddingTop: "14px" }}
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
                  <a class="action" href="/howitworks">
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



   
          
        <div class="team-boxed">
          <div class="container">
            <div class="intro">
              <h2
                class="text-center"
                style={{ color: "rgb(3,23,44)", marginTop: "100px" }}
              >
                Methods of Earnings
              </h2>
              <p class="text-center" style={{ color: "rgb(3,23,44)" }}>
                There are five types of Earnings. You can choose most prefferd
                method of earnings for you.
              </p>
            </div>
            <div class="row people">
              <div class="col-md-6 col-lg-4 item" style={{display:"flex"}}>
                <div class="box">
                  <h5 class="name" style={{ color: "rgb(3,23,44)" }}>
                    {" "}
                    Complete Your Profile({this.state.profile} points)
                  </h5>
                  <br /> <br />
                  <div class="image">
                    <img
                      src="assets/Image/earn/completeprofile.png"
                      alt="sample59"
                    />

                  </div>
                  <p class="description">
                    This approach is easy to pick. All you have to do now is complete and fill in the details and finish your profile and win the given points for yourself.
                  </p>
                  <a class="action" href="/EarnCompleteprofile">
                    {/* <i
                      class="fa fa-arrow-circle-right"
                      style={{ fontSize: "34px" }}
                    ></i> */}
                    <button class="btn btn-primary">Detail</button>&nbsp;&nbsp;
                  </a>
                  <a href="/profile">
                    <button class="btn btn-success">Earn</button>
                  </a>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 item" style={{display:"flex"}}>
                <div class="box">
                  <h5 class="name" style={{ color: "rgb(3,23,44)" }}>
                    {" "}
                    Refer Your Friends({this.state.referal} points)
                  </h5>
                  <br /> <br />
                  <div class="image">
                    <img
                      src="assets/Image/earn/referfriend.png"
                      alt="videoearn-money"
                    />
                  </div>
                  <p class="description">
                    Refer Your Friends and Earn Money with Referral Links.You can share your links online, via email,
                    and text, and when a friend signs up and does the necessary action,
                    you’ll be credited with points.{" "}
                  </p>
                  <a class="action" href="/Earnreferal">
                    <button class="btn btn-primary">Detail</button>&nbsp;&nbsp;
                  </a>
                  <a href="/referal">
                    <button class="btn btn-success">Earn</button>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 item" style={{display:"flex"}}>
                <div class="box">
                  <h5 class="name" style={{ color: "rgb(3,23,44)" }}>
                    Leaving Engagement on Social Media(Maximum {this.state.social} points)
                  </h5>
                  <br />
                  <div class="image">
                    <img src="assets/Image/earn/see.png" alt="sample59" />
                  </div>
                  <p class="description">
                    Only you have to do is complete the tasks provided by us, By using your social media account and earn points. You can earn points by using social media accounts.
                  </p>
                  <a class="action" href="/smengagement">
                    <button class="btn btn-primary">Detail</button>&nbsp;&nbsp;
                  </a>
                  <a href="/earnmanagement">
                    <button class="btn btn-success">Earn</button>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 item" style={{display:"flex"}}>
                <div class="box">
                  <h5 class="name" style={{ color: "rgb(3,23,44)" }}>
                    Browsing Videos({this.state.yvideos} points)
                  </h5>
                  <div class="image">
                    <img
                      src="assets/Image/earn/beowsvide.png"
                      alt="beowsvide"
                    />
                  </div>
                  <p class="description">
                    Only thing you need to do in this method is
                    videos .By using this method of earning you can
                    earn points easily. You don't need to create accounts or use
                    your social media accounts. You have to complete the tasks
                    we provide to earn points.Focus on what you are good at and
                    best.
                  </p>
                  <a class="action" href="/browsingvideos">
                    <button class="btn btn-primary">Detail</button>&nbsp;&nbsp;
                  </a>
                  <a href="/ytvideowatch">
                    <button class="btn btn-success">Earn</button>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 item" style={{display:"flex"}}>
                <div class="box">
                  <h5 class="name" style={{ color: "rgb(3,23,44)" }}>
                    Upload Videos({this.state.uvideos} points)
                  </h5>
                  <br />
                  <div class="image">
                    <img
                      src="assets/Image/earn/videoearn-money.png"
                      alt="videoearn-money"
                    />
                  </div>
                  <p class="description">
                    By uploading videos you can earn points. If you are a
                    content creator, this is the most suitable method of
                    earnings. Your video's maximum time duration should be 5
                    minutes.If it is exceed more than 50mb or 5 minutes you
                    cannot upload it or earn points. You have to mention the
                    hash tags and specified category.{" "}
                  </p>
                  <a class="action" href="/uploadvideohit">
                    <button class="btn btn-primary">Detail</button>&nbsp;&nbsp;
                  </a>
                  <a href="/uploadvideo">
                    <button class="btn btn-success">Earn</button>
                  </a>
                </div>
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
                    <p style={{color:"white" , textAlign:"left"}}>You can choose this method easily. Only you have to do is complete the
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
      </div>
    );
  }
}
export default Howitworks1;
