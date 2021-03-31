/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import socialmedia from '../services/socialmedia';
import toast from 'toast-me';
import { Link } from 'react-router-dom';
import userServices from "../services/userServices";
import earningService from "../services/earningService";
import { Helmet } from "react-helmet";
import Cookies from 'js-cookie';
import Pagination from '../components/Pagination';
import TiktokFollowCard from '../components/TiktokFollowCard';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import pointService from "../services/pointService";

class TiktokFollow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            url: [],
            tiktokf: '',
            followed: false,
            total_earning: '',
            username: '',
            earnstatus: '',
            allCountries: [],
            currentCountries: [],
            currentPage: null,
            totalPages: null,
            points:''

        }
    }

    componentDidMount() {
        // window.location.reload();
        var user = Cookies.get('user');
        if (user != null) {
            userServices.getProfileCompletion(Cookies.get('user')).then(res => {
                if (res.data == "compeleted") {
                    this.setState({ earnstatus: '' });
                    this.getpageData();
                } else {
                    this.setState({ earnstatus: res.data + ' Complete your profile to start earning' });
                }
            });

            earningService.getTotalEarning(Cookies.get('user')).then(res => {
                this.setState({ total_earning: res.data });
            });

            userServices.getUserById(Cookies.get('user')).then(res => {
                this.setState({ username: res.data.fname });
            });

            pointService.getServicePoints("Tiktok Followers").then(res => {
                this.setState({ points: res.data });
            });
        } else {
            this.props.history.push('/login');
        }

    }

    getpageData() {
        socialmedia.getFacebookPageLike(Cookies.get('user'), "Tiktok Followers")
            .then(res => {
                this.setState({ allCountries: res.data });
            });
    }

    handleClick = (urlS) => {
        let fblike = { userid: Cookies.get('user'), service: "Tiktok Followers", orderid: urlS.id }


        socialmedia.addFacebookLike(fblike)
            .then(res => {
                if (res.data === "exceed") {
                    toast('Your daily earning limit exceeded. Come back tomorrow for earn more', { position: 'bottom' });
                } else if (res.data === "success") {
                    this.OpenNewWindow(urlS.url);
                    var x = document.getElementById("" + urlS.id);
                    x.innerHTML = "Liked";
                    x.disabled = true;
                }
            });
    }

    onPageChanged = data => {
        const { allCountries } = this.state;
        const { currentPage, totalPages, pageLimit } = data;

        const offset = (currentPage - 1) * pageLimit;
        const currentCountries = allCountries.slice(offset, offset + pageLimit);


        this.setState({ currentPage, currentCountries, totalPages });
    }

    OpenNewWindow(MyPath) {
        window.open(MyPath, "", "toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=500,width=657");
    }

    redirectToOrders = (e) => {
        this.props.history.push('/myorders');
        window.location.reload();
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


    // fbAsyncInit = function (e) {
    //     alert("aaaaaaaaaaaaaa")
    //     TT.Event.subscribe('edge.create', function (response) {
    //         alert('Follow');
    //     });
    //     // Code to detect clicking unlike
    //     TT.Event.subscribe('edge.remove', function (href) {
    //         alert('UnFollow');
    //     });

    // }

    render() {
        const { allCountries, currentCountries, currentPage, totalPages } = this.state;
        const totalCountries = allCountries.length;

        if (totalCountries === 0) {
            return (
                <div>
                    <Helmet>
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
                                            <span class="hidden-xs">{this.state.username}</span>
                                        </a>
                                    </li>
                                </Link>
                            </div>
                        </section>

                    </header>
                    <div class="main" style={{ width: "100%", height: "100% ", backgroundColor: "#dfeef2" }}>

                        <div class="s-layout" style={{ width: "100%", height: "100% ", backgroundColor: "#dfeef2" }}>
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
                            <main class="s-layout__content" style={{ height: "100%", width: "100%", backgroundColor: "#dfeef2" }}>
                                <div className="row mb-5">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                        <div className="row d-flex flex-row py-5" id="fbdatacard">
                                            <div className="w-100 px-4 d-flex flex-row flex-wrap align-items-center justify-content-between">
                                                <div className="d-flex flex-row align-items-center">


                                                    <strong className="text-secondary" style={{ textAlign: "center",marginTop:"50px" }}>No Tiktok Follows Available</strong>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            )
        } else {
            const headerClass = ['text-dark py-2 pr-4 m-0', currentPage ? 'border-gray border-right' : ''].join(' ').trim();

            return (
                <div>
                    <Helmet>
                        <link type="text/css" rel="stylesheet" href="/assets/css/app69fd.css?id=d97cc8504a674a3a9f71" />
                        <link rel="stylesheet" href="/assets/css/dash.css" />
                        <script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>
                        <link href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css" rel="stylesheet" type="text/css" />
                        <link rel="stylesheet" href="/assets/home-css.css" />

                        <link rel="stylesheet" href="assets/fonts/font-awesome.min.css" />
                        <link rel="stylesheet" href="assets/css/styles.min.css" />
                    </Helmet>
                    <header class="header" style={{ marginLeft: "63px", height: "63px" }}>
                        <section class="container header__inner" style={{marginTop:"0px"}}>
                            <div class="header__right">

                                <span class="utext">{this.state.total_earning}</span>
                                <Link to="/profile" >
                                    <li class="nav-item dropdown  user-menu">
                                        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" aria-haspopup="true" aria-expanded="false">

                                            <i class="fa fa-user"></i>
                                            <span class="hidden-xs">{this.state.username}</span>
                                        </a>
                                    </li>
                                </Link>
                            </div>
                        </section>

                    </header>
                    <div class="main" style={{ width: "100%", height: "100% ", backgroundColor: "#dfeef2" }}>

                        <div class="s-layout" style={{ width: "100%", height: "100% ", backgroundColor: "#dfeef2" }}>
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
                            <main class="s-layout__content" style={{ height: "100%", width: "100%", backgroundColor: "#dfeef2",marginTop:"20px" }}>
                                <div className="row mb-5">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                        <div className="row d-flex flex-row py-5" id="fbdatacard">
                                            <div className="w-100 px-4 d-flex flex-row flex-wrap align-items-center justify-content-between">
                                                <div className="d-flex flex-row align-items-center">

                                                    <h2 className={headerClass} >
                                                        <strong className="text-secondary" style={{ textAlign: "center" }}>{totalCountries}</strong> Tiktok Follows Available
    </h2>

                                                    {currentPage && (
                                                        <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                                                            Page <span className="font-weight-bold">{currentPage}</span> / <span className="font-weight-bold">{totalPages}</span>
                                                        </span>
                                                    )}
                                                </div>


                                                <div className="d-flex flex-row py-4 align-items-center">
                                                    <Pagination totalRecords={totalCountries} pageLimit={6} pageNeighbours={1} onPageChanged={this.onPageChanged} />
                                                </div>

                                            </div>
                                            {currentCountries.map(country => <TiktokFollowCard key={country.id} country={country} count={this.state.points} handleClick={this.handleClick} />)}


                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            )
        }



    }

}
export default TiktokFollow
