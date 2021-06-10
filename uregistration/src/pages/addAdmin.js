// /* eslint-disable no-undef */
// /* eslint-disable react/style-prop-object */
// /* eslint-disable jsx-a11y/anchor-is-valid */
// // eslint-disable-next-line no-unused-vars
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import validator from 'validator';
// import passwordValidator from 'password-validator';
// import toast from 'toast-me';
// import FacebookLogin from 'react-facebook-login';
// import userServices from '../services/adminServices';
// import SessionKeystore from 'session-keystore'
// import { GoogleLogin, GoogleLogout } from 'react-google-login';
// import queryString from 'query-string';
// import Cookies from 'js-cookie';


// const CLIENT_ID = '613851969001-bakoc12jk787o0k34plimm6cq1tsklra.apps.googleusercontent.com';


// // import { data } from 'jquery';

// class AddAdmin extends React.Component {


// 	constructor(props) {
// 		super(props)
// 		this.state = {

// 			email: '',
// 			key: '',
// 			key1: '',
// 			username: '',
//             role: '',
//             error: '',
			

// 		}
// 		// this.userSignup = this.userSignup.bind(this);
		
// 		// this.statusChangeCallback = this.statusChangeCallback.bind(this);
// 	}

	

// 	userSignup = (e) => {
// 		//alert("vjjvjvvjvjv");
// 		e.preventDefault();
// 		var schema = new passwordValidator();
// 		const value = queryString.parse(this.props.location.search);
// 		const token = value.ref;

// 		// Add properties to it
// 		schema
// 			.is().min(8)                                    // Minimum length 8
// 			.is().max(30)                                  // Maximum length 30
// 			.has().uppercase()                              // Must have uppercase letters
// 			.has().lowercase()                              // Must have lowercase letters
// 			.has().digits(1)                                // Must have at least 1 digits
// 			.has().not().spaces();                           // Should not have spaces
// 		// .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

// 		var key = document.getElementById("pw1signup").value;
// 		var key1 = document.getElementById("pw2signup").value;
// 		var email = document.getElementById("email").value;
//         var username = document.getElementById("username").value;
//         var role = document.getElementById("role").value;
        
		
// 		if (email == "") {
// 			toast('Please enter the email', { position: 'bottom' });
// 		}else if (username  == "") {
// 			toast('Please enter the user name ', { position: 'bottom' });
// 		}else if (role  == "") {
// 			toast('Please enter the role ', { position: 'bottom' });
// 		} 
//         else if (key == "") {
// 			toast('Please enter the password', { position: 'bottom' });
// 		} else if (key1 == "") {
// 			toast('Please enter the confirm password', { position: 'bottom' });
// 		} else if (key !== key1) {
// 			toast('Passwords did not match!', { position: 'bottom' });
// 		} else if (!(validator.isEmail(email))) {
// 			toast('Passwords did not match!', { position: 'bottom' });
// 		} else if (!schema.validate(key)) {
// 			var errors = schema.validate(key, { list: true });
// 			var final_error = "";
// 			if (errors["0"] === 'min') {
// 				final_error = "Password must have minimum 8 characters";
// 			} else if (errors["0"] === 'max') {
// 				final_error = "Password must have maximum 30 characters";
// 			} else if (errors["0"] === 'uppercase') {
// 				final_error = "Password must have at least 1 upper case";
// 			} else if (errors["0"] === 'lowecase') {
// 				final_error = "Password must have at least 1 lower case";
// 			} else if (errors["0"] === 'digits') {
// 				final_error = "Password must have at least 1 digit";
// 			} else if (errors["0"] === 'spaces') {
// 				final_error = "Password must not have spaces";
// 			}
// 			// this.setState({
// 			// 	error: final_error
// 			// });
// 			toast(final_error, { position: 'bottom' });
// 		}
// 		else {
			
// 			if (token != null) {
// 				//alert("vjjvjvvjvjv");
// 				let user = {username:this.state.username, email: this.state.email, key: this.state.key,role:this.state.role, token: token }
// 				userServices.createUser(user).then(res => {

// 					if (res.status === 200) {
// 						if (res.data === "Success") {
// 							this.props.history.push("/admin/admindash");
// 						} else if (res.data === "Already exist") {
// 							toast("Email is already existed", { position: 'bottom' });
// 						} else {
// 							this.setState({
// 								error: res.data
// 							});
// 						}
// 					}
// 				});
// 			} else {
// 				//alert("vjjvjvvjvjv");
// 				let user = { username:this.state.username, email: this.state.email, key: this.state.key,role:this.state.role }
// 				userServices.createUser(user).then(res => {
// 					//this.props.history.push('/admin/admindash');
// 					//alert("vjjvjvvjvjv");
// 					if (res.status === 200) {
// 						if (res.data === 'Success') {
// 							this.props.history.push('/admin/admindash');
// 						} else if (res.data === 'Already exist') {
// 							toast("Email is already existed", { position: 'bottom' });
// 						} else {
// 							this.setState({
// 								error: res.data
// 							});
// 						}
// 					}

// 				});
// 			}
// 		}
// 	}

// 	// componentDidMount() {
// 	// 	var user = Cookies.get('user');
// 	// 	if (user != null) {
// 	// 		this.props.history.push('/userhome');
// 	// 	} else {
// 	// 		(function (d, s, id) {
// 	// 			var js, fjs = d.getElementsByTagName(s)[0];
// 	// 			if (d.getElementById(id)) {
// 	// 				return;
// 	// 			}
// 	// 			js = d.createElement(s);
// 	// 			js.id = id;
// 	// 			js.src = "https://connect.facebook.net/en_US/sdk.js";
// 	// 			fjs.parentNode.insertBefore(js, fjs);
// 	// 		}(document, 'script', 'facebook-jssdk'));


