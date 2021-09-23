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

class Resetpassword extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            email: ''

        }
    }

    sendResetEmail = (e) => {
        
        if (this.state.email != null || this.state.email != "") {
            userServices.SendPasswordReset(this.state.email).then(res =>{
                if(res.data=="success"){
                    var emailsend = document.getElementById("emailsend");
                    emailsend.style.display = "";
                    toast("Email sent. Check your inbox", { position: 'bottom' })
                }else if(res.data=="social"){
                    toast("This account is logged with social account.Can't reset password", { position: 'bottom' })
                }else if(res.data=="notfound"){
                    toast("Invalid Email", { position: 'bottom' })
                }else{
                    toast("Something went wrong. Try again later", { position: 'bottom' })
                }
            });
        }
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

    render() {
        return (
            <div>
                <div class="limiterw">
                    <div class="container-login100w">
                        <div class="wrap-login100w">
                            <div class="login100-formw validate-formw">

                                <span class="login100-form-titlew" style={{ textAlign: 'center' }}>
                                    Reset Your Password
                                </span>


                                <div class="wrap-input100w validate-inputw" data-validate="Valid email is required: ex@abc.xyz">
                                    <input class="input100w" type="text" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.changeEmailHandlter} />
                                    <span class="focus-input100w"></span>
                                    <span class="symbol-input100w">
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <div class="regwithemal1w" id="emailsend" style={{ color: "red", display: "none" }}>
                                    The verification emali will be sent to mailbox
					            </div>
                                <br></br>



                                <div class="container-login100-form-btnw">
                                    <button class="login100-form-btnw" onClick={this.sendResetEmail}>
                                        Send
						            </button>
                                </div>




                                <br />


                                <Link to="/login" >
                                    <div style={{ textAlign: 'center' }}>
                                        Back to  Login
						                    </div>
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


        )
    }

}
export default Resetpassword