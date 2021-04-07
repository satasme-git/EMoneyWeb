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

            email: '',
            key: '',
            error: ''


        }
    }

    userSignin = (e) => {
        var email = document.getElementById("email").value;
        var key = document.getElementById("key").value;

        if (email === "") {
            // this.setState({
            //     error: 'Please Enter your email!'
            // });
            toast('Please Enter your email!');
        } else if (key === "") {
            // this.setState({
            //     error: 'Please Enter your Password!'
            // });
            toast('Please Enter your Password!');
        } else {
            e.preventDefault();
            let user = { email: this.state.email, key: this.state.key, }
            console.log('user=>' + JSON.stringify(user));
            userServices.logIn(user).then(res => {
                console.log('resp=>', res)
                if (res.data != 'failed') {
                    // const store = new SessionKeystore({ name: 'other' });
                    // store.set('user', res.data, Date.now() + 1000 * 60 * 20)//20minute
                    // sconst store = sessionservice.getsessionstore();
                    // store.set('user', 'supersecret');
                    // store.on('deleted', ({ name }) => this.props.history.push('/login'));
                    // store.on('expired', ({ name }) => this.props.history.push('/login'));
                    // ReactSession.setStoreType("sessionStorage");
                    // var expires = new Date(year, month, day, hours, minutes, seconds, milliseconds);
                    // var sessionObject = {
                    //     expiresAt: expires,
                    //     someOtherSessionData: {
                    //         username: ''
                    //     }
                    // }
                    sessionStorage.setItem("user", res.data)
                    // const reducers = {
                    //     // ... your other reducers here ...
                    //     session: sessionService
                    // };
                    // const reducer = combineReducers(reducers);


                    // const store = combineReducers(reducer)
                    // sessionService.initSessionService(store);
                    // sessionService.saveSession("user",res.data)

                    this.props.history.push('/userhome');
                } else {
                    // this.setState({
                    //     error: 'Email or Password invalid!'
                    // });
                    toast('Email or Password invalid!');
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

                                <span class="login100-form-titlew" style={{ textAlign:'center'}}>
                                    Reset Your Password 
                                </span>
                                <div class="regwithemal1w">
                                The verification emali will be sent to mailbox
					            </div>
                                <h3 style={{ color: "red", fontSize: "20px", marginLeft: "25%", marginRight: "25%", marginTop: "10px", marginBottom: "10px" }}>{this.state.error}</h3>
                                <div class="wrap-input100w validate-inputw" data-validate="Valid email is required: ex@abc.xyz">
                                    <input class="input100w" type="text" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.changeEmailHandlter} />
                                    <span class="focus-input100w"></span>
                                    <span class="symbol-input100w">
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <br></br>

                       

                                <div class="container-login100-form-btnw">
                                    <button class="login100-form-btnw" onClick={this.userSignin}>
                                        Send
						            </button>
                                </div>




<br/>

                               
                                        <Link to="/login" >
                                            <div style={{ textAlign:'center'}}>
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