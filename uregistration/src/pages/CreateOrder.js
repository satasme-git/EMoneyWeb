/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import orderService from "../services/orderService";
import userServices from "../services/userServices";
import earningService from "../services/earningService";

import { Helmet } from "react-helmet";
import { PayPalButton } from "react-paypal-button-v2";
import $ from 'jquery'
import Cookies from 'js-cookie';

import toast from 'toast-me';
import queryString from 'query-string';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
 //get json for convert currency
import country_currency_gtr from '../country_currency.json';
/*///////////////////////import add question page/////////////////*/
import Addyesnoquestion from "./Addyesnoquestion";
import Addsinglechoicequestion from "./Addsinglechoicequestion";
import Addmultiplechoicequstion from "./Addmultiplechoicequstion";
import Addeasyquestion from "./Addeasyquestion";
import serveyService from "../services/serveyService";
/*///////////////////////import add question page/////////////////*/



class Dash extends React.Component {
   
    constructor(props) {

        super(props)
        this.state = {
            y_subscribe: '1000',
            y_views: '1000',
            f_Polikes: '1000',
            f_Palikes: '1000',
            f_shares: '1000',
            i_followers: '1000',
            i_likes: '1000',
            tw_followers: '1000',
            tw_likes: '1000',
            tt__followes: '1000',
            tt_likes: '1000',
            tt_shares: '1000',
            w_views: '1000',
            s_views: '1000',
            total_price: '$0',
            y_v_check: true,
            f_pl_check: true,
            i_fol_check: true,
            tw_fol_check: true,
            ti_fol_check: true,
            w_v_check: true,
            s_v_check: true,
            packageMinMax: [],
            min_yviews: '1000',
            max_yviews: '50000',
            min_ysub: '1000',
            max_ysub: '50000',
            min_fpolike: '1000',
            max_fpolike: '50000',
            min_fpalike: '1000',
            max_fpalike: '50000',
            min_fshares: '1000',
            max_fshares: '50000',
            min_ifollow: '1000',
            max_ifollow: '50000',
            min_ilike: '1000',
            max_ilike: '50000',
            min_twfollow: '1000',
            max_twfollow: '50000',
            min_twlike: '1000',
            max_twlike: '50000',
            min_tifollow: '1000',
            max_tifollow: '50000',
            min_tilike: '1000',
            max_tilike: '50000',
            youtube_link: '',
            facebook_link: '',
            insta_link: '',
            twitter_link: '',
            tiktok_link: '',
            web_link: '',
            total_earning: '',
            username: '',
            final_earning: '0',
            yv_country: '',
            ys_country: '',
            fpol_country: '',
            fpal_country: '',
            fs_country: '',
            if_country: '',
            twf_country: '',
            tif_country: '',
            serveyid: '',
            serveyclick: false,
            total_questions: 0,
            y_v_gmalecheck: 'checked',
            y_v_gfemalecheck: '',
            y_s_gmalecheck: 'checked',
            y_s_gfemalecheck: '',
            f_pal_gmalecheck: 'checked',
            f_pal_gfemalecheck: '',
            f_pol_gmalecheck: 'checked',
            f_pol_gfemalecheck: '',
            f_s_gmalecheck: 'checked',
            f_s_gfemalecheck: '',
            options: [{ name: 'Srilanka', id: 1 }, { name: 'Miyanmar', id: 2 }]
        }


    }


     componentDidMount() {
        
        var user = Cookies.get('user');
        const value = queryString.parse(this.props.location.search);
        const token = value.url;
        if (token != null) {
            var menu11 = document.getElementById("menu11");
            var menu22 = document.getElementById("menu22");
            var menu33 = document.getElementById("menu33");
            var menu44 = document.getElementById("menu44");
            var menu55 = document.getElementById("menu55");

            var menu1 = document.getElementById("menu1");
            var menu2 = document.getElementById("menu2");
            var menu3 = document.getElementById("menu3");
            var menu4 = document.getElementById("menu4");
            var menu5 = document.getElementById("menu5");

            if (token.includes("youtube")) {
                menu11.classList.add("active");
                menu22.classList.remove("active");
                menu33.classList.remove("active");
                menu44.classList.remove("active");
                menu55.classList.remove("active");
                $('#menu11').trigger('click');
                menu1.classList.add("active");
                menu2.classList.remove("active");
                menu3.classList.remove("active");
                menu4.classList.remove("active");
                menu5.classList.remove("active");
                //
                menu1.classList.remove("fade");
                menu2.classList.remove("fade");
                menu3.classList.remove("fade");
                menu4.classList.remove("fade");
                menu5.classList.remove("fade");
                this.setState({ youtube_link: token });
            } else if (token.includes("facebook")) {
                menu11.classList.remove("active");
                menu22.classList.add("active");
                menu33.classList.remove("active");
                menu44.classList.remove("active");
                menu55.classList.remove("active");
                $('#menu22').trigger('click');
                menu1.classList.remove("active");
                menu2.classList.add("active");
                menu3.classList.remove("active");
                menu4.classList.remove("active");
                menu5.classList.remove("active");
                //
                menu1.classList.remove("fade");
                menu2.classList.remove("fade");
                menu3.classList.remove("fade");
                menu4.classList.remove("fade");
                menu5.classList.remove("fade");
                this.setState({ facebook_link: token });
            } else if (token.includes("instagram")) {
                menu11.classList.remove("active");
                menu22.classList.remove("active");
                menu33.classList.add("active");
                menu44.classList.remove("active");
                menu55.classList.remove("active");
                $('#menu33').trigger('click');
                menu1.classList.remove("active");
                menu2.classList.remove("active");
                menu3.classList.add("active");
                menu4.classList.remove("active");
                menu5.classList.remove("active");
                //
                menu1.classList.remove("fade");
                menu2.classList.remove("fade");
                menu3.classList.remove("fade");
                menu4.classList.remove("fade");
                menu5.classList.remove("fade");
                this.setState({ insta_link: token });
            } else if (token.includes("twitter")) {
                menu11.classList.remove("active");
                menu22.classList.remove("active");
                menu33.classList.remove("active");
                menu44.classList.add("active");
                menu55.classList.remove("active");
                $('#menu44').trigger('click');
                menu1.classList.remove("active");
                menu2.classList.remove("active");
                menu3.classList.remove("active");
                menu4.classList.add("active");
                menu5.classList.remove("active");
                //
                menu1.classList.remove("fade");
                menu2.classList.remove("fade");
                menu3.classList.remove("fade");
                menu4.classList.remove("fade");
                menu5.classList.remove("fade");
                this.setState({ twitter_link: token });
            } else if (token.includes("tiktok")) {
                menu11.classList.remove("active");
                menu22.classList.remove("active");
                menu33.classList.remove("active");
                menu44.classList.remove("active");
                menu55.classList.add("active");
                $('#menu55').trigger('click');
                menu1.classList.remove("active");
                menu2.classList.remove("active");
                menu3.classList.remove("active");
                menu4.classList.remove("active");
                menu5.classList.add("active");
                //
                menu1.classList.remove("fade");
                menu2.classList.remove("fade");
                menu3.classList.remove("fade");
                menu4.classList.remove("fade");
                menu5.classList.remove("fade");
                this.setState({ tiktok_link: token });
            }
        }
        if (user != null) {
            orderService.getMinMax().then(res => {
                this.setState({ packageMinMax: res.data });
                this.loadPackages();
            });

            earningService.getTotalEarning(Cookies.get('user')).then(res => {
                this.setState({ total_earning: res.data });
            });

            userServices.getUserById(Cookies.get('user')).then(res => {
                this.setState({ username: res.data.fname });
            });
            this.generateYoutubePrice(1600, "views");
        } else {
            this.props.history.push('/login');
        }
        document.getElementById("y_s_gmale").disabled = true;
        document.getElementById("y_s_gfemale").disabled = true;
        document.getElementById("f_s_gmale").disabled = true;
        document.getElementById("f_s_gfemale").disabled = true;
        document.getElementById("f_pal_gmale").disabled = true;
        document.getElementById("f_pal_gfemale").disabled = true;
        this.setState({ serveyid: Date.now() });

    }

    changeyvCountry(selected) {
        // alert(selectedItem)
        this.setState({ yv_country: selected });
    }

    changeysCountry = (selected) => {
        this.setState({ ys_country: selected });
    }

    changefpalCountry = (selected) => {
        this.setState({ fpal_country: selected });
    }

    changefpolCountry = (selected) => {
        this.setState({ fpol_country: selected });
    }

    changefsCountry = (selected) => {
        this.setState({ fs_country: selected });
    }

    changeifCountry = (selected) => {
        this.setState({ if_country: selected });
    }

    changetwfCountry = (selected) => {
        this.setState({ twf_country: selected });
    }

    changetifCountry = (selected) => {
        this.setState({ tif_country: selected });
    }

    changeWvCountry = (selected) => {
        this.setState({ tif_country: selected });
    }

