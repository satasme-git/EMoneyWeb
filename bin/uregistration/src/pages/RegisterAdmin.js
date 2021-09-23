import React, { Component } from "react";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import $ from "jquery";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Sidebar from "../components/Sidebar";
import userServices from "../services/adminServices";
import Cookies from 'js-cookie';
import validator from 'validator';
import passwordValidator from 'password-validator';
import toast from 'toast-me';
import queryString from 'query-string';

class RegisterAdmin extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
            email: '',
			key: '',
			key1: '',
			username: '',
            role: '',
            error: '',
      profiledata: []

    }
  }
  changeUserName = e => {
    this.setState({ username: e.target.value });
};
changeRole = e => {
    this.setState({ role: e.target.value });
};
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

changekey1 = (event) => {
    this.setState({
        key1: event.target.value
    });
}


logout(response) {
    this.setState(state => ({
        isLogined: false,
        accessToken: ''
    }));
}

showpassword1 = (event) => {
    var x = document.getElementById("pw1signup");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

showpassword2 = (event) => {
    var x = document.getElementById("pw2signup");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

handleLoginFailure(response) {
    // alert('Failed to log in')
}

handleLogoutFailure(response) {
    // alert('Failed to log out')
}
  userSignup = (e) => {
    //alert("vjjvjvvjvjv");
    e.preventDefault();
    var schema = new passwordValidator();
    const value = queryString.parse(this.props.location.search);
    const token = value.ref;

    // Add properties to it
    schema
        .is().min(8)                                    // Minimum length 8
        .is().max(30)                                  // Maximum length 30
        .has().uppercase()                              // Must have uppercase letters
        .has().lowercase()                              // Must have lowercase letters
        .has().digits(1)                                // Must have at least 1 digits
        .has().not().spaces();                           // Should not have spaces
    // .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

    var key = document.getElementById("pw1signup").value;
    var key1 = document.getElementById("pw2signup").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var role = document.getElementById("role").value;
    
    
    if (email == "") {
        toast('Please enter the email', { position: 'bottom' });
    }else if (username  == "") {
        toast('Please enter the user name ', { position: 'bottom' });
    }else if (role == "") {
        toast('Please enter the role ', { position: 'bottom' });
    } 
    else if (key == "") {
        toast('Please enter the password', { position: 'bottom' });
    } else if (key1 == "") {
        toast('Please enter the confirm password', { position: 'bottom' });
    } else if (key !== key1) {
        toast('Passwords did not match!', { position: 'bottom' });
    } else if (!(validator.isEmail(email))) {
        toast('Passwords did not match!', { position: 'bottom' });
    } else if (!schema.validate(key)) {
        var errors = schema.validate(key, { list: true });
        var final_error = "";
        if (errors["0"] === 'min') {
            final_error = "Password must have minimum 8 characters";
        } else if (errors["0"] === 'max') {
            final_error = "Password must have maximum 30 characters";
        } else if (errors["0"] === 'uppercase') {
            final_error = "Password must have at least 1 upper case";
        } else if (errors["0"] === 'lowecase') {
            final_error = "Password must have at least 1 lower case";
        } else if (errors["0"] === 'digits') {
            final_error = "Password must have at least 1 digit";
        } else if (errors["0"] === 'spaces') {
            final_error = "Password must not have spaces";
        }
        // this.setState({
        // 	error: final_error
        // });
        toast(final_error, { position: 'bottom' });
    }
    else {
        
        if (token != null) {
            //alert("vjjvjvvjvjv");
            let user = {username:this.state.username, email: this.state.email, key: this.state.key,role:this.state.role, token: token }
            userServices.createUser(user).then(res => {

                if (res.status === 200) {
                    if (res.data === "Success") {
                        this.props.history.push("/admin/admindash");
                    } else if (res.data === "Already exist") {
                        toast("Email is already existed", { position: 'bottom' });
                    } else {
                        this.setState({
                            error: res.data
                        });
                    }
                }
            });
        } else {
            //alert("vjjvjvvjvjv");
            let user = { username:this.state.username, email: this.state.email, key: this.state.key,role:this.state.role }
            userServices.createUser(user).then(res => {
                //this.props.history.push('/admin/admindash');
                alert("Registration Successfuly");
                if (res.status === 200) {
                    if (res.data === 'Success') {
                        this.props.history.push('/admin/admindash');
                    } else if (res.data === 'Already exist') {
                        toast("Email is already existed", { position: 'bottom' });
                    } else {
                        this.setState({
                            error: res.data
                        });
                    }
                }

            });
        }
    }
}
 

  
  render() {
    return (
      <div>
        <Helmet>
          <meta charset="utf-8" />
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <title>Dashboard</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            type="text/css"
            href="/assetsadmin/css/css/util1.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/assetsadmin/css/css/main1.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="fonts/font-awesome-4.7.0/css/font-awesome.min.css"
          />

          <link rel="stylesheet" href="/assetsadmin/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/assetsadmin/css/font-awesome.min.css" />
          <link rel="stylesheet" href="/assetsadmin/css/themify-icons.css" />
          <link rel="stylesheet" href="/assetsadmin/css/metisMenu.css" />
          <link rel="stylesheet" href="/assetsadmin/css/owl.carousel.min.css" />
          <link rel="stylesheet" href="/assetsadmin/css/slicknav.min.css" />

          <link rel="stylesheet" href="/assetsadmin/css/typography.css" />

          <link rel="stylesheet" href="/assetsadmin/css/styles.css" />
          <link rel="stylesheet" href="/assetsadmin/css/responsive.css" />
          <script src="/assetsadmin/js/vendor/modernizr-2.8.3.min.js"></script>

          <script src="/assetsadmin/js/vendor/jquery-2.2.4.min.js"></script>
          <script src="/assetsadmin/js/popper.min.js"></script>
          <script src="/assetsadmin/js/bootstrap.min.js"></script>
          <script src="/assetsadmin/js/owl.carousel.min.js"></script>
          <script src="/assetsadmin/js/metisMenu.min.js"></script>
          <script src="/assetsadmin/js/jquery.slimscroll.min.js"></script>
          <script src="/assetsadmin/js/jquery.slicknav.min.js"></script>

          <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>
          <script src="https://code.highcharts.com/highcharts.js"></script>
          <script src="https://code.highcharts.com/modules/exporting.js"></script>
          <script src="https://code.highcharts.com/modules/export-data.js"></script>

          <script src="https://www.amcharts.com/lib/3/ammap.js"></script>
          <script src="https://www.amcharts.com/lib/3/maps/js/worldLow.js"></script>

          <script src="/assetsadmin/js/maps.js"></script>

        </Helmet>
        <Sidebar />
  
        {/* page container area start */}
        <div className="page-container">
          {/* main content area start */}
          <div className="main-content">
            {/* header area start */}
            <br/>
            <div className="page-title-area">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <div className="breadcrumbs-area clearfix">
                    <h4 className="page-title pull-left">Dashboard</h4>
                    <ul className="breadcrumbs pull-left">
                      <li> <Link to="/admin/admindash" > <a >Home</a> </Link></li>
                      <li><span>Admin Registration</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* page title area end */}
            <div className="main-content-inner">
              <div className="row">
                {/* data table start */}
                <div className="col-12 mt-5">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="header-title">Add Admin</h4>
                      
                      <form onSubmit={this.userSignup}>

                                <div class="wrap-input100 validate-input" >
										<input class="input100" type="text" name="username" id="username" placeholder="User Name" value={this.state.username}  onChange={this.changeUserName} required/>
										<span class="focus-input100"></span>
										<span class="symbol-input100">
                                        <i class="fa fa-user-o" aria-hidden="true"></i>
										</span>
									</div>
									<br></br>



									<div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
										<input class="input100" type="text" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.changeEmailHandlter} required/>
										<span class="focus-input100"></span>
										<span class="symbol-input100">
											<i class="fa fa-envelope" aria-hidden="true"></i>
										</span>
									</div>
									<br></br>

									<div class="wrap-input100 validate-input" data-validate="Password is required">
										<input class="input100" type="password" name="pass" id="pw1signup" placeholder="Password" value={this.state.key} onChange={this.changekey} required/>
										<span class="focus-input100"></span>
										<span class="symbol-input100">
											<i class="fa fa-lock" aria-hidden="true"></i>
										</span>
									</div>

									<div>
										<input style={{ marginLeft: "20px" }} type="checkbox" onClick={this.showpassword1} />Show Password
                                </div>

									<br></br>

									<div class="wrap-input100 validate-input" data-validate="Password is required">
										<input class="input100" type="password" name="pass" id="pw2signup" placeholder=" Confirm password" value={this.state.key1} onChange={this.changekey1} required />
										<span class="focus-input100"></span>
										<span class="symbol-input100">
											<i class="fa fa-lock" aria-hidden="true"></i>
										</span>
									</div>
									<div>
										<input style={{ marginLeft: "20px" }} type="checkbox" onClick={this.showpassword2} />Show Password
                                </div>
                                <br></br>
									<div class="col-12 col-md-4" >
						
                                    <div class="form-group" style={{ width: "100%", marginTop: "10px" }}>
                                                <select class="form-control" id="role" value={this.state.role} onChange={this.changeRole} required >
                                                        <option value="">--Select Role--</option>
                                                        <option value="SuperAdmin">Super Admin</option>
                                                        <option value="admin">Admin</option>
                                                    </select>
                                                    </div>
									</div>
                                    <br></br>
									<div class="container">
                                    <div class="col col-lg-2">
										<button class="login100-form-btn">
											Register
						</button>
									</div>
                                    </div>
									
								</form>
                    </div>
                    {/* Vertically centered modal start */}
                    
                    {/* Vertically centered modal end */}
                  </div>
                </div>
                {/* data table end */}
              </div>
            </div>
          </div>
          {/* main content area end */}
        </div>
        {/* page container area end */}
      </div>
    );
  }
}

export default RegisterAdmin;
