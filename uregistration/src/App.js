import React, { Component } from 'react';
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cookies from 'js-cookie';
//  import Java from "./Java";
// import Login from "./pages/Login";
// import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import UserHome from "./pages/UserHome";
import Referral from "./pages/Referal";
import CreateOrder from "./pages/CreateOrder";
import Orders from "./pages/Order";
// import EarnPage from "./pages/EarnPage";
// start user
import EarnPage from './pages/EarnPage';
import YTVideoWatch from './pages/YTVideoWatch';
import EarnEnagement from './pages/EarnEngagement';
import FBPageLike from './pages/FBPageLike';
import FBPostLike from './pages/FBPostLike';
import FBPostShare from './pages/FBPostShare';
import InstaFollow from './pages/InstaFollow';
import YTSub from './pages/YTSub';
import TiktokFollow from './pages/TiktokFollow';
import TwitterFollow from './pages/TwitterFollow';
import Homebl from './pages/Homebl';
import EarnHistory from './pages/EarnHistory';
import UploadVideo from './pages/UploadVideo';
import Howitworks from './pages/Howitworks';
import Howitworks1 from './pages/Howitworks1';
import Howitworks2 from './pages/Howitworks2';
import EarnCompleteprofile from './pages/EarnCompleteprofile';
import Earnreferal from './pages/Earnreferal';
import SmEngagement from './pages/SmEngagement';
import BrowsingVideos from './pages/BrowsingVideos';
import UploadVideohit from './pages/UploadVideohiw';
import AddSurvey from './pages/addsurveyqus';
import ApproveSurvey from './pages/Approvesurveyqus';
import SurveyHome from './pages/Surveyhome';
import SurveyView from './pages/Surveyquestionview';
import ServeyList from './pages/ServeyList';
import LinkClicks from "./pages/LinkClicks";
// end user

//////////////////////////////////////////////Login & register////////////////////////////////////////////////////////////////
import Loginnew from './pages/Loginnew'
import Registernew from './pages/Registernew'
import Newpassword from './pages/newpassword'
import Resetpassword from './pages/Resetpassword'

// start admin

import Dashboard from "./pages/Dashboard";
import AdminLogin from "./pages/AdminLogin";
import AdminManageOrders from "./pages/AdminManageOrders";
import AdminPaymentAnagement from "./pages/AdminPaymentAnagement";
import Feedback from "./pages/Feedback";
import Approvevdeos from "./pages/Approve-vdeos";
import InstagramEarnHistory from "./pages/InstagramEarnHistory";
import FacebookEarnHistory from "./pages/FacebookEarnHistory";
import YouTubeEarnHistory from "./pages/YouTubeEarnHistory";
import TwitterEarnHistory from "./pages/TwitterEarnHistory";
import TikTokEarnHistory from "./pages/TikTokEarnHistory";
import EInstagram from "./pages/EInstagram";
import EFacebook from "./pages/EFacebook";
import EYoutube from "./pages/EYoutube";
import ETwitter from "./pages/ETwitter";
import ETikTok from "./pages/ETikTok";
import ELink from "./pages/ELink";
import EServey from "./pages/EServey";
import Dashb from "./pages/Dash";
import VerifyEmail from "./pages/VerifyEmail";
import Contactuspage from "./pages/Contactuspage";
import Point from "./pages/Point";
import Users from "./pages/Users";
import Termsofservice from "./pages/Termsofservice";
import Privacypolicy from "./pages/Privacypolicy";
import Approvesurveyqus from "./pages/Approvesurveyqus";
import Surveyquestionview from "./pages/Surveyquestionview";
import LinkEarnHistory from "./pages/LinkEarnHistory";
import ServeyEarnHistory from "./pages/ServeyEarnHistory";



//end admin

//sidebar
import Sidebar from './components/Sidebar';
import Dash from './pages/CreateOrder';
import { ToastContainer, toast } from 'react-toast'


let hashHistory = Router.hashHistory;

class App extends Component {