    loadPackages = (e) => {
        var packaging;
        for (packaging of this.state.packageMinMax) {
            if (packaging.social_name == "youtube") {
                if (packaging.service == "views") {
                    this.setState({
                        min_yviews: packaging.min,
                        max_yviews: packaging.max,
                        y_views: packaging.min
                    });
                } else if (packaging.service == "subscribers") {
                    this.setState({
                        min_ysub: packaging.min,
                        max_ysub: packaging.max,
                        y_subscribe: packaging.min
                    });
                }
            } else if (packaging.social_name == "facebook") {
                if (packaging.service == "page like") {
                    this.setState({
                        min_fpalike: packaging.min,
                        max_fpalike: packaging.max,
                        f_Palikes: packaging.min
                    });
                } else if (packaging.service == "post like") {
                    this.setState({
                        min_fpolike: packaging.min,
                        max_fpolike: packaging.max,
                        f_Polikes: packaging.min
                    });
                } else if (packaging.service == "share") {
                    this.setState({
                        min_fshares: packaging.min,
                        max_fshares: packaging.max,
                        f_shares: packaging.min
                    });
                }
            } else if (packaging.social_name == "instagram") {
                if (packaging.service == "followers") {
                    this.setState({
                        min_ifollow: packaging.min,
                        max_ifollow: packaging.max,
                        i_followers: packaging.min
                    });
                } else if (packaging.service == "likes") {
                    this.setState({
                        min_ilike: packaging.min,
                        max_ilike: packaging.max,
                        i_likes: packaging.min
                    });
                }
            } else if (packaging.social_name == "twitter") {
                if (packaging.service == "followers") {
                    this.setState({
                        min_twfollow: packaging.min,
                        max_twfollow: packaging.max,
                        tw_followers: packaging.min
                    });
                } else if (packaging.service == "likes") {
                    this.setState({
                        min_twlike: packaging.min,
                        max_twlike: packaging.max,
                        tw_likes: packaging.min
                    });
                }
            } else if (packaging.social_name == "tiktok") {
                if (packaging.service == "followers") {
                    this.setState({
                        min_tifollow: packaging.min,
                        max_tifollow: packaging.max,
                        tt__followes: packaging.min
                    });
                } else if (packaging.service == "likes") {
                    this.setState({
                        min_tilike: packaging.min,
                        max_tilike: packaging.max,
                        tt_likes: packaging.min
                    });
                }
            }
        }
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

    // generateServeyPrice = price => {
    //     if (price.includes("$")) {
    //         this.setState({
    //             total_price: price,
    //             // final_earning: res.data.split("$ ")[1] 
    //         });
    //     }else{
    //         this.setState({
    //             total_price: "Contact us for get this price",
    //             // final_earning: res.data.split("$ ")[1] 
    //         });
    //     }
    // }

    generateYoutubePrice(val, changecol) {
        var y_v_check = document.getElementById("y_v_check");
        var y_s_check = document.getElementById("y_s_check");
        var vcountry = document.getElementById("y_v_country");


        var options = vcountry && vcountry.options;
        var vresult = [];
        var opt;
        for (var i = 0, iLen = options.length; i < iLen; i++) {
            opt = options[i];

            if (opt.selected) {
                vresult.push(opt.value || opt.text);

            }
        }

        var scountry = document.getElementById("y_s_country");
        var options = scountry && scountry.options;
        var sresult = [];
        var opt;
        for (var i = 0, iLen = options.length; i < iLen; i++) {
            opt = options[i];

            if (opt.selected) {
                sresult.push(opt.value || opt.text);

            }
        }

        if (y_v_check.checked && y_s_check.checked) {
            var social = "youtube";
            var service = "views,subscribers"
            if (changecol === "views") {
                var count = val + "," + this.state.y_subscribe;
            } else {
                var count = this.state.y_views + "," + val;
            }

            orderService.getprices(social, service, count, vresult + " " + sresult, Cookies.get('user')).then(res => {
                this.setState({ total_price: res.data, final_earning: res.data.split("$ ")[1] });
            });
        } else if (y_v_check.checked) {

            var social = "youtube";
            var service = "views"
            var count = val;
            orderService.getprices(social, service, count, vresult, Cookies.get('user')).then(res => {
                this.setState({ total_price: res.data, final_earning: res.data.split("$ ")[1] });
            });
        } else if (y_s_check.checked) {
            var social = "youtube";
            var service = "subscribers"
            var count = val;
            orderService.getprices(social, service, count, sresult, Cookies.get('user')).then(res => {
                this.setState({ total_price: res.data, final_earning: res.data.split("$ ")[1] });
            });
        } else {
            this.setState({ total_price: '$0', final_earning: '0' });
        }
    }

    generateFacebookPrice(val, changecol) {
        var f_pol_check = document.getElementById("f_pol_check");
        var f_pal_check = document.getElementById("f_pal_check");
        var f_s_check = document.getElementById("f_s_check");
        var polcountry = document.getElementById("f_pol_country");

        var options = polcountry && polcountry.options;
        var polresult = [];
        var opt;
        for (var i = 0, iLen = options.length; i < iLen; i++) {
            opt = options[i];

            if (opt.selected) {
                polresult.push(opt.value || opt.text);

            }
        }


        var palcountry = document.getElementById("f_pal_country");
        var options = palcountry && palcountry.options;
        var palresult = [];
        var opt;
        for (var i = 0, iLen = options.length; i < iLen; i++) {
            opt = options[i];

            if (opt.selected) {
                palresult.push(opt.value || opt.text);

            }
        }

        var scountry = document.getElementById("f_s_country");
        var options = scountry && scountry.options;
        var sresult = [];
        var opt;
        for (var i = 0, iLen = options.length; i < iLen; i++) {
            opt = options[i];

            if (opt.selected) {
                sresult.push(opt.value || opt.text);

            }
        }

        if (f_pol_check.checked && f_pal_check.checked && f_s_check.checked) {
            var social = "facebook";
            var service = "page like,post like,share"
            if (changecol === "pal") {
                var count = val + "," + this.state.f_Polikes + ',' + this.state.f_shares;
            } else if (changecol === "pol") {
                var count = this.state.f_Palikes + "," + val + ',' + this.state.f_shares;
            } else {
                var count = this.state.f_Palikes + "," + this.state.f_Polikes + ',' + val;
            }

            orderService.getprices(social, service, count, polresult + " " + palresult + " " + sresult, Cookies.get('user')).then(res => {
                this.setState({ total_price: res.data, final_earning: res.data.split("$ ")[1] });
            });
        } else if (f_pal_check.checked && f_pol_check.checked) {
            var social = "facebook";
            var service = "page like,post like"
            if (changecol === "pal") {
                var count = val + ',' + this.state.f_Polikes;
            } else {
                var count = this.state.f_Palikes + ',' + val;
            }

            orderService.getprices(social, service, count, palresult + " " + polresult, Cookies.get('user')).then(res => {
                this.setState({ total_price: res.data, final_earning: res.data.split("$ ")[1] });
            });
        } else if (f_pal_check.checked && f_s_check.checked) {
            var social = "facebook";
            var service = "page like,share"
            if (changecol === "pal") {
                var count = val + ',' + this.state.f_shares;
            } else if (changecol === "pol") {
                var count = this.state.f_Palikes + ',' + this.state.f_shares;
            } else {
                var count = this.state.f_Palikes + ',' + val;
            }
            orderService.getprices(social, service, count, palresult + " " + sresult, Cookies.get('user')).then(res => {
                this.setState({ total_price: res.data, final_earning: res.data.split("$ ")[1] });
            });
        } else if (f_pol_check.checked && f_s_check.checked) {
            var social = "facebook";
            var service = "post like,share"
            if (changecol === "pol") {
                var count = val + ',' + this.state.f_share;
            } else {
                var count = this.state.f_Polikes + ',' + val;
            }
            orderService.getprices(social, service, count, polresult + " " + sresult, Cookies.get('user')).then(res => {
                this.setState({ total_price: res.data, final_earning: res.data.split("$ ")[1] });
            });
        } else if (f_pal_check.checked) {
            var social = "facebook";
            var service = "page like"
            var count = val;
            orderService.getprices(social, service, count, palresult, Cookies.get('user')).then(res => {
                this.setState({ total_price: res.data, final_earning: res.data.split("$ ")[1] });
            });
        } else if (f_pol_check.checked) {
            var social = "facebook";
            var service = "post like"
            var count = val;
            orderService.getprices(social, service, count, polresult, Cookies.get('user')).then(res => {
                this.setState({ total_price: res.data, final_earning: res.data.split("$ ")[1] });
            });
        } else if (f_s_check.checked) {
            var social = "facebook";
            var service = "share"
            var count = val;
            orderService.getprices(social, service, count, sresult, Cookies.get('user')).then(res => {
                this.setState({ total_price: res.data, final_earning: res.data.split("$ ")[1] });
            });
        } else {
            this.setState({ total_price: '$0', final_earning: '0' });
        }
    }

    generateInstagramPrice(val, country) {
        var i_f_check = document.getElementById("i_f_check");
        // var i_l_check = document.getElementById("i_l_check");
        // if (y_v_check.checked && y_s_check.checked) {
        //     var social = "youtube";
        //     var service = "views,subscribers"
        //     var count = this.state.y_views + "," + this.state.y_subscribe;
        //     orderService.getprices(social, service, count).then(res => {
        //         this.setState({ total_price: res.data });
        //     });
        // }else if (y_s_check.checked) {
        //     var social = "youtube";
        //     var service = "subscribers"
        //     var count = this.state.y_subscribe;
        //     orderService.getprices(social, service, count).then(res => {
        //         this.setState({ total_price: res.data });
        //     });
        // } else 

        var scountry = document.getElementById("i_f_country");
        var options = scountry && scountry.options;
        var sresult = [];
        var opt;
        for (var i = 0, iLen = options.length; i < iLen; i++) {
            opt = options[i];

            if (opt.selected) {
                sresult.push(opt.value || opt.text);

            }
        }
        if (i_f_check.checked) {
            var social = "instagram";
            var service = "followers"
            var count = val;
            orderService.getprices(social, service, count, sresult, Cookies.get('user')).then(res => {
                this.setState({ total_price: res.data, final_earning: res.data.split("$ ")[1] });
            });
        } else {
            this.setState({ total_price: '$0', final_earning: '0' });
        }
    }

    generateTwitterPrice(val, country) {
        var t_f_check = document.getElementById("t_f_check");
        // var t_l_check = document.getElementById("t_l_check");
        var scountry = document.getElementById("tw_f_country");
        var options = scountry && scountry.options;
        var sresult = [];
        var opt;
        for (var i = 0, iLen = options.length; i < iLen; i++) {
            opt = options[i];

            if (opt.selected) {
                sresult.push(opt.value || opt.text);

            }
        }
        if (t_f_check.checked) {
            var social = "twitter";
            var service = "followers"
            var count = val;
            orderService.getprices(social, service, count, sresult, Cookies.get('user')).then(res => {
                this.setState({ total_price: res.data, final_earning: res.data.split("$ ")[1] });
            });
        } else {
            this.setState({ total_price: '$0', final_earning: '0' });
        }
    }

    generateTiktokPrice(val, country) {
        var ti_f_check = document.getElementById("ti_f_check");
        // var t_l_check = document.getElementById("t_l_check");
        var scountry = document.getElementById("ti_f_country");
        var options = scountry && scountry.options;
        var sresult = [];
        var opt;
        for (var i = 0, iLen = options.length; i < iLen; i++) {
            opt = options[i];

            if (opt.selected) {
                sresult.push(opt.value || opt.text);

            }
        }
        if (ti_f_check.checked) {
            var social = "tiktok";
            var service = "followers"
            var count = val;
            orderService.getprices(social, service, count, sresult, Cookies.get('user')).then(res => {
                this.setState({ total_price: res.data, final_earning: res.data.split("$ ")[1] });
            });
        } else {
            this.setState({ total_price: '$0', final_earning: '0' });
        }
    }

    generateWebPrice(val, country) {
        var w_v_check = document.getElementById("w_v_check");
        // var t_l_check = document.getElementById("t_l_check");
        var scountry = document.getElementById("w_v_country");
        var options = scountry && scountry.options;
        var sresult = [];
        var opt;
        for (var i = 0, iLen = options.length; i < iLen; i++) {
            opt = options[i];

            if (opt.selected) {
                sresult.push(opt.value || opt.text);

            }
        }
        if (w_v_check.checked) {
            var social = "link";
            var service = "views"
            var count = val;
            orderService.getprices(social, service, count, sresult, Cookies.get('user')).then(res => {
                this.setState({ total_price: res.data, final_earning: res.data.split("$ ")[1] });
            });
        } else {
            this.setState({ total_price: '$0', final_earning: '0' });
        }
    }

    generateServeyPrice = val => {
        var s_v_check = document.getElementById("s_v_check");
        // var t_l_check = document.getElementById("t_l_check");
        var scountry = document.getElementById("s_v_country");
        var options = scountry && scountry.options;
        var sresult = [];
        var opt;
        for (var i = 0, iLen = options.length; i < iLen; i++) {
            opt = options[i];

            if (opt.selected) {
                sresult.push(opt.value || opt.text);

            }
        }
        if (s_v_check.checked) {
            var social = "servey";
            var service = "views"
            var count = val;
            var serveyid = this.state.serveyid;
            orderService.getprices(social, service, count, sresult, Cookies.get('user')).then(res => {
                // this.setState({ total_price: res.data, final_earning: res.data.split("$ ")[1] });
                if (res.data.includes("$")) {
                    serveyService.getServeyPrice(serveyid, res.data.split("$ ")[1]).then(response => {

                        this.setState({ total_price: "$ " + response.data, final_earning: response.data });
                    });
                }
                serveyService.getQuestionCOunt(serveyid).then(response => {
                    this.setState({ total_questions: response.data });
                });
            });
        } else {
            this.setState({ total_price: '$0', final_earning: '0' });
        }
        // if (price.includes("$")) {
        //     this.setState({
        //         total_price: price,
        //         // final_earning: res.data.split("$ ")[1] 
        //     });
        // }else{
        //     this.setState({
        //         total_price: "Contact us for get this price",
        //         // final_earning: res.data.split("$ ")[1] 
        //     });
        // }
    }


    changeViews = e => {
        this.setState({ y_views: e.target.value });
        this.generateYoutubePrice(e.target.value, "views");

    };

    changeSubscribers = e => {
        this.setState({ y_subscribe: e.target.value });
        this.generateYoutubePrice(e.target.value, "subscribe");

    };

    changePostLikes = event => {
        this.setState({ f_Polikes: event.target.value });
        this.generateFacebookPrice(event.target.value, "pol");
    };

    changePageLikes = event => {
        this.setState({ f_Palikes: event.target.value });
        this.generateFacebookPrice(event.target.value, "pal");
    };

    changeFShares = event => {
        this.setState({ f_shares: event.target.value });
        this.generateFacebookPrice(event.target.value, "share");
    };

    changeILikes = event => {
        this.setState({ i_likes: event.target.value });
    };

    changeIFollowers = event => {
        this.setState({ i_followers: event.target.value });
        this.generateInstagramPrice(event.target.value);
    };

    changeTwLikes = event => {
        this.setState({ tw_likes: event.target.value });
    };

    changeTwFollowers = event => {
        this.setState({ tw_followers: event.target.value });
        this.generateTwitterPrice(event.target.value);
    };

    changeTtShares = event => {
        this.setState({ tt_shares: event.target.value });
    };

    changeTtLikes = event => {
        this.setState({ tt_likes: event.target.value });
    };

    changeTtFollowers = event => {
        this.setState({ tt__followes: event.target.value });
        this.generateTiktokPrice(event.target.value);
    };

    changeWviews = event => {
        this.setState({ w_views: event.target.value });
        this.generateWebPrice(event.target.value);
    };

    changeSviews = event => {
        this.setState({ s_views: event.target.value });
        this.generateServeyPrice(event.target.value);
    };

    changeYLink = event => {
        this.setState({ youtube_link: event.target.value });
    };

    changeFLink = event => {
        this.setState({ facebook_link: event.target.value });
    };

    changeILink = event => {
        this.setState({ insta_link: event.target.value });
    };

    changeTWLink = event => {
        this.setState({ twitter_link: event.target.value });
    };

    changeTILink = event => {
        this.setState({ tiktok_link: event.target.value });
    };

    changeWLink = event => {
        this.setState({ web_link: event.target.value });
    };

    changeYoutubeViewsStatus = event => {
        var check = document.getElementById("y_v_check");
        var inputtag = document.getElementById("y_v_input");
        var rangetag = document.getElementById("y_v_range");
        var countrytag = document.getElementById("y_v_country");
        var agegroupmintag = document.getElementById("y_v_agegroup_min");
        var agegroupmaxtag = document.getElementById("y_v_agegroup_max");
        var agegrouptag = agegroupmintag + " to " + agegroupmaxtag;
        var maletag = document.getElementById("y_v_gmale");
        var femaletag = document.getElementById("y_v_gfemale");
        if (check.checked) {
            inputtag.disabled = false;
            rangetag.disabled = false;
            countrytag.disabled = false;
            agegroupmintag.disabled = false;
            agegroupmaxtag.disabled = false;
            agegroupmintag.setAttribute("style", "border: solid 1px black;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            agegroupmaxtag.setAttribute("style", "border: solid 1px black;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            maletag.disabled = false;
            femaletag.disabled = false;
            this.setState({ y_v_check: true });
        } else {
            inputtag.disabled = true;
            rangetag.disabled = true;
            countrytag.disabled = true;
            agegroupmintag.disabled = true;
            agegroupmaxtag.disabled = true;
            agegroupmintag.setAttribute("style", "border: solid 1px gray;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            agegroupmaxtag.setAttribute("style", "border: solid 1px gray;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            maletag.disabled = true;
            femaletag.disabled = true;
            this.setState({ y_v_check: false });
        }
        this.generateYoutubePrice(this.state.y_views, "views")
    };

    changeYoutubesubscribeStatus = event => {
        var check = document.getElementById("y_s_check");
        var inputtag = document.getElementById("y_s_input");
        var rangetag = document.getElementById("y_s_range");
        var countrytag = document.getElementById("y_s_country");
        var agegroupmintag = document.getElementById("y_s_agegroup_min");
        var agegroupmaxtag = document.getElementById("y_s_agegroup_max");
        var maletag = document.getElementById("y_s_gmale");
        var femaletag = document.getElementById("y_s_gfemale");
        if (check.checked) {
            inputtag.disabled = false;
            rangetag.disabled = false;
            countrytag.disabled = false;
            maletag.disabled = false;
            femaletag.disabled = false;
            agegroupmintag.disabled = false;
            agegroupmaxtag.disabled = false;
            agegroupmintag.setAttribute("style", "border: solid 1px black;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            agegroupmaxtag.setAttribute("style", "border: solid 1px black;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");

        } else {
            inputtag.disabled = true;
            rangetag.disabled = true;
            countrytag.disabled = true;
            agegroupmintag.disabled = true;
            agegroupmaxtag.disabled = true;
            agegroupmintag.setAttribute("style", "border: solid 1px gray;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            agegroupmaxtag.setAttribute("style", "border: solid 1px gray;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            maletag.disabled = true;
            femaletag.disabled = true;
        }
        this.generateYoutubePrice(this.state.y_subscribe, "subscribe")
    };

    changeFacebookPostlikeStatus = event => {
        var check = document.getElementById("f_pol_check");
        var inputtag = document.getElementById("f_pol_input");
        var rangetag = document.getElementById("f_pol_range");
        var countrytag = document.getElementById("f_pol_country");
        var agegroupmintag = document.getElementById("f_pol_agegroup_min");
        var agegroupmaxtag = document.getElementById("f_pol_agegroup_max");
        var agegrouptag = agegroupmintag + " to " + agegroupmaxtag;
        var maletag = document.getElementById("f_pol_gmale");
        var femaletag = document.getElementById("f_pol_gfemale");
        if (check.checked) {
            inputtag.disabled = false;
            rangetag.disabled = false;
            countrytag.disabled = false;
            agegroupmintag.disabled = false;
            agegroupmaxtag.disabled = false;
            agegroupmintag.setAttribute("style", "border: solid 1px black;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            agegroupmaxtag.setAttribute("style", "border: solid 1px black;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            maletag.disabled = false;
            femaletag.disabled = false;
            this.setState({ f_pl_check: true });
        } else {
            inputtag.disabled = true;
            rangetag.disabled = true;
            countrytag.disabled = true;
            agegroupmintag.disabled = true;
            agegroupmaxtag.disabled = true;
            agegroupmintag.setAttribute("style", "border: solid 1px gray;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            agegroupmaxtag.setAttribute("style", "border: solid 1px gray;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            maletag.disabled = true;
            femaletag.disabled = true;
            this.setState({ f_pl_check: false });
        }
        this.generateFacebookPrice(this.state.f_Polikes, "pol")
    };

    changeFacebookPagelikeStatus = event => {
        var check = document.getElementById("f_pal_check");
        var inputtag = document.getElementById("f_pal_input");
        var rangetag = document.getElementById("f_pal_range");
        var countrytag = document.getElementById("f_pal_country");
        var agegroupmintag = document.getElementById("f_pal_agegroup_min");
        var agegroupmaxtag = document.getElementById("f_pal_agegroup_max");
        var agegrouptag = agegroupmintag + " to " + agegroupmaxtag;
        var maletag = document.getElementById("f_pal_gmale");
        var femaletag = document.getElementById("f_pal_gfemale");
        if (check.checked) {
            inputtag.disabled = false;
            rangetag.disabled = false;
            countrytag.disabled = false;
            agegroupmintag.disabled = false;
            agegroupmaxtag.disabled = false;
            agegroupmintag.setAttribute("style", "border: solid 1px black;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            agegroupmaxtag.setAttribute("style", "border: solid 1px black;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            maletag.disabled = false;
            femaletag.disabled = false;
        } else {
            inputtag.disabled = true;
            rangetag.disabled = true;
            countrytag.disabled = true;
            agegroupmintag.disabled = true;
            agegroupmaxtag.disabled = true;
            agegroupmintag.setAttribute("style", "border: solid 1px gray;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            agegroupmaxtag.setAttribute("style", "border: solid 1px gray;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            maletag.disabled = true;
            femaletag.disabled = true;
        }
        this.generateFacebookPrice(this.state.f_Palikes, "pal")
    };

    changeFacebookShareStatus = event => {
        var check = document.getElementById("f_s_check");
        var inputtag = document.getElementById("f_s_input");
        var rangetag = document.getElementById("f_s_range");
        var countrytag = document.getElementById("f_s_country");
        var agegroupmintag = document.getElementById("f_s_agegroup_min");
        var agegroupmaxtag = document.getElementById("f_s_agegroup_max");
        var agegrouptag = agegroupmintag + " to " + agegroupmaxtag;
        var maletag = document.getElementById("f_s_gmale");
        var femaletag = document.getElementById("f_s_gfemale");
        if (check.checked) {
            inputtag.disabled = false;
            rangetag.disabled = false;
            countrytag.disabled = false;
            agegroupmintag.disabled = false;
            agegroupmaxtag.disabled = false;
            agegroupmintag.setAttribute("style", "border: solid 1px black;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            agegroupmaxtag.setAttribute("style", "border: solid 1px black;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            maletag.disabled = false;
            femaletag.disabled = false;
        } else {
            inputtag.disabled = true;
            rangetag.disabled = true;
            countrytag.disabled = true;
            agegroupmintag.disabled = true;
            agegroupmaxtag.disabled = true;
            agegroupmintag.setAttribute("style", "border: solid 1px gray;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            agegroupmaxtag.setAttribute("style", "border: solid 1px gray;border-radius: 5px; width: 50px; margin-left: 5px; padding: 2px");
            maletag.disabled = true;
            femaletag.disabled = true;
        }
        this.generateFacebookPrice(this.state.f_shares, "share")
    };

    changeInstagramFollowersStatus = event => {
        var check = document.getElementById("i_f_check");
        var inputtag = document.getElementById("i_f_input");
        var rangetag = document.getElementById("i_f_range");
        var countrytag = document.getElementById("i_f_country");
        var agegrouptag = document.getElementById("i_f_agegroup");
        var maletag = document.getElementById("i_f_gmale");
        var femaletag = document.getElementById("i_f_gfemale");
        if (check.checked) {
            inputtag.disabled = false;
            rangetag.disabled = false;
            countrytag.disabled = false;
            agegrouptag.disabled = false;
            maletag.disabled = false;
            femaletag.disabled = false;
            this.setState({ i_fol_check: true });
        } else {
            inputtag.disabled = true;
            rangetag.disabled = true;
            countrytag.disabled = true;
            agegrouptag.disabled = true;
            maletag.disabled = true;
            femaletag.disabled = true;
            this.setState({ i_fol_check: false });
        }
        this.generateInstagramPrice(this.state.i_followers)
    };

    changeInstagramlikesStatus = event => {
        var check = document.getElementById("i_l_check");
        var inputtag = document.getElementById("i_l_input");
        var rangetag = document.getElementById("i_l_range");
        var countrytag = document.getElementById("i_l_country");
        var agegrouptag = document.getElementById("i_l_agegroup");
        var maletag = document.getElementById("i_l_gmale");
        var femaletag = document.getElementById("i_l_gfemale");
        if (check.checked) {
            inputtag.disabled = false;
            rangetag.disabled = false;
            countrytag.disabled = false;
            agegrouptag.disabled = false;
            maletag.disabled = false;
            femaletag.disabled = false;
        } else {
            inputtag.disabled = true;
            rangetag.disabled = true;
            countrytag.disabled = true;
            agegrouptag.disabled = true;
            maletag.disabled = true;
            femaletag.disabled = true;
        }
        this.generateInstagramPrice(this.state.i_likes)
    };

    changeTwitterFollowersStatus = event => {
        var check = document.getElementById("t_f_check");
        var inputtag = document.getElementById("t_f_input");
        var rangetag = document.getElementById("t_f_range");
        var countrytag = document.getElementById("tw_f_country");
        var agegrouptag = document.getElementById("tw_f_agegroup");
        var maletag = document.getElementById("tw_f_gmale");
        var femaletag = document.getElementById("tw_f_gfemale");
        if (check.checked) {
            inputtag.disabled = false;
            rangetag.disabled = false;
            countrytag.disabled = false;
            agegrouptag.disabled = false;
            maletag.disabled = false;
            femaletag.disabled = false;
            this.setState({ tw_fol_check: true });
        } else {
            inputtag.disabled = true;
            rangetag.disabled = true;
            countrytag.disabled = true;
            agegrouptag.disabled = true;
            maletag.disabled = true;
            femaletag.disabled = true;
            this.setState({ tw_fol_check: false });
        }
        this.generateTwitterPrice(this.state.tw_followers)
    };

    changeTwitterlikesStatus = event => {
        var check = document.getElementById("t_l_check");
        var inputtag = document.getElementById("t_l_input");
        var rangetag = document.getElementById("t_l_range");
        var countrytag = document.getElementById("tw_l_country");
        var agegrouptag = document.getElementById("tw_l_agegroup");
        var maletag = document.getElementById("tw_l_gmale");
        var femaletag = document.getElementById("tw_l_gfemale");
        if (check.checked) {
            inputtag.disabled = false;
            rangetag.disabled = false;
            countrytag.disabled = false;
            agegrouptag.disabled = false;
            maletag.disabled = false;
            femaletag.disabled = false;
        } else {
            inputtag.disabled = true;
            rangetag.disabled = true;
            countrytag.disabled = true;
            agegrouptag.disabled = true;
            maletag.disabled = true;
            femaletag.disabled = true;
        }
        this.generateTwitterPrice(this.state.tw_likes)
    };

    changeTiktokFollowersStatus = event => {
        var check = document.getElementById("ti_f_check");
        var inputtag = document.getElementById("ti_f_input");
        var rangetag = document.getElementById("ti_f_range");
        var countrytag = document.getElementById("ti_f_country");
        var agegrouptag = document.getElementById("ti_f_agegroup");
        var maletag = document.getElementById("ti_f_gmale");
        var femaletag = document.getElementById("ti_f_gfemale");
        if (check.checked) {
            inputtag.disabled = false;
            rangetag.disabled = false;
            countrytag.disabled = false;
            agegrouptag.disabled = false;
            maletag.disabled = false;
            femaletag.disabled = false;
            this.setState({ ti_fol_check: true });
        } else {
            inputtag.disabled = true;
            rangetag.disabled = true;
            countrytag.disabled = true;
            agegrouptag.disabled = true;
            maletag.disabled = true;
            femaletag.disabled = true;
            this.setState({ ti_fol_check: false });
        }
        this.generateTiktokPrice(this.state.tt__followes)
    };

    changeWebViewStatus = event => {
        var check = document.getElementById("w_v_check");
        var inputtag = document.getElementById("w_v_input");
        var rangetag = document.getElementById("w_v_range");
        var countrytag = document.getElementById("w_v_country");
        var agegrouptagmin = document.getElementById("w_v_agegroup_min");
        var agegrouptagmax = document.getElementById("w_v_agegroup_max");
        var maletag = document.getElementById("w_v_gmale");
        var femaletag = document.getElementById("w_v_gfemale");
        if (check.checked) {
            inputtag.disabled = false;
            rangetag.disabled = false;
            countrytag.disabled = false;
            agegrouptagmin.disabled = false;
            agegrouptagmax.disabled = false;
            maletag.disabled = false;
            femaletag.disabled = false;
            this.setState({ w_v_check: true });
        } else {
            inputtag.disabled = true;
            rangetag.disabled = true;
            countrytag.disabled = true;
            agegrouptagmin.disabled = true;
            agegrouptagmax.disabled = true;
            maletag.disabled = true;
            femaletag.disabled = true;
            this.setState({ w_v_check: false });
        }
        this.generateWebPrice(this.state.w_views)
    };

    changeServeyViewStatus = event => {
        var check = document.getElementById("s_v_check");
        var inputtag = document.getElementById("s_v_input");
        var rangetag = document.getElementById("s_v_range");
        var countrytag = document.getElementById("s_v_country");
        var maletag = document.getElementById("s_v_gmale");
        var femaletag = document.getElementById("s_v_gfemale");
        if (check.checked) {
            inputtag.disabled = false;
            rangetag.disabled = false;
            countrytag.disabled = false;
            maletag.disabled = false;
            femaletag.disabled = false;
            this.setState({ s_v_check: true });
        } else {
            inputtag.disabled = true;
            rangetag.disabled = true;
            countrytag.disabled = true;
            maletag.disabled = true;
            femaletag.disabled = true;
            this.setState({ s_v_check: false });
        }
        this.generateServeyPrice(this.state.s_views)
    };

    changeTiktoklikesStatus = event => {
        var check = document.getElementById("ti_l_check");
        var inputtag = document.getElementById("ti_l_input");
        var rangetag = document.getElementById("ti_l_range");
        var countrytag = document.getElementById("ti_l_country");
        var agegrouptag = document.getElementById("ti_l_agegroup");
        var maletag = document.getElementById("ti_l_gmale");
        var femaletag = document.getElementById("ti_l_gfemale");
        if (check.checked) {
            inputtag.disabled = false;
            rangetag.disabled = false;
            countrytag.disabled = false;
            agegrouptag.disabled = false;
            maletag.disabled = false;
            femaletag.disabled = false;
        } else {
            inputtag.disabled = true;
            rangetag.disabled = true;
            countrytag.disabled = true;
            agegrouptag.disabled = true;
            maletag.disabled = true;
            femaletag.disabled = true;
        }
        this.generateTiktokPrice(this.state.tt_likes)
    };

    changeTiktokSharesStatus = event => {
        var check = document.getElementById("ti_s_check");
        var inputtag = document.getElementById("ti_s_input");
        var rangetag = document.getElementById("ti_s_range");
        var countrytag = document.getElementById("ti_s_country");
        var agegrouptag = document.getElementById("ti_s_agegroup");
        var maletag = document.getElementById("ti_s_gmale");
        var femaletag = document.getElementById("ti_s_gfemale");
        if (check.checked) {
            inputtag.disabled = false;
            rangetag.disabled = false;
            countrytag.disabled = false;
            agegrouptag.disabled = false;
            maletag.disabled = false;
            femaletag.disabled = false;
        } else {
            inputtag.disabled = true;
            rangetag.disabled = true;
            countrytag.disabled = true;
            agegrouptag.disabled = true;
            maletag.disabled = true;
            femaletag.disabled = true;
        }
        this.generateTiktokPrice(this.state.tt_shares)
    };

    redirectToOrders = (e) => {
        this.props.history.push('/myorders');
        window.location.reload();

    }

    GetYVPriceForCountry = (e) => {
        // var vcountry = document.getElementById("y_v_country");


        // var options = vcountry && vcountry.options;
        // var vresult = [];
        // var opt;
        // for (var i = 0, iLen = options.length; i < iLen; i++) {
        //     opt = options[i];

        //     if (opt.selected) {
        //         vresult.push(opt.value || opt.text);

        //     }
        // }
        // this.generateYoutubePrice(this.state.y_views,"views",vresult)
    }

    GetYSPriceForCountry = (e) => {
        // var scountry = document.getElementById("y_s_country");
        // var options = scountry && scountry.options;
        // var sresult = [];
        // var opt;
        // for (var i = 0, iLen = options.length; i < iLen; i++) {
        //     opt = options[i];

        //     if (opt.selected) {
        //         sresult.push(opt.value || opt.text);

        //     }
        // }
        // alert(sresult)

    }

    GetFPolPriceForCountry = (e) => {
        // var polcountry = document.getElementById("f_pol_country");

        // var options = polcountry && polcountry.options;
        // var polresult = [];
        // var opt;
        // for (var i = 0, iLen = options.length; i < iLen; i++) {
        //     opt = options[i];

        //     if (opt.selected) {
        //         polresult.push(opt.value || opt.text);

        //     }
        // }
        // alert(polcountry)

    }

    GetFPalPriceForCountry = (e) => {
        // var palcountry = document.getElementById("f_pal_country");
        // var options = palcountry && palcountry.options;
        // var palresult = [];
        // var opt;
        // for (var i = 0, iLen = options.length; i < iLen; i++) {
        //     opt = options[i];

        //     if (opt.selected) {
        //         palresult.push(opt.value || opt.text);

        //     }
        // }
        // alert(palcountry)

    }

    GetFSPriceForCountry = (e) => {
        // var scountry = document.getElementById("f_s_country");
        // var options = scountry && scountry.options;
        // var sresult = [];
        // var opt;
        // for (var i = 0, iLen = options.length; i < iLen; i++) {
        //     opt = options[i];

        //     if (opt.selected) {
        //         sresult.push(opt.value || opt.text);

        //     }
        // }
        // alert(scountry)

    }

    GetIFPriceForCountry = (e) => {
        // var fcountry = document.getElementById("i_f_country");
        // var options = fcountry && fcountry.options;
        // var fresult = [];
        // var opt;
        // for (var i = 0, iLen = options.length; i < iLen; i++) {
        //     opt = options[i];

        //     if (opt.selected) {
        //         fresult.push(opt.value || opt.text);

        //     }
        // }

        // alert(fcountry)

    }

    GetTwFPriceForCountry = (e) => {
        // var fcountry = document.getElementById("tw_f_country");
        // var options = fcountry && fcountry.options;
        // var fresult = [];
        // var opt;
        // for (var i = 0, iLen = options.length; i < iLen; i++) {
        //     opt = options[i];

        //     if (opt.selected) {
        //         fresult.push(opt.value || opt.text);

        //     }
        // }
        // alert(fcountry)

    }

    GetTiFPriceForCountry = (e) => {

        // var fcountry = document.getElementById("ti_f_country");
        // var options = fcountry && fcountry.options;
        // var fresult = [];
        // var opt;
        // for (var i = 0, iLen = options.length; i < iLen; i++) {
        //     opt = options[i];

        //     if (opt.selected) {
        //         fresult.push(opt.value || opt.text);

        //     }
        // }
        // alert(fcountry)

    }

    changeNavLink(menu) {
        var menu1 = document.getElementById("menu11");
        var menu2 = document.getElementById("menu22");
        var menu3 = document.getElementById("menu33");
        var menu4 = document.getElementById("menu44");
        var menu5 = document.getElementById("menu55");
        var menu6 = document.getElementById("menu66");
        var menu7 = document.getElementById("menu77");
        if (menu === "menu1") {
            menu2.classList.remove("active");
            menu3.classList.remove("active");
            menu4.classList.remove("active");
            menu5.classList.remove("active");
            menu6.classList.remove("active");
            menu7.classList.remove("active");
            this.generateYoutubePrice(this.state.y_views, "views");
            this.setState({ serveyclick: false });
        } else if (menu === "menu2") {
            menu1.classList.remove("active");
            menu3.classList.remove("active");
            menu4.classList.remove("active");
            menu5.classList.remove("active");
            menu6.classList.remove("active");
            menu7.classList.remove("active");
            this.generateFacebookPrice(this.state.f_Polikes, "pol");
            this.setState({ serveyclick: false });
        } else if (menu === "menu3") {
            menu1.classList.remove("active");
            menu2.classList.remove("active");
            menu4.classList.remove("active");
            menu5.classList.remove("active");
            menu6.classList.remove("active");
            menu7.classList.remove("active");
            this.generateInstagramPrice(this.state.i_followers);
            this.setState({ serveyclick: false });
        } else if (menu === "menu4") {
            menu1.classList.remove("active");
            menu2.classList.remove("active");
            menu3.classList.remove("active");
            menu5.classList.remove("active");
            menu6.classList.remove("active");
            menu7.classList.remove("active");
            this.generateTwitterPrice(this.state.tw_followers);
            this.setState({ serveyclick: false });
        } else if (menu === "menu5") {
            menu1.classList.remove("active");
            menu2.classList.remove("active");
            menu3.classList.remove("active");
            menu4.classList.remove("active");
            menu6.classList.remove("active");
            menu7.classList.remove("active");
            this.generateTiktokPrice(this.state.tt__followes);
            this.setState({ serveyclick: false });
        } else if (menu === "menu6") {
            menu1.classList.remove("active");
            menu2.classList.remove("active");
            menu3.classList.remove("active");
            menu4.classList.remove("active");
            menu5.classList.remove("active");
            menu7.classList.remove("active");
            this.generateWebPrice(this.state.w_views);
            this.setState({ serveyclick: false });
        } else if (menu === "menu7") {
            menu1.classList.remove("active");
            menu2.classList.remove("active");
            menu3.classList.remove("active");
            menu4.classList.remove("active");
            menu5.classList.remove("active");
            menu6.classList.remove("active");
            this.generateServeyPrice(this.state.s_views);
            this.setState({ serveyclick: true });
        }

    }

    checkoutOrder = (e) => {
        var menu1 = document.getElementById("menu11");
        var menu2 = document.getElementById("menu22");
        var menu3 = document.getElementById("menu33");
        var menu4 = document.getElementById("menu44");
        var menu5 = document.getElementById("menu55");
        var menu6 = document.getElementById("menu66");
        var menu7 = document.getElementById("menu77");

        if (menu1.classList.contains("active")) {

            var y_v_check = document.getElementById("y_v_check");
            var y_s_check = document.getElementById("y_s_check");
            var vcountry = document.getElementById("y_v_country");


            var options = vcountry && vcountry.options;
            var vresult = [];
            var opt;
            for (var i = 0, iLen = options.length; i < iLen; i++) {
                opt = options[i];

                if (opt.selected) {
                    vresult.push(opt.value || opt.text);

                }
            }
            var vagegroupmin = document.getElementById("y_v_agegroup_min").value;
            var vagegroupmax = document.getElementById("y_v_agegroup_max").value;
            var vagegroup = vagegroupmin + " to " + vagegroupmax;
            var vgendertag = document.getElementById("y_v_gmale");
            var vgender = "";
            if (vgendertag.checked) {
                vgender = "male";
            } else {
                vgender = "female";
            }
            var scountry = document.getElementById("y_s_country");
            var options = scountry && scountry.options;
            var sresult = [];
            var opt;
            for (var i = 0, iLen = options.length; i < iLen; i++) {
                opt = options[i];

                if (opt.selected) {
                    sresult.push(opt.value || opt.text);

                }
            }
            var sagegroupmin = document.getElementById("y_s_agegroup_min").value;
            var sagegroupmax = document.getElementById("y_s_agegroup_max").value;
            var sagegroup = sagegroupmin + " to " + sagegroupmax;
            var sgendertag = document.getElementById("y_s_gmale");
            var sgender = "";
            if (sgendertag.checked) {
                sgender = "male";
            } else {
                sgender = "female";
            }
            if (y_v_check.checked && y_s_check.checked) {
                let orderdetails = { user: Cookies.get('user'), country: vresult + ',' + sresult, social: 'youtube', agegroup: vagegroup + ',' + sagegroup, gender: vgender + ',' + sgender, link: this.state.youtube_link, cost: this.state.final_earning, service: 'views,subscribers', count: this.state.y_views + "," + this.state.y_subscribe }

                orderService.saveorder(orderdetails).then(res => {
                    //if (res.status === 200 && res.statusText === 'OK') {
                        if (res.data === "success") {
                            toast('Order Completed!', { position: 'bottom' });
                            window.location.reload();
                        }
                    //}
                });
            } else if (y_v_check.checked) {
                let orderdetails = { user: Cookies.get('user'), country: vresult + '', social: 'youtube', agegroup: vagegroup, gender: vgender, link: this.state.youtube_link, cost: this.state.final_earning, service: 'views', count: this.state.y_views }

                orderService.saveorder(orderdetails).then(res => {
                    //if (res.status === 200 && res.statusText === 'OK') {
                        if (res.data === "success") {
                            toast('Order Completed!', { position: 'bottom' });
                            window.location.reload();
                        }
                    //}
                });
            } else if (y_s_check.checked) {
                let orderdetails = { user: Cookies.get('user'), country: sresult + '', social: 'youtube', agegroup: sagegroup, gender: sgender, link: this.state.youtube_link, cost: this.state.final_earning, service: 'subscribers', count: this.state.y_subscribe }

                orderService.saveorder(orderdetails).then(res => {
                    //if (res.status === 200 && res.statusText === 'OK') {
                        if (res.data === "success") {
                            toast('Order Completed!', { position: 'bottom' });
                            window.location.reload();
                        }
                   // }
                });
            }

        } else if (menu2.classList.contains("active")) {
            var f_pol_check = document.getElementById("f_pol_check");
            var f_pal_check = document.getElementById("f_pal_check");
            var f_s_check = document.getElementById("f_s_check");
            var polcountry = document.getElementById("f_pol_country");
            var palcountry = document.getElementById("f_pal_country");
            var scountry = document.getElementById("f_s_country");

            var options = polcountry && polcountry.options;
            var polresult = [];
            var opt;
            for (var i = 0, iLen = options.length; i < iLen; i++) {
                opt = options[i];

                if (opt.selected) {
                    polresult.push(opt.value || opt.text);

                }
            }
            var polagegroupmin = document.getElementById("f_pol_agegroup_min").value;
            var polagegroupmax = document.getElementById("f_pol_agegroup_max").value;
            var polagegroup = polagegroupmin + " to " + polagegroupmax;


            var options = palcountry && palcountry.options;
            var palresult = [];
            var opt;
            for (var i = 0, iLen = options.length; i < iLen; i++) {
                opt = options[i];

                if (opt.selected) {
                    palresult.push(opt.value || opt.text);

                }
            }
            var palagegroupmin = document.getElementById("f_pal_agegroup_min").value;
            var palagegroupmax = document.getElementById("f_pal_agegroup_max").value;
            var palagegroup = palagegroupmin + " to " + palagegroupmax;



            var options = scountry && scountry.options;
            var sresult = [];
            var opt;
            for (var i = 0, iLen = options.length; i < iLen; i++) {
                opt = options[i];

                if (opt.selected) {
                    sresult.push(opt.value || opt.text);

                }
            }
            var sagegroupmin = document.getElementById("f_s_agegroup_min").value;
            var sagegroupmax = document.getElementById("f_s_agegroup_max").value;
            var sagegroup = sagegroupmin + " to " + sagegroupmax;

            // var polagegroup = document.getElementById("f_pol_agegroup").value;
            // var palagegroup = document.getElementById("f_pal_agegroup").value;
            // var sagegroup = document.getElementById("f_s_agegroup").value;

            var polgendertag = document.getElementById("f_pol_gmale");
            var palgendertag = document.getElementById("f_pal_gmale");
            var sgendertag = document.getElementById("f_s_gmale");

            var polgender = "";
            if (polgendertag.checked) {
                polgender = "male";
            } else {
                polgender = "female";
            }
            var palgender = "";
            if (palgendertag.checked) {
                palgender = "male";
            } else {
                palgender = "female";
            }
            var sgender = "";
            if (sgendertag.checked) {
                sgender = "male";
            } else {
                sgender = "female";
            }

            if (f_pol_check.checked && f_pal_check.checked && f_s_check.checked) {
                let orderdetails = { user: Cookies.get('user'), country: polresult + ',' + palresult + ',' + sresult, social: 'facebook', agegroup: polagegroup + ',' + palagegroup + ',' + sagegroup, gender: polgender + ',' + palgender + ',' + sgender, link: this.state.facebook_link, cost: this.state.final_earning, service: 'post likes,page likes,shares', count: this.state.f_Polikes + "," + this.state.f_Palikes + ',' + this.state.f_shares }

                orderService.saveorder(orderdetails).then(res => {
                    //if (res.status === 200 && res.statusText === 'OK') {
                        if (res.data === "success") {
                            toast('Order Completed!', { position: 'bottom' });
                            window.location.reload();
                        }
                    //}
                });
            } else if (f_pol_check.checked && f_pal_check.checked) {
                let orderdetails = { user: Cookies.get('user'), country: polresult + ',' + palresult, social: 'facebook', agegroup: polagegroup + ',' + palagegroup, gender: polgender + ',' + palgender, link: this.state.facebook_link, cost: this.state.final_earning, service: 'post likes,page likes', count: this.state.f_Polikes + "," + this.state.f_Palikes }

                orderService.saveorder(orderdetails).then(res => {
                    //if (res.status === 200 && res.statusText === 'OK') {
                        if (res.data === "success") {
                            toast('Order Completed!', { position: 'bottom' });
                            window.location.reload();
                        }
                   // }
                });
            } else if (f_pol_check.checked && f_s_check.checked) {
                let orderdetails = { user: Cookies.get('user'), country: polresult + ',' + sresult, social: 'facebook', agegroup: polagegroup + ',' + sagegroup, gender: polgender + ',' + sgender, link: this.state.facebook_link, cost: this.state.final_earning, service: 'post likes,shares', count: this.state.f_Polikes + "," + this.state.f_shares }

                orderService.saveorder(orderdetails).then(res => {
                    //if (res.status === 200 && res.statusText === 'OK') {
                        if (res.data === "success") {
                            toast('Order Completed!', { position: 'bottom' });
                            window.location.reload();
                        }
                   // }
                });
            } else if (f_pal_check.checked && f_s_check.checked) {
                let orderdetails = { user: Cookies.get('user'), country: palresult + ',' + sresult, social: 'facebook', agegroup: palagegroup + ',' + sagegroup, gender: palgender + ',' + sgender, link: this.state.facebook_link, cost: this.state.final_earning, service: 'page likes,shares', count: this.state.f_Palikes + "," + this.state.f_shares }

                orderService.saveorder(orderdetails).then(res => {
                    //if (res.status === 200 && res.statusText === 'OK') {
                        if (res.data === "success") {
                            toast('Order Completed!', { position: 'bottom' });
                            window.location.reload();
                        }
                    //}
                });
            } else if (f_pol_check.checked) {
                let orderdetails = { user: Cookies.get('user'), country: polresult, social: 'facebook', agegroup: polagegroup, gender: polgender, link: this.state.facebook_link, cost: this.state.final_earning, service: 'post likes', count: this.state.f_Polikes }

                orderService.saveorder(orderdetails).then(res => {
                    //if (res.status === 200 && res.statusText === 'OK') {
                        if (res.data === "success") {
                            toast('Order Completed!', { position: 'bottom' });
                            window.location.reload();
                        }
                    //}
                });
            } else if (f_pal_check.checked) {
                let orderdetails = { user: Cookies.get('user'), country: palresult, social: 'facebook', agegroup: palagegroup, gender: palgender, link: this.state.facebook_link, cost: this.state.final_earning, service: 'page likes', count: this.state.f_Palikes }

                orderService.saveorder(orderdetails).then(res => {
                    //if (res.status === 200 && res.statusText === 'OK') {
                        if (res.data === "success") {
                            toast('Order Completed!', { position: 'bottom' });
                            window.location.reload();
                        }
                    //}
                });
            } else if (f_s_check.checked) {
                let orderdetails = { user: Cookies.get('user'), country: sresult, social: 'facebook', agegroup: palagegroup, gender: palgender, link: this.state.facebook_link, cost: this.state.final_earning, service: 'shares', count: this.state.f_Palikes }

                orderService.saveorder(orderdetails).then(res => {
                   // if (res.status === 200 && res.statusText === 'OK') {
                        if (res.data === "success") {
                            toast('Order Completed!', { position: 'bottom' });
                            window.location.reload();
                        }
                    //}
                });
            }
        } else if (menu3.classList.contains("active")) {
            var i_f_check = document.getElementById("i_f_check");
            // var i_l_check = document.getElementById("i_l_check");
            var fcountry = document.getElementById("i_f_country");
            var options = fcountry && fcountry.options;
            var fresult = [];
            var opt;
            for (var i = 0, iLen = options.length; i < iLen; i++) {
                opt = options[i];

                if (opt.selected) {
                    fresult.push(opt.value || opt.text);

                }
            }
            var fagegroupmin = document.getElementById("i_f_agegroup_min").value;
            var fagegroupmax = document.getElementById("i_f_agegroup_max").value;
            var fagegroup = fagegroupmin + " to " + fagegroupmax;
            // var fagegroup = document.getElementById("i_f_agegroup").value;
            var fgendertag = document.getElementById("i_f_gmale");
            var fgender = "";
            if (fgendertag.checked) {
                fgender = "male";
            } else {
                fgender = "female";
            }
            // var lcountry = document.getElementById("i_l_country").value;
            // var lagegroup = document.getElementById("i_l_agegroup").value;
            // var lgendertag = document.getElementById("i_l_gmale");
            // var lgender = "";
            // if (lgendertag.checked) {
            //     lgender = "male";
            // } else {
            //     lgender = "female";
            // }

            // if (i_f_check.checked && i_l_check.checked) {
            //     let orderdetails = { user: Cookies.get('user'), country: fcountry + ',' + lcountry, social: 'instagram', agegroup: fagegroup + ',' + lagegroup, gender: fgender + ',' + lgender, link: this.state.youtube_link, cost: 50.00, service: 'followers,likes', count: this.state.i_followers + "," + this.state.i_likes }

            //     orderService.saveorder(orderdetails).then(res => {
            //         if (res.status === 200 && res.statusText === 'OK') {
            //             if (res.data === "success") {
            //                 window.location.reload();
            //             }
            //         }
            //     });
            // } else 
            if (i_f_check.checked) {
                let orderdetails = { user: Cookies.get('user'), country: fresult, social: 'instagram', agegroup: fagegroup, gender: fgender, link: this.state.insta_link, cost: this.state.final_earning, service: 'followers', count: this.state.i_followers }

                orderService.saveorder(orderdetails).then(res => {
                    //if (res.status === 200 && res.statusText === 'OK') {
                        if (res.data === "success") {
                            toast('Order Completed!', { position: 'bottom' });
                            window.location.reload();
                        }
                   // }
                });
            }
            // else if (i_l_check.checked) {
            //     let orderdetails = { user: Cookies.get('user'), country: lcountry, social: 'instagram', agegroup: lagegroup, gender: lgender, link: this.state.insta_link, cost: 50.00, service: 'likes', count: this.state.i_likes }

            //     orderService.saveorder(orderdetails).then(res => {
            //         if (res.status === 200 && res.statusText === 'OK') {
            //             if (res.data === "success") {
            //                 window.location.reload();
            //             }
            //         }
            //     });
            // }
        } else if (menu4.classList.contains("active")) {
            var t_f_check = document.getElementById("t_f_check");
            // var tw_l_check = document.getElementById("t_l_check");
            var fcountry = document.getElementById("tw_f_country");
            var options = fcountry && fcountry.options;
            var fresult = [];
            var opt;
            for (var i = 0, iLen = options.length; i < iLen; i++) {
                opt = options[i];

                if (opt.selected) {
                    fresult.push(opt.value || opt.text);

                }
            }
            var fagegroupmin = document.getElementById("tw_f_agegroup_min").value;
            var fagegroupmax = document.getElementById("tw_f_agegroup_max").value;
            var fagegroup = fagegroupmin + " to " + fagegroupmax;
            // var fagegroup = document.getElementById("tw_f_agegroup").value;
            var fgendertag = document.getElementById("tw_f_gmale");
            var fgender = "";
            if (fgendertag.checked) {
                fgender = "male";
            } else {
                fgender = "female";
            }
            // var lcountry = document.getElementById("tw_l_country").value;
            // var lagegroup = document.getElementById("tw_l_agegroup").value;
            // var lgendertag = document.getElementById("tw_l_gmale");
            // var lgender = "";
            // if (lgendertag.checked) {
            //     lgender = "male";
            // } else {
            //     lgender = "female";
            // }

            // if (tw_f_check.checked && tw_l_check.checked) {
            //     let orderdetails = { user: Cookies.get('user'), country: fcountry + ',' + lcountry, social: 'twitter', agegroup: fagegroup + ',' + lagegroup, gender: fgender + ',' + lgender, link: this.state.twitter_link, cost: 50.00, service: 'followers,likes', count: this.state.tw_followers + "," + this.state.tw_likes }

            //     orderService.saveorder(orderdetails).then(res => {
            //         if (res.status === 200 && res.statusText === 'OK') {
            //             if (res.data === "success") {
            //                 window.location.reload();
            //             }
            //         }
            //     });
            // } else 
            if (t_f_check.checked) {
                let orderdetails = { user: Cookies.tt('user'), country: fresult, social: 'twitter', agegroup: fagegroup, gender: fgender, link: this.state.twitter_link, cost: this.state.final_earning, service: 'followers', count: this.state.tw_followers }

                orderService.saveorder(orderdetails).then(res => {
                    //if (res.status === 200 && res.statusText === 'OK') {
                        if (res.data === "success") {
                            window.location.reload();
                            toast('Order Completed!', { position: 'bottom' });
                        }
                    //}
                });
            }
            // else if (tw_l_check.checked) {
            //     let orderdetails = { user: Cookies.get('user'), country: lcountry, social: 'twitter', agegroup: lagegroup, gender: lgender, link: this.state.twitter_link, cost: 50.00, service: 'likes', count: this.state.tw_likes }

            //     orderService.saveorder(orderdetails).then(res => {
            //         if (res.status === 200 && res.statusText === 'OK') {
            //             if (res.data === "success") {
            //                 window.location.reload();
            //             }
            //         }
            //     });
            // }
        } else if (menu5.classList.contains("active")) {
            var ti_f_check = document.getElementById("ti_f_check");
            var fcountry = document.getElementById("ti_f_country");
            var options = fcountry && fcountry.options;
            var fresult = [];
            var opt;
            for (var i = 0, iLen = options.length; i < iLen; i++) {
                opt = options[i];

                if (opt.selected) {
                    fresult.push(opt.value || opt.text);

                }
            }
            var fagegroupmin = document.getElementById("ti_f_agegroup_min").value;
            var fagegroupmax = document.getElementById("ti_f_agegroup_max").value;
            var fagegroup = fagegroupmin + " to " + fagegroupmax;
            // var fagegroup = document.getElementById("ti_f_agegroup").value;
            var fgendertag = document.getElementById("ti_f_gmale");
            var fgender = "";
            if (fgendertag.checked) {
                fgender = "male";
            } else {
                fgender = "female";
            }
            if (ti_f_check.checked) {
                let orderdetails = { user: Cookies.get('user'), country: fresult, social: 'tiktok', agegroup: fagegroup, gender: fgender, link: this.state.tiktok_link, cost: this.state.final_earning, service: 'followers', count: this.state.tw_followers }

                orderService.saveorder(orderdetails).then(res => {
                   // if (res.status === 200 && res.statusText === 'OK') {
                        if (res.data === "success") {
                            toast('Order Completed!', { position: 'bottom' });
                            window.location.reload();
                        }
                    //}
                });
            }
        } else if (menu6.classList.contains("active")) {
            var ti_f_check = document.getElementById("w_v_check");
            var fcountry = document.getElementById("w_v_country");
            var options = fcountry && fcountry.options;
            var fresult = [];
            var opt;
            for (var i = 0, iLen = options.length; i < iLen; i++) {
                opt = options[i];

                if (opt.selected) {
                    fresult.push(opt.value || opt.text);

                }
            }
            var fagegroupmin = document.getElementById("w_v_agegroup_min").value;
            var fagegroupmax = document.getElementById("w_v_agegroup_max").value;
            var fagegroup = fagegroupmin + " to " + fagegroupmax;
            // var fagegroup = document.getElementById("ti_f_agegroup").value;
            var fgendertag = document.getElementById("w_v_gmale");
            var fgender = "";
            if (fgendertag.checked) {
                fgender = "male";
            } else {
                fgender = "female";
            }
            if (ti_f_check.checked) {
                let orderdetails = { user: Cookies.get('user'), country: fresult, social: 'website', agegroup: fagegroup, gender: fgender, link: this.state.web_link, cost: this.state.final_earning, service: 'views', count: this.state.w_views }

                orderService.saveorder(orderdetails).then(res => {
                   // if (res.status === 200 && res.statusText === 'OK') {
                        if (res.data === "success") {
                            toast('Order Completed!', { position: 'bottom' });
                            window.location.reload();
                        }
                    //}
                });
            }

        } else if (menu7.classList.contains("active")) {
            var user = Cookies.get('user');
            let settings = { user: user, serveyid: this.state.serveyid }

            serveyService.completeQuestion(settings).then(res => {
                if (res.data == "success") {
                    toast('Order Completed!', { position: 'bottom' });
                    window.location.reload();
                    
                }
            });
        }

    }
   //convert currency
    // getmoreCurrency(){
    //     //alert("aaaaaaaaaaa");
    //     if(this.state.total_price != "Contact us for get this price" && !(this.state.youtube_link == "" && this.state.facebook_link == "" && this.state.insta_link == "" && this.state.twitter_link == "" && this.state.tiktok_link == "" && this.state.web_link == "" && this.state.serveyclick == false)){
    //     const convertCurrency = require('nodejs-currency-converter');
    //     var datetime = new Date();
    //     var cur = document.getElementById("cr_country").value;
        
        
    //         var new1 = convertCurrency(1, this.state.total_price, cur,datetime.toISOString().slice(0,10)).then(response => response);
    //         this.state.total_price=new1;
    //         return this.state.total_price;
    //        // alert(new1);
    //     //    console.log(datetime.toISOString().slice(0,10));
    //     //    console.log(this.state.total_price);
    //     //    console.log(cur);
    //         //return this.state.total_price;
    //     }
    

    // }

    checkClick() {
        alert("aaaaaaaaaaa")
    }

    render() {


        $(window).on('load', function () {
            $("#cover").fadeOut(2050);
            });
            console.log(country_currency_gtr);
        return (

            <div style={{ backgroundColor: "white" }}>
                <Helmet>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <link type="text/css" rel="stylesheet" href="/assets/css/app69fd.css?id=d97cc8504a674a3a9f71" />
                    <link rel="stylesheet" href="/assets/css/dash.css" />
                    <script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>
                    <link href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css" rel="stylesheet" type="text/css" />




                </Helmet>

                <header class="header" style={{ marginLeft: "63px", height: "63px" }}>
                    <section class="container header__inner">
                        <div class="header__right">

                            <span class="utext">{this.state.total_earning}</span>
                            <Link to="/profile" >
                                <li class="nav-item dropdown  user-menu">
                                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" aria-haspopup="true" aria-expanded="false">

                                        <i class="fa fa-user"></i>
                                        <span class="hidden-xs"> &nbsp; {this.state.username}</span>
                                    </a>
                                </li>
                            </Link>
                        </div>

                        
                        <div class="header__left">

<span class="utext"></span>
<Link to="/userhome" >
    <li class="nav-item dropdown  user-menu">
        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" aria-haspopup="true" aria-expanded="false">

            <i class="fa fa-home"></i>
            <span class="hidden-xs"></span>
        </a>
    </li>
</Link>
</div>
                    </section>

                </header>

                <div class="main">
                <script data-ad-client="ca-pub-9982225669544459" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

                    {/* ////////////////////preloader////////////////////////////////////////////////////////// */}
  {/* <div id="cover"> <span class="glyphicon glyphicon-refresh w3-spin preloader-Icon"></span> 
  
  <div id="preloader">
  <div id="loader"></div>
</div>

</div> */}



          {/* ////////////////////preloader////////////////////////////////////////////////////////// */}

                    <div class="s-layout">
                        {/* <!-- Sidebar --> */}
                        <div class="s-layout__sidebar" style={{ height: "100%" }}>
                            <a class="s-sidebar__trigger" href="#0">
                                <i class="fa fa-bars"></i>
                            </a>

                            <nav class="s-sidebar__nav" style={{ height: "100%" }}>
                                <ul>
                                    <li>
                                        <a class="s-sidebar__nav-link" href="/dash">
                                            <i class="fa fa-th-large"></i><em>Dashbboard</em>
                                        </a>
                                    </li>

                                    <li>
                                        <a class="s-sidebar__nav-link" href="/earnpage">
                                            <i class="fa fa-dollar"></i><em>Earn Points</em>
                                        </a>
                                    </li>

                                    <li>
                                        <a class="s-sidebar__nav-link" href="/referal">
                                            <i class="fa fa-share-alt"></i><em>Referral</em>
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <a class="s-sidebar__nav-link" href="/createorder">
                                            <i class="fa fa-plus"></i><em>Promote Youtube/Social</em>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="s-sidebar__nav-link" href="/myorders">
                                            <i class="fa fa-list"></i><em>My Orders</em>
                                        </a>
                                    </li>
                                  
                                
                                    <li>
                                        <a class="s-sidebar__nav-link" href="/earnhistory">
                                            <i class="fa fa-bitcoin"></i><em>Billings</em>
                                        </a>
                                    </li>

                                    <br></br>
                                    <li>
                                        <a class="s-sidebar__nav-link" onClick={this.logout}>
                                            <i class="fa fa-flash"></i><em>Logout</em>
                                        </a>
                                    </li>

                                </ul>
                            </nav>
                        </div>

                        {/* <!-- Content --> */}
                        <main class="s-layout__content" style={{ height: "100%", marginTop: "50px", width: "100%", }}>
                            <div>
                                <div class="container">
                                    <h2 style={{ marginBottom: "10px", textAlign: "center", marginTop: "50px" }}><strong> I Want To Promote My </strong></h2>
                                    <div class="" style={{ marginLeft: "20px", marginRight: "20px", marginBottom: "20px", width: "95%" }}>


                                        <div class="container" style={{ marginTop: "10px" }}>
                                            <br />
                                            <ul class="nav nav-tabs" role="tablist">
                                                <li class="nav-item">

                                                    <a class="nav-link active menu1" data-toggle="tab" href="#menu1" id="menu11" onClick={() => this.changeNavLink('menu1')}><img class="button-enter__icon" src="assets/img/icons/yt.png" alt="" /></a>
                                                </li>
                                                <li class="nav-item">

                                                    <a class="nav-link menu2" data-toggle="tab" href="#menu2" id="menu22" onClick={() => this.changeNavLink('menu2')}><img class="button-enter__icon" src="assets/img/icons/facebook.png" alt="" /></a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link menu3" data-toggle="tab" href="#menu3" id="menu33" onClick={() => this.changeNavLink('menu3')}><img class="button-enter__icon" src="assets/img/icons/ig.png" alt="" /></a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link menu4" data-toggle="tab" href="#menu4" id="menu44" onClick={() => this.changeNavLink('menu4')}><img class="button-enter__icon" src="assets/img/icons/tw.png" alt="" /></a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link menu5" data-toggle="tab" href="#menu5" id="menu55" onClick={() => this.changeNavLink('menu5')}><img class="button-enter__icon" src="assets/img/icons/tik.png" alt="" /></a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link menu6" data-toggle="tab" href="#menu6" id="menu66" onClick={() => this.changeNavLink('menu6')}><img class="button-enter__icon" src="assets/img/icons/clicknow.png" alt="" /></a>

                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link menu7" data-toggle="tab" href="#menu7" id="menu77" onClick={() => this.changeNavLink('menu7')}><img class="button-enter__icon" src="assets/img/icons/survey.png" alt="" /></a>
                                                </li>

                                            </ul>

                                            {/* social media button navigation */}
                                        </div>
                                        <div class="tab-content" >


                                            <div id="menu1" class="container tab-pane active" style={{ marginTop: "15px" }}><br />
                                                <h4 style={{ marginLeft: "10px" }}>Add your YOUTUBE URL below:</h4>

                                                <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                                                    <div class="input-group">
                                                        <input type="search" placeholder="https://www.youtube.com/watch.. or https://www.youtube.com/channel.." value={this.state.youtube_link} onChange={this.changeYLink} aria-describedby="button-addon1" class="form-control border-0 bg-light" />

                                                    </div>
                                                </div>

                                                {/* set view count */}
                                                {/* <form> */}
                                                <div class="form-group" style={{ marginLeft: "5px" }}><img class="button-enter__icon" src="assets/img/icons/eye.png" alt="" />
                                                    <input type="checkbox" id="y_v_check" checked={this.state.y_v_check} onChange={this.changeYoutubeViewsStatus} style={{ marginLeft: "5px", height: "13px", fontSize: "15px" }} /><span style={{ marginLeft: "10px", height: " 0px", fontSize: "19px" }}><strong>Views</strong></span></div>
                                                <div class="form-group">
                                                    <h6 style={{ height: "37px", marginLeft: "10px" }}>QTY :&nbsp;<input type="number" value={this.state.y_views} onChange={this.changeViews} id="y_v_input" name="quantity" min="100" max="50000" style={{ width: "150px", borderStyle: "solid", borderRadius: "200px", borderColor: "#e7e7e7", borderTopColor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }} /></h6>
                                                </div>

                                                <div class="form-group">
                                                    <div class="row">
                                                        <div class="col-12 col-md-4">
                                                            <span><b>Region</b></span>&nbsp;&nbsp;&nbsp;
                                                            <select className="selectpicker" id="y_v_country" multiple data-live-search="true" onChange={() => this.generateYoutubePrice(this.state.y_views, "views")} data-actions-box="true">
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
                                                        <div class="col-12 col-md-4">
                                                            <div>
                                                                <span><b>Age Group</b></span>&nbsp;&nbsp;
                                                                <span>From:</span>
                                                                <input type="number" min="14" max="60" id="y_v_agegroup_min" style={{ border: "solid 1px", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                &nbsp;&nbsp;
                                                                <span>To:</span>
                                                                <input type="number" min="14" max="60" id="y_v_agegroup_max" style={{ border: "solid 1px", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                            </div>
                                                            <br />
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <span style={{ marginTop: "10px" }}><b>Gender</b></span>&nbsp;&nbsp;
                                                                <input id="y_v_gmale" type="radio" name="y_viewsradio" checked={this.state.y_v_gmalecheck} onClick={e => this.setState({ y_v_gmalecheck: "checked", y_v_gfemalecheck: "" })} />Male&nbsp;
                                                                <input id="y_v_gfemale" type="radio" name="y_viewsradio" checked={this.state.y_v_gfemalecheck} onClick={e => this.setState({ y_v_gmalecheck: "", y_v_gfemalecheck: "checked" })} />Female&nbsp;
                                                        </div>
                                                    </div>
                                                    {/* <button class="button" id="y_s_settings" type="button"  style={{ marginLeft: "10px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "200px", border: "solid", color: "rgb(11,11,11)", fontSize: "14px", height: "38px", borderColor: "#e7e7e7" }}><strong>Settings</strong></button> */}
                                                </div>
                                                <input type="range" id="y_v_range" min={this.state.min_yviews} max={this.state.max_yviews} step="1" value={this.state.y_views} onChange={this.changeViews} style={{ width: '100%' }} />
                                                {/* <input type="range" class="custom-range" id="customRange1" min="1000" max="500000" value="0" name="range" oninput="amount.value=range.value" /> */}
                                                <output id="amount" name="amount" for="range">{this.state.y_views}</output>



                                                <form style={{ marginTop: "3%" }}>
                                                    <div class="form-group" style={{ marginLeft: "5px" }}><img class="button-enter__icon" src="assets/img/icons/registration.png" alt="" style={{ backgroundColor: "#ffffff" }} />
                                                        <input type="checkbox" onChange={this.changeYoutubesubscribeStatus} id="y_s_check" style={{ marginLeft: "5px", height: "13px", fontSize: "15px" }} /><span style={{ marginLeft: "10px", height: "0px", fontSize: "19px" }}><strong>Subscribers</strong></span></div>
                                                    <div class="form-group">
                                                        <h6 style={{ height: "37px", marginLeft: "10px" }}>QTY :&nbsp;<input type="number" value={this.state.y_subscribe} id="y_s_input" disabled="disable" onChange={this.changeSubscribers} name="quantity" min="100" max="500000" style={{ width: "150px", borderStyle: "solid", borderRadius: "200px", borderColor: "#e7e7e7", borderTopolor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }} /></h6>

                                                    </div>
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Region</b></span>&nbsp;&nbsp;&nbsp;
                                                        <select id="y_s_country" className="selectpicker" multiple data-live-search="true" onChange={() => this.generateYoutubePrice(this.state.y_subscribe, "subscribers")} data-actions-box="true">

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
                                                            <div class="col-12 col-md-4">
                                                                <div>
                                                                    <span><b>Age Group</b></span>&nbsp;&nbsp;
                                                                <span>From:</span>
                                                                    <input type="number" disabled="disable" min="14" max="60" id="y_s_agegroup_min" style={{ border: "solid 1px gray", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                &nbsp;&nbsp;
                                                                <span>To:</span>
                                                                    <input type="number" disabled="disable" min="14" max="60" id="y_s_agegroup_max" style={{ border: "solid 1px gray", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                </div>
                                                                <br />
                                                            </div>
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Gender</b></span>&nbsp;&nbsp;
                                                    <input id="y_s_gmale" type="radio" name="y_subscriberadio" checked={this.state.y_s_gmalecheck} onClick={e => this.setState({ y_s_gmalecheck: 'checked', y_s_gfemalecheck: '' })} />Male&nbsp;
                                                    <input id="y_s_gfemale" type="radio" name="y_subscriberadio" checked={this.state.y_s_gfemalecheck} onClick={e => this.setState({ y_s_gmalecheck: '', y_s_gfemalecheck: 'checked' })} />Female&nbsp;

                                                            </div>
                                                            {/* <button class="button" id="y_s_settings" type="button"  style={{ marginLeft: "10px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "200px", border: "solid", color: "rgb(11,11,11)", fontSize: "14px", height: "38px", borderColor: "#e7e7e7" }}><strong>Settings</strong></button> */}
                                                        </div>
                                                    </div>
                                                    <label for="customRange1"></label>
                                                    <input type="range" disabled="disable" id="y_s_range" min={this.state.min_ysub} max={this.state.max_ysub} step="1" value={this.state.y_subscribe} onChange={this.changeSubscribers} style={{ width: '100%' }} />
                                                    {/* <input type="range" class="custom-range" id="customRange1" min="1000" max="500000" value="0" name="range" oninput="amount.value=range.value" /> */}
                                                    <output id="amount" name="amount" for="range">{this.state.y_subscribe}</output>



                                                </form>
                                            </div>

                                            <div id="menu2" class="container tab-pane fade" style={{ marginTop: "15px" }}><br />
                                                <h4 style={{ marginLeft: "10px" }}>Add your FACEBOOK URL below:</h4>

                                                <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                                                    <div class="input-group">
                                                        <input type="search" placeholder="https://www.facebook.com/..." value={this.state.facebook_link} onChange={this.changeFLink} aria-describedby="button-addon1" class="form-control border-0 bg-light" />

                                                    </div>
                                                </div>


                                                <form>
                                                    <div class="form-group" style={{ marginLeft: "5px" }}><img class="button-enter__icon" src="assets/img/icons/like2.png" alt="" style={{ backgroundColor: "#ffffff" }} />
                                                        <input type="checkbox" id="f_pol_check" checked={this.state.f_pl_check} onChange={this.changeFacebookPostlikeStatus} style={{ marginLeft: "5px", height: "13px", fontSize: "15px" }} /><span style={{ marginLeft: "10px", height: "0px", fontSize: "19px" }}><strong>Post Likes</strong></span></div>
                                                    <div class="form-group">
                                                        <h6 style={{ height: "37px", marginLeft: "10px" }}>QTY :&nbsp;<input type="number" value={this.state.f_Polikes} id="f_pol_input" name="quantity" onChange={this.changePostLikes} min="1000" max="500000" style={{ width: "150px", borderStyle: "solid", borderRadius: "200px", borderColor: "#e7e7e7", borderTopolor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }} /></h6>

                                                    </div>
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Region</b></span>
                                                                <select class="form-select" id="f_pol_country" className="selectpicker" multiple data-live-search="true" onChange={() => this.generateFacebookPrice(this.state.f_Polikes, "pol")} data-actions-box="true">

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
                                                            <div class="col-12 col-md-4">
                                                                <div>
                                                                    <span><b>Age Group</b></span>&nbsp;&nbsp;
                                                                <span>From:</span>
                                                                    <input type="number" min="14" max="60" id="f_pol_agegroup_min" style={{ border: "solid 1px", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                &nbsp;&nbsp;
                                                                <span>To:</span>
                                                                    <input type="number" min="14" max="60" id="f_pol_agegroup_max" style={{ border: "solid 1px", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                </div>
                                                                <br />
                                                            </div>
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Gender</b></span>&nbsp;&nbsp;
                                                    <input id="f_pol_gmale" type="radio" name="f_pol_radio" checked={this.state.f_pal_gmalecheck} onClick={e => this.setState({ f_pal_gmalecheck: "checked", f_pal_gfemalecheck: "" })} />Male&nbsp;
                                                    <input id="f_pol_gfemale" type="radio" name="f_pol_radio" checked={this.state.f_pal_gfemalecheck} onClick={e => this.setState({ f_pal_gmalecheck: "", f_pal_gfemalecheck: "checked" })} />Female&nbsp;
                                                    {/* <button class="button" id="y_s_settings" type="button"  style={{ marginLeft: "10px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "200px", border: "solid", color: "rgb(11,11,11)", fontSize: "14px", height: "38px", borderColor: "#e7e7e7" }}><strong>Settings</strong></button> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <label for="customRange1"></label>
                                                    <input type="range" id="f_pol_range" min={this.state.min_fpolike} max={this.state.max_fpolike} step="1" value={this.state.f_Polikes} onChange={this.changePostLikes} style={{ width: '100%' }} />
                                                    {/* <input type="range" class="custom-range" id="customRange1" min="1000" max="500000" value="0" name="range" oninput="amount.value=range.value" /> */}
                                                    <output id="amount" name="amount" for="range">{this.state.f_Polikes}</output>



                                                </form>

                                                <form>
                                                    <div class="form-group" style={{ marginLeft: "5px", marginTop: "2%" }}><img class="button-enter__icon" src="assets/img/icons/like2.png" alt="" style={{ backgroundColor: "#ffffff" }} />
                                                        <input type="checkbox" id="f_pal_check" onChange={this.changeFacebookPagelikeStatus} style={{ marginLeft: "5px", height: "13px", fontSize: "15px" }} /><span style={{ marginLeft: "10px", height: "0px", fontSize: "19px" }}><strong>Page Likes</strong></span></div>
                                                    <div class="form-group">
                                                        <h6 style={{ height: "37px", marginLeft: "10px" }}>QTY :&nbsp;<input type="number" value={this.state.f_Palikes} disabled="disable" id="f_pal_input" name="quantity" onChange={this.changePageLikes} min="1000" max="500000" style={{ width: "150px", borderStyle: "solid", borderRadius: "200px", borderColor: "#e7e7e7", borderTopolor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }} /></h6>

                                                    </div>
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Region</b></span>
                                                                <select class="form-select" id="f_pal_country" className="selectpicker" multiple data-live-search="true" onChange={() => this.generateFacebookPrice(this.state.f_Palikes, "pal")} data-actions-box="true">
                                                                    

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
                                                            <div class="col-12 col-md-4">
                                                                <div>
                                                                    <span><b>Age Group</b></span>&nbsp;&nbsp;
                                                                <span>From:</span>
                                                                    <input type="number" min="14" max="60" id="f_pal_agegroup_min" style={{ border: "solid 1px gray", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                &nbsp;&nbsp;
                                                                <span>To:</span>
                                                                    <input type="number" min="14" max="60" id="f_pal_agegroup_max" style={{ border: "solid 1px gray", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                </div>
                                                                <br />
                                                            </div>
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Gender</b></span>&nbsp;&nbsp;
                                                    <input id="f_pal_gmale"type="radio" name="f_pal_radio" checked={this.state.f_pol_gmalecheck} onClick={e => this.setState({ f_pol_gmalecheck: "checked", f_pol_gfemalecheck: "" })} />Male&nbsp;
                                                    <input id="f_pal_gfemale" type="radio" name="f_pal_radio" checked={this.state.f_pol_gfemalecheck} onClick={e => this.setState({ f_pol_gmalecheck: "", f_pol_gfemalecheck: "checked" })} />Female&nbsp;
                                                    {/* <button class="button" id="y_s_settings" type="button"  style={{ marginLeft: "10px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "200px", border: "solid", color: "rgb(11,11,11)", fontSize: "14px", height: "38px", borderColor: "#e7e7e7" }}><strong>Settings</strong></button> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <label for="customRange1"></label>
                                                    <input type="range" id="f_pal_range" disabled="disable" min={this.state.min_fpalike} max={this.state.max_fpalike} step="1" value={this.state.f_Palikes} onChange={this.changePageLikes} style={{ width: '100%' }} />
                                                    {/* <input type="range" class="custom-range" id="customRange1" min="1000" max="500000" value="0" name="range" oninput="amount.value=range.value" /> */}
                                                    <output id="amount" name="amount" for="range">{this.state.f_Palikes}</output>


                                                </form>

                                                <form>
                                                    <div class="form-group" style={{ marginLeft: "5px", marginTop: "2%" }}><img class="button-enter__icon" src="assets/img/icons/share2.png" alt="" style={{ backgroundColor: "#ffffff" }} />
                                                        <input type="checkbox" id="f_s_check" onChange={this.changeFacebookShareStatus} style={{ marginLeft: "5px", height: "13px", fontSize: "15px" }} /><span style={{ marginLeft: "10px", height: "0px", fontSize: "19px" }}><strong>Shares</strong></span></div>
                                                    <div class="form-group">
                                                        <h6 style={{ height: "37px", marginLeft: "10px" }}>QTY :&nbsp;<input type="number" value={this.state.f_shares} disabled="disable" id="f_s_input" onChange={this.changeFShares} name="quantity" min="100" max="500000" style={{ width: "150px", borderStyle: "solid", borderRadius: "200px", borderColor: "#e7e7e7", borderTopolor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }} /></h6>

                                                    </div>
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Region</b></span>
                                                                <select class="form-select" id="f_s_country" className="selectpicker" multiple data-live-search="true" onChange={() => this.generateFacebookPrice(this.state.f_shares, "share")} data-actions-box="true">

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
                                                            <div class="col-12 col-md-4">
                                                                <div>
                                                                    <span><b>Age Group</b></span>&nbsp;&nbsp;
                                                                <span>From:</span>
                                                                    <input type="number" disabled="disable" min="14" max="60" id="f_s_agegroup_min" style={{ border: "solid 1px gray", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                &nbsp;&nbsp;
                                                                <span>To:</span>
                                                                    <input type="number" disabled="disable" min="14" max="60" id="f_s_agegroup_max" style={{ border: "solid 1px gray", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                </div>
                                                                <br />
                                                            </div>
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Gender</b></span>&nbsp;&nbsp;
                                                    <input id="f_s_gmale" type="radio" name="f_s_radio" checked={this.state.f_s_gmalecheck} onClick={e => this.setState({ f_s_gmalecheck: "checked", f_s_gfemalecheck: "" })} />Male&nbsp;
                                                    <input id="f_s_gfemale" type="radio" name="f_s_radio" checked={this.state.f_s_gfemalecheck} onClick={e => this.setState({ f_s_gmalecheck: "", f_s_gfemalecheck: "checked" })} />Female&nbsp;
                                                    {/* <button class="button" id="y_s_settings" type="button"  style={{ marginLeft: "10px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "200px", border: "solid", color: "rgb(11,11,11)", fontSize: "14px", height: "38px", borderColor: "#e7e7e7" }}><strong>Settings</strong></button> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <label for="customRange1"></label>
                                                    <input type="range" id="f_s_range" disabled="disable" min={this.state.min_fshares} max={this.state.max_fshares} step="1" value={this.state.f_shares} onChange={this.changeFShares} style={{ width: '100%' }} />
                                                    {/* <input type="range" class="custom-range" id="customRange1" min="1000" max="500000" value="0" name="range" oninput="amount.value=range.value" /> */}
                                                    <output id="amount" name="amount" for="range">{this.state.f_shares}</output>

                                                </form>

                                            </div>

                                            <div id="menu3" class="container tab-pane fade" style={{ marginTop: "15px" }} ><br />
                                                <h4 style={{ marginLeft: "10px" }}>Add your INSTAGRAM URL below:</h4>

                                                <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                                                    <div class="input-group">
                                                        <input type="search" placeholder="https://www.instagram.com/..." value={this.state.insta_link} onChange={this.changeILink} aria-describedby="button-addon1" class="form-control border-0 bg-light" />

                                                    </div>
                                                </div>

                                                <form>
                                                    <div class="form-group" style={{ marginLeft: "5px" }}><img class="button-enter__icon" src="assets/img/icons/registration.png" alt="" style={{ backgroundColor: "#ffffff" }} />
                                                        <input type="checkbox" checked={this.state.i_fol_check} id="i_f_check" onChange={this.changeInstagramFollowersStatus} style={{ marginLeft: "5px", height: "13px", fontSize: "15px" }} /><span style={{ marginLeft: "10px", height: "0px", fontSize: "19px" }}><strong>Followers</strong></span></div>
                                                    <div class="form-group">
                                                        <h6 style={{ height: "37px", marginLeft: "10px" }}>QTY :&nbsp;<input type="number" value={this.state.i_followers} id="i_f_input" onChange={this.changeIFollowers} name="quantity" min="100" max="500000" style={{ width: "150px", borderStyle: "solid", borderRadius: "200px", borderColor: "#e7e7e7", borderTopolor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }} /></h6>

                                                    </div>
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Region</b></span>
                                                                <select class="form-select" id="i_f_country" className="selectpicker" multiple data-live-search="true" onChange={() => this.generateInstagramPrice(this.state.i_followers, "followers")} data-actions-box="true">

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
                                                            <div class="col-12 col-md-4">
                                                                <div>
                                                                    <span><b>Age Group</b></span>&nbsp;&nbsp;
                                                                <span>From:</span>
                                                                    <input type="number" min="14" max="60" id="i_f_agegroup_min" style={{ border: "solid 1px gray", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                &nbsp;&nbsp;
                                                                <span>To:</span>
                                                                    <input type="number" min="14" max="60" id="i_f_agegroup_max" style={{ border: "solid 1px gray", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                </div>
                                                                <br />
                                                            </div>
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Gender</b></span>&nbsp;&nbsp;
                                                    <input id="i_f_gmale" type="radio" name="i_f_radio" checked="checked" />Male&nbsp;
                                                    <input id="i_f_gfemale" type="radio" name="i_f_radio" />Female&nbsp;
                                                    {/* <button class="button" id="y_s_settings" type="button"  style={{ marginLeft: "10px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "200px", border: "solid", color: "rgb(11,11,11)", fontSize: "14px", height: "38px", borderColor: "#e7e7e7" }}><strong>Settings</strong></button> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <label for="customRange1"></label>
                                                    <input type="range" id="i_f_range" min="1000" max="500000" step="1" value={this.state.i_followers} onChange={this.changeIFollowers} style={{ width: '100%' }} />
                                                    {/* <input type="range" class="custom-range" id="customRange1" min="1000" max="500000" value="0" name="range" oninput="amount.value=range.value" /> */}
                                                    <output id="amount" name="amount" for="range">{this.state.i_followers}</output>


                                                </form>

                                                {/* <form>
                                                    <div class="form-group" style={{ marginLeft: "5px", marginTop: "2%" }}><img class="button-enter__icon" src="assets/img/icons/like2.png" alt="" style={{ backgroundColor: "#ffffff" }} />
                                                        <input type="checkbox" id="i_l_check" onChange={this.changeInstagramlikesStatus} style={{ marginLeft: "5px", height: "13px", fontSize: "15px" }} /><span style={{ marginLeft: "10px", height: "0px", fontSize: "19px" }}><strong>Likes</strong></span></div>
                                                    <div class="form-group">
                                                        <h6 style={{ height: "37px", marginLeft: "10px" }}>QTY :&nbsp;<input type="number" id="i_l_input" disabled="disable" onChange={this.changeILikes} name="quantity" min="100" max="500000" style={{ width: "150px", borderStyle: "solid", borderRadius: "200px", borderColor: "#e7e7e7", borderTopolor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }} /></h6>

                                                    </div>
                                                    <div class="form-group">
                                                        <span>Select Region</span>&nbsp;&nbsp;
                                                        <select class="form-select" id="i_l_country" disabled="disable" aria-label="Default select example">
                                                            <option selected>--Select--</option>
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
                                                    &nbsp;&nbsp;&nbsp;
                                                    <span>Age Group</span>&nbsp;&nbsp;
                                                    <select class="form-select" id="i_l_agegroup" disabled="disable" aria-label="Default select example">
                                                            <option selected>--Select--</option>
                                                            <option value="15 to 18">15 to 18</option>
                                                            <option value="19 to 21">19 to 21</option>
                                                            <option value="22 to 30">22 to 30</option>
                                                            <option value="31 to 45">31 to 45</option>
                                                            <option value="46 to 60">46 to 60</option>
                                                        </select>
                                                    &nbsp;&nbsp;&nbsp;
                                                    <span>Gender</span>&nbsp;&nbsp;
                                                    <input id="i_l_gmale" disabled="disable" type="radio" name="i_l_radio" checked="checked" />Male&nbsp;
                                                    <input id="i_l_gfemale" disabled="disable" type="radio" name="i_l_radio" />Female&nbsp;
                                                    
                                                    </div>
                                                    <label for="customRange1"></label>
                                                    <input type="range" id="i_l_range" disabled="disable" min="1000" max="500000" step="1" value={this.state.i_likes} onChange={this.changeILikes} style={{ width: '100%' }} />
                                                    
                                                    <output id="amount" name="amount" for="range">{this.state.i_likes}</output>


                                                </form> */}
                                            </div>

                                            <div id="menu4" class="container tab-pane fade" style={{ marginTop: "15px" }}><br />
                                                <h4 style={{ marginLeft: "10px" }}>Add your TWITTER URL below:</h4>

                                                <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                                                    <div class="input-group">
                                                        <input type="search" placeholder="https://twitter.com/" value={this.state.twitter_link} onChange={this.changeTWLink} aria-describedby="button-addon1" class="form-control border-0 bg-light" />

                                                    </div>
                                                </div>

                                                <form>
                                                    <div class="form-group" style={{ marginLeft: "5px" }}><img class="button-enter__icon" src="assets/img/icons/registration.png" alt="" style={{ backgroundColor: "#ffffff" }} />
                                                        <input type="checkbox" checked={this.state.tw_fol_check} id="t_f_check" onChange={this.changeTwitterFollowersStatus} style={{ marginLeft: "5px", height: "13px", fontSize: "15px" }} /><span style={{ marginLeft: "10px", height: "0px", fontSize: "19px" }}><strong>Followers</strong></span></div>
                                                    <div class="form-group">
                                                        <h6 style={{ height: "37px", marginLeft: "10px" }}>QTY :&nbsp;<input type="number" value={this.state.tw_followers} id="t_f_input" onChange={this.changeTwFollowers} name="quantity" min="100" max="500000" style={{ width: "150px", borderStyle: "solid", borderRadius: "200px", borderColor: "#e7e7e7", borderTopolor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }} /></h6>

                                                    </div>
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Region</b></span>
                                                                <select class="form-select" id="tw_f_country" className="selectpicker" multiple data-live-search="true" onChange={() => this.generateTwitterPrice(this.state.tw_followers, "followers")} data-actions-box="true">

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
                                                            <div class="col-12 col-md-4">
                                                                <div>
                                                                    <span><b>Age Group</b></span>&nbsp;&nbsp;
                                                                <span>From:</span>
                                                                    <input type="number" min="14" max="60" id="tw_f_agegroup_min" style={{ border: "solid 1px gray", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                &nbsp;&nbsp;
                                                                <span>To:</span>
                                                                    <input type="number" min="14" max="60" id="tw_f_agegroup_max" style={{ border: "solid 1px gray", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                </div>
                                                                <br />
                                                            </div>
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Gender</b></span>&nbsp;&nbsp;
                                                    <input id="tw_f_gmale" type="radio" name="tw_f_radio" checked="checked" />Male&nbsp;
                                                    <input id="tw_f_gfemale" type="radio" name="tw_f_radio" />Female&nbsp;
                                                    {/* <button class="button" id="y_s_settings" type="button"  style={{ marginLeft: "10px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "200px", border: "solid", color: "rgb(11,11,11)", fontSize: "14px", height: "38px", borderColor: "#e7e7e7" }}><strong>Settings</strong></button> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <label for="customRange1"></label>
                                                    <input type="range" id="t_f_range" min="1000" max="500000" step="1" value={this.state.tw_followers} onChange={this.changeTwFollowers} style={{ width: '100%' }} />
                                                    {/* <input type="range" class="custom-range" id="customRange1" min="1000" max="500000" value="0" name="range" oninput="amount.value=range.value" /> */}
                                                    <output id="amount" name="amount" for="range">{this.state.tw_followers}</output>


                                                </form>

                                                {/* <form>
                                                    <div class="form-group" style={{ marginLeft: "5px", marginTop: "2%" }}><img class="button-enter__icon" src="assets/img/icons/like2.png" alt="" style={{ backgroundColor: "#ffffff" }} />
                                                        <input type="checkbox" id="t_l_check" onChange={this.changeTwitterlikesStatus} style={{ marginLeft: "5px", height: "13px", fontSize: "15px" }} /><span style={{ marginLeft: "10px", height: "0px", fontSize: "19px" }}><strong>Likes</strong></span></div>
                                                    <div class="form-group">
                                                        <h6 style={{ height: "37px", marginLeft: "10px" }}>QTY :&nbsp;<input type="number" id="t_l_input" disabled="disable" onChange={this.changeTwLikes} name="quantity" min="100" max="500000" style={{ width: "150px", borderStyle: "solid", borderRadius: "200px", borderColor: "#e7e7e7", borderTopolor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }} /></h6>

                                                    </div>

                                                    <label for="customRange1"></label>
                                                    <input type="range" disabled="disable" id="t_l_range" min="1000" max="500000" step="1" value={this.state.tw_likes} onChange={this.changeTwLikes} style={{ width: '100%' }} />
                                                    
                                                    <output id="amount" name="amount" for="range">{this.state.tw_likes}</output>

                                                    <div class="form-group">
                                                        <span>Select Region</span>&nbsp;&nbsp;
                                                        <select class="form-select" id="tw_l_country" disabled="disable" aria-label="Default select example">
                                                            <option selected>--Select--</option>
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
                                                    &nbsp;&nbsp;&nbsp;
                                                    <span>Age Group</span>&nbsp;&nbsp;
                                                    <select class="form-select" id="tw_l_agegroup" disabled="disable" aria-label="Default select example">
                                                            <option selected>--Select--</option>
                                                            <option value="15 to 18">15 to 18</option>
                                                            <option value="19 to 21">19 to 21</option>
                                                            <option value="22 to 30">22 to 30</option>
                                                            <option value="31 to 45">31 to 45</option>
                                                            <option value="46 to 60">46 to 60</option>
                                                        </select>
                                                    &nbsp;&nbsp;&nbsp;
                                                    <span>Gender</span>&nbsp;&nbsp;
                                                    <input id="tw_l_gmale" disabled="disable" type="radio" name="tw_l_radio" checked="checked" />Male&nbsp;
                                                    <input id="tw_l_gfemale" disabled="disable" type="radio" name="tw_l_radio" />Female&nbsp;
                                                    
                                                    </div>
                                                </form> */}

                                            </div>

                                            <div id="menu5" class="container tab-pane fade" style={{ marginTop: "15px" }}><br />
                                                <h4 style={{ marginLeft: "10px" }}>Add your TIKTOK URL below:</h4>

                                                <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                                                    <div class="input-group">
                                                        <input type="search" placeholder="https://www.tiktok.com/" value={this.state.tiktok_link} onChange={this.changeTILink} aria-describedby="button-addon1" class="form-control border-0 bg-light" />

                                                    </div>
                                                </div>

                                                <h6 style={{ marginLeft: "10px", marginTop: "-18px" }}>Paste TikTok URL or enter keywords to search</h6>

                                                <form>
                                                    <div class="form-group" style={{ marginLeft: "5px" }}><img class="button-enter__icon" src="assets/img/icons/registration.png" alt="" style={{ backgroundColor: "#ffffff" }} />
                                                        <input type="checkbox" checked={this.state.ti_fol_check} id="ti_f_check" onChange={this.changeTiktokFollowersStatus} style={{ marginLeft: "5px", height: "13px", fontSize: "15px" }} /><span style={{ marginLeft: "10px", height: "0px", fontSize: "19px" }}><strong>Followers</strong></span></div>
                                                    <div class="form-group">
                                                        <h6 style={{ height: "37px", marginLeft: "10px" }}>QTY :&nbsp;<input type="number" value={this.state.tt__followes} id="ti_f_input" onChange={this.changeTtFollowers} name="quantity" min="100" max="500000" style={{ width: "150px", borderStyle: "solid", borderRadius: "200px", borderColor: "#e7e7e7", borderTopolor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }} /></h6>

                                                    </div>
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Region</b></span>
                                                                <select class="form-select" id="ti_f_country" className="selectpicker" multiple data-live-search="true" onChange={() => this.generateTiktokPrice(this.state.tt__followes, "followers")} data-actions-box="true">

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
                                                            <div class="col-12 col-md-4">
                                                                <div>
                                                                    <span><b>Age Group</b></span>&nbsp;&nbsp;
                                                                <span>From:</span>
                                                                    <input type="number" min="14" max="60" id="ti_f_agegroup_min" style={{ border: "solid 1px gray", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                &nbsp;&nbsp;
                                                                <span>To:</span>
                                                                    <input type="number" min="14" max="60" id="ti_f_agegroup_max" style={{ border: "solid 1px gray", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                </div>
                                                                <br />
                                                            </div>
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Gender</b></span>&nbsp;&nbsp;
                                                    <input id="ti_f_gmale" type="radio" name="ti_f_radio" checked="checked" />Male&nbsp;
                                                    <input id="ti_f_gfemale" type="radio" name="ti_f_radio" />Female&nbsp;
                                                    {/* <button class="button" id="y_s_settings" type="button"  style={{ marginLeft: "10px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "200px", border: "solid", color: "rgb(11,11,11)", fontSize: "14px", height: "38px", borderColor: "#e7e7e7" }}><strong>Settings</strong></button> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <label for="customRange1"></label>
                                                    <input type="range" id="ti_f_range" min="1000" max="500000" step="1" value={this.state.tt__followes} onChange={this.changeTtFollowers} style={{ width: '100%' }} />
                                                    {/* <input type="range" class="custom-range" id="customRange1" min="1000" max="500000" value="0" name="range" oninput="amount.value=range.value" /> */}
                                                    <output id="amount" name="amount" for="range">{this.state.tt__followes}</output>

                                                </form>

                                                {/* <form>
                                                    <div class="form-group" style={{ marginLeft: "5px", marginTop: "2%" }}><img class="button-enter__icon" src="assets/img/icons/like2.png" alt="" style={{ backgroundColor: "#ffffff" }} />
                                                        <input type="checkbox" id="ti_l_check" onChange={this.changeTiktoklikesStatus} style={{ marginLeft: "5px", height: "13px", fontSize: "15px" }} /><span style={{ marginLeft: "10px", height: "0px", fontSize: "19px" }}><strong>Likes</strong></span></div>
                                                    <div class="form-group">
                                                        <h6 style={{ height: "37px", marginLeft: "10px" }}>QTY :&nbsp;<input type="number" id="ti_l_input" disabled="disable" onChange={this.changeTtLikes} name="quantity" min="100" max="500000" style={{ width: "150px", borderStyle: "solid", borderRadius: "200px", borderColor: "#e7e7e7", borderTopolor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }} /></h6>

                                                    </div>
                                                    <div class="form-group">
                                                        <span>Select Region</span>&nbsp;&nbsp;
                                                        <select class="form-select" id="ti_l_country" disabled="disable" aria-label="Default select example">
                                                            <option selected>--Select--</option>
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
                                                    &nbsp;&nbsp;&nbsp;
                                                    <span>Age Group</span>&nbsp;&nbsp;
                                                    <select class="form-select" id="ti_l_agegroup" disabled="disable" aria-label="Default select example">
                                                            <option selected>--Select--</option>
                                                            <option value="15 to 18">15 to 18</option>
                                                            <option value="19 to 21">19 to 21</option>
                                                            <option value="22 to 30">22 to 30</option>
                                                            <option value="31 to 45">31 to 45</option>
                                                            <option value="46 to 60">46 to 60</option>
                                                        </select>
                                                    &nbsp;&nbsp;&nbsp;
                                                    <span>Gender</span>&nbsp;&nbsp;
                                                    <input id="ti_l_gmale" disabled="disable" type="radio" name="ti_s_radio" checked="checked" />Male&nbsp;
                                                    <input id="ti_l_gfemale" disabled="disable" type="radio" name="ti_s_radio" />Female&nbsp;
                                                    
                                                    </div>
                                                    <label for="customRange1"></label>
                                                    <input type="range" id="ti_l_range" disabled="disable" min="1000" max="500000" step="1" value={this.state.tt_likes} onChange={this.changeTtLikes} style={{ width: '100%' }} />
                                                    
                                                    <output id="amount" name="amount" for="range">{this.state.tt_likes}</output>


                                                </form>

                                                <form>
                                                    <div class="form-group" style={{ marginLeft: "5px", marginTop: "2%" }}><img class="button-enter__icon" src="assets/img/icons/share2.png" alt="" style={{ backgroundColor: "#ffffff" }} />
                                                        <input type="checkbox" id="ti_s_check" onChange={this.changeTiktokSharesStatus} style={{ marginLeft: "5px", height: "13px", fontSize: "15px" }} /><span style={{ marginLeft: "10px", height: "0px", fontSize: "19px" }}><strong>Shares</strong></span></div>
                                                    <div class="form-group">
                                                        <h6 style={{ height: "37px", marginLeft: "10px" }}>QTY :&nbsp;<input type="number" onChange={this.changeTtShares} id="ti_s_input" disabled="disable" name="quantity" min="100" max="500000" style={{ width: "150px", borderStyle: "solid", borderRadius: "200px", borderColor: "#e7e7e7", borderTopolor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }} /></h6>

                                                    </div>
                                                    <div class="form-group">
                                                        <span>Select Region</span>&nbsp;&nbsp;
                                                        <select class="form-select" id="ti_s_country" disabled="disable" aria-label="Default select example">
                                                            <option selected>--Select--</option>
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
                                                    &nbsp;&nbsp;&nbsp;
                                                    <span>Age Group</span>&nbsp;&nbsp;
                                                    <select class="form-select" id="ti_s_agegroup" disabled="disable" aria-label="Default select example">
                                                            <option selected>--Select--</option>
                                                            <option value="15 to 18">15 to 18</option>
                                                            <option value="19 to 21">19 to 21</option>
                                                            <option value="22 to 30">22 to 30</option>
                                                            <option value="31 to 45">31 to 45</option>
                                                            <option value="46 to 60">46 to 60</option>
                                                        </select>
                                                    &nbsp;&nbsp;&nbsp;
                                                    <span>Gender</span>&nbsp;&nbsp;
                                                    <input id="ti_s_gmale" disabled="disable" type="radio" name="ti_s_radio" checked="checked" />Male&nbsp;
                                                    <input id="ti_s_gfemale" disabled="disable" type="radio" name="ti_s_radio" />Female&nbsp;
                                                    
                                                    </div>
                                                    <label for="customRange1"></label>
                                                    <input type="range" id="ti_s_range" disabled="disable" min="1000" max="500000" step="1" value={this.state.tt_shares} onChange={this.changeTtShares} style={{ width: '100%' }} />
                                                    
                                                    <output id="amount" name="amount" for="range">{this.state.tt_shares}</output>

                                                </form>  */}
                                            </div>
                                            <div id="menu6" class="container tab-pane fade" style={{ marginTop: "15px" }}><br />
                                                <h4 style={{ marginLeft: "10px" }}>Add your Web URL below:</h4>

                                                <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                                                    <div class="input-group">
                                                        <input type="search" placeholder="https://www.yoursite.com/" value={this.state.web_link} onChange={this.changeWLink} aria-describedby="button-addon1" class="form-control border-0 bg-light" />

                                                    </div>
                                                </div>

                                                <h6 style={{ marginLeft: "10px", marginTop: "-18px" }}>Paste Web URL</h6>

                                                <form>
                                                    <div class="form-group" style={{ marginLeft: "5px" }}><img class="button-enter__icon" src="assets/img/icons/registration.png" alt="" style={{ backgroundColor: "#ffffff" }} />
                                                        <input type="checkbox" checked={this.state.w_v_check} id="w_v_check" onChange={this.changeWebViewStatus} style={{ marginLeft: "5px", height: "13px", fontSize: "15px" }} /><span style={{ marginLeft: "10px", height: "0px", fontSize: "19px" }}><strong>Views</strong></span></div>
                                                    <div class="form-group">
                                                        <h6 style={{ height: "37px", marginLeft: "10px" }}>QTY :&nbsp;<input type="number" value={this.state.w_views} id="w_v_input" onChange={this.changeWviews} name="quantity" min="1000" max="500000" style={{ width: "150px", borderStyle: "solid", borderRadius: "200px", borderColor: "#e7e7e7", borderTopolor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }} /></h6>

                                                    </div>
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Region</b></span>
                                                                <select class="form-select" id="w_v_country" className="selectpicker" multiple data-live-search="true" onChange={() => this.generateWebPrice(this.state.w_views, "views")} data-actions-box="true">

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
                                                            <div class="col-12 col-md-4">
                                                                <div>
                                                                    <span><b>Age Group</b></span>&nbsp;&nbsp;
                                                                <span>From:</span>
                                                                    <input type="number" min="14" max="60" id="w_v_agegroup_min" style={{ border: "solid 1px gray", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                &nbsp;&nbsp;
                                                                <span>To:</span>
                                                                    <input type="number" min="14" max="60" id="w_v_agegroup_max" style={{ border: "solid 1px gray", width: "50px", marginLeft: "5px", padding: "2px", borderRadius: "5px" }} />
                                                                </div>
                                                                <br />
                                                            </div>
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Gender</b></span>&nbsp;&nbsp;
                                                    <input id="w_v_gmale" type="radio" name="w_v_radio" checked="checked" />Male&nbsp;
                                                    <input id="w_v_gfemale" type="radio" name="w_v_radio" />Female&nbsp;
                                                    {/* <button class="button" id="y_s_settings" type="button"  style={{ marginLeft: "10px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "200px", border: "solid", color: "rgb(11,11,11)", fontSize: "14px", height: "38px", borderColor: "#e7e7e7" }}><strong>Settings</strong></button> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <label for="customRange1"></label>
                                                    <input type="range" id="w_v_range" min="1000" max="500000" step="1" value={this.state.w_views} onChange={this.changeWviews} style={{ width: '100%' }} />
                                                    {/* <input type="range" class="custom-range" id="customRange1" min="1000" max="500000" value="0" name="range" oninput="amount.value=range.value" /> */}
                                                    <output id="amount" name="amount" for="range">{this.state.w_views}</output>

                                                </form>

                                            </div>


                                            <div id="menu7" class="container tab-pane" style={{ marginTop: "15px" }}><br />
                                                {/* <h4 style={{ marginLeft: "10px" }}>Add your serveys:</h4> */}
                                                <form>
                                                    <div class="form-group" style={{ marginLeft: "5px" }}><img class="button-enter__icon" src="assets/img/icons/registration.png" alt="" style={{ backgroundColor: "#ffffff" }} />
                                                        <input type="checkbox" checked={this.state.s_v_check} id="s_v_check" onChange={this.changeServeyViewStatus} style={{ marginLeft: "5px", height: "13px", fontSize: "15px" }} /><span style={{ marginLeft: "10px", height: "0px", fontSize: "19px" }}><strong>Views</strong></span></div>
                                                    <div class="form-group">
                                                        <h6 style={{ height: "37px", marginLeft: "10px" }}>QTY :&nbsp;<input type="number" value={this.state.s_views} id="w_v_input" onChange={this.changeSviews} name="quantity" min="1000" max="500000" style={{ width: "150px", borderStyle: "solid", borderRadius: "200px", borderColor: "#e7e7e7", borderTopolor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }} /></h6>

                                                    </div>
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Region</b></span>
                                                                <select class="form-select" id="s_v_country" className="selectpicker" multiple data-live-search="true" onChange={() => this.generateServeyPrice(this.state.s_views, "views")} data-actions-box="true">

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
                                                            <div class="col-12 col-md-4">
                                                                <span><b>Gender</b></span>&nbsp;&nbsp;
                                                    <input id="s_v_gmale" type="radio" name="s_v_radio" checked="checked" />Male&nbsp;
                                                    <input id="s_v_gfemale" type="radio" name="s_v_radio" />Female&nbsp;
                                                    {/* <button class="button" id="y_s_settings" type="button"  style={{ marginLeft: "10px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "200px", border: "solid", color: "rgb(11,11,11)", fontSize: "14px", height: "38px", borderColor: "#e7e7e7" }}><strong>Settings</strong></button> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <label for="customRange1"></label>
                                                    <input type="range" id="w_v_range" min="1000" max="500000" step="1" value={this.state.s_views} onChange={this.changeSviews} style={{ width: '100%' }} />
                                                    {/* <input type="range" class="custom-range" id="customRange1" min="1000" max="500000" value="0" name="range" oninput="amount.value=range.value" /> */}
                                                    <output id="amount" name="amount" for="range">{this.state.s_views}</output>

                                                </form>





                                                <h4 style={{ marginLeft: "10px", marginTop: "30px" }}>Survey no: {this.state.serveyid} </h4>
                                                <h6 style={{ marginLeft: "10px", marginTop: "30px" }}><span style={{ color: "red" }}>*maximum 60 questions</span>&nbsp;&nbsp;&nbsp;&nbsp;(Total questions: {this.state.total_questions}) </h6>



       {/* //////////////////////////////////////////////new tab/////////////////////////////////////////////////////////////// */}


       <nav style={{marginTop:"25px"}}>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="nav-one-tab" data-toggle="tab" href="#nav-one" role="tab" aria-controls="nav-home" aria-selected="true" style={{color:"black"}} >Yes / No Question</a>
    <a class="nav-item nav-link" id="nav-two-tab" data-toggle="tab" href="#nav-two" role="tab" aria-controls="nav-profile" aria-selected="false"  style={{color:"black"}} >Single Choice Question</a>
    <a class="nav-item nav-link" id="nav-tree-tab" data-toggle="tab" href="#nav-tree" role="tab" aria-controls="nav-contact" aria-selected="false"  style={{color:"black"}} >Multiple Choice Question</a>
    <a class="nav-item nav-link" id="nav-four-tab" data-toggle="tab" href="#nav-four" role="tab" aria-controls="nav-contact" aria-selected="false"  style={{color:"black"}} >Essay Question  </a>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-one" role="tabpanel" aria-labelledby="nav-one-tab"> <Addyesnoquestion serveyid={this.state.serveyid} views={this.state.s_views} changeFinalPrice={this.generateServeyPrice} />
  </div>
  <div class="tab-pane fade" id="nav-two" role="tabpanel" aria-labelledby="nav-two-tab"><Addsinglechoicequestion serveyid={this.state.serveyid} views={this.state.s_views} changeFinalPrice={this.generateServeyPrice} />
  </div>
  <div class="tab-pane fade" id="nav-tree" role="tabpanel" aria-labelledby="nav-tree-tab"><Addmultiplechoicequstion serveyid={this.state.serveyid} views={this.state.s_views} changeFinalPrice={this.generateServeyPrice} />
  </div>
  <div class="tab-pane fade" id="nav-four" role="tabpanel" aria-labelledby="nav-four-tab"> <Addeasyquestion serveyid={this.state.serveyid} views={this.state.s_views} changeFinalPrice={this.generateServeyPrice} /></div>
</div>

<br/>


        {/* //////////////////////////////////////////////new tab/////////////////////////////////////////////////////////////// */}

{/* ////////////////////////////////////////////////////old tab////////////////////////////////////////////////////////////////// */}

                                                {/* <div class="container" style={{ marginTop: "20px" }}>
                                                    <ul class="nav nav-tabs">
                                                        <div class="row" style={{ textAlign: "center" }}>
                                                            <div class="col-sm-3">
                                                                {" "}
                                                                <li class="active">
                                                                    <button>
                                                                        <a data-toggle="tab" href="#home" style={{ color: "black" }}>
                                                                            Yes / No Question{" "}
                                                                        </a>
                                                                    </button>

                                                                </li>
                                                            </div>
                                                            <div class="col-sm-3">
                                                                {" "}
                                                                <li>
                                                                    <a data-toggle="tab" href="#menu111" style={{ color: "black"}}>
                                                                        Single Choice Question
                                  </a>
                                                                </li>
                                                            </div>
                                                            <div class="col-sm-3">
                                                                {" "}
                                                                <li>
                                                                    <a data-toggle="tab" href="#menu222" style={{ color: "black"}}>
                                                                        Multiple Choice Question
                                  </a>
                                                                </li>
                                                            </div>
                                                            <div class="col-sm-3">
                                                                {" "}
                                                                <li>
                                                                    <a data-toggle="tab" href="#menu333" style={{ color: "black"}}>
                                                                        Essay Question
                                  </a>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </ul>

                                                    <div class="tab-content">
                                                        <div id="home" class="tab-pane  in active">
                                                            

                                                            <Addyesnoquestion serveyid={this.state.serveyid} views={this.state.s_views} changeFinalPrice={this.generateServeyPrice} />

                                                            
                                                        </div>
                                                        <div id="menu111" class="tab-pane fade">
                                                            
                                                            <Addsinglechoicequestion serveyid={this.state.serveyid} views={this.state.s_views} changeFinalPrice={this.generateServeyPrice} />
                                                            
                                                        </div>
                                                        <div id="menu222" class="tab-pane fade">
                                                            
                                                            <Addmultiplechoicequstion serveyid={this.state.serveyid} views={this.state.s_views} changeFinalPrice={this.generateServeyPrice} />
                                                           
                                                        </div>
                                                        <div id="menu333" class="tab-pane fade">
                                                           
                                                            <Addeasyquestion serveyid={this.state.serveyid} views={this.state.s_views} changeFinalPrice={this.generateServeyPrice} />
                                                            
                                                        </div>
                                                    </div>
                                                </div> */}

{/* ////////////////////////////////////////////////////old tab////////////////////////////////////////////////////////////////// */}


                                            </div>

                                        </div>

    

                                        <div class="form-group" style={{ marginLeft: "20px", marginTop: "10px" }}>

                                            <div class="row" style={{ marginLeft: "20px", marginRight: "20px", marginBottom: "20px", marginTop: "20px" }}>

                                                <div class="col-md-3">
                                                    <h6 style={{ marginTop: "5px" }}><strong>Order Summary </strong></h6>
                                                </div>
                                                <div class="col-md-2">
                                                    <h4><strong>Total : </strong></h4>
                                                </div>
                                                <div class="col-md-6">
                                                    <h4><strong id="newvalue">{this.state.total_price}</strong></h4>
                                                </div>
                                                
                                                {/* <div class="col-md-6">
                                                            <span><b>Currency</b></span>&nbsp;&nbsp;&nbsp;
                                                            <select  class="form-select" className="selectpicker" id="cr_country"  onChange={()=>this.getmoreCurrency()}   data-actions-box="true">

                                                                <option value="#" selected></option>
                                                                {country_currency_gtr.map((object, i) => <option value={object.currency_code}>{object.country}</option>)}
                                                                    
                                                            </select>
                                                           
                                                        </div> */}
                                                        <br />
                                            </div>
                                            {/* <div class="text-center">
                                                <button class="btn btn-success" type="button" onClick={this.checkoutOrder}><img class="button-enter__icon" src="assets/img/icons/cart.png" alt="" /><strong>Checkout</strong></button>
                                            </div> */}

                                            {

                                                this.state.total_price != "Contact us for get this price" && !(this.state.youtube_link == "" && this.state.facebook_link == "" && this.state.insta_link == "" && this.state.twitter_link == "" && this.state.tiktok_link == "" && this.state.web_link == "" && this.state.serveyclick == false) ?
                                                    <PayPalButton
                                                        amount='0.01'
                                                        // amount={this.state.final_earning}
                                                        shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                                        onApprove={(details, data) => {
                                                            // alert("Transaction completed");
                                                            this.checkoutOrder();
                                                            // OPTIONAL: Call your server to save the transaction
                                                            // return fetch("/paypal-transaction-complete", {
                                                            //     method: "post",
                                                            //     body: JSON.stringify({
                                                            //         orderID: data.orderID
                                                            //     })
                                                            // });
                                                        }}
                                                    /> :
                                                    <p></p>
                                            }
                                            
                                                
                                            

                                                    
                                            

                                    
                                            {/* <script src="https://www.paypal.com/sdk/js?client-id=ARBe1vbFU4IHz1fbYF1wtG3kW8AV09wrsie-rqXafRx1Q8sBqplzOd5mYv_v0M0kTlFJzbJDxri8MmvP" /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>

            </div>
        );
    }

}
export default Dash
