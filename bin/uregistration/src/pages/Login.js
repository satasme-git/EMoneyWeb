/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import userServices from '../services/userServices';
import { Link } from 'react-router-dom';
import toast from 'toast-me';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Cookies from 'js-cookie';


const CLIENT_ID = '613851969001-bakoc12jk787o0k34plimm6cq1tsklra.apps.googleusercontent.com';
//<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0&appId=497375044821589&autoLogAppEvents=1" nonce="h8A6PbVI"></script>
// import { data } from 'jquery';

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            key: '',
            error: '',
            isLogined: false,
            accessToken: '',


        }
        this.login = this.login.bind(this);
        this.handleLoginFailure = this.handleLoginFailure.bind(this);
        this.logout = this.logout.bind(this);
        this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
    }

    userSignin = (e) => {
        e.preventDefault();
        var email = document.getElementById("email").value;
        var key = document.getElementById("pwlogin").value;

        if (email === "") {
            // this.setState({
            //     error: 'Please Enter your email!'
            // });
            toast('Please Enter your email!', { position: 'bottom' });
        } else if (key === "") {
            // this.setState({
            //     error: 'Please Enter your Password!'
            // });
            toast('Please Enter your Password!', { position: 'bottom' });
        } else {
            let user = { email: this.state.email, key: this.state.key, }
            userServices.logIn(user).then(res => {
                if (res.data == "google") {
                    toast('Last time you used Google login. Please continue with that!', { position: 'bottom' });
                } else if (res.data == "facebook") {
                    toast('Last time you used Facebook login. Please continue with that!', { position: 'bottom' });
                } else if (res.data == 'failed') {
                    toast('Email or Password invalid!', { position: 'bottom' });

                // } else if (res.status == 'deactive') {
                //     toast('Email or Password inv!', { position: 'bottom' });

                }else {
                    // sessionStorage.setItem("user", res.data)
                    var inFifteenMinutes = new Date(new Date().getTime() + 2 * 60 * 60 * 1000);
                    Cookies.set('user', res.data, {
                        expires: inFifteenMinutes
                    });
                    this.props.history.push('/userhome');
                }
            });
        }

    }
    componentDidMount() {
       
        // (function (d, s, id) {
        //     var js, fjs = d.getElementsByTagName(s)[0];
        //     if (d.getElementById(id)) {
        //         return;
        //     }
        //     js = d.createElement(s);
        //     js.id = id;
        //     js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0&appId=497375044821589&autoLogAppEvents=1";
        //     fjs.parentNode.insertBefore(js, fjs);
        // }(document, 'script', 'facebook-jssdk'));


        // window.fbAsyncInit = () => {
        //     window.FB.init({
        //         appId: '497375044821589', //Change with your Facebook app id
        //         autoLogAppEvents: true,
        //         xfbml: true,
        //         version: 'v11.0'
        //     });
        //     FB.getLoginStatus(function(response) {   // Called after the JS SDK has been initialized.
        //         statusChangeCallback(response);        // Returns the login status.
        //       });
        //     window.FB.Event.subscribe('auth.statusChange', response => {
        //         if (response.authResponse) {
        //             this.checkLoginState();
        //         } else {
        //             console.log('[FacebookLoginButton] User cancelled login or did not fully authorize.');
        //         }
        //     });
        // };
    }

    // checkLoginState() {
    //    // alert("gi");
    //     window.FB.getLoginStatus(function (response) {
    //        // alert("gi");
    //         this.statusChangeCallback(response);
    //     }.bind(this));
    // }

    // loginfb() {
    //     //alert("gi");
    //     window.FB.login(this.checkLoginState(), {
    //         scope: 'email'
    //     });
    // }

    // statusChangeCallback(response) {
    //     //alert("gi");
    //     if (response.status === 'connected') {
    //         //alert("gi");
    //         this.testAPI();
    //     } else if (response.status === 'not_authorized') {
    //         console.log("[FacebookLoginButton] Person is logged into Facebook but not your app");
    //     } else {
    //         console.log("[FacebookLoginButton] Person is not logged into Facebook");
    //     }
    // }

    // testAPI() {
    //     window.FB.api('/me', function (response) {
    //         console.log('[FacebookLoginButton] Successful login for: ', response);

    //     });
    //     this.props.history.push('/UserHome');
    // }

    testAPI = (e) => {
        FB.api('/me', function (response) {
            let user = { email: response.id, key: 'facebook' }
            userServices.facebookLogIn(user).then(res => {
                if (res.data.id !== null) {
                    var inFifteenMinutes = new Date(new Date().getTime() + 2 * 60 * 60 * 1000);
                    Cookies.set('user', res.data.user.id, {
                        expires: inFifteenMinutes
                    });
                    //this.props.history.push('/userhome');
                    window.location.href = "/userhome";
                } else {
                    toast('Server maybe offline. Try again later!', { position: 'bottom' });
                }
            });
        });
    }
    fbloginSuccessRidirect() {
        this.props.history.push('/userhome');
    }
    changeEmailHandlter = (event) => {
        this.setState({
            email: event.target.value
        });
    }
    changekey = (event) => {
        this.setState({
            key: event.target.value
        });
    }

    login(response) {

        if (response.accessToken) {
            this.setState(state => ({
                isLogined: true,
                accessToken: response.accessToken
            }));
            let user = { email: response.profileObj.email, key: 'google' }
            userServices.googleLogIn(user).then(res => {
                if (res.data.id !== null) {
                    // sessionStorage.setItem("user", res.data.user.id)
                    // Cookies.set('user', res.data.user.id);
                    var inFifteenMinutes = new Date(new Date().getTime() + 2 * 60 * 60 * 1000);
                    Cookies.set('user', res.data.user.id, {
                        expires: inFifteenMinutes
                    });
                    this.props.history.push('/userhome');
                } else {
                    toast('Server maybe offline. Try again later!', { position: 'bottom' });
                }
            });

        }
    }

    showpassword = (event) => {
        var x = document.getElementById("pwlogin");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    logout(response) {
        this.setState(state => ({
            isLogined: false,
            accessToken: ''
        }));
    }

    handleLoginFailure(response) {
        // alert('Failed to log in')
    }

    handleLogoutFailure(response) {
        // alert('Failed to log out')
    }
    

     statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
      console.log('statusChangeCallback');
      console.log(response);                   // The current login status of the person.
      if (response.status === 'connected') {   // Logged into your webpage and Facebook.
        testAPI();  
      } else {                                 // Not logged into your webpage or we are unable to tell.
        document.getElementById('status').innerHTML = 'Please log ' +
          'into this webpage.';
      }
    }
  
  
    checkLoginState() {               // Called when a person is finished with the Login Button.
      FB.getLoginStatus(function(response) {   // See the onlogin handler
        statusChangeCallback(response);
      });
    }
  
  
   
     testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
      console.log('Welcome!  Fetching your information.... ');
      FB.api('/me', function(response) {
        console.log('Successful login for: ' + response.name);
        document.getElementById('status').innerHTML =
          'Thanks for logging in, ' + response.name + '!';
      });
    }
  
  
  
  

    render() {
        return (
            
            <div>
                <div className="limiterw">
                    <div className="container-login100w">
                        <div className="wrap-login100w">
                            <div className="login100-formw validate-formw">

                                <span className="login100-form-titlew">
                                    Welcome
                                </span>
                                <div className="regwithemal1w">
                                    Log With Email
					            </div>
                                <h3 style={{ color: "red", fontSize: "20px", marginLeft: "25%", marginRight: "25%", marginTop: "10px", marginBottom: "10px" }}>{this.state.error}</h3>
                                <form onSubmit={this.userSignin}>
                                    <div className="wrap-input100w validate-inputw" data-validate="Valid email is required: ex@abc.xyz">
                                        <input className="input100w" type="text" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.changeEmailHandlter} />
                                        <span className="focus-input100w"></span>
                                        <span className="symbol-input100w">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <br></br>

                                    <div className="wrap-input100w validate-inputw" data-validate="Password is required">
                                        <input className="input100w" type="password" name="pass" id="pwlogin" value={this.state.key} onChange={this.changekey} placeholder="Password" />
                                        <span className="focus-input100w"></span>
                                        <span className="symbol-input100w">
                                            <i className="fa fa-lock" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div>
                                        <input style={{ marginLeft: "20px" }} type="checkbox" onClick={this.showpassword} />Show Password
                                </div>

                                    <div className="container-login100-form-btnw">
                                        <input type="submit" className="login100-form-btnw" value="Login" />

                                    </div>
                                </form>

                                {/* <!--line --> */}
                                {/* <div className="container">
                                    <hr className="hr-text" data-content="AND" />
                                </div> */}



                                <div className="text-center p-t-12">

                                    <span className="txt1w">
                                        Forgot Username Or Password?&nbsp;&nbsp;
						                </span>
                                    <Link className="txt2w" to="/resetpassword">
                                        Reset Password
						                </Link>
                                </div>
                                {/* <div style={{ width: "100%", height: "10%" }} >
                                    <button className="my-facebook-button-class"
                                        onClick={
                                            () => this.loginfb()
                                        } >
                                        </button>
                                        fb login
                                </div> */}
                                <br></br>

                                <div style={{ width: "100%" }}>
                                    {this.state.isLogined ?
                                        <GoogleLogout
                                            clientId={CLIENT_ID}
                                            buttonText='Logout'
                                            onLogoutSuccess={this.logout}
                                            onFailure={this.handleLogoutFailure}
                                            className="button"
                                        >
                                        </GoogleLogout> : <GoogleLogin
                                            clientId={CLIENT_ID}
                                            buttonText='Signin with Google'
                                            onSuccess={this.login}
                                            onFailure={this.handleLoginFailure}
                                            cookiePolicy={'single_host_origin'}
                                            responseType='code,token'
                                            className="button"
                                        />
                                    }


                                </div>

                                <div className="text-center p-t-12">
                                    <span className="txt1w">
                                        Didn't have An Account?&nbsp;&nbsp;
						                </span>
                                    <Link to="/register" className="txt2w">
                                        
                                            Sign Up
						                    
                                    </Link>
                                </div>
                                <br />
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Login