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
USER IS ADVISED TO READ THE TERMS OF SERVICES WITH UTMOST CARE BEFORE VISITING EMONEYTAG AND ITS SERVICES. AN ACT OF CONTINUING TO STAY AT AND USE EMONEYTAG AND SUBSCRIBING TO ANY PACKAGE OFFERED THROUGH THIS WEBSITE SHALL BE PRESUMED THAT THE USER AGREES TO ABIDE BY ALL THE PROVISIONS OF THE TERMS OF SERVICE. PLEASE NOTE THAT THE TERMS OF SERVICES ARE BINDING ON THE USER.<br /><br />

              <div >
                <h6 style={{ fontWeight: "bold" }} >     2. Interpretation</h6 >.<br /><br />
2.1 Emoneytag, we, our, its and us refer to <a href=" https://www.Emoneytag.com  " >www.Emoneytag.com </a> , its owner and authorized officials.<br /><br />
2.2 'Services' include all the services offered by Emoneytag including but not limited to <a href=" https://www.Emoneytag.com  " >www.Emoneytag.com </a> , Amazon Services packages, Facebook Services package (including likes, followers & other), Instagram Services package (including likes, followers & other), Twitter Services package (including likes, followers & other) and YouTube Services package (including views, likes, followers & other) and such other packages Emoneytag may introduce in future.<br /><br />
2.3 Additional or separate agreement refers to any separate understanding between Emoneytag and the user other than or in addition to the TOS.<br /><br />
2.4 You, client, visitor and user refer to any person visiting <a href=" https://www.Emoneytag.com  " >www.Emoneytag.com </a>  and using the Services.<br /><br />
2.5 The 'TOS' refers to all provisions of this terms of services document from 1 to 12 applies to the Services.<br /><br />
2.6 Privacy Policy means the principle position of Emoneytag describing the ways of collection, use and maintenance of the information relating to the user.<br /><br />
2.7 Provision: It refers to all the sections, sub-sections and proviso herein contained.<br /><br />
2.8 Likes; it refers to the number of likes on a Facebook page, Twitter page, Instagram or a web page URL as indicated by the Facebook.com platform.<br /><br />
2.9 Views; it means the number of views YouTube shows beneath the video player indicating number of visitors who have viewed the page or the number of post views.<br /><br />
2.10 Subscribes or Follows; It refers to an act of the user subscribing to any update as follower on the social media account of the client including YouTube, Twitter and Instagram.<br /><br />
2.11 Members; it means the number of users joined Facebook group or channel and is shown on top of the group or channel.<br /><br />
2.12 Inviting; It refers to an act of the user inviting another user to any group within the social media account of the client including Facebook.<br /><br />
2.13 Comments; It refers to an act of the user commenting on a post / video / chat or group within the social media account of the client including Facebook, YouTube, Twitter or Instagram.<br /><br />
2.14 Retweets; It refers to an act of the user sharing clients post within the social media account of the client including Twitter.<br /><br />
              </div>
              <br />
              <h6 style={{ fontWeight: "bold" }} > 3. Services and warranties:</h6 ><br /><br />

