/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import userServices from '../services/userServices';
import { Link } from 'react-router-dom';
import toast from 'toast-me';
import SessionKeystore from 'session-keystore'
import { data } from 'jquery';
import ReactSession from 'react-client-session';
import sessionservice from '../services/sessionservice';
import { combineReducers } from 'redux';
import { sessionService } from 'redux-react-session';

import $ from 'jquery';
import queryString from 'query-string';
import passwordValidator from 'password-validator';

class Newpassword extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            user: '',
            pw: '',
            newpw: ''

        }
    }

    componentDidMount() {
        const value = queryString.parse(this.props.location.search);
        const token = value.click;
        this.setState({
            user: token
        });
    }

    changepw = (event) => {
        this.setState({
            pw: event.target.value
        });
    }
    changenewpw = (event) => {
        this.setState({
            newpw: event.target.value
        });
    }

    resetPassword = (e) => {
        if (this.state.pw === this.state.newpw) {
            var schema = new passwordValidator();
            schema
                .is().min(8)                                    // Minimum length 8
                .is().max(30)                                  // Maximum length 30
                .has().uppercase()                              // Must have uppercase letters
                .has().lowercase()                              // Must have lowercase letters
                .has().digits(1)                                // Must have at least 1 digits
                .has().not().spaces();                           // Should not have spaces

            if (!schema.validate(this.state.pw)) {
                var errors = schema.validate(this.state.pw, { list: true });
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
            }else{
                let user = { user: this.state.user, pw: this.state.pw}
                userServices.resetPassword(user).then(res =>{
                    if(res.data=="success"){
                        toast("Password change success. Login to your account", { position: 'bottom' })
                        this.props.history.push("/login");
                    }else{
                        toast("Something went wrong. Try again later", { position: 'bottom' })
                    }
                });
            }
        } else {
            toast("Password mismatched", { position: 'bottom' })
        }
    }

    showpassword1 = (event) => {
		var x = document.getElementById("pw1reset");
		if (x.type === "password") {
			x.type = "text";
		} else {
			x.type = "password";
		}
	}

	showpassword2 = (event) => {
		var x = document.getElementById("pw2reset");
		if (x.type === "password") {
			x.type = "text";
		} else {
			x.type = "password";
		}
	}

    render() {



        return (
            <div>
                <div class="limiterw">
                    <div class="container-login100w">
                        <div class="wrap-login100w">
                            <div class="login100-formw validate-formw">

                                <span class="login100-form-titlew" style={{ fontSize: "40px" }}>
                                    Set New Password
                                </span>

                                <h3 style={{ color: "red", fontSize: "20px", marginLeft: "25%", marginRight: "25%", marginTop: "10px", marginBottom: "10px" }}></h3>
                                <div class="wrap-input100w validate-inputw" data-validate="Valid email is required: ex@abc.xyz">
                                    <input class="input100w" type="password" name="email" id="pw1reset" placeholder="New Password" value={this.state.pw} onChange={this.changepw} />
                                    <span class="focus-input100w"></span>
                                    <span class="symbol-input100w">
                                        <i class="fa fa-lock" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <input style={{ marginLeft: "20px" }} type="checkbox" onClick={this.showpassword1} />Show Password
                                <br></br>




                                <div class="wrap-input100w validate-inputw" data-validate="Password is required">
                                    <input class="input100w" type="password" name="pass" id="pw2reset" placeholder="Confirm Password" value={this.state.newpw} onChange={this.changenewpw} />

                                    <span class="focus-input100w"></span>
                                    <span class="symbol-input100w">
                                        <i class="fa fa-lock" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <input style={{ marginLeft: "20px" }} type="checkbox" onClick={this.showpassword2} />Show Password
                                

                                <div class="container-login100-form-btnw">
                                    <button class="login100-form-btnw" onClick={this.resetPassword}>
                                        Set New Password
						            </button>
                                </div>







                                <br></br> <br></br>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Newpassword