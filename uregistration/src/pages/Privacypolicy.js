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
          <div class="col-2"></div>
          <div class="col-8" style={{ marginTop: "120px" }}>

            <div className="privcy" style={{ color: "#0f3057" }}>
              <div>  <h6 style={{ fontWeight: "bold" }}>  <br /><br />EMONEYTAG PRIVACY POLICY </h6> </div><br /><br /><br />
              This Privacy Policy is designed to provide a better service for those concerned about how to use their Personal Identifiable Information (PII) online. As described in U.S. Privacy Law and Information Security, PII is information that a person can use to identify, contact, or locate, or identify himself with, or other information in context. Please read our Privacy Policy carefully to get a clear idea of how we collect, use, protect or otherwise handle your personally identifiable information through our website-<a href=" https://www.Emoneytag.com  " >www.Emoneytag.com </a> .<br /><br />
              <br /><br />

              <h6 style={{ fontWeight: "bold" }}>What personal information do we collect from the people that visit our blog, website or app? </h6><br /><br />

              When ordering or registering on our website, you will be asked to enter your name, email address or other details, as appropriate, to assist you with your experience.<br /><br />
              <br /><br />

              <h6 style={{ fontWeight: "bold" }}>When do we collect information?  </h6><br /><br />
              We collect information from you when you register on our website, place an order, subscribe to a newsletter, answer a survey, fill out a form, use live chat, open a support ticket or visit our website. Give us feedback on our products or services that are added to the personal profiles of Facebook, Instagram, YouTube, LinkedIn and other social networks or added to publicly available links.<br /><br />
              <br /><br />

              <h6 style={{ fontWeight: "bold" }}>How do we use your information?   </h6><br /><br />
              We collect data when you sign up, make purchases, sign up for our newsletter, respond to surveys, marketing communications, browse the Site, or use other website features in the following ways and this information can be used for:<br /><br></br>


<ul>
 <li> • Allow us to personalize your experience and deliver the kind of content and products you like best.</li>
  <li>• To improve our website to give a better service for you.</li>
  <li> • Allows us to better serve you by responding to your customer service requests.</li>
  <li>• when conducting a contest, promotion, survey or any other site feature.</li>
  <li>	• Execute your transactions quickly.</li>
  <li>• Inquiries for service or product evaluation and review.</li>
  <li>	• Contact them after the correspondence (live chat, email or phone call)
</li>

</ul>  



<br /><br />
              <br /><br />
              <h6  style={{ fontWeight: "bold" }}>How do we protect your information?    </h6>
              <br /><br />
              We do not use risk scanning and/or scanning in accordance with PCI standards. An external PCI compliant payment portal handles all CC transactions. We often use malware scanning. Your personal information is behind secure networks and is accessible only to a limited number of people who have exclusive access to such systems and want to keep the information confidential. In addition to that, all sensitive or credit information you provide is encrypted through Secure Socket Layer (SSL) technology. We enforce many measures of security when a user places an order to maintain the security of your personal information. All transactions are made through the portal provider and are not stored or processed on our servers.<br /><br />
              <br /><br />
              <h6 style={{ fontWeight: "bold" }}>Do we use 'cookies'? </h6>
              <br /><br />
              We use cookies. Cookies are small files that a website or service provider transfers to the hard drive of your computer through the web browser, allowing the website or service provider's system to identify your browser and store some information. On our website, we use cookies to remember and process items in your shopping cart. We use them to understand your preferences based on past or present site activities so that we can provide better services to you. We also use cookies to analyze data about site traffic and site interactions. From that, we can provide better site experiences and tools in the future.<br /><br />
              <br /><br />
              <h6 style={{ fontWeight: "bold" }}> We use cookies to:</h6>
              <br /><br />
•	Help to remember and process the contents of the shopping cart.<br /><br />
•	Understand and save user preferences for future trips.<br /><br />
•	Pursue ads.<br /><br />
•	analyze overall data about site traffic and site interaction to provide better site experience and tools in the future. 
<br></br>
<br></br>
We may also use trusted third-party services to get this information on our behalf. You can choose to alert your computer when a cookie is sent, or you can choose to deactivate cookies. You do this through your browser settings. Because the browser is slightly different, see your browser's help menu to learn the correct way to change your cookies. If you disable cookies, some of the features that make your website experience more efficient will not work properly. This does not affect the user experience that makes your website experience more efficient and may not function properly.<br /><br />
              <br /><br />
              <h6 style={{ fontWeight: "bold" }}>Third-party disclosure </h6>
              <br /><br />
              We do not sell or transfer your personal information to foreigners without informing the user. This includes Website Partners and other parties who assist us in maintaining our website, running our business or serving our customers as long as they agree to keep this information confidential. By law, we may also disclose information when enforcing our Website Policy or when such disclosures are appropriate in our or other people's rights, property or security. This personal information may be passed on to other parties for marketing or advertising. Third-Party Links At our discretion, these third party websites may have their own privacy policies for the inclusion or provision of third party products or services on our Website. Therefore, we take no responsibility for the content and activities of these affiliate sites.<br /><br />

              <h6 style={{ fontWeight: "bold" }}>CAN SPAM Act </h6>
              <br /><br />

              The CAN-SPAM law sets out the rules for commercial e-mail, sets the requirements for e-mail, gives recipients the right to refrain from sending emails, and imposes severe penalties for violations. <br /><br />
              We add your email address:<br /><br />

•	Sending information, answering inquiries and/or other inquiries or questions. Order processing and sending order related information and updates. Send you additional information about your product and/or service<br /><br />
              <br /><br />
              <h6 style={{ fontWeight: "bold" }}>
                To be in accordance with CAN SPAM, we agree to the following:</h6><br /><br />
                Don't use wrong and misleading topics or email addresses. Define the message as a reasonable advertisement. Enter the physical address of our business or head office. If used, monitor compliance with third-party email marketing services. Fulfil unsubscribed/unsubscribed requests quickly. To unsubscribe us we allow users to use the link at the bottom of each email.<br /><br /><br /><br />

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
              •	+95 996 0799 446 <br />
•	+94 772 767 767 <br />
•	Emoneytag.com<br /><br />

              </h6>


            </div>

          </div>
          <div class="col-2"></div>
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