3.1 Our services include carrying out promotional campaigns by helping the client to increase the members, followers, views, likes, subscribes, comments & other engagement of social media networks users of the social media account of the client.<br /><br />
3.2 The client agrees that Emoneytag owns no liability for the content, activity and purpose of the client's social media account.<br /><br />
3.3 It is sole responsibility of the client to ensure the observation of the terms and conditions of any contract with third party.<br /><br />
3.4 Emoneytag does not require access to the client's social media account. It is responsibility of the client to ensure his/her/its social media account is safe from the unauthorized access.<br /><br />
3.5 The client agrees not to violate any provision of the contract the client has had with any third party. It is the responsibility of the client to ensure that the Terms of Services are not contrary to the contract with third party. The client represents and warrants that Emoneytag is and shall not be party to such violation.<br /><br />
3.6 The client understands that Emoneytag is not affiliated, in any manner, to any social media network including without limitation Facebook, Instagram, Twitter, Amazon and YouTube.<br /><br />
3.7 The client agrees not to use the Services for any purpose not compliant with the laws for the time being in force in Poland and with the public policy.<br /><br />
3.8 Emoneytag may modify or terminate the Services at any time without serving notice; provided that the existing user either shall be refunded or served.<br /><br />
3.9 Emoneytag reserves the right to amend, change or modify any provision of the Terms of Services, and the amended, changed or modified Terms of Services shall be effective immediately after they are posted on <a href=" https://www.Emoneytag.com  " >www.Emoneytag.com </a> <br /><br />
3.10 Emoneytag may refuse services to any client without assigning the reason to that effect.<br /><br />
3.11 Emoneytag may refuse the Service to the client account containing unlawful, threatening, offensive, defamatory, libelous or objectionable or otherwise violate the Terms of Services.<br /><br />
3.12 Emoneytag provides a limited warranty of 30 days to maintain the desired promotion level for our services. In the event of reduction in the likes, followers, or views, the client is advised to inform immediately to Emoneytag which shall immediately make up such reduction or refund in full if not stated otherwise in the package purchased. In the event of reduction in the likes, followers, members or views after the period of 30 days the client is advised to inform immediately to Emoneytag which will look into the matter and will investigate and will do its best in the good faith to make up such reduction.<br /><br />
3.13 Emoneytag employs a natural human campaigns & natural social media marketing techniques, using no software and hence posing no negative consequences for the client's social media account. Anything that may be used in addition Emoneytag is obligated to state within the package / offer and explain to the client.<br /><br />
3.14 The Services completion may take time as Emoneytag employs real human accounts and adopts a natural course. The smaller packages take 2 to 14 days, and larger packages may take 30 to 60 days.<br /><br />
3.15 Client agrees that Emoneytag may use whenever necessary third party services aside from own marketing tools and techniques including but not limited to: traffic exchanges, ppc (pay per click) and ppm (pay per mille) platforms.<br /><br />
3.16 Emoneytag does not incentive any user to like, view or follow the client's social media profile in a manner that falls within the meaning of violation of the terms and conditions of the social media networks including but not limited to YouTube, Facebook, Instagram, Reddit, Twitter, LinkedIn, Spotify, Soundcloud, Pinterest, Tumblr, Vimeo, VKontakte, Amazon, eBay, Etsy, Google Maps, TripAdvisor, Booking.com, Airbnb, Yelp, Trustpilot, Capterra, G2, Google Play, App Store, Windows Store, Fiverr, Upwork, Freelancer and PeoplePerHour.<br /><br />
3.17 We hereby warrant that we do not make, instigate or encourage any user to violate the terms and conditions of the social media networks including but not limited to YouTube, Facebook, Instagram, Reddit, Twitter, LinkedIn, Spotify, Soundcloud, Pinterest, Tumblr, Vimeo, VKontakte, Amazon, eBay, Etsy, Google Maps, TripAdvisor, Booking.com, Airbnb, Yelp, Trustpilot, Capterra, G2, Google Play, App Store, Windows Store, Fiverr, Upwork, Freelancer and PeoplePerHour.<br /><br />
3.18 Emoneytag does not mislead the user in any manner that may violate the terms and conditions of the social media networks including but not limited to YouTube, Facebook, Instagram, Reddit, Twitter, LinkedIn, Spotify, Soundcloud, Pinterest, Tumblr, Vimeo, VKontakte, Amazon, eBay, Etsy, Google Maps, TripAdvisor, Booking.com, Airbnb, Yelp, Trustpilot, Capterra, G2, Google Play, App Store, Windows Store, Fiverr, Upwork, Freelancer and PeoplePerHour.<br /><br />
3.19 Emoneytag employs a strategy to provide the Services which is compliant with terms and conditions of the social media networks and all the laws for the time being in force.<br /><br />
3.20 Technically, Emoneytag also serves the interests of the social media networks, and employs all the measures to ensure that no provision of the terms and conditions of the social media websites is violated, and no act is detrimental to the interests of the social media websites.<br /><br />
3.21 Emoneytag may take up 6 months to complete an order.<br /><br />
3.22 Emoneytag will have orders under $100 completed in under 1 month, and orders under $1000 completed in under three months.<br /><br /><br />


              <h6 style={{ fontWeight: "bold" }} > 4. Payments, Refunds, and Cancellation: </h6 ><br /><br />
