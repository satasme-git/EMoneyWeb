/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-octal-escape */
import React from "react";
import { Link } from 'react-router-dom';
import userServices from "../services/userServices";
import earningService from "../services/earningService";
import { Helmet } from "react-helmet";
import Cookies from 'js-cookie';

class EarnEnagement extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            orders: [],
            total_earning: '',
            username: ''
        };

    }

    componentDidMount() {
        var user = Cookies.get('user');
        if (user != null) {
            earningService.getTotalEarning(Cookies.get('user')).then(res => {
                this.setState({ total_earning: res.data });
            });

            userServices.getUserById(Cookies.get('user')).then(res => {
                this.setState({ username: res.data.fname });
            });
        } else {
            this.props.history.push('/login');
        }



    }

    redirectToYoutube = (e) => {
        this.props.history.push('/ytsub');
        window.location.reload();

    }

    redirectToPageLike = (e) => {
        this.props.history.push('/fbpagelike');
        window.location.reload();

    }

    redirectToPostLike = (e) => {
        this.props.history.push('/fbpostlike');
        window.location.reload();

    }

    redirectToShare = (e) => {
        this.props.history.push('/fbpostshare');
        window.location.reload();

    }

    redirectToInstagram = (e) => {
        this.props.history.push('/instafollow');
        window.location.reload();

    }

    redirectToTwitter = (e) => {
        this.props.history.push('/twitterfollow');
        window.location.reload();

    }

    redirectToTiktok = (e) => {
        this.props.history.push('/tiktokfollow');
        window.location.reload();

    }

    redirectToOrders = (e) => {
        this.props.history.push('/myorders');
        window.location.reload();
    }

    logout = (e) => {
        Cookies.remove('user')
        this.props.history.push('/homebl');
    }
    BackToPage = (e) =>{
        this.props.history.push('/earnpage');
        window.location.reload();
    }
    render() {
        return (
            <div>
                <Helmet>
                    <link type="text/css" rel="stylesheet" href="/assets/css/app69fd.css?id=d97cc8504a674a3a9f71" />
                    <link rel="stylesheet" href="/assets/css/dash.css" />
                    <script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>
                    <link href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css" rel="stylesheet" type="text/css" />
                </Helmet>
                <header class="header" style={{marginLeft:"63px",height:"63px"}}>
                    <section class="container header__inner">
                        <div class="header__right">

                                <span class="utext">{this.state.total_earning}</span>
                                <Link to="/profile" >
                                    <li class="nav-item dropdown  user-menu">
                                        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" aria-haspopup="true" aria-expanded="false">

                                            <i class="fa fa-user"></i>
                                             <span class="hidden-xs"> &nbsp;  {this.state.username}</span>
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

                    <div class="s-layout">
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
                        
                        <main class="s-layout__content" style={{ width: "100%", height: "100% ", backgroundColor: "#dfeef2" }} >
                        <script data-ad-client="ca-pub-9982225669544459" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                            <div>

                            

                                <div class="container" style={{ width: "100%", height: "100% ", backgroundColor: "#dfeef2" }}>
                                
                                    <div class="card1">
                                    <a   class="class row" style={{ marginTop: "70px"}} onClick={this.BackToPage}>
                                        <i class="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
                                        
                                    </a>
                                        <h2 class="text-center mb-5" style={{ marginTop: "70px" }}>Social Media Engagements</h2>

                                        <div class="class row" >
                                            <div class="col-md-6 mx-auto" ><br />

                                                <img src="\assets\assets1\icon\5.png" class="mx-auto d-block" style={{ width: "100px", height: "100px", padding: "10px" }} alt="" /><br />

                                                <button class="mx-auto d-block" style={{
                                                    borderRadius: "25px", outline: "none", textDecoration: "none", display: "flex", justifyContent: "center", alignItems: "center", textTransform: "uppercase",
                                                    height: "45px",
                                                    width: "230px", opacity: " 1", backgroundColor: " #ffffff", border: "1px solid rgba(22, 76, 167, 0.6)"
                                                }} >
                                                    <a href="/ytsub">
                                                        <span>YouTube Subscribers</span>
                                                    </a>
                                                </button>
                                            </div>
                                        </div>


                                        <div class="class row" >
                                            <div class="col" >

                                                <img src="\assets\assets1\icon\2.png" class="mx-auto d-block" style={{ width: "100px", height: "100px", padding: "10px" }} alt="" /><br />


                                                <div class="class row">

                                                    <div class="col-md-4">

                                                        <button class="mx-auto d-block" style={{
                                                            borderRadius: "25px", outline: "none", textDecoration: "none", display: "flex", justifyContent: "center", alignItems: "center", textTransform: "uppercase",
                                                            height: "45px",
                                                            width: "230px", opacity: " 1", backgroundColor: " #ffffff", border: "1px solid rgba(22, 76, 167, 0.6)"
                                                        }} >
                                                            <a href="/fbpagelike">
                                                                <span>Facebook Page Likes</span>
                                                            </a>
                                                        </button>
                                                        <br />
                                                    </div>


                                                    <div class="col-md-4 " >
                                                        {/* onClick={this.redirectToPostLike} */}
                                                        <button class="mx-auto d-block" style={{
                                                            borderRadius: "25px", outline: "none", textDecoration: "none", display: "flex", justifyContent: "center", alignItems: "center", textTransform: "uppercase",
                                                            height: "45px",
                                                            width: "230px", opacity: " 1", backgroundColor: " #ffffff", border: "1px solid rgba(22, 76, 167, 0.6)"
                                                        }} >
                                                            <a href="/fbpostlike">
                                                            <span>Facebook Post Likes</span>
                                                            </a>
                                                        </button>
                                                        <br />
                                                    </div>


                                                    <div class="col-md-4">
                                                        {/* onClick={this.redirectToShare}  */}
                                                        <button class="mx-auto d-block" style={{
                                                            borderRadius: "25px", outline: "none", textDecoration: "none", display: "flex", justifyContent: "center", alignItems: "center", textTransform: "uppercase",
                                                            height: "45px",
                                                            width: "230px", opacity: " 1", backgroundColor: " #ffffff", border: "1px solid rgba(22, 76, 167, 0.6)"
                                                        }}  >
                                                            <a href="/fbpostshare">
                                                            <span>Facebook Shares</span>
                                                            </a>
                                                        </button><br />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>


                                        <div class="class row" >
                                            <div class="col-md-6 mx-auto" style={{ marginBottom: "2%" }}>
                                                <br />
                                                <img src="\assets\assets1\icon\1.png" class="mx-auto d-block" style={{ width: "100px", height: "100px", padding: "10px" }} alt="" /><br />

                                                <button class="mx-auto d-block" style={{
                                                    borderRadius: "25px", outline: "none", textDecoration: "none", display: "flex", justifyContent: "center", alignItems: "center", textTransform: "uppercase",
                                                    height: "45px",
                                                    width: "230px", opacity: " 1", backgroundColor: " #ffffff", border: "1px solid rgba(22, 76, 167, 0.6)"
                                                }} >
                                                    <a href="/instafollow">
                                                        <span >Instagram Followers</span>
                                                    </a>
                                                </button>
                                            </div>
                                        </div>


                                        <div class="class row">
                                            <div class="col-md-6 mx-auto" >

                                                <img src="\assets\assets1\icon\4.png" class="mx-auto d-block" style={{ width: "100px", height: "100px", padding: "10px" }} alt="" /><br />

                                                <button class="mx-auto d-block" style={{
                                                    borderRadius: "25px", outline: "none", textDecoration: "none", display: "flex", justifyContent: "center", alignItems: "center", textTransform: "uppercase",
                                                    height: "45px",
                                                    width: "230px", opacity: " 1", backgroundColor: " #ffffff", border: "1px solid rgba(22, 76, 167, 0.6)"
                                                }} >
                                                    <a href="/twitterfollow">
                                                        <span>Twitter Followers</span>
                                                    </a>
                                                </button><br />
                                            </div>
                                        </div>

                                        <div class="class row" >
                                            <div class="col-md-6 mx-auto">

                                                <img src="\assets\assets1\icon\3.png" class="mx-auto d-block" style={{ width: "100px", height: "100px", padding: "10px" }} alt="" /><br />

                                                <button class="mx-auto d-block" style={{
                                                    borderRadius: "25px", outline: "none", textDecoration: "none", display: "flex", justifyContent: "center", alignItems: "center", textTransform: "uppercase",
                                                    height: "45px",
                                                    width: "230px", opacity: " 1", backgroundColor: " #ffffff", border: "1px solid rgba(22, 76, 167, 0.6)"
                                                }} >
                                                    <a href="/tiktokfollow">
                                                        <span>TikTok Followers</span>
                                                    </a>
                                                </button><br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div></main>
                    </div>
                </div></div>
        )
    }
}
export default EarnEnagement