   render() {
      <ToastContainer position="bottom-center"/>
      // const validateSession = (session) => {
      //    // check if your session is still valid
      //    return true;
      //  }
      //  const options = { refreshOnCheckAuth: true, redirectPath: '/home', driver: 'COOKIES', validateSession };

      //  sessionService.initSessionService(store, options)
      //    .then(() => console.log('Redux React Session is ready and a session was refreshed from your storage'))
      //    .catch(() => console.log('Redux React Session is ready and there is no session in your storage'));
      // const store = sessionservice.getsessionstore();
      // const store = new SessionKeystore({ name: 'other' });
      // console.log("store2nd=>", store)
      // const key = store.get('user');
      var user = Cookies.get('user');
      console.log("user=>", user)

      // if (user != null) {
      //    return (
      //       <div>
      //          <Router>

      //             <div>
      //                {/* <Body/> */}
      //                <Switch>
      //                   <Route path="/" exact component={UserHome}></Route>
      //                   <Route path="/register" exact component={UserHome}></Route>
      //                   <Route path="/login" component={UserHome}></Route>
      //                   <Route path="/profile" component={Profile}></Route>
      //                   <Route path="/userhome" component={UserHome}></Route>
      //                   <Route path="/referal" component={Referral}></Route>
      //                </Switch>

      //             </div>
      //          </Router>
      //       </div>


      //    );
      // } else {
      return (
         <div>

            <Router history={hashHistory}>
               {/* <Sidebar /> */}
               <div>
                  {/* <Body/> */}
                  <Switch>
                     <Route path="/" exact component={Homebl}></Route>
                     <Route path="/register" exact component={Register}></Route>
                     <Route path="/login" component={Login}></Route>
                     <Route path="/profile" component={Profile}></Route>
                     <Route path="/userhome" component={UserHome}></Route>
                     <Route path="/referal" component={Referral}></Route>
                     <Route path="/createorder" component={CreateOrder}></Route>
                     <Route path="/myorders" component={Orders}></Route>
                     <Route path="/earnpage" exact component={EarnPage}></Route>
                     <Route path="/ytvideowatch" exact component={YTVideoWatch}></Route>
                     <Route path="/homebl" component={Homebl}></Route>
                     <Route path="/howitworks" component={Howitworks}></Route>
                     <Route path="/howitworks1" component={Howitworks1}></Route>
                     <Route path="/howitworks2" component={Howitworks2}></Route>
                     <Route path="/earncompleteprofile" component={EarnCompleteprofile}></Route>
                     <Route path="/earnreferal" component={Earnreferal}></Route>
                     <Route path="/uploadvideo" component={UploadVideo}></Route>
                     <Route path="/smengagement" component={SmEngagement}></Route>
                     <Route path="/browsingvideos" component={BrowsingVideos}></Route>
                     <Route path="/uploadvideohit" component={UploadVideohit}></Route>
                     <Route path="/earnhistory" component={EarnHistory}></Route>
                     {/* <Route path="/earnpage" component={EarnPage}></Route> */}
                     {/* <Route path="/dashboard" component={Dash}></Route> */}

                     <Route path="/loginnew" component={Loginnew}></Route>
                     <Route path="/registernew" component={Registernew}></Route>
                     <Route path="/newpassword" component={Newpassword}></Route>
                     <Route path="/resetpassword" component={Resetpassword}></Route>



                     {/* temp path */}

                     <Route path="/dash" component={Dashb}></Route>
                     <Route path="/earnmanagement" component={EarnEnagement}></Route>
                     <Route path="/fbpagelike" component={FBPageLike}></Route>
                     <Route path="/fbpostlike" component={FBPostLike}></Route>
                     <Route path="/fbpostshare" component={FBPostShare}></Route>
                     <Route path="/instafollow" component={InstaFollow}></Route>
                     <Route path="/ytsub" component={YTSub}></Route>
                     <Route path="/tiktokfollow" component={TiktokFollow}></Route>
                     <Route path="/twitterfollow" component={TwitterFollow}></Route>
                     <Route path="/verifyemail" component={VerifyEmail}></Route>
                     <Route path="/contactus" component={Contactuspage}></Route>
                     <Route path="/addsurvey" component={AddSurvey}></Route>
                     <Route path="/approvesurvey" component={ApproveSurvey}></Route>
                     <Route path="/surveyhome" component={SurveyHome}></Route>
                     <Route path="/surveyview" component={SurveyView}></Route>
                     <Route path="/privacypolicy" component={Privacypolicy}></Route>
                     <Route path="/termsofservice" component={Termsofservice}></Route>
                     <Route path="/serveyview" component={Surveyquestionview}></Route>
                     <Route path="/servey" component={ServeyList}></Route>
                     <Route path="/linkclick" component={LinkClicks}></Route>
                     {/* temp path end */}


                     {/* admin */}
                     <Route path="/admin/" exact component={AdminLogin}></Route>
                     <Route path="/admin/admindash" exact component={Dashboard}></Route>
                     <Route path="/admin/adminmanageorders" exact component={AdminManageOrders}></Route>
                     <Route path="/admin/adminpaymentmanagement" exact component={AdminPaymentAnagement}></Route>
                     <Route path="/admin/feedback" exact component={Feedback}></Route>
                     <Route path="/admin/approvevideos" exact component={Approvevdeos}></Route>
                     <Route path="/admin/instagramearnhistory" exact component={InstagramEarnHistory}></Route>
                     <Route path="/admin/facebookearnhistory" exact component={FacebookEarnHistory}></Route>
                     <Route path="/admin/youtubeearnhistory" exact component={YouTubeEarnHistory}></Route>
                     <Route path="/admin/Twitterearnhistory" exact component={TwitterEarnHistory}></Route>
                     <Route path="/admin/TikTokearnhistory" exact component={TikTokEarnHistory}></Route>
                     <Route path="/admin/serveyhistory" exact component={ServeyEarnHistory}></Route>
                     <Route path="/admin/linkhistory" exact component={LinkEarnHistory}></Route>
                     <Route path="/admin/point" component={Point}></Route>
                     <Route path="/admin/users" component={Users}></Route>

                     <Route path="/admin/instagram" exact component={EInstagram}></Route>
                     <Route path="/admin/facebook" exact component={EFacebook}></Route>
                     <Route path="/admin/youtube" exact component={EYoutube}></Route>
                     <Route path="/admin/twitter" exact component={ETwitter}></Route>
                     <Route path="/admin/tikTok" exact component={ETikTok}></Route>
                     <Route path="/admin/link" exact component={ELink}></Route>  
                     <Route path="/admin/servey" exact component={EServey}></Route>  
                     <Route path="/admin/viewservey" exact component={Approvesurveyqus}></Route> 

                  </Switch>

               </div>
            </Router>
         </div>


      );
      // }
   }

}

export default App;                            
