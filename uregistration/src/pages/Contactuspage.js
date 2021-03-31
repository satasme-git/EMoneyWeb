import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Cookies from 'js-cookie';

class Contactuspage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  redirectToHomebl = (e) => {
    this.props.history.push("/howitworks");
  };

  redirectToWatch = (e) => {
    this.props.history.push("/ytvideowatch");
  };

  redirectToSocial = (e) => {
    this.props.history.push("/earnpage");
  };

  redirectCreateorder = (e) => {
    this.props.history.push("/createorder");
  };

  render() {
    return (
      <div id="homepage" className="is-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <title>Home</title>
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta
            name="description"
            content="Get youtube, twitch or instagram views and start to promote your video. Buy views and get 1000 free youtube views now!"
          />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

          <link rel="stylesheet" href="https://www.w3schools.com/lib/w3.css" />
          <link
            rel="stylesheet"
            href="https://www.w3schools.com/w3css/4/w3.css"
          />
          <link
            type="text/css"
            rel="stylesheet"
            href="/assets/css/app69fd.css?id=d97cc8504a674a3a9f71"
          />
          <link rel="stylesheet" href="/assets/home-css.css" />
          <link rel="stylesheet" href="/assets/assets/fonts/ionicons.min.css" />
          <link rel="stylesheet" href="/assets/assets/css/Footer-Dark.css" />
          <link rel="stylesheet" href="/assets/assets/css/styles.css"></link>
          <script src="/assets/home-js.js"></script>
        </Helmet>
        {(() => {
          if (Cookies.get('user') == null) {
            return (
              <header class="header" style={{ backgroundColor: "white", height: "10%", width: "100%" }}>

                <section class="container header__inner" >
                  <a class="action" href="/howitworks">
                    <i
                      class="fa fa-arrow-circle-left"
                      style={{ fontSize: "34px", paddingTop: "5px" }}
                    ></i>
                  </a>
            &emsp;&emsp;
                <div class="header__left" >

                    <a href="/homebl" class="nav__link pricing__link text_violet" >
                      Home
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



        <main class="main" style={{ backgroundColor: "#fff" }}>
          <div class="banner" id="banner" data-replace="/order">
            <div class="banner__box">
              <div class="widget bg">
                <div className="w3-container">


                  <div className="w3-card-4" style={{ width: '100%', backgroundColor: "#fff" }}>

                    <div className="w3-container w3-center">

                      <div class="row">


                        <div class="col-md-12" style={{ textAlign: "center" }}>
                          <div class="image">
                            <img
                              src="assets/Image/earn/dme.jpg"
                              alt="videoearn-money"
                            />
                          </div>
                          <br />
                          <div style={{ fontSize: "80px", color: "#383e56" }}>
                            Contact Information
                      </div>
                        </div><br />

                        <div class="col-md-12">
                          <div class="box">
                            <h5 class="name" style={{ color: "rgb(3,23,44)" }}>
                              {" "}
                    fill up the from and Team will get back to you within 24 hours
                  </h5>
                            <br />



                          </div>
                        </div>

                        <div class="col-md-12">
                          <div style={{ fontSize: "35px", textAlign: "center" }}>

                            <div style={{ color: "#383e56" }}>
                              <i class="fa fa-phone"></i>&nbsp;
                         +0123456789
                         </div>


                            <div style={{ color: "#383e56" }}>
                              <i class="fa fa-envelope"></i>&nbsp;
                          hello@gmail.com
                         </div><br /><br />



                          </div>


                        </div>
                      </div>

                    </div>
                  </div>
                </div>





              </div>
            </div>

          </div>
        </main>{" "}





        <section class="section--dark section contacts-bg contact-form">
          <div class="container">
            <div class="section__header">
              <div class="section__subheader">
                <h3 class="section__title">Do You Have Any Questions?</h3>
              </div>
              <div class="section__description">
                Please contact Support Manager in Live-Chat or fill in the form
                below: Сontacts, Services&amp;Pricing, Referral Program.
              </div>
            </div>
            <div class="contacts">
              <div class="contacts__form">
                <form action="" class="form">
                  <div class="form__left">
                    <select type="text" placeholder="Name" class="form__input">
                      <option value="" selected="selected">
                        I have a question
                      </option>
                      <option value="Cancel order">Cancel order</option>
                      <option value="Refill order">Refill order</option>
                      <option value="Other issues">Other issues</option>
                    </select>{" "}
                    <input
                      type="text"
                      placeholder="Name"
                      maxlength="50"
                      required="required"
                      class="form__input"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      maxlength="50"
                      required="required"
                      class="form__input"
                    />{" "}
                    <input
                      type="text"
                      placeholder="Subject "
                      maxlength="150"
                      required="required"
                      class="form__input"
                    />
                  </div>
                  <div class="form__right">
                    <textarea
                      placeholder="Message"
                      maxlength="1500"
                      required="required"
                      class="form__textarea form__textarea--margin-top"
                    ></textarea>
                  </div>
                  <div class="form__captcha">
                    <div id="captcha"></div>
                  </div>

                  <button type="button" class="btn btn-dark">
                    SUBMIT
                  </button>

                  <div class="form__status"></div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <div class="footer-dark">
          <footer>
            <div class="container">
              <div class="row">
                <div class="col-sm-6 col-md-3 item">
                  <h3>Services</h3>
                  <ul>
                    <li><a href="/termsofservice">Terms of Servivce</a></li>
                    <li><a href="/privacypolicy">Privacy Policy</a></li>
                    <li>
                      <a href="#"></a>
                    </li>
                  </ul>
                </div>
                <div class="col-sm-6 col-md-3 item">
                  <h3>Contacts Us</h3>
                  <ul>
                    <li>
                      <a href="#">support@emoneytag.com</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6 item text">
                  <h3>EmoneyTag</h3>
                  <p>
                    You can choose this method easily. Only you have to do is
                    complete the tasks provided by us, By using your social
                    media account and earn points. You can earn points by using
                    Facebook, Twitter, Instagram, YouTube and TikTok social
                    media accounts.your one tap can earn points for you.
                  </p>
                </div>
                <div class="col item social">
                  <a href="#">
                    <i class="icon ion-social-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="icon ion-social-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="icon ion-social-youtube"></i>
                  </a>
                  <a href="#">
                    <i class="icon ion-social-instagram"></i>
                  </a>
                </div>
              </div>
              <p class="copyright">©️ 2021 — EMONEYTAG.COM</p>
            </div>
          </footer>
        </div>
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/bootstrap/js/bootstrap.min.js"></script>
      </div>
    );
  }
}
export default Contactuspage;