4.1 The price for various packages is provided on each page with packages. Emoneytag reserves the right to modify such price from time to time without serving a prior notice. The price or payment shall refer to the updated price of the package.<br /><br />
4.2 The pricing pages forms the part of the TOS.<br /><br />
4.3 Emoneytag accepts payments through Credit Cards & other payment methods which Emoneytag reserves the right to add or remove without serving a prior notice.<br /><br />
4.4 The payment made for the Services by the client to Emoneytag is not refundable unless it falls under the Emoneytag refund policy which is provided as an addition to ToS.<br /><br />
4.5 The user shall prefer to use Emoneytag dispute resolution arrangements if a dispute arises.<br /><br />
4.6 The user, without contradicting the terms and conditions, agrees not to dispute any transaction with Emoneytag unless Emoneytag dispute resolution arrangements fail to address the legitimate claims of the client.<br /><br />
4.7 The client is advised for his/her own benefits to understand all aspects of the transactions and have an independent legal opinion before making a final decision to subscribe to the Services. Emoneytag owns no liability if you omit to read the TOS.<br /><br />
4.8 All other refunds are to be made at the sole discretion of Emoneytag.<br /><br />
4.9 Orders can be cancelled within 24 hours if we have not already started working with your order. In this case, a full refund will be sent, at the sole discretion of Emoneytag.<br /><br />
4.10 The client understands that recurring billing for recurring services/packages is billed every 30 or 31 days from the start of the campaign, until cancelled.<br /><br />
4.11 The client can cancel their campaign at any time by emailing or calling in to our support team, or through the contact page (mentioned in section 13).<br /><br />
4.12 Recurring clients can request a pro-rated refund on un-used credits on their last month of service, if they wish to end their service early.<br /><br />
4.13: Recurring billing will proceed for 12 months from the date of first payment, unless cancelled therein. For clients whom wish to extend beyond this term, at 12 months and 1 day, Emoneytag will contact you directly to reaffirm billing information and your intent to continue beyond the stated 12 month period. <br /><br /><br />
              <h6 style={{ fontWeight: "bold" }} > 5. General Terms: </h6 ><br /><br />