// 	// 		window.fbAsyncInit = () => {
// 	// 			window.FB.init({
// 	// 				appId: '104862384871706', //Change with your Facebook app id
// 	// 				autoLogAppEvents: true,
// 	// 				xfbml: true,
// 	// 				version: 'v3.0'
// 	// 			});

// 	// 			window.FB.Event.subscribe('auth.statusChange', response => {
// 	// 				if (response.authResponse) {
// 	// 					this.checkLoginState();
// 	// 				} else {
// 	// 					console.log('[FacebookLoginButton] User cancelled login or did not fully authorize.');
// 	// 				}
// 	// 			});
// 	// 		};
// 	// 	}

// 	// }

// 	checkLoginState() {
// 		window.FB.getLoginStatus(function (response) {
// 			this.statusChangeCallback(response);
// 		}.bind(this));
// 	}

	

	
// 	changeUserName = e => {
//         this.setState({ username: e.target.value });
//     };
// 	changeRole = e => {
//         this.setState({ role: e.target.value });
//     };
// 	changeEmailHandlter = (event) => {
// 		this.setState({
// 			email: event.target.value
// 		});
// 	}
// 	changekey = (event) => {
// 		this.setState({
// 			key: event.target.value
// 		});
// 	}

// 	changekey1 = (event) => {
// 		this.setState({
// 			key1: event.target.value
// 		});
// 	}
	

// 	logout(response) {
// 		this.setState(state => ({
// 			isLogined: false,
// 			accessToken: ''
// 		}));
// 	}

// 	showpassword1 = (event) => {
// 		var x = document.getElementById("pw1signup");
// 		if (x.type === "password") {
// 			x.type = "text";
// 		} else {
// 			x.type = "password";
// 		}
// 	}

// 	showpassword2 = (event) => {
// 		var x = document.getElementById("pw2signup");
// 		if (x.type === "password") {
// 			x.type = "text";
// 		} else {
// 			x.type = "password";
// 		}
// 	}

// 	handleLoginFailure(response) {
// 		// alert('Failed to log in')
// 	}

// 	handleLogoutFailure(response) {
// 		// alert('Failed to log out')
// 	}

// 	render() {
// 		return (

// 			<div>

// 				<div class="limiter">
// 					<div class="container-login100">
// 						<div class="wrap-login100">



// 							<div class="login100-form validate-form">
// 								<span class="login100-form-title">
// 									Add Admins
// 					</span>
// 								<h3 id="alert" style={{ color: "red", margin: "center", fontSize: "20px", marginLeft: "25%", marginRight: "20%", marginBottom: "10px" }}>{this.state.error}</h3>

// 								<div class="regwithemal1">
									
// 					</div>


// 								<form onSubmit={this.userSignup}>

//                                 <div class="wrap-input100 validate-input" >
// 										<input class="input100" type="text" name="username" id="username" placeholder="User Name" value={this.state.username}  onChange={this.changeUserName}/>
// 										<span class="focus-input100"></span>
// 										<span class="symbol-input100">
// 											<i class="fa fa-user-circle" aria-hidden="true"></i>
// 										</span>
// 									</div>
// 									<br></br>



// 									<div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
// 										<input class="input100" type="text" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.changeEmailHandlter} />
// 										<span class="focus-input100"></span>
// 										<span class="symbol-input100">
// 											<i class="fa fa-envelope" aria-hidden="true"></i>
// 										</span>
// 									</div>
// 									<br></br>

// 									<div class="wrap-input100 validate-input" data-validate="Password is required">
// 										<input class="input100" type="password" name="pass" id="pw1signup" placeholder="Password" value={this.state.key} onChange={this.changekey} />
// 										<span class="focus-input100"></span>
// 										<span class="symbol-input100">
// 											<i class="fa fa-lock" aria-hidden="true"></i>
// 										</span>
// 									</div>

// 									<div>
// 										<input style={{ marginLeft: "20px" }} type="checkbox" onClick={this.showpassword1} />Show Password
//                                 </div>

// 									<br></br>

// 									<div class="wrap-input100 validate-input" data-validate="Password is required">
// 										<input class="input100" type="password" name="pass" id="pw2signup" placeholder=" Confirm password" value={this.state.key1} onChange={this.changekey1} />
// 										<span class="focus-input100"></span>
// 										<span class="symbol-input100">
// 											<i class="fa fa-lock" aria-hidden="true"></i>
// 										</span>
// 									</div>
// 									<div>
// 										<input style={{ marginLeft: "20px" }} type="checkbox" onClick={this.showpassword2} />Show Password
//                                 </div>

// 									<div class="wrap-input100 validate-input" >
						
//                                                 <div class="form-group" style={{ width: "100%", marginTop: "10px" }}>
//                                                 <select class="form-control" id="role"value={this.state.role} onChange={this.changeRole} >
//                                                         <option>--Select Role--</option>
//                                                         <option value="SuperAdmin">Super Admin</option>
//                                                         <option value="admin">Admin</option>
//                                                     </select>
//                                                     </div>
// 									</div>
									
// 									<div class="container-login100-form-btn">
// 										<button class="login100-form-btn">
// 											Register
// 						</button>
// 									</div>
// 								</form>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 			</div>

// 		)

// 	}

// }
// export default AddAdmin