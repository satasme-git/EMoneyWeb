/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Cookies from 'js-cookie';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class Termsofservice extends React.Component {

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



              <h6 style={{ fontWeight: "bold" }} >  <br /><br />EMONEYTAG TERMS OF SERVICE  </h6 ><br /><br /><br />
              <h6 style={{ fontWeight: "bold" }} >    1. Disclaimer 1.0</h6  >    <br />
              THE USER IS ADVISED TO READ THE TERMS OF SERVICES WITH UTMOST CARE BEFORE VISITING EMONEYTAG AND ITS SERVICES. AN ACT OF CONTINUING TO STAY AT AND USE EMONEYTAG AND SUBSCRIBING TO ANY PACKAGE OFFERED THROUGH THIS WEBSITE SHALL BE PRESUMED THAT THE USER AGREES TO ABIDE BY ALL THE PROVISIONS OF THE TERMS OF SERVICE. PLEASE NOTE THAT ALL THE TERMS OF SERVICES BIND ON THE USER.<br /><br />

              <div >
                <h6 style={{ fontWeight: "bold" }} >     2. Interpretation</h6 >.<br /><br />
2.1 emoneytag, we, our, its and us ask <a href=" https://www.Emoneytag.com  " >www.Emoneytag.com</a> , its owner and authorized officials.<br /><br />
2.2 'Services' include all the services offered by Emoneytag including but not limited to <a href=" https://www.Emoneytag.com  " >www.Emoneytag.com </a> , Amazon Services packages, Facebook Services package (including likes, followers & other), Instagram Services package (including likes, followers & other), Twitter Services package (including likes, followers & other) and YouTube Services package (including views, likes, followers & other) and such other packages Emoneytag may introduce in future.<br /><br />
2.3 Additional or separate agreement refers to any separate understanding between Emoneytag and the user other than or in addition to the TOS.<br /><br />
2.4 You, client, visitor and user ask a person visiting <a href=" https://www.Emoneytag.com  " >www.Emoneytag.com </a>  and using the Services.<br /><br />
2.5 The 'TOS' refers to all or any or any provisions of this terms of services document from 1 to 12 applies to the Services.<br /><br />
2.6 Privacy Policy means the principle position of emoneytag describing the ways of collection, use and maintenance of the knowledge concerning the user.<br /><br />
2.7 Provision: It refers to all or any or any the sections, sub-sections and proviso herein contained.<br /><br />
2.8 Likes; it refers to the quantity of likes on a Facebook page, Twitter page, Instagram or an online page URL as indicated by the Facebook.com platform.<br /><br />
2.9 Views; it means the quantity of views YouTube shows beneath the video player indicating number of tourists who have viewed the page or the quantity of post views.<br /><br />
2.10 Subscribes or Follows; It refers to an act of the user subscribing for any update as a follower on the social media account of the client including YouTube, Twitter and Instagram.<br /><br />
2.11 Members; it means the amount of users who joined the Facebook group or channel and is shown on top of the group or channel.<br /><br />
2.12 Inviting; It refers to an act of the user inviting another user to any group within the social media account of the client including Facebook.<br /><br />
2.13 Comments; It refers to an act of the user commenting on a post, video, chat or group from the social media account of the client including Facebook, YouTube, Twitter or Instagram.<br /><br />
2.14 Retweets; It refers to an act of the user sharing clients post at the user's social media account of the client including Twitter.<br /><br />
              </div>
              <br />
              <h6 style={{ fontWeight: "bold" }} > 3. Services and warranties:</h6 ><br /><br />

3.1 Our services include promotional campaigns to help clients increasing the members, followers, views, likes, subscribers, comments and other engagement of social media users of the social media account of the client.<br /><br />
3.2 The client agrees that Emoneytag owns no liability for the content, activity and purpose of the client's social media account.<br /><br />
3.3 It's the sole responsibility of the client to make sure the observation of the terms and conditions of any contract with a third party.<br /><br />
3.4 Emoneytag doesn't require access to the client's social media account. It is the responsibility of the client to make sure his/her/its social media account is safe from unauthorized access.<br /><br />
3.5 The client agrees to not violate any provision of the contract the client has had with any third party. It is the responsibility of the client to make sure that the Terms of Services aren't contrary to the contract with a third party. The client represents and warrants that Emoneytag is and shall not be a party to such a violation.<br /><br />
3.6 The client understands that Emoneytag isn't affiliated, in any manner, to any social media network including without limitation Facebook, Instagram, Twitter, Amazon and YouTube.<br /><br />
3.7 The client agrees to not use the Services for any purpose not compliant with the laws for the nonce effective in Poland and with the general public policy.<br /><br />
3.8 Emoneytag may modify or terminate the Services at any time without serving notice; as long as the prevailing user either shall be refunded or served.<br /><br />
3.9 Emoneytag reserves the proper to amend, change or modify any provision of the Terms of Services, and therefore the amended, changed or modified Terms of Services shall be effective immediately after they are posted on <a href=" https://www.Emoneytag.com  " >www.Emoneytag.com </a> <br /><br />
3.10 Emoneytag may refuse services to any client without assigning the rationale thereto effect.<br /><br />
3.11 Emoneytag may refuse the Service to the client account containing unlawful, threatening, offensive, defamatory, libellous or objectionable or otherwise violate the Terms of Services.<br /><br />
3.12 Emoneytag provides a limited warranty of 30 days to take care of the specified promotion level for our services. In the reduction of the event within the likes, followers, or views, the client is suggested to tell immediately to Emoneytag which shall immediately structure such reduction or refund in full if not stated otherwise within the package purchased. In the reduction of the event within the likes, followers, members or views after the quantity of 30 days the client is usually recommended to inform immediately Emoneytag which may look into the matter and can investigate and can do its best within the straightness to form up such reduction.<br /><br />
3.13 Emoneytag employs natural human campaigns & natural social media marketing techniques, using no software and hence posing no negative consequences for the client's social media account. Anything that may be used in addition Emoneytag is obligated to state within the package/offer and explain to the client.<br /><br />
3.14 The Services completion may take time as Emoneytag employs real human accounts and adopts a natural course. The smaller packages take 2 to 14 days, and bigger packages may take 30 to 60 days.<br /><br />
3.15 Client agrees that Emoneytag may use whenever necessary third party services apart from its own marketing tools and techniques including but not limited to: traffic exchanges, PPC (pay per click) and ppm (pay per mille) platforms.<br /><br />
3.16 Emoneytag doesn't incentive any user to like, view or follow the client's social media profile during a fashion that falls within the meaning of violation of the terms and conditions of the social media networks including but not limited to YouTube, Facebook, Instagram, Reddit, Twitter, LinkedIn, Spotify, Soundcloud, Pinterest, Tumblr, Vimeo, Vkontakte, Amazon, eBay, Etsy, Google Maps, TripAdvisor, Booking.com, Airbnb, Yelp, Trustpilot, Capterra, G2, Google Play, App Store, Windows Store, Fiverr, Upwork, Freelancer and PeoplePerHour.<br /><br />
3.17 We hereby warrant that we don't make, instigate or encourage any user to violate the terms and conditions of the social media networks including but not limited to YouTube, Facebook, Instagram, Reddit, Twitter, LinkedIn, Spotify, Soundcloud, Pinterest, Tumblr, Vimeo, Vkontakte, Amazon, eBay, Etsy, Google Maps, TripAdvisor, Booking.com, Airbnb, Yelp, Trustpilot, Capterra, G2, Google Play, App Store, Windows Store, Fiverr, Upwork, Freelancer and PeoplePerHour.<br /><br />
3.18 Emoneytag does not mislead the user in any manner that may violate the terms and conditions of the social media networks including but not limited to YouTube, Facebook, Instagram, Reddit, Twitter, LinkedIn, Spotify, Soundcloud, Pinterest, Tumblr, Vimeo, Vkontakte, Amazon, eBay, Etsy, Google Maps, TripAdvisor, Booking.com, Airbnb, Yelp, Trustpilot, Capterra, G2, Google Play, App Store, Windows Store, Fiverr, Upwork, Freelancer and PeoplePerHour.<br /><br />
3.19 Emoneytag employs a strategy to provide the Services which is compliant with terms and conditions of the social media networks and all the laws for the time being in force.<br /><br />
3.20 Technically, Emoneytag also serves the interests of the social media and employs measures to ensure that there is no provision of the terms and conditions of the social media websites is violated, and no act is detrimental of the social media websites.<br /><br />
3.21 Emoneytag may take up to 6 months to end an order.<br /><br />
3.22 Emoneytag will have orders under $100 completed in under 1 month, and orders under $1000 completed in under three months.<br /><br /><br />


              <h6 style={{ fontWeight: "bold" }} > 4. Payments, Refunds, and Cancellation: </h6 ><br /><br />
4.1 Each page is priced for different packages. we reserve the right to change such pricing from time to time without prior notice. Price or update price will be requested in the payment package.<br /><br />
4.2 Price Pages Creates the neighbourhood of the TOS.<br /><br />
4.3 Amonitag assumes the right to collect or withdraw without prior notice Payment through credit cards and other payment methods owned by Emoneytag.<br /><br />
4.4 In addition to TOS, Emoneytag refunds paid by the Customer for the Services will not be refunded if they are not covered by the Emoneytag Refund Policy.<br /><br />
4.5 If any dispute arises, the user may wish to use Emoneytag dispute resolution mechanisms.<br /><br />
4.6 The User agrees not to dispute any transaction with the Emoneytag unless otherwise provided by the Emoneytag Dispute Resolution provision, without violating the Terms and Conditions.<br /><br />
4.7 The client is advised to know all aspects of the transaction and obtain an independent opinion for his own benefit before making a final decision to subscribe. Emoneytag is not responsible for any misuse of the TOS.<br /><br />
4.8 All other refunds are at Emoneytag discretion only.<br /><br />
4.9 If we have not started working closely with your order, orders will usually be cancelled within 24 hours. In this case, a full refund will be sent only at the discretion of Emoneytag.<br /><br />
4.10 The Customer understands that recurring bills will be charged for recurring services/packages every 30 or 31 days from the start of the transaction until its cancellation.<br /><br />
4.11 Customers can cancel their business at any time by emailing or calling our support team.<br /><br />
4.12 Recurring customers may request a pro-repayment loan for unused loans during the last month of their service if they wish to terminate their service earlier.<br /><br />
4.13 If not cancelled, recurring bills will continue for 12 months from the date of the first payment. For customers who wish to exceed this period, Emoneytag will contact you at 12 months and 1 day to verify billing information and confirm your intention to proceed beyond the 12 month period. <br /><br /><br />
              <h6 style={{ fontWeight: "bold" }} > 5. General Terms: </h6 ><br /><br />
5.1 Emoneytag reserves the right to modify, modify, change, change, change, withdraw and declare not to be applicable any provision of the TOS without prior notice. Such modification, modification, alteration, alteration, substitution, withdrawal or inappropriateness shall come into force immediately after it is posted on the TOS page.<br /><br />
5.2 Emoneytag reserves the right to terminate, modify, modify or make unavailable any part or feature of the Services without notice. The User who has paid for the Services is entitled to demand the Service as prescribed at the time of order or refund.<br /><br />
5.3 Emoneytag provides services to users of legal ability to enter into contracts according to age and solvency. If you do not have such qualifications, Emoneytag advises you not to use the Services. Emoneytag disclaims all liabilities.<br /><br />
5.4 User is prohibited from using Emoneytag in a way that could harm, disable, impair or overburden it or interfere with any other User's use of Emoneytag.<br /><br />
5.5 The User is prohibited from employing any robot, spider, any automated device or manual process or means of accessing <a href=" https://www.Emoneytag.com  " >www.Emoneytag.com</a> for any purpose, including any Not limited to copying or monitoring content. without the prior consent of Emoneytag.<br /><br />
5.6 The user is prohibited to use any device or software that interfere with or obstruct proper functioning of <a href=" https://www.Emoneytag.com  " >www.Emoneytag.com</a><br /><br />
5.7 User is not allowed to post any malicious or harmful content in  <a href=" https://www.Emoneytag.com  " >www.Emoneytag.com</a>.<br /><br />
5.8 User expressly prohibited to interfere with the Services, <a href=" https://www.Emoneytag.com  " >www.Emoneytag.com</a>, its host servers or any associated databases, computers or any part of the Servers to gain unauthorized access to, interfere with, damage or disrupt has done.<br /><br />
5.9 Subject to any additional or separate written agreement, the TOS constitutes the entire agreement between Emoneytag and you with respect to the Services.<br /><br />
5.10 The headings, subheadings and numbers in the TOS are for convenience of the reader and reference only, and they do not aim to limit, construe, define, or determine the scope of the provisions herein contained.<br /><br />
5.11 Emoneytag has its official Privacy Policy forming the part of the TOS. It is posted separately on www.Emoneytag.com to facilitate the reader and to emphasize special consideration.<br /><br />
5.12 If Emoneytag fails to enforce any right available on the TOS, any additional agreement or any law for the time being in force, it shall neither mean that Emoneytag waives the right nor shall any subsequent such deprives him of his right to enforce the right.<br /><br />
5.13 Emoneytag may assign any right arising from the TOS to any person or entity. The user agrees not to assign the right available at the TOS to any person or entity. <br /><br />
5.14 This point can be able to change from admin panel.<br/><br /><br />
              <h6 style={{ fontWeight: "bold" }} > 6. Governing Law, Jurisdiction and Service of Notice: </h6 ><br /><br />
6.1 All disputes arising from the TOS shall be resolved by an independent arbitration.<br /><br />
6.2 If the Arbitration fails to resolve the dispute, the matter may be referred to the appropriate jurisdictional court in Toronto.<br /><br />
6.3 The User clearly agrees that the TOS must be governed by the applicable laws applicable in Poland.<br /><br />
6.4 Proper jurisdiction in Toronto Toss must have exclusive jurisdiction to hear disputes arising out of toss.<br /><br />
6.5 All advertisements or letters currently required to be executed by this or any applicable law shall be deemed to have been delivered to Emoneytag or to the official e-mail of any genuine postal service.<br /><br />
6.6 If the communication is made through the postal service, the communication is deemed complete within five (5) days of posting.<br /><br />
              <h6 style={{ fontWeight: "bold" }} > 7. Copyrights and Intellectual Property Rights: </h6 ><br /><br />
7.1 Emoneytag is committed to ensuring that copyright is not infringed upon and that it does not infringe the rights of any third party in its business dealings and services. Emoneytag will notify us if any person or organization has evidence of copyright infringement. We will resolve the issue within fourteen (14) days of receiving such notice.<br /><br />
              <h6 style={{ fontWeight: "bold" }} > 8. Intellectual Property Rights: </h6 ><br /><br />
8.1 All content on  <a href=" https://www.Emoneytag.com  " >www.Emoneytag.com </a> , including Content, Software, Images, Illustrations, and Designs Unlimited, is the sole property of Emoneytag and is protected by copyright protection law in force in Poland. And by relevant international agreements. No user is permitted to copy, reproduce, distribute, reprint, host or use Emoneytag in any other way without the written consent of Emoneytag.<br /><br />
8.2 In the event of a breach of our rights, we will take strict legal action and seek compensation.<br /><br />
8.3 Emoneytag retains the unclaimed rights here.<br /><br />
              <h6 style={{ fontWeight: "bold" }} >  9. Indemnification:<br /><br /> </h6>

9.1 User agrees to pay and retain any claims, legal action, claim or loss incurred by User to the Services' satisfaction with Emoneytag, its Directors, Affiliates, Agents, Employees and Employees. Failure by the User to infringe or violate the Commission by any such contract with a third party or by infringing the rights of a third party.<br /><br />
              <h6 style={{ fontWeight: "bold" }} > 10. Disclaimer 2.0:<br /><br /> </h6>

10.1 The Services and Content provided by EMONEYTAG are 'unlimitedly available' as text, images, charts, software, tools and business strategies. Emoneytag Disclaimer implies that, as far as Polish law currently allows, all representation and liability herein are, without limitation, service viruses. Special purpose; EMONEYTAG does not represent the accuracy, completeness, currentness or error of the Services.<br /><br />
10.2 Force Majeure: Emoneytag is a professional business entity that keeps its promises and promises with its customers. There may be instances where Emoneytag is unable to provide services such as the works of God, natural disasters, locks, fires, floods, strikes, labour troubles, riots, wars, uprisings or any cause beyond Emoneytag's fair control. . In such cases, neither Emoneytag nor the client will be liable for any breach of the TOS provision or service delay. Services may be suspended as long as such conditions exist. If the situation persists for thirty (30) consecutive days, the TOS must be terminated between the user who paid for the service to Emoneytag and did not receive a portion of the service, and a refund will be made.<br /><br />
10.3 Limitations of warranty: Unless otherwise stated in the TOS, Emoneytag's full liability for the Services for all rights reserved shall not exceed the original price of the Services paid by the User to Emoneytag. For the action in which a dispute, claim or demand arises.<br /><br />
10.4 We are committed to ensuring that you do not violate the terms and services of any social media network, including YouTube, Facebook, Instagram, Reddit, Twitter, LinkedIn, Spotify, SoundCloud, Pinterest, Tumblr, Vimeo, WeContact, Amazon. Not limited to. eBay, Etsy, Google Maps, TripAdvisor, Booking.<br /><br />
10.5 Except for all errors and omissions.<br /><br />

              <h6 style={{ fontWeight: "bold" }} > 11. Severability:<br /><br />  </h6>

11.1 If at any time any provision of the TOS appears to be invalid, invalid or invalid, it shall be deleted from the TOS and the remaining terms shall be applicable and valid without any effect.<br /><br />
              <h6 style={{ fontWeight: "bold" }} >  12. Confidential Information:<br /><br /> </h6>
12.1 The parties agree not to disclose each other's confidential information without the written consent of those responsible. Such confidential information includes unlimited business secrets and strategies and customer identifiable information.<br /><br />
              <h6 style={{ fontWeight: "bold" }} >  13. Contact:<br /> </h6><br /><br />
13.1 All communications related to the operation and support of TOS operations, sales and billing should use the following e-mail addresses: Emoneytag.com<br /><br />
13.2 The following addresses should be used for physical checks and other documents:<br /><br />

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
                    <li><a href="/termsofservice">Terms of Servivce</a></li>
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
export default Termsofservice;