5.1 Emoneytag reserves the right to revise, amend, change, alter, replace, withdraw and declare not-applicable any of the provisions of the TOS without serving a prior notice. Such revision, amendment, change, alteration, replacement, withdrawal or inapplicability shall come into force soon after it is posted on the TOS page.<br /><br />
5.2 Emoneytag reserve the right to terminate, amend, modify or make unavailable any of part or feature of the Services without notice. The user who has made the payment for the Services is entitled to demand the Service as prescribed at the time of the order or the refund.<br /><br />
5.3 Emoneytag offers the Services to the users having legal qualification to enter into the contract as to the age and solvency. If you do not have such qualification, Emoneytag hereby advised you not to use the Services. Emoneytag disclaims all the liabilities whatsoever.<br /><br />
5.4 The user is prohibited to use Emoneytag in a manner that can cause damage, disable, impair or overburden it or interfere with the use of any other user of Emoneytag.<br /><br />
5.5 The user is forbidden hereby to employ any robot, spider, any automatic device or manual process or means to access www.Emoneytag.com for any purpose, including but not limited to copying or monitoring any of the material on www.Emoneytag.com without prior consent of Emoneytag.<br /><br />
5.6 The user is prohibited to use any device or software that interfere with or obstruct proper functioning of www.Emoneytag.com<br /><br />
5.7 The user is not allowed to introduce any malicious or harmful material into www.Emoneytag.com.<br /><br />
5.8 The user expressly prohibited to maneuver to obtain an unauthorized access to, interfere with, damage, or disrupt any part of the Services, www.Emoneytag.com, its host server or any affiliated database, computer or server.<br /><br />
5.9 Subject to any additional or separate written agreement, the TOS constitutes the entire agreement between Emoneytag and you with respect to the Services.<br /><br />
5.10 The headings, subheadings and numbers in the TOS are for convenience of the reader and reference only, and they do not aim to limit, construe, define, or determine the scope of the provisions herein contained.<br /><br />
5.11 Emoneytag has its official Privacy Policy forming the part of the TOS. It is posted separately on www.Emoneytag.com to facilitate the reader and to emphasize special consideration.<br /><br />
5.12 If Emoneytag fails to enforce any right available at the TOS, any additional agreement or any law for the time being in force, it shall neither imply that Emoneytag waives the right nor deprive its entitlement to enforce such right subsequently.<br />
5.13 Emoneytag may assign any right arising from the TOS to any person or entity. The user agrees not to assign the right available at the TOS to any person or entity. <br /><br />
              <h6 style={{ fontWeight: "bold" }} > 6. Governing Law, Jurisdiction and Service of Notice: </h6 ><br /><br />
6.1 All disputes arising from the TOS shall be resolved by an independent arbitration.<br /><br />
6.2 In case, the arbitration fails to resolve the dispute, the matter may be brought before the court having competent jurisdiction in Toronto.<br /><br />
6.3 The user expressly agrees that the TOS shall be governed by the relevant laws for the time being in force in Poland.<br /><br />
6.4 The courts having competent jurisdiction in Toronto shall have exclusive jurisdiction to hear the disputes arising from the TOS.<br /><br />
6.5 All the notices or correspondence required to be made hereby or by the relevant law for the time being in force shall be presumed to be delivered if sent to the official email of Emoneytag or any authentic postage service.<br /><br />
6.6 In case the communication is made through postage service, the communication shall be presumed to be complete after five (5) business days of the posting.<br /><br />
              <h6 style={{ fontWeight: "bold" }} > 7. Copyrights and Intellectual Property Rights: </h6 ><br /><br />
7.1 Emoneytag strictly adheres to non-infringement of copyrights, and believes it has not violated any rights belonging to any other party during the course of its business and provision of the Services. In case any person or entity has a proof of the infringement of the rights by Emoneytag, he/she/it shall serve the notice on us. We shall resolve the matter within fourteen (14) days of the receipt of such notice.<br /><br />
              <h6 style={{ fontWeight: "bold" }} > 8. Intellectual Property Rights: </h6 ><br /><br />
8.1 All the material contained in <a href=" https://www.Emoneytag.com  " >www.Emoneytag.com </a> , including, without limitation, the content, software, images, drawings and design, is the sole property of Emoneytag and is protected by the copyright protection laws for the time being in force in Poland and by the relevant International Treaties. No user is allowed to copy, reproduce, distribute, reprint, host or use in any other manner without the written approval of Emoneytag.<br /><br />
8.2 In the event of infringement of our rights, we shall take strict legal action, and shall also claim compensation.<br /><br />
8.3 Emoneytag reserves the rights not hereby claimed.<br /><br />
              <h6 style={{ fontWeight: "bold" }} >  9. Indemnification:<br /><br /> </h6>

9.1 The user hereby agrees to indemnify and hold Emoneytag, its directors, affiliates, agents, employees and staff harmless from any claim, legal action, demand or damages made by any third party arising out or linking to the user's enjoyment of the Services, or violation of the TOS committed an act of omission or commission of the user or infringement of rights of third party arising out of any contract with such third party.<br /><br />
              <h6 style={{ fontWeight: "bold" }} > 10. Disclaimer 2.0:<br /><br /> </h6>

