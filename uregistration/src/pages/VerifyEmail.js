import React, { Component } from 'react';
import toast from 'toast-me';
import userServices from '../services/userServices';
import queryString from 'query-string';
import Cookies from 'js-cookie';

class VerifyEmail extends React.Component {
    constructor(props) {
		super(props)
		this.state = {

		}
	}

    componentDidMount() {
        this.verify();
    }

    verify () {
		const value = queryString.parse(this.props.location.search);
        const token = value.click;
        const tokenconfirm = value.clicks;
        if(token!=null){
            userServices.VerifyEmail(token).then(res => {
            
                if (res.data === "success") {
                    window.location='https://emoneytag.com/profile'
                    // this.props.history.push('/profile');
                    // toast('Email Verified');
                }else if (res.data === "already verified") {
                    window.location='https://emoneytag.com/profile'
                } else {
                    // this.props.history.push('/userhome');
                    window.location='https://emoneytag.com/userhome'
                    // toast('Something went wrong. Contact support');
                }
            });
        }else if(tokenconfirm!=null){
            userServices.ConfirmNewEmail(tokenconfirm).then(res => {
            
                if (res.data === "success") {
                    window.location='https://emoneytag.com/profile'
                    // this.props.history.push('/profile');
                    // toast('Email Verified');
                }else {
                    // this.props.history.push('/userhome');
                    window.location='https://emoneytag.com/userhome'
                    // toast('Something went wrong. Contact support');
                }
            });
        }
	}

    render() {
        return (
            <div>
                E-mail Verification In Progress
            </div>
        );
    }
};

export default VerifyEmail