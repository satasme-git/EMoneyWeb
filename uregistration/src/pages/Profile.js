import React, { Component } from "react";
import userServices from '../services/userServices';
import toast from 'toast-me';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Cookies from 'js-cookie';
import Chart from "react-google-charts";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import moment from 'moment' // 2.20.1

const _format = 'YYYY-MM-DD'
const _current_year = moment().format(_format)


class Profile extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            selectValue: '',
            email: '',
            error: '',
            fname: '',
            lname: '',
            mobile: '',
            whatsapp:'',
            viber:'',
            teligram:'',
            wechat:'',
            fbplink:'',
            addresLine1:'',
            addresLine2:'',
            resizipcode:'',
            residistrict:'',
            resiprovince:'',
            resinetialcountry:'',

            c_fname: '',
            image: '',
            c_lname: '',
            street: '',
            number: '',
            postalcode: '',
            city: '',
            stateorregion: '',
            specialization: '',
            education: '',
            university:"",
            collage:'',

            occupation:"",
            employer:"",
            designation:"",
            hobbies:"",

            currentLiving:"",
            resident:"",
            idnumber:"",
            passport:"",

            dob: '',
            country: '',
            currency: '',
            basiccountry: '',
            gender: '',
            user: '1',
            thumbnail: undefined,
            profileimage: "",
            // profilecomplete: "",
            completeper: "",
            notcompleteper: "",
            premail: "",
            prmobile: "",
            prearningtotal: "",
            emailchange: "",
            paypalpay: "",
            age:''

        }
        this.contactInfo = this.contactInfo.bind(this);
        this.changeEmail = this.changeEmail.bind(this);

    }

    componentDidMount() {
        var user = Cookies.get('user');
        if (user != null) {
            userServices.getProfileImage(user).then(res => {
                if (res.data.id != null) {
                    this.setState({ profileimage: "data:image/png;base64," + res.data.picByte });
                } else {
                    this.setState({ profileimage: "assets\\images\\icons\\userii.jpg" });
                }
            });
            userServices.getUserById(user).then(res => {
                if (res.data.user != null) {
                    if (res.data.user.fname != null) {
                        this.setState({ fname: res.data.user.fname });
                    }
                    if (res.data.user.lname != null) {
                        this.setState({ lname: res.data.user.lname });
                    }
                    if (res.data.user.fname != null) {
                        this.setState({ c_fname: res.data.user.fname });
                    }
                    if (res.data.user.lname != null) {
                        this.setState({ c_lname: res.data.user.lname });
                    }
                    if (res.data.user.email != null) {
                        if (isNaN(res.data.user.email)) {
                            this.setState({ email: res.data.user.email });
                        }
                    }
                    if (res.data.user.tempemail != null) {
                        this.setState({ emailchange: "*You requested email change. Please login to your email and confirm." });
                    }
                    if (res.data.user.mobile != null && res.data.user.mobile != 0) {
                        this.setState({ mobile: res.data.user.mobile });
                    }


                    if (res.data.user.whatsapp != null && res.data.user.whatsapp != 0) {
                        this.setState({ whatsapp: res.data.user.whatsapp });
                    }
                    if (res.data.user.viber != null && res.data.user.viber != 0) {
                        this.setState({ viber: res.data.user.viber });
                    }
                    if (res.data.user.teligram != null && res.data.user.teligram != 0) {
                        this.setState({ teligram: res.data.user.teligram });
                    }
                    if (res.data.user.wechat != null) {
                        this.setState({ wechat: res.data.user.wechat });
                    }
                    if (res.data.user.fbplink != null) {
                        this.setState({ fbplink: res.data.user.fbplink });
                    }

                    if (res.data.user.addresLine1 != null) {
                        this.setState({ addresLine1: res.data.user.addresLine1 });
                    }
                    if (res.data.user.addresLine2 != null) {
                        this.setState({ addresLine2: res.data.user.addresLine2 });
                    }
                    if (res.data.user.resizipcode != null) {
                        this.setState({ resizipcode: res.data.user.resizipcode });
                    }
                    if (res.data.user.residistrict != null) {
                        this.setState({ residistrict: res.data.user.residistrict });
                    }
                    if (res.data.user.resiprovince != null) {
                        this.setState({ resiprovince: res.data.user.resiprovince });
                    }
                    if (res.data.user.resinetialcountry != null) {
                        this.setState({ resinetialcountry: res.data.user.resinetialcountry });
                    }



                    if (res.data.user.age != null) {
                        this.setState({ age: res.data.user.age });
                    }

                    if (res.data.user.gender != null) {
                        this.setState({ gender: res.data.user.gender });
                    }
                    if (res.data.user.dob != null) {
                        this.setState({ dob: res.data.user.dob });
                    }
                    if (res.data.user.specialization != null) {
                        this.setState({ specialization: res.data.user.specialization });
                    }
                    if (res.data.user.education != null) {
                        this.setState({ education: res.data.user.education });
                    }

                    if (res.data.user.university != null) {
                        this.setState({ university: res.data.user.university });
                    }
                    if (res.data.user.collage != null) {
                        this.setState({ collage: res.data.user.collage});
                    }

                    if (res.data.user.occupation != null) {
                        this.setState({ occupation: res.data.user.occupation});
                    }
                    if (res.data.user.employer != null) {
                        this.setState({ employer: res.data.user.employer});
                    }
                    if (res.data.user.designation != null) {
                        this.setState({ designation: res.data.user.designation});
                    }
                    if (res.data.user.hobbies != null) {
                        this.setState({ hobbies: res.data.user.hobbies});
                    }

                    if (res.data.user.currentLiving != null) {
                        this.setState({ currentLiving: res.data.user.currentLiving});
                    }
                    if (res.data.user.resident != null) {
                        this.setState({ resident: res.data.user.resident});
                    }
                    if (res.data.user.idnumber != null) {
                        this.setState({ idnumber: res.data.user.idnumber});
                    }
                    if (res.data.user.passport != null) {
                        this.setState({ passport: res.data.user.passport});
                    }


                    if (res.data.user.country != null) {
                        this.setState({ basiccountry: res.data.user.country });
                    }
                    if (res.data.user.status == "verified") {
                        this.removeVerifyEmail();
                    }
                    if (res.data.user.img != null) {
                        // this.setState({ profileimage: res.data.user.img });
                    }
                }
                if (res.data.fname != null) {
                    this.setState({ fname: res.data.fname });
                }
                if (res.data.lname != null) {
                    this.setState({ lname: res.data.lname });
                }
                if (res.data.addresno != null) {
                    this.setState({ number: res.data.addresno });
                }
                if (res.data.country != null) {
                    this.setState({ country: res.data.country });
                }
                if (res.data.street != null) {
                    this.setState({ street: res.data.street });
                }
                if (res.data.city != null) {
                    this.setState({ city: res.data.city });
                }
                if (res.data.postal != null) {
                    this.setState({ postalcode: res.data.postal });
                }
                if (res.data.currency != null) {
                    this.setState({ currency: res.data.currency });
                }
                if (res.data.p_pay != null) {
                    this.setState({ paypalpay: res.data.p_pay });
                }
                if (res.data.region != null) {
                    this.setState({ stateorregion: res.data.region });
                }


                // if (this.state.profileimage == "") {
                //     this.setState({ profileimage: "assets\\images\\icons\\userii.jpg" });
                // }
            });

            userServices.getProfileCompletion(user).then(res => {
                if (res.data === "compeleted") {
                    this.setState({
                        completeper: 100,
                        notcompleteper: 0
                    });
                } else {
                    var comp = res.data.split("Your profile is ")[1].split("% completed.")[0];
                    var comp2=(parseInt(comp)/200)*100;

                    this.setState({
                        completeper: parseInt(comp2),
                        notcompleteper: (100 - comp2),
                        prearningtotal:comp
                    });
                  
                }
            });
            userServices.getEarnedPoints(user).then(res => {
                if (res.data.email != null) {
                    if (isNaN(res.data.email)) {
                        this.setState({ premail: res.data.email });
                    } else {
                        this.setState({ premail: "Not Selected" });
                    }
                }
                if (res.data.mobile != null) {
                    this.setState({ prmobile: res.data.mobile });
                }
                if (res.data.points != null) {
                    this.setState({ prearningtotal: res.data.points });
                }
                if (res.data.url != null) {
                    // alert(res.data.url)
                }
            });

        } else {
            this.props.history.push('/login');
        }
    }

    changeThumbnail = e => {

        this.setState({ thumbnail: e.target.files });
        let upload = { thumbnail: e.target.files }
        userServices.uploadProfile(Cookies.get('user'), e.target.files[0], (event) => {
            this.setState({
                progress: Math.round((100 * event.loaded) / event.total),
            });
        })
            .then(res => {
                if (res.data != "Failed to upload profile image") {
                    this.setState({ profileimage: "data:image/png;base64," + res.data.picByte });
                    var user = Cookies.get('user');
                    userServices.getProfileCompletion(user).then(res => {
                        if (res.data === "compeleted") {
                            this.setState({
                                completeper: 100,
                                notcompleteper: 0
                            });
                        } else {
                            var comp = res.data.split("Your profile is ")[1].split("% completed.")[0];
                            var comp2=(parseInt(comp)/200)*100;
                            this.setState({
                                completeper: parseInt(comp2),
                                notcompleteper: (100 - comp2),
                                prearningtotal:comp
                            });
                         
                        }
                    });
                    userServices.getEarnedPoints(user).then(res => {
                        if (res.data.email != null) {
                            if (isNaN(res.data.email)) {
                                this.setState({ premail: res.data.email });
                            } else {
                                this.setState({ premail: "Not Selected" });
                            }
                        }
                        if (res.data.mobile != null) {
                            this.setState({ prmobile: res.data.mobile });
                        }
                        if (res.data.points != null) {
                            this.setState({ prearningtotal: res.data.points });
                        }
                        if (res.data.url != null) {
                            // alert(res.data.url)
                        }
                    });
                }
            })
            .catch(() => {
                this.setState({
                    progress: 0,
                    message: "Could not upload the file!",
                    currentFile: undefined,
                });
            });
    };

    // onImageChange = event => {
    //     if (event.target.files && event.target.files[0]) {
    //         let img = event.target.files[0];
    //         this.setState({
    //             profileimage: URL.createObjectURL(img)
    //         });
    //         const formData = new FormData();
    //         formData.append(
    //             "myFile",
    //             img
    //         );
    //         userServices.uploadProfile(Cookies.get('user'),formData).then(res => {
    //         });
    //     }
    // };

    // onChange = date => this.setState({ date })

    // handleChange(value, e) {

    // }

    // handleDropdownChange(event) {
    //     this.setState({ selectValue: event.target.value });
    // }
    contactInfo = (e) => {
        e.preventDefault();
        let user = { fname: this.state.c_fname, lname: this.state.c_lname, mobile: parseInt(this.state.mobile), whatsapp: parseInt(this.state.whatsapp) , viber: parseInt(this.state.viber), teligram: parseInt(this.state.teligram), wechat: this.state.wechat, wechat: this.state.wechat,fbplink:this.state.fbplink,age:this.state.age   ,addresLine1:this.state.addresLine1,addresLine2:this.state.addresLine2,resizipcode:this.state.resizipcode,residistrict:this.state.residistrict,resiprovince:this.state.resiprovince,resinetialcountry:this.state.resinetialcountry}

        userServices.updateUser(user, Cookies.get('user')).then(res => {
            toast('Successfully Updated', { position: 'bottom' });
            this.props.history.push('/profile');
            var user = Cookies.get('user');
            userServices.getProfileCompletion(user).then(res => {
                if (res.data === "compeleted") {
                    this.setState({
                        completeper: 100,
                        notcompleteper: 0
                    });
                } else {
                    var comp = res.data.split("Your profile is ")[1].split("% completed.")[0];
                    var comp2=(parseInt(comp)/200)*100;
                    this.setState({
                        completeper: parseInt(comp2),
                        notcompleteper: (100 - comp2),
                        prearningtotal:comp
                    });

                  
                }
            });
            userServices.getEarnedPoints(user).then(res => {
                if (res.data.email != null) {
                    if (isNaN(res.data.email)) {
                        this.setState({ premail: res.data.email });
                    } else {
                        this.setState({ premail: "Not Selected" });
                    }
                }
                if (res.data.mobile != null) {
                    this.setState({ prmobile: res.data.mobile });
                }
                if (res.data.points != null) {
                    this.setState({ prearningtotal: res.data.points });
                }
                if (res.data.url != null) {
                    // alert(res.data.url)
                }
            });
        });
    }

    changeEmail = () => {
        let user = { email: this.state.email }

        userServices.updateUser(user, Cookies.get('user')).then(res => {
            if (res.data.id != null) {
                toast('Verification email sent. Please check your email.', { position: 'bottom' });
                this.props.history.push('/profile');
                var user = Cookies.get('user');
                userServices.getProfileCompletion(user).then(res => {
                    if (res.data === "compeleted") {
                        this.setState({
                            completeper: 100,
                            notcompleteper: 0
                        });
                    } else {
                        var comp = res.data.split("Your profile is ")[1].split("% completed.")[0];
                        var comp2=(parseInt(comp)/200)*100;
                        this.setState({
                            completeper: parseInt(comp2),
                            notcompleteper: (100 - comp2),
                            prearningtotal:comp
                        });
                     
                    }
                });
                userServices.getEarnedPoints(user).then(res => {
                    if (res.data.email != null) {
                        if (isNaN(res.data.email)) {
                            this.setState({ premail: res.data.email });
                        } else {
                            this.setState({ premail: "Not Selected" });
                        }
                    }
                    if (res.data.mobile != null) {
                        this.setState({ prmobile: res.data.mobile });
                    }
                    if (res.data.points != null) {
                        this.setState({ prearningtotal: res.data.points });
                    }
                    if (res.data.url != null) {
                        // alert(res.data.url)
                    }
                });
            } else {
                toast('This email already in use. Please use different one', { position: 'bottom' });
                this.setState({ email: res.data });
            }

        });

    }

    paymentReceiver = (e) => {

        let user = { p_fname: this.state.fname, p_lname: this.state.lname, p_street: this.state.street, p_number: this.state.number, p_postal: this.state.postalcode, p_city: this.state.city, p_region: this.state.stateorregion, p_country: this.state.country, p_currency: this.state.currency, p_pay: this.state.paypalpay }

        userServices.updateUser(user, Cookies.get('user')).then(res => {
            toast('Successfully Updated', { position: 'bottom' });
            this.props.history.push('/profile');
            var user = Cookies.get('user');
            userServices.getProfileCompletion(user).then(res => {
                if (res.data === "compeleted") {
                    this.setState({
                        completeper: 100,
                        notcompleteper: 0
                    });
                } else {
                    var comp = res.data.split("Your profile is ")[1].split("% completed.")[0];
                    var comp2=(parseInt(comp)/200)*100;
                    this.setState({
                        completeper: parseInt(comp2),
                        notcompleteper: (100 - comp2),
                        prearningtotal:comp
                    });
                
                }
            });
            userServices.getEarnedPoints(user).then(res => {
                if (res.data.email != null) {
                    if (isNaN(res.data.email)) {
                        this.setState({ premail: res.data.email });
                    } else {
                        this.setState({ premail: "Not Selected" });
                    }
                }
                if (res.data.mobile != null) {
                    this.setState({ prmobile: res.data.mobile });
                }
                if (res.data.points != null) {
                    this.setState({ prearningtotal: res.data.points });
                }
                if (res.data.url != null) {
                    // alert(res.data.url)
                }
            });
        });
    }

    basicInfo = (e) => {
        let user = { country: this.state.basiccountry,age:this.state.age, gender: this.state.gender, dob: this.state.dob, currentLiving: this.state.currentLiving, resident: this.state.resident, idnumber: this.state.idnumber, passport: this.state.passport }

        userServices.updateUser(user, Cookies.get('user')).then(res => {
            toast('Successfully Updated', { position: 'bottom' });
            this.props.history.push('/profile');
            var user = Cookies.get('user');
            userServices.getProfileCompletion(user).then(res => {
                if (res.data === "compeleted") {
                    this.setState({
                        completeper: 100,
                        notcompleteper: 0
                    });
                } else {
                    var comp = res.data.split("Your profile is ")[1].split("% completed.")[0];
                    var comp2=(parseInt(comp)/200)*100;
                    this.setState({
                        completeper: parseInt(comp2),
                        notcompleteper: (100 - comp2),
                        prearningtotal:comp
                    });
                  
                }
            });
            userServices.getEarnedPoints(user).then(res => {
                if (res.data.email != null) {
                    if (isNaN(res.data.email)) {
                        this.setState({ premail: res.data.email });
                    } else {
                        this.setState({ premail: "Not Selected" });
                    }
                }
                if (res.data.mobile != null) {
                    this.setState({ prmobile: res.data.mobile });
                }
                if (res.data.points != null) {
                    this.setState({ prearningtotal: res.data.points });
                }
                if (res.data.url != null) {
                    // alert(res.data.url)
                }
            });
        });
    }

    experience = (e) => {
        let user = { specialization: this.state.specialization, education: this.state.education, university: this.state.university, collage: this.state.collage }

        userServices.updateUser(user, Cookies.get('user')).then(res => {
            toast('Successfully Updated', { position: 'bottom' });
            this.props.history.push('/profile');
            var user = Cookies.get('user');
            userServices.getProfileCompletion(user).then(res => {
                if (res.data === "compeleted") {
                    this.setState({
                        completeper: 100,
                        notcompleteper: 0
                    });
                } else {
                    var comp = res.data.split("Your profile is ")[1].split("% completed.")[0];
                    var comp2=(parseInt(comp)/200)*100;
                    this.setState({
                        completeper: parseInt(comp2),
                        notcompleteper: (100 - comp2),
                        prearningtotal:comp
                    });
                 
                }
            });
            userServices.getEarnedPoints(user).then(res => {
                if (res.data.email != null) {
                    if (isNaN(res.data.email)) {
                        this.setState({ premail: res.data.email });
                    } else {
                        this.setState({ premail: "Not Selected" });
                    }
                }
                if (res.data.mobile != null) {
                    this.setState({ prmobile: res.data.mobile });
                }
                if (res.data.points != null) {
                    this.setState({ prearningtotal: res.data.points });
                }
                if (res.data.url != null) {
                    // alert(res.data.url)
                }
            });
        });
    }

    otherDetails = (e) => {
        let user = { occupation: this.state.occupation, employer: this.state.employer, designation: this.state.designation, hobbies: this.state.hobbies }

        userServices.updateUser(user, Cookies.get('user')).then(res => {
            toast('Successfully Updated', { position: 'bottom' });
            this.props.history.push('/profile');
            var user = Cookies.get('user');
            userServices.getProfileCompletion(user).then(res => {
                if (res.data === "compeleted") {
                    this.setState({
                        completeper: 100,
                        notcompleteper: 0
                    });
                } else {
                    var comp = res.data.split("Your profile is ")[1].split("% completed.")[0];
                    var comp2=(parseInt(comp)/200)*100;
                    this.setState({
                        completeper: parseInt(comp2),
                        notcompleteper: (100 - comp2),
                        prearningtotal:comp
                    });
                  
                }
            });
            userServices.getEarnedPoints(user).then(res => {
                if (res.data.email != null) {
                    if (isNaN(res.data.email)) {
                        this.setState({ premail: res.data.email });
                    } else {
                        this.setState({ premail: "Not Selected" });
                    }
                }
                if (res.data.mobile != null) {
                    this.setState({ prmobile: res.data.mobile });
                }
                if (res.data.points != null) {
                    this.setState({ prearningtotal: res.data.points });
                }
                if (res.data.url != null) {
                    // alert(res.data.url)
                }
            });
        });
    }


    removeVerifyEmail = (e) => {
        var emaildiv = document.getElementById("verifyemaildiv");
        emaildiv.setAttribute("style", "display:none");
    }


    sendEmail = (e) => {
        userServices.sendVerificationEmail(Cookies.get('user')).then(res => {
            if (res.data === "success") {
                toast('Email sent. Check your inbox', { position: 'bottom' });
            } else {
                toast('Something went wrong. Contact support', { position: 'bottom' });
            }
        });
    }

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

    changeEmailText = e => {
        this.setState({ email: e.target.value });
    };

    changeFirstName = e => {
        this.setState({ fname: e.target.value });
    };

    changeLastName = e => {
        this.setState({ lname: e.target.value });
    };

    changeStreet = e => {
        this.setState({ street: e.target.value });
    };

    changeNumber = e => {
        this.setState({ number: e.target.value });
    };

    changePostalCOde = e => {
        this.setState({ postalcode: e.target.value });
    };

    changeCity = e => {
        this.setState({ city: e.target.value });
    };

    changeregion = e => {
        this.setState({ stateorregion: e.target.value });
    };

    changeCountry = e => {
        this.setState({ country: e.target.value });
    };

    changeCurrency = e => {
        this.setState({ currency: e.target.value });
    };

    changePaypalpay = e => {
        this.setState({ paypalpay: e.target.value });
    };

    changeContactFName = e => {
        this.setState({ c_fname: e.target.value });
    };

    changeContactLName = e => {
        this.setState({ c_lname: e.target.value });
    };

    changemobile = e => {
        this.setState({ mobile: e.target.value });
    };
    changwhatsapp = e => {
        this.setState({ whatsapp: e.target.value });
    };
    changeviber = e => {
        this.setState({ viber: e.target.value });
    };
    changeteligram = e => {
        this.setState({ teligram: e.target.value });
    };
    changewechat = e => {
        this.setState({ wechat: e.target.value });
    };
    changefbplink = e => {
        this.setState({ fbplink: e.target.value });
    };

    changeAddressLine1 = e => {
        this.setState({ addresLine1: e.target.value });
    };
    changeAddressLine2 = e => {
        this.setState({ addresLine2: e.target.value });
    };
    changeResidentialZipCode = e => {
        this.setState({ resizipcode: e.target.value });
    };
    changeResidentalDistrict = e => {
        this.setState({ residistrict: e.target.value });
    };
    changeResidetialProvince = e => {
        this.setState({ resiprovince: e.target.value });
    };
    changeResidentialCountry = e => {
        this.setState({ resinetialcountry: e.target.value });
    };




    changeBasicCountry = e => {
        this.setState({ basiccountry: e.target.value });
    };

    changeGender = e => {
        this.setState({ gender: e.target.value });
    };


    changeCurrentLiving = e => {
        this.setState({ currentLiving: e.target.value });
    };
    changeResident = e => {
        this.setState({ resident: e.target.value });
    };
    changeIDNumber = e => {
        this.setState({ idnumber: e.target.value });
    };
    changePassport = e => {
        this.setState({ passport: e.target.value });
    };

    changeDOB = e => {
        const startDate = moment(e.target.value);
        const timeEnd = moment(_current_year);
        const diff = timeEnd.diff(startDate);
        const diffDuration = moment.duration(diff);
    
        this.setState({ 
            dob: e.target.value,
            age:diffDuration.years(),
        });
    };
    changeAge = e => {
        this.setState({ age: e.target.value });
    };


    changeSpecialization = e => {
        this.setState({ specialization: e.target.value });
    };

    changeEducation = e => {
        this.setState({ education: e.target.value });
    };
    changeUniversity = e => {
        this.setState({ university: e.target.value });
    };

    changeCollage = e => {
        this.setState({ collage: e.target.value });
    };

    changeOccupation = e => {
        this.setState({ occupation: e.target.value });
    };
    changeEmployer = e => {
        this.setState({ employer: e.target.value });
    };
    changeDesignation = e => {
        this.setState({ designation: e.target.value });
    };
    changeHobbies = e => {
        this.setState({ hobbies: e.target.value });
    };


    // uploadImages = e => {

    //     return fileSelect({
    //         maxFileSize: 1024 * 1024 * 10,
    //         multiple: false,
    //         accept: 'image/*'
    //     }).then((images) => {


    //         if (images != null) {
    //             this.setState({ profileimage: images });
    //             alert(this.state.profileimage.name)
    //             // this.changeImage(images);
    //         }
    //         // return req.post('/api/uploadimage').attach('image', image);

    //     })
    // }


    render() {


        return (
            <div style={{ backgroundColor: "white" }}>
                <Helmet>
                    <link rel="stylesheet" href="/assets/home-css.css"></link>
                    <link type="text/css" rel="stylesheet" href="/assets/css/app69fd.css?id=d97cc8504a674a3a9f71" />
                    <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/assets/fonts/font-awesome.min.css" />
                    <link rel="stylesheet" href="/assets/css/Icon-Button.css" />
                    <link rel="stylesheet" href="/assets/assets/css/Footer-Dark.css" />
                    <link rel="stylesheet" href="/assets/assets/css/styles.css" />
                    <link rel="stylesheet" href="/assets/assets/fonts/ionicons.min.css" />
                </Helmet>
                <div style={{ marginLeft: "2%", marginRight: "2%" }}>
                    <div style={{ marginTop: "5%" }}>
                        <header class="header" style={{ padding: "0 20px", backgroundColor: "#f9f9f9", boxShadow: "0 4px 4px rgba(0,0,0,.05)" }}>

                            <section class="container header__inner">

                                <div class="header__left">
                                    <a href="/userhome">
                                        <img src="/assets/webicon.png" style={{ width: "161px" }} alt="Emoneytag" title="Emoneytag" />
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
                    </div>
                    <br></br><br></br><br></br>
                    <div class="card">
                        <div class="row">
                            <div class="col-sm-4"><br></br>



                                <h4 class="card-title">User Profile</h4>




                                <table style={{ marginLeft: "50px" , }} >

                                    <tr style={{ textAlign: "left" }}>
                                        <td>E-mail</td>&nbsp;&nbsp;&nbsp;:&nbsp;
  <td>{this.state.premail}</td>

                                    </tr><br/>
                                    <tr style={{ textAlign: "left" }}>
                                        <td>Contact No</td>&nbsp;&nbsp;&nbsp;:&nbsp;
  <td>{this.state.prmobile}</td>

                                    </tr><br/>
                                    <tr style={{ textAlign: "left" }}>
                                        <td>Earned Points</td>&nbsp;&nbsp;&nbsp;:&nbsp;
  <td>{this.state.prearningtotal}</td>

                                    </tr><br/>
                                </table>


                                {/* <h6 class="text-muted card-subtitle mb-2">{this.state.profilecomplete}</h6><span>E-mail</span>
                                <h5 class="card-title">{this.state.premail}</h5><span>Contact no</span>
                                <h5 class="card-title">{this.state.prmobile}</h5><span>Earned Points</span>
                                <h5 class="card-title">{this.state.prearningtotal}</h5> */}
                            </div>
                            <div class="col-sm-4" ><br></br>


                                <h4 class="card-title" >Profile Strength</h4>
                                {
                                    this.state.notcompleteper<49?
                                    <sub style={{color:'red',margin:-5}}>{ Math.round(this.state.notcompleteper* 100)/100} % to be complete to earn $0.25</sub>
                                    :
                                   null
                                }
                               
                                <Chart

                                    chartType="PieChart"
                                    loader={<div>Profile Strength</div>}
                                    data={[
                                        ['Task', 'Profile Completion'],
                                        ['Complete', this.state.completeper],
                                        ['Uncomplete', this.state.notcompleteper],

                                    ]}
                                    options={{
                                        title: '',
                                        marginTop:-5
                                    }}
                                    rootProps={{ 'data-testid': '1' }}
                                />

                            </div>
                            <div class="col-sm-4" style={{ textAlign: "center" }}><br></br>
                                <h4 class="card-title">Profile Image</h4>
                                <img style={{ width: "30%", marginLeft: "30%" }} src={this.state.profileimage}></img><br/>
                                {/* /////////////////////new upload iamge/////////////// */}
                                <div class="input-group mb-3">
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="inputGroupFile01" accept="image/*" name="myImage" onChange={this.changeThumbnail} />
                                        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                                    </div>
                                </div>


                                {/* <img style={{ width: "35%", height: "35%", marginLeft: "30%" }} alt="img" src="assets\images\icons\userii.jpg"></img>
                                <img style={{ width: "35%", height: "35%", marginLeft: "30%" }} alt="img" src={this.state.profileimage}></img>
                                <input type="file" accept="image/*" name="myImage" onChange={this.changeThumbnail} /> */}
                                {/* <button class="btn btn-outline-primary icon-button" onClick={this.uploadImages} type="button" style={{ width: "15%", marginTop: "10px", marginLeft: "39%" }}><i class="fa fa-camera"></i></button> */}
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">



                            <div id="verifyemaildiv" class="card" style={{ marginRight: "20px", marginBottom: "10px", marginTop: "3%", marginLeft: "20px", backgroundColor: "white" }}>
                                <h4 style={{ marginLeft: "10px", marginTop: "10px", fontSize: "26px" }}>Verify Your Email:</h4>
                                <h6 style={{ marginLeft: "10px", marginTop: "15px" }}>Go to your mail and click the activation link. If you didn't receive any messages from us, click on the button next to.</h6>
                                <button class="btn btn-success" type="button" style={{ marginLeft: "8%", marginBottom: "10px", marginTop: "20px", width: "80%" }} onClick={this.sendEmail}>SEND ACTIVATION LINK</button>
                            </div>

                            <div class="card" style={{ marginTop: "10px", marginLeft: "20px", marginRight: "20px", backgroundColor: "white" }}>
                                <div class="card-body">
                                    <h4 class="card-title" style={{ marginTop: "10px", fontSize: "26px" }}>Change Email</h4>
                                    <h6 class="text-muted card-subtitle mb-2" style={{ marginTop: "10px" }}>Email</h6>
                                    <input class="border rounded" type="email" id="email" value={this.state.email} onChange={this.changeEmailText} style={{ width: "75%", opacity: "1", filter: "blur(0px) brightness(92%) contrast(124%) grayscale(0%) hue-rotate(0deg) invert(0%)", marginTop: "10px", paddingTop: "1%", paddingBottom: "1%", paddingLeft: "1%" }} placeholder="user@example.com" />
                                    <button class="btn btn-info" type="button" style={{ margin: "10px" }} onClick={this.changeEmail}>Save</button>
                                </div>
                                {/* <div><p style={{color:"red"}}>*You requested email change. Please login to your email and confirm.</p></div> */}
                                <div><p style={{ color: "red" }}>{this.state.emailchange}</p></div>
                            </div>
                            <div style={{ backgroundColor: "white" }}>
                                <div class="card" style={{ marginLeft: "20px", marginRight: "20px", marginBottom: "20px", marginTop: "20px", }}>
                                    <div style={{ margin: "20px", backgroundColor: "white" }}>
                                        <div class="form-row">
                                            <div class="col-sm-12">
                                                <div class="form-group"><h4 style={{ fontSize: "26px", marginTop: "10px", }}>Payment Receiver(Needed when cash out)</h4></div>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                                <sub style={{ fontSize: "13px" }}>First Name</sub>
                                                <div class="form-group" ><input class="form-control" type="text" value={this.state.fname} onChange={this.changeFirstName} style={{ width: "100%", marginTop: "10px" }} placeholder="First name" /></div>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-6">
                                                <sub style={{ fontSize: "13px" }}>Last Name</sub>
                                                <div class="form-group" ><input class="form-control" type="text" value={this.state.lname} onChange={this.changeLastName} style={{ width: "100%", marginTop: "10px" }} placeholder="Last name" /></div>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="col-12 col-sm-12 col-md-6">
                                                <sub style={{ fontSize: "13px" }}>Number</sub>
                                                <div class="form-group" ><input class="form-control" type="text" value={this.state.number} onChange={this.changeNumber} style={{ width: "100%", marginTop: "10px" }} placeholder="Number" /></div>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px" }}>
                                                <sub style={{ fontSize: "13px" }}>Street</sub>
                                                <div class="form-group" ><input class="form-control" type="text" value={this.state.street} onChange={this.changeStreet} style={{ width: "100%", marginTop: "10px" }} placeholder="Street" /></div>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px" }}>
                                                <sub style={{ fontSize: "13px" }}>Postal Code</sub>
                                                <div class="form-group" ><input class="form-control" type="text" value={this.state.postalcode} onChange={this.changePostalCOde} style={{ width: "100%", marginTop: "10px" }} placeholder="Postal Code" /></div>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-6">
                                                <sub style={{ fontSize: "13px" }}>City</sub>
                                                <div class="form-group" ><input class="form-control" type="text" value={this.state.city} onChange={this.changeCity} style={{ width: "100%", marginTop: "10px" }} placeholder="City" /></div>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px" }}>
                                                <sub style={{ fontSize: "13px" }}>State Or Region</sub>
                                                <div class="form-group" style={{ width: "100%", marginTop: "10px" }}><input class="form-control" type="text" value={this.state.stateorregion} onChange={this.changeregion} placeholder="State or region" /></div>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px" }}>
                                                <sub style={{ fontSize: "13px" }}>Country</sub>
                                                <div class="form-group" style={{ width: "100%", marginTop: "10px" }}>
                                                    {/* <input class="form-control" type="text" value={this.state.country} onChange={this.changeCountry} placeholder="Country" /> */}
                                                    <select class="form-control" value={this.state.country} onChange={this.changeCountry} >
                                                        <option>--Select--</option>
                                                        <option value="AF">Afghanistan</option>
                                                        <option value="AM">Armenia</option>
                                                        <option value="AZ">Azerbaijan</option>
                                                        <option value="BH">Bahrain</option>
                                                        <option value="BD">Bangladesh</option>
                                                        <option value="BT">Bhutan</option>
                                                        <option value="IO">British Indian Ocean Territory</option>
                                                        <option value="BN">Brunei Darussalam</option>
                                                        <option value="KH">Cambodia</option>
                                                        <option value="CN">China</option>
                                                        <option value="CX">Christmas Island</option>
                                                        <option value="CC">Cocos (Keeling) Islands</option>
                                                        <option value="GE">Georgia</option>
                                                        <option value="HK">Hong Kong</option>
                                                        <option value="IN">India</option>
                                                        <option value="ID">Indonesia</option>
                                                        <option value="IR">Iran</option>
                                                        <option value="IQ">Iraq</option>
                                                        <option value="IL">Israel</option>
                                                        <option value="JP">Japan</option>
                                                        <option value="JO">Jordan</option>
                                                        <option value="KZ">Kazakhstan</option>
                                                        <option value="KP">Korea, Democratic People's Republic of</option>
                                                        <option value="KR">Korea, Republic of</option>
                                                        <option value="KW">Kuwait</option>
                                                        <option value="KG">Kyrgyzstan</option>
                                                        <option value="LA">Lao</option>
                                                        <option value="LB">Lebanon</option>
                                                        <option value="MY">Malaysia</option>
                                                        <option value="MV">Maldives</option>
                                                        <option value="MN">Mongolia</option>
                                                        <option value="MM">Myanmar (Burma)</option>
                                                        <option value="NP">Nepal</option>
                                                        <option value="OM">Oman</option>
                                                        <option value="PK">Pakistan</option>
                                                        <option value="PH">Philippines</option>
                                                        <option value="QA">Qatar</option>
                                                        <option value="RU">Russian Federation</option>
                                                        <option value="SA">Saudi Arabia</option>
                                                        <option value="SG">Singapore</option>
                                                        <option value="LK">Sri Lanka</option>
                                                        <option value="SY">Syria</option>
                                                        <option value="TW">Taiwan</option>
                                                        <option value="TJ">Tajikistan</option>
                                                        <option value="TH">Thailand</option>
                                                        <option value="TP">East Timor</option>
                                                        <option value="TM">Turkmenistan</option>
                                                        <option value="AE">United Arab Emirates</option>
                                                        <option value="UZ">Uzbekistan</option>
                                                        <option value="VN">Vietnam</option>
                                                        <option value="YE">Yemen</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px" }}>
                                                <sub style={{ fontSize: "13px" }}>Currency</sub>
                                                <div class="form-group" style={{ width: "100%", marginTop: "10px" }}>
                                                    {/* <input class="form-control" type="text" value={this.state.currency} onChange={this.changeCurrency} placeholder="Currency" /> */}
                                                    <select class="form-control" id="currency" name="currency" value={this.state.currency} onChange={this.changeCurrency}>
                                                        <option >--Select--</option>
                                                        <option value="AFA">Afghan Afghani</option>
                                                        <option value="AMD">Armenian Dram</option>
                                                        <option value="AZN">Azerbaijani Manat</option>
                                                        <option value="BHD">Bahraini Dinar</option>
                                                        <option value="BDT">Bangladeshi Taka</option>
                                                        <option value="BTN">Bhutanese Ngultrum</option>
                                                        <option value="BND">Brunei Dollar</option>
                                                        <option value="KHR">Cambodian Riel</option>
                                                        <option value="CNY">Chinese Yuan</option>
                                                        <option value="GEL">Georgian Lari</option>
                                                        <option value="HKD">Hong Kong Dollar</option>
                                                        <option value="INR">Indian Rupee</option>
                                                        <option value="IDR">Indonesian Rupiah</option>
                                                        <option value="IRR">Iranian Rial</option>
                                                        <option value="IQD">Iraqi Dinar</option>
                                                        <option value="ILS">Israeli New Sheqel</option>
                                                        <option value="JPY">Japanese Yen</option>
                                                        <option value="JOD">Jordanian Dinar</option>
                                                        <option value="KZT">Kazakhstani Tenge</option>
                                                        <option value="KWD">Kuwaiti Dinar</option>
                                                        <option value="KGS">Kyrgystani Som</option>
                                                        <option value="LAK">Laotian Kip</option>
                                                        <option value="LBP">Lebanese Pound</option>
                                                        <option value="MOP">Macanese Pataca</option>
                                                        <option value="MYR">Malaysian Ringgit</option>
                                                        <option value="MVR">Maldivian Rufiyaa</option>
                                                        <option value="MNT">Mongolian Tugrik</option>
                                                        <option value="NPR">Nepalese Rupee</option>
                                                        <option value="KPW">North Korean Won</option>
                                                        <option value="OMR">Omani Rial</option>
                                                        <option value="PKR">Pakistani Rupee</option>
                                                        <option value="PHP">Philippine Peso</option>
                                                        <option value="QAR">Qatari Rial</option>
                                                        <option value="SAR">Saudi Riyal</option>
                                                        <option value="SGD">Singapore Dollar</option>
                                                        <option value="KRW">South Korean Won</option>
                                                        <option value="LKR">Sri Lankan Rupee</option>
                                                        <option value="SYP">Syrian Pound</option>
                                                        <option value="TJS">Tajikistani Somoni</option>
                                                        <option value="THB">Thai Baht</option>
                                                        <option value="TRY">Turkish Lira</option>
                                                        <option value="TMT">Turkmenistani Manat</option>
                                                        <option value="USD">US Dollar</option>
                                                        <option value="UZS">Uzbekistan Som</option>
                                                        <option value="VND">Vietnamese Dong</option>
                                                        <option value="YER">Yemeni Rial</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px" }}>
                                                <sub style={{ fontSize: "13px" }}>Paypal Email or PayerID</sub>
                                                <div class="form-group" style={{ width: "100%", marginTop: "10px" }}><input class="form-control" type="text" value={this.state.paypalpay} onChange={this.changePaypalpay} placeholder="Paypal Email Or PayerID" /></div>
                                            </div>
                                        </div>

                                        <div class="form-row" style={{ marginTop: "10px", marginBottom: "10px" }}>
                                            <div class="col-sm-3" style={{ width: "477.5px" }}>
                                                <div class="form-group" style={{ width: "100%" }}><button class="btn btn-success" type="button" style={{ marginLeft: "10%" }} onClick={this.paymentReceiver}>Save</button></div>
                                            </div>
                                        </div>


                                    </div>


                                </div>
                            </div>

                            <div class="card" style={{ marginLeft: "20px", marginRight: "20px", marginBottom: "20px", marginTop: "20px" }}>
                                <form style={{ margin: "20px" }}>
                                    <div class="form-row">
                                        <div class="col-sm-12">
                                            <div class="form-group"><h4 style={{ fontSize: "26px", marginTop: "10px" }}>Contact Details</h4></div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>First Name</sub>
                                                <input class="form-control" type="text" id="fname" value={this.state.c_fname} onChange={this.changeContactFName} style={{ width: "100%", marginTop: "10px" }} placeholder="First name" /></div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-6">
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>Last Name</sub>
                                                <input class="form-control" id="lname" type="text" value={this.state.c_lname} onChange={this.changeContactLName} style={{ width: "100%", marginTop: "10px" }} placeholder="Last name" /></div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>Mobile Number</sub>
                                                <input class="form-control" type="text" id="mobile" value={this.state.mobile} onChange={this.changemobile} style={{ width: "100%", marginTop: "10px" }} placeholder="Mobile Number" /></div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>WhatsApp Number</sub>
                                                <input class="form-control" type="text" id="whatsapp" value={this.state.whatsapp} onChange={this.changwhatsapp} style={{ width: "100%", marginTop: "10px" }} placeholder="WhatsApp Number" /></div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>Viber Number</sub>
                                                <input class="form-control" type="text" id="viber" value={this.state.viber} onChange={this.changeviber} style={{ width: "100%", marginTop: "10px" }} placeholder="Viber Number" /></div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>Tele grame Number</sub>
                                                <input class="form-control" type="text" id="telegramme" value={this.state.teligram} onChange={this.changeteligram} style={{ width: "100%", marginTop: "10px" }} placeholder="Tele grame Number" /></div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>WeChat Id</sub>
                                                <input class="form-control" type="text" id="wechat" value={this.state.wechat} onChange={this.changewechat} style={{ width: "100%", marginTop: "10px" }} placeholder="WeChat ID" /></div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>Facebook Profile Link</sub>
                                                <input class="form-control" type="text" id="fbplink" value={this.state.fbplink} onChange={this.changefbplink} style={{ width: "100%", marginTop: "10px" }} placeholder="Facebook Profile Link" /></div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-sm-12">
                                            <div class="form-group"><h4 style={{ fontSize: "13px", margin: "-5px" }}>Resident  Address</h4></div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>Address Line 1</sub>
                                                <input class="form-control" type="text" id="fbplink" value={this.state.addresLine1} onChange={this.changeAddressLine1} style={{ width: "100%", marginTop: "10px" }} placeholder="Address Line 1" /></div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>Address Line 2</sub>
                                                <input class="form-control" type="text" id="fbplink" value={this.state.addresLine2} onChange={this.changeAddressLine2} style={{ width: "100%", marginTop: "10px" }} placeholder="Address Line 1" /></div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>Zip Code</sub>
                                                <input class="form-control" type="text" id="wechat" value={this.state.resizipcode} onChange={this.changeResidentialZipCode} style={{ width: "100%", marginTop: "10px" }} placeholder="Zip Code" /></div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>District</sub>
                                                <input class="form-control" type="text" id="fbplink" value={this.state.residistrict} onChange={this.changeResidentalDistrict} style={{ width: "100%", marginTop: "10px" }} placeholder="District" /></div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>Province</sub>
                                                <input class="form-control" type="text" id="wechat" value={this.state.resiprovince} onChange={this.changeResidetialProvince} style={{ width: "100%", marginTop: "10px" }} placeholder="Province" /></div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>Country</sub>
                                                <div class="form-group" style={{ width: "100%", marginTop: "10px" }}>
                                                <select class="form-control" value={this.state.resinetialcountry} onChange={this.changeResidentialCountry} >
                                                        <option>--Select--</option>
                                                        <option value="AF">Afghanistan</option>
                                                        <option value="AM">Armenia</option>
                                                        <option value="AZ">Azerbaijan</option>
                                                        <option value="BH">Bahrain</option>
                                                        <option value="BD">Bangladesh</option>
                                                        <option value="BT">Bhutan</option>
                                                        <option value="IO">British Indian Ocean Territory</option>
                                                        <option value="BN">Brunei Darussalam</option>
                                                        <option value="KH">Cambodia</option>
                                                        <option value="CN">China</option>
                                                        <option value="CX">Christmas Island</option>
                                                        <option value="CC">Cocos (Keeling) Islands</option>
                                                        <option value="GE">Georgia</option>
                                                        <option value="HK">Hong Kong</option>
                                                        <option value="IN">India</option>
                                                        <option value="ID">Indonesia</option>
                                                        <option value="IR">Iran</option>
                                                        <option value="IQ">Iraq</option>
                                                        <option value="IL">Israel</option>
                                                        <option value="JP">Japan</option>
                                                        <option value="JO">Jordan</option>
                                                        <option value="KZ">Kazakhstan</option>
                                                        <option value="KP">Korea, Democratic People's Republic of</option>
                                                        <option value="KR">Korea, Republic of</option>
                                                        <option value="KW">Kuwait</option>
                                                        <option value="KG">Kyrgyzstan</option>
                                                        <option value="LA">Lao</option>
                                                        <option value="LB">Lebanon</option>
                                                        <option value="MY">Malaysia</option>
                                                        <option value="MV">Maldives</option>
                                                        <option value="MN">Mongolia</option>
                                                        <option value="MM">Myanmar (Burma)</option>
                                                        <option value="NP">Nepal</option>
                                                        <option value="OM">Oman</option>
                                                        <option value="PK">Pakistan</option>
                                                        <option value="PH">Philippines</option>
                                                        <option value="QA">Qatar</option>
                                                        <option value="RU">Russian Federation</option>
                                                        <option value="SA">Saudi Arabia</option>
                                                        <option value="SG">Singapore</option>
                                                        <option value="LK">Sri Lanka</option>
                                                        <option value="SY">Syria</option>
                                                        <option value="TW">Taiwan</option>
                                                        <option value="TJ">Tajikistan</option>
                                                        <option value="TH">Thailand</option>
                                                        <option value="TP">East Timor</option>
                                                        <option value="TM">Turkmenistan</option>
                                                        <option value="AE">United Arab Emirates</option>
                                                        <option value="UZ">Uzbekistan</option>
                                                        <option value="VN">Vietnam</option>
                                                        <option value="YE">Yemen</option>
                                                    </select>
                                                    </div>
                                                    </div>  
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-sm-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group" style={{ width: "50%" }}>
                                                <button class="btn btn-info" type="button" style={{ marginLeft: "10%" }} onClick={this.contactInfo}>Save</button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </form>
                            </div>


                            <div class="card" style={{ marginLeft: "20px", marginRight: "20px", marginBottom: "20px", marginTop: "20px" }}>
                                <form style={{ margin: "20px" }}>
                                    <div class="form-row">
                                        <div class="col-sm-12">
                                            <div class="form-group"><h4 style={{ fontSize: "26px", marginTop: "10px" }}>Basic Information</h4></div>
                                            <sub style={{ fontSize: "15px" }}>Provide some information about yourself to show you more relevant talent to show you more relevant ads to earn.&nbsp;</sub>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>Citizenship</sub>
                                                {/* <input class="form-control" type="text" id="country" value={this.state.basiccountry} onChange={this.changeBasicCountry} style={{ width: "100%", marginTop: "10px" }} placeholder="Country" />*/}
                                                <select class="form-control" value={this.state.basiccountry} onChange={this.changeBasicCountry} style={{ width: "100%", marginTop: "10px" }}>
                                                    <option>--Select--</option>
                                                    <option value="AF">Afghanistan</option>
                                                    <option value="AM">Armenia</option>
                                                    <option value="AZ">Azerbaijan</option>
                                                    <option value="BH">Bahrain</option>
                                                    <option value="BD">Bangladesh</option>
                                                    <option value="BT">Bhutan</option>
                                                    <option value="IO">British Indian Ocean Territory</option>
                                                    <option value="BN">Brunei Darussalam</option>
                                                    <option value="KH">Cambodia</option>
                                                    <option value="CN">China</option>
                                                    <option value="CX">Christmas Island</option>
                                                    <option value="CC">Cocos (Keeling) Islands</option>
                                                    <option value="GE">Georgia</option>
                                                    <option value="HK">Hong Kong</option>
                                                    <option value="IN">India</option>
                                                    <option value="ID">Indonesia</option>
                                                    <option value="IR">Iran</option>
                                                    <option value="IQ">Iraq</option>
                                                    <option value="IL">Israel</option>
                                                    <option value="JP">Japan</option>
                                                    <option value="JO">Jordan</option>
                                                    <option value="KZ">Kazakhstan</option>
                                                    <option value="KP">Korea, Democratic People's Republic of</option>
                                                    <option value="KR">Korea, Republic of</option>
                                                    <option value="KW">Kuwait</option>
                                                    <option value="KG">Kyrgyzstan</option>
                                                    <option value="LA">Lao</option>
                                                    <option value="LB">Lebanon</option>
                                                    <option value="MY">Malaysia</option>
                                                    <option value="MV">Maldives</option>
                                                    <option value="MN">Mongolia</option>
                                                    <option value="MM">Myanmar (Burma)</option>
                                                    <option value="NP">Nepal</option>
                                                    <option value="OM">Oman</option>
                                                    <option value="PK">Pakistan</option>
                                                    <option value="PH">Philippines</option>
                                                    <option value="QA">Qatar</option>
                                                    <option value="RU">Russian Federation</option>
                                                    <option value="SA">Saudi Arabia</option>
                                                    <option value="SG">Singapore</option>
                                                    <option value="LK">Sri Lanka</option>
                                                    <option value="SY">Syria</option>
                                                    <option value="TW">Taiwan</option>
                                                    <option value="TJ">Tajikistan</option>
                                                    <option value="TH">Thailand</option>
                                                    <option value="TP">East Timor</option>
                                                    <option value="TM">Turkmenistan</option>
                                                    <option value="AE">United Arab Emirates</option>
                                                    <option value="UZ">Uzbekistan</option>
                                                    <option value="VN">Vietnam</option>
                                                    <option value="YE">Yemen</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-6">
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>Current Living Contry</sub>
                                                <select class="form-control" value={this.state.currentLiving} onChange={this.changeCurrentLiving} style={{ width: "100%", marginTop: "10px" }}>
                                                    <option>--Select--</option>
                                                    <option value="AF">Afghanistan</option>
                                                    <option value="AM">Armenia</option>
                                                    <option value="AZ">Azerbaijan</option>
                                                    <option value="BH">Bahrain</option>
                                                    <option value="BD">Bangladesh</option>
                                                    <option value="BT">Bhutan</option>
                                                    <option value="IO">British Indian Ocean Territory</option>
                                                    <option value="BN">Brunei Darussalam</option>
                                                    <option value="KH">Cambodia</option>
                                                    <option value="CN">China</option>
                                                    <option value="CX">Christmas Island</option>
                                                    <option value="CC">Cocos (Keeling) Islands</option>
                                                    <option value="GE">Georgia</option>
                                                    <option value="HK">Hong Kong</option>
                                                    <option value="IN">India</option>
                                                    <option value="ID">Indonesia</option>
                                                    <option value="IR">Iran</option>
                                                    <option value="IQ">Iraq</option>
                                                    <option value="IL">Israel</option>
                                                    <option value="JP">Japan</option>
                                                    <option value="JO">Jordan</option>
                                                    <option value="KZ">Kazakhstan</option>
                                                    <option value="KP">Korea, Democratic People's Republic of</option>
                                                    <option value="KR">Korea, Republic of</option>
                                                    <option value="KW">Kuwait</option>
                                                    <option value="KG">Kyrgyzstan</option>
                                                    <option value="LA">Lao</option>
                                                    <option value="LB">Lebanon</option>
                                                    <option value="MY">Malaysia</option>
                                                    <option value="MV">Maldives</option>
                                                    <option value="MN">Mongolia</option>
                                                    <option value="MM">Myanmar (Burma)</option>
                                                    <option value="NP">Nepal</option>
                                                    <option value="OM">Oman</option>
                                                    <option value="PK">Pakistan</option>
                                                    <option value="PH">Philippines</option>
                                                    <option value="QA">Qatar</option>
                                                    <option value="RU">Russian Federation</option>
                                                    <option value="SA">Saudi Arabia</option>
                                                    <option value="SG">Singapore</option>
                                                    <option value="LK">Sri Lanka</option>
                                                    <option value="SY">Syria</option>
                                                    <option value="TW">Taiwan</option>
                                                    <option value="TJ">Tajikistan</option>
                                                    <option value="TH">Thailand</option>
                                                    <option value="TP">East Timor</option>
                                                    <option value="TM">Turkmenistan</option>
                                                    <option value="AE">United Arab Emirates</option>
                                                    <option value="UZ">Uzbekistan</option>
                                                    <option value="VN">Vietnam</option>
                                                    <option value="YE">Yemen</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>Resident</sub>
                                                <input class="form-control" type="text" id="resident" value={this.state.resident} onChange={this.changeResident} style={{ width: "100%", marginTop: "10px" }} placeholder="Resident" /></div>
                                        </div>
                                         <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                         <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>ID Number</sub>
                                                <input class="form-control" id="idnumber" type="text" value={this.state.idnumber} onChange={this.changeIDNumber} style={{ width: "100%", marginTop: "10px" }} placeholder="ID number" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>Passport No</sub>
                                                <input class="form-control" type="text" id="passport" value={this.state.passport} onChange={this.changePassport} style={{ width: "100%", marginTop: "10px" }} placeholder="Passport" /></div>
                                        </div>
                                         <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                         <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>Gender</sub>
                                                <input class="form-control" id="gender" type="text" value={this.state.gender} onChange={this.changeGender} style={{ width: "100%", marginTop: "10px" }} placeholder="Gender" />
                                            </div>
                                        </div>
                                    </div>


                                    <div class="form-row">
                                        <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>Date of Birth</sub>
                                                <input class="form-control" type="date" id="dob" value={this.state.dob} onChange={this.changeDOB} style={{ width: "100%", marginTop: "10px" }} placeholder="Date of Birth" /></div>
                                        </div>
                                         <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>Age</sub>
                                                <input class="form-control" type="text" id="age" value={this.state.age} onChange={this.changeAge}  style={{ width: "100%", marginTop: "10px" }} placeholder="Age" /></div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-sm-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group" style={{ width: "50%" }}>
                                                <button class="btn btn-info" type="button" style={{ marginLeft: "10%" }} onClick={this.basicInfo}>Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div class="card" style={{ marginLeft: "20px", marginRight: "20px", marginBottom: "20px", marginTop: "20px" }}>
                                <form style={{ margin: "20px" }}>
                                    <div class="form-row">
                                        <div class="col-12 col-sm-12 col-md-12">
                                            <div class="form-group"><h4 style={{ fontSize: "26px", marginTop: "10px" }}>Experience</h4></div>
                                            <sub style={{ fontSize: "15px" }}>Add your work experience to get better paid monetization ads.&nbsp;</sub>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>Specialization</sub>
                                                <input class="form-control" type="text" id="specialization" value={this.state.specialization} onChange={this.changeSpecialization} style={{ width: "100%", marginTop: "10px" }} placeholder="Specialization" /></div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-6">
                                            <div class="form-group">
                                            <sub style={{ fontSize: "13px" }}>Education</sub>
                                                <div className="form-group" style={{ width: "100%", marginTop: "10px" }}>
                                                    {/* <input class="form-control" type="text" value={this.state.country} onChange={this.changeCountry} placeholder="Country" /> */}
                                                    <select className="form-control" value={this.state.education} onChange={this.changeEducation} >
                                                        <option>--Select--</option>
                                                        <option value="Mater">Master</option>
                                                        <option value="gradu">Graduated</option>
                                                        <option value="ugradu">Under Graduate</option>
                                                        <option value="highscl">High School</option>
                                                        <option value="basic">Basic Education</option>
                                                    </select>
                                                </div>
                                                {/* <sub style={{ fontSize: "13px" }}>Education</sub>
                                                <input class="form-control" id="education" type="text" value={this.state.education} onChange={this.changeEducation} style={{ width: "100%", marginTop: "10px" }} placeholder="Education" /> */}
                                                
                                                </div>
                                        </div>
                                    </div>
                                   
                                    <div className="form-row">
                                            <div className="col-12 col-sm-12 col-md-6">
                                                <div class="form-group">
                                                    <sub style={{ fontSize: "13px" }}>University</sub>
                                                    <input class="form-control" id="education" type="text" value={this.state.university} onChange={this.changeUniversity} style={{ width: "100%", marginTop: "10px" }} placeholder="University" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6">
                                                <div class="form-group">
                                                    <sub style={{ fontSize: "13px" }}>Collage</sub>
                                                    <input class="form-control" id="education" type="text" value={this.state.collage} onChange={this.changeCollage} style={{ width: "100%", marginTop: "10px" }} placeholder="Collage" />
                                                </div>
                                            </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="col-sm-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group" style={{ width: "50%" }}>
                                                <button class="btn btn-info" type="button" style={{ marginLeft: "10%" }} onClick={this.experience}>Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>


                            <div class="card" style={{ marginLeft: "20px", marginRight: "20px", marginBottom: "20px", marginTop: "20px" }}>
                                <form style={{ margin: "20px" }}>
                                <div class="form-row">
                                        <div class="col-12 col-sm-12 col-md-12">
                                            <div class="form-group"><h4 style={{ fontSize: "26px",  }}>Other details</h4></div>
                                            <sub style={{ fontSize: "15px" }}>Add your job details and other get better paid monetization ads.&nbsp;</sub>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-12 col-sm-12 col-md-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>Occupation</sub>
                                                <div className="form-group" style={{ width: "100%", marginTop: "10px" }}>
                                                    {/* <input class="form-control" type="text" value={this.state.country} onChange={this.changeCountry} placeholder="Country" /> */}
                                                    <select className="form-control" value={this.state.occupation} onChange={this.changeOccupation} >
                                                        <option>--Select--</option>
                                                        <option value="Accountant">Accountant</option>
                                                        <option value="Actor">Actor /Actress</option>
                                                        <option value="Architect">Architect</option>
                                                        <option value="Author">Author</option>
                                                        <option value="Baker">Baker</option>
                                                        <option value="Driver">Driver</option>
                                                        <option value="Carpenter">Carpenter</option>
                                                        <option value="Chef">Chef/Cook</option>
                                                        <option value="Cleaner">Cleaner</option>
                                                        <option value="Dentist">Dentist</option>
                                                        <option value="Designer">Designer</option>
                                                        <option value="Doctor">Doctor</option>
                                                        <option value="Electrician">Electrician</option>
                                                        <option value="Engineer">Engineer</option>
                                                        <option value="Factoryw">Factory worker</option>
                                                        <option value="Farmer">Farmer</option>
                                                        <option value="Fireman">Fireman/Fire fighter</option>
                                                        <option value="Fisherman">Fisherman</option>
                                                        <option value="Hairdresser">Hairdresser</option>
                                                        <option value="Journalist">Journalist</option>
                                                        <option value="Lawyer">Lawyer</option>
                                                        <option value="Lecturer">Lecturer</option>
                                                        <option value="Librarian">Librarian</option>
                                                        <option value="Mechanic">Mechanic</option>
                                                        <option value="Model">Model</option>
                                                        <option value="Nurse">Nurse</option>
                                                        <option value="Painter">Painter</option>
                                                        <option value="Pharmacist">Pharmacist</option>
                                                        <option value="Photographer">Photographer</option>
                                                        <option value="Pilot">Pilot</option>
                                                        <option value="Plumber">Plumber</option>
                                                        <option value="Politician">Politician</option>
                                                        <option value="Policeman">Policeman/Policewoman</option>
                                                        <option value="Postman">Postman</option>
                                                        <option value="Scientist">Scientist</option>
                                                        <option value="Secretary">Secretary</option>
                                                        <option value="Soldier">Soldier</option>
                                                        <option value="Tailor">Tailor</option>
                                                        <option value="Teacher">Teacher</option>
                                                        <option value="Waiter">Waiter/Waitress</option>
                                                        <option value="Other">Other</option>
                                                        
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-6">
                                            <div class="form-group">
                                                <sub style={{ fontSize: "13px" }}>Employer Name</sub>
                                                <input class="form-control" id="employer" type="text" value={this.state.employer} onChange={this.changeEmployer} style={{ width: "100%", marginTop: "10px" }} placeholder="Employer Name" />
                                                
                                                </div>
                                        </div>
                                    </div>
                                   
                                    <div className="form-row">
                                            <div className="col-12 col-sm-12 col-md-6">
                                                <div class="form-group">
                                                    <sub style={{ fontSize: "13px" }}>Designation</sub>
                                                    <input class="form-control" id="designation" type="text" value={this.state.designation} onChange={this.changeDesignation} style={{ width: "100%", marginTop: "10px" }} placeholder="Designation" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6">
                                                <div class="form-group">
                                                    <sub style={{ fontSize: "13px" }}>Interest In / Hobbies</sub>
                                                    
                                                    {/* <input class="form-control" id="hobbies" type="text" value={this.state.hobbies} onChange={this.changeHobbies} style={{ width: "100%", marginTop: "10px" }} placeholder="Collage" /> */}
                                                    <select class="form-control" value={this.state.hobbies}  onChange={this.changeHobbies} >
                                                        <option>--Select--</option>
                                                        <option value="Acting">Acting</option>
                                                        <option value="Arts">Arts</option>
                                                        <option value="Archery">Archery</option>
                                                        <option value="Badminton">Badminton</option>
                                                        <option value="Baseball">Baseball</option>
                                                        <option value="Basketball">Basketball</option>
                                                        <option value="Beat">Beat boxing</option>
                                                        <option value="Bird">Bird watching</option>
                                                        <option value="Boating">Boating</option>
                                                        <option value="Boxing">Boxing</option>
                                                        <option value="Camping">Camping</option>
                                                        <option value="CarRacing">Car Racing</option>
                                                        <option value="Cartooning">Cartooning</option>
                                                        <option value="Chess">Chess</option>
                                                        <option value="Collecting">Collecting</option>
                                                        <option value="Coloring">Coloring</option>
                                                        <option value="Cooking">Cooking</option>
                                                        <option value="Cycling">Cycling</option>
                                                        <option value="Dancing">Dancing</option>
                                                        <option value="Darts">Darts </option>
                                                        <option value="DigitalPhotography">Digital Photography</option>
                                                        <option value="Diving">Diving</option>
                                                        <option value="Drawing">Drawing</option>
                                                        <option value="Exercise">Exercise</option>
                                                        <option value="Fishing">Fishing</option>
                                                        <option value="Football">Football</option>
                                                        <option value="FourWheeling">Four Wheeling</option>
                                                        <option value="FreeClimbing">Free Climbing</option>
                                                        <option value="Gardening">Gardening</option>
                                                        <option value="Guitar">Guitar</option>
                                                        <option value="Hiking">Hiking</option>
                                                        <option value="Hunting">Hunting</option>
                                                        <option value="IceDiving">Ice Diving</option>
                                                        <option value="JumpRoping">Jump Roping</option>
                                                        <option value="Meditation">Meditation</option>
                                                        <option value="Paintball">Paintball</option>
                                                        <option value="Painting">Painting</option>
                                                        <option value="Playingmusic">Playing music</option>
                                                        <option value="Rafting">Rafting</option>
                                                        <option value="Reading">Reading</option>
                                                        <option value="Shopping">Shopping</option>
                                                        <option value="Storytelling">Storytelling</option>
                                                        <option value="Surfing">Surfing</option>
                                                        <option value="Swimming">Swimming</option>
                                                        <option value="Tennis">Tennis</option>
                                                        <option value="Walking">Walking</option>
                                                        <option value="Wrestling">Wrestling</option>
                                                        <option value="Writing">Writing</option>
                                                        <option value="Yoga">Yoga</option>
                                                        <option value="Zumba">Zumba</option>
                                                    </select>
                                                </div>
                                            </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="col-sm-6" style={{ width: "477.5px", minWidth: "25%" }}>
                                            <div class="form-group" style={{ width: "50%" }}>
                                                <button class="btn btn-info" type="button" style={{ marginLeft: "10%" }} onClick={this.otherDetails}>Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>


                        </div>
                    </div>
                    <div class="footer-dark">
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


            </div>









        );
    }

}
export default Profile