10.1 THE SERVICES AND MATERIAL OFFERED BY EMONEYTAG, INCLUDING, WITHOUT LIMITATION, THE TEXT, IMAGES, GRAPHICS, SOFTWARE, TOOLS AND BUSINESS STRATEGIES ARE MADE AVAILABLE ON AN 'AS IS' BASIS WITHOUT ANY EXPRESS OR IMPLIED WARRANTY. TO THE EXTENT PERMITTED BY THE LAW FOR THE TIME BEING IN FORCE IN POLAND, EMONEYTAG DISCLAIMS, HEREBY, ALL REPRESENTATIONS AND WARRANTIES INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES THAT THE SERVICES HAVE NO VIRUS OR HAVE MERCHANTABILITY OR ARE CONTINUOUS OR ARE FIT FOR A PARTICULAR PURPOSE; EMONEYTAG DOES NOT REPRESENT OR WARRANT THE ACCURACY, COMPLETENESS, CURRENTNESS OR ERRORLESSNESS OF THE SERVICES.<br /><br />
10.2 Force Majeure: Emoneytag is a professional business entity and adheres to the commitments and promises it has made with the clients. There are events that may make Emoneytag to unable to provide the Services such as an act of God, natural disaster, lock-outs, fire, floods, strikes, labor troubles, riots, war, insurrection or any cause beyond the reasonable control of Emoneytag. In such situations, neither Emoneytag nor the client shall be held liable for the breach of any provision of the TOS or delay of the Services. The Services may be suspended until the existence of such situations. In case, the situation continues to exist for a continuous period of thirty (30) days, the TOS shall be terminated between the user who has paid to Emoneytag for the Services and receives no part of the Services, and shall be entitled to claim refund.<br /><br />
10.3 Extent of Liability: Unless provided otherwise in the TOS or any other additional or separate agreement, the aggregate liability of Emoneytag with respect to the Services for all claims shall not be in excess of the original price of the Services the user has paid to Emoneytag for the job from which the dispute, claim or demand has arisen.<br /><br />
10.4 Emoneytag hereby warrants that the Services do not violate the terms and conditions of any social media network including but not limited to YouTube, Facebook, Instagram, Reddit, Twitter, LinkedIn, Spotify, Soundcloud, Pinterest, Tumblr, Vimeo, VKontakte, Amazon, eBay, Etsy, Google Maps, TripAdvisor, Booking.com, Airbnb, Yelp, Trustpilot, Capterra, G2, Google Play, App Store, Windows Store, Fiverr, Upwork, Freelancer and PeoplePerHour.<br /><br />
10.5 All errors and omissions excepted.<br /><br />

              <h6 style={{ fontWeight: "bold" }} > 11. Severability:<br /><br />  </h6>

11.1 In case, any provision of the TOS is found to be unenforceable, void or invalid in any given circumstances, it shall be severed from the TOS, and the remaining terms will be enforceable and valid without any effect.<br /><br />
              <h6 style={{ fontWeight: "bold" }} >  12. Confidential Information:<br /><br /> </h6>
12.1 Parties agree not to disclose the confidential information of each other without written permission of the concerned party unless required by competent governmental authorities. Such confidential information includes, without limitation, the business secrets and strategies and identifiable information of the clients.<br /><br />
              <h6 style={{ fontWeight: "bold" }} >  13. Contact:<br /> </h6>
13.1 For all communication relating to the operation of the TOS, as well as support, sales, and billing, the following email addresses shall be used: support@Emoneytag.com<br /><br />
13.2 For physical mailing of checks and other documents, the following address shall be used:<br /><br />

              <h6 style={{ fontWeight: "bold" }}>
                Emoneytag,<br />
Address,<br />
Address 2,<br /><br /><br />

              </h6>


              <h6 style={{ fontWeight: "bold" }}> Contact Customer Service:<br /><br />
•	+0000 0000 00000 <br />
•	support@Emoneytag.com<br /><br />

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
