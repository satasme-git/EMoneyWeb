/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Cookies from 'js-cookie';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class Privacypolicy extends React.Component {

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
                      style={{ width: "161px", height: "61px" }}
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

        <div class="row">
          <div class="col-3"></div>
          <div class="col-6" style={{ marginTop: "120px" }}>

            <div className="privcy" style={{ color: "#0f3057" }}>
              <div>  <h6 style={{ fontWeight: "bold" }}>  EMONEYTAG PRIVACY POLICY </h6> </div><br /><br /><br />
This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website - <a href=" https://www.Emoneytag.com  " >www.Emoneytag.com </a> .<br /><br />
              <br /><br />

              <h6 style={{ fontWeight: "bold" }}>What personal information do we collect from the people that visit our blog, website or app? </h6><br /><br />

When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address or other details to help you with your experience.<br /><br />
              <br /><br />

              <h6 style={{ fontWeight: "bold" }}>When do we collect information?  </h6><br /><br />
We collect information from you when you register on our site, place an order, subscribe to a newsletter, respond to a survey, fill out a form, Use Live Chat, Open a Support Ticket or enter information on our site.
Provide us with feedback on our products or services collecting from provided or publicly available links to personal profiles in social networks such as facebook, instagram, youtube, linkedin & other.<br /><br />
              <br /><br />

              <h6 style={{ fontWeight: "bold" }}>How do we use your information?   </h6><br /><br />
We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:
•	To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.
•	To improve our website in order to better serve you.
•	To allow us to better service you in responding to your customer service requests.
•	To administer a contest, promotion, survey or other site feature.
•	To quickly process your transactions.
•	To ask for ratings and reviews of services or products.
•	To follow up with them after correspondence (live chat, email or phone inquiries)<br /><br />
              <br /><br />
              <h6  style={{ fontWeight: "bold" }}>How do we protect your information?    </h6>
              <br /><br />
We do not use vulnerability scanning and/or scanning to PCI standards. An external PCI compliant payment gateway handles all CC transactions. We use regular Malware Scanning.

Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.

We implement a variety of security measures when a user places an order to maintain the safety of your personal information.

All transactions are processed through a gateway provider and are not stored or processed on our servers.<br /><br />
              <br /><br />
              <h6 style={{ fontWeight: "bold" }}>Do we use 'cookies'? </h6>
              <br /><br />
Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.<br /><br />
              <br /><br />
              <h6 style={{ fontWeight: "bold" }}> We use cookies to:</h6>
              <br /><br />
•	Help remember and process the items in the shopping cart.<br /><br />
•	Understand and save user's preferences for future visits.<br /><br />
•	Keep track of advertisements.<br /><br />
•	Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third-party services that track this information on our behalf.
You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.
If you turn cookies off, Some of the features that make your site experience more efficient may not function properly. It won't affect the user's experience that make your site experience more efficient and may not function properly.<br /><br />
              <br /><br />
              <h6 style={{ fontWeight: "bold" }}>Third-party disclosure </h6>
              <br /><br />
We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when it's release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property or safety.
However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.
Third-party links
Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.<br /><br />

              <h6 style={{ fontWeight: "bold" }}>CAN SPAM Act </h6>
              <br /><br />

The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.<br /><br />
We collect your email address in order to: <br /><br />
•	Send information, respond to inquiries, and/or other requests or questions
•	Process orders and to send information and updates pertaining to orders.
•	Send you additional information related to your product and/or service<br /><br />
              <br /><br />
              <h6 style={{ fontWeight: "bold" }}>
                To be in accordance with CAN SPAM, we agree to the following:</h6><br /><br />
•	Not use false or misleading subjects or email addresses.
•	Identify the message as an advertisement in some reasonable way.
•	Include the physical address of our business or site headquarters.
•	Monitor third-party email marketing services for compliance, if one is used.
•	Honor opt-out/unsubscribe requests quickly.
•	Allow users to unsubscribe by using the link at the bottom of each email.<br /><br /><br /><br />

              <h6 style={{ fontWeight: "bold" }}>
                If at any time you would like to unsubscribe from receiving future emails, you can email us at</h6><br /><br />
support@Emoneytag.com and we will promptly remove you from ALL correspondence.<br /><br /><br /><br />

              <h6  style={{ fontWeight: "bold" }}>
                Contacting Us</h6><br /><br />
If there are any questions regarding this privacy policy, you may contact us using the information below.<br /><br /><br />

              <h6 style={{ fontWeight: "bold" }}>
                Emoneytag,<br />
Address,<br />
Address 2,<br /><br /><br />

              </h6>


              <h6 style={{ fontWeight: "bold" }}> Contact Customer Service:<br /><br />
•	+12 3456 789  <br />
•	support@Emoneytag.com<br /><br />

              </h6>


            </div>

          </div>
          <div class="col-3"></div>
        </div>


        <div class="footer-dark" style={{ marginTop: "5%" }} >
          <footer>
            <div class="container">
              <div class="row">
                <div class="col-sm-6 col-md-3 item">
                  <h3>Services</h3>
                  <ul>
                    <li><a href="/termsofservice">Terms of Serivce</a></li>
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
export default Privacypolicy;
