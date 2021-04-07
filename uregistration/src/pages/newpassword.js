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

class Newpassword extends React.Component {

    

    


    render() {

      

        return (
            <div>
                <div class="limiterw">
                    <div class="container-login100w">
                        <div class="wrap-login100w">
                            <div class="login100-formw validate-formw">

                                <span class="login100-form-titlew" style={{fontSize:"40px"}}>
                                    Set New Password 
                                </span>
                            
                                <h3 style={{ color: "red", fontSize: "20px", marginLeft: "25%", marginRight: "25%", marginTop: "10px", marginBottom: "10px" }}></h3>
                                <div class="wrap-input100w validate-inputw" data-validate="Valid email is required: ex@abc.xyz">
                                    <input class="input100w" type="text" name="email"  id="myInput" id="email" placeholder="New Password" />
                                    <span class="focus-input100w"></span>
                                    <span class="symbol-input100w">
                                        <i class="fa fa-lock" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <br></br>




                                <div class="wrap-input100w validate-inputw" data-validate="Password is required">
                                    <input class="input100w" type="password" name="pass" id="key"   id="myInput"   placeholder="Confirm Password" />
                                 
                                    <span class="focus-input100w"></span>
                                    <span class="symbol-input100w">
                                        <i class="fa fa-lock" aria-hidden="true"></i>
                                    </span>
                                </div>

                                <div class="container-login100-form-btnw">
                                    <button class="login100-form-btnw" >
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