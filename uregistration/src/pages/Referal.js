/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import referalService from "../services/referalService";
import { Link } from 'react-router-dom';
import userServices from "../services/userServices";
import earningService from "../services/earningService";
import { Helmet } from "react-helmet";
import Cookies from 'js-cookie';
import {
    EmailShareButton,
    FacebookMessengerShareButton,
    FacebookShareButton,
    LineShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    TelegramShareButton,
    TwitterShareButton,
    ViberShareButton,
    WhatsappShareButton
} from "react-share";
import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon
} from "react-share";


import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import pointService from "../services/pointService";


class Dash extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            referalLink: '',
            total_earning: '',
            username: '',
            referalpoint:'',
            totolrefered:'0'

        }
    }
    componentDidMount() {
        // var user = Cookies.get('user');
        // if (user != null) {
        //     referalService.getUserById(user).then(res => {

        //         this.setState({
        //             totolrefered: res.data,

        //         });
        //     });

        //     referalService.getTotalRefers(user).then(res => {

        //         this.setState({
        //             referalLink: res.data,

        //         });
        //     });

        //     earningService.getTotalEarning(Cookies.get('user')).then(res => {
        //         this.setState({ total_earning: res.data });
        //     });

        //     userServices.getUserById(Cookies.get('user')).then(res => {
        //         this.setState({ username: res.data.fname });
        //     });
        //     pointService.getServicePoints("Referal").then(res => {
        //         this.setState({ referalpoint: res.data });
        //       });
        // } else {
        //     this.props.history.push('/login');
        // }



    }

    copyCodeToClipboard = () => {
        const el = this.textArea
        el.select()
        document.execCommand("copy")
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

    render() {
        return (
            <div style={{ backgroundColor: "#dfeef2" }}>
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

                <div class="">

                    <div class="s-layout">
                        {/* <!-- Sidebar --> */}
                        <div class="s-layout__sidebar">
                            <a class="s-sidebar__trigger" href="#0">
                                <i class="fa fa-bars"></i>
                            </a>

                            <nav class="s-sidebar__nav">
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
                        <main class="s-layout__content" style={{ backgroundColor: "#dfeef2", height: "100%" }}>
                            <div>
                                <div class="container" style={{ marginTop: "30px", backgroundColor: "#dfeef2", marginBottom: "10px" }}>
                                    <h4 style={{ padding: "10px", marginLeft: "10px", marginTop: "5%" }}>Referral Program</h4>
                                    <div class="container" style={{ marginBottom: "10px" }}>

                                        <span><br />Invite a friend or someone from the Internet and make a transfer for {this.state.referalpoint} points. So far you have refered {this.state.totolrefered} people<br /></span>
                                        <div class="card" style={{ marginTop: "10px", width: "75%", backgroundColor: "#dfeef2" }}>
                                            <div class="card-body" style={{ backgroundColor: "white", marginBottom: "10px", marginLeft: "10px", marginRight: "10px" }}>
                                                <h4 class="card-title" style={{ float: "left" }}>Your Referral Link</h4>
                                                <br />
                                                {/* <h6 class="text-muted card-subtitle mb-2" style={{ marginTop: "10px",float:"left" }}>Unique Link</h6> */}
                                                {/* <input type="url" style={{width: "100%", marginLeft: "5px",borderTopColor:"transparent", borderLeftColor:"transparent", borderRightColor: "transparent"}} placeholder="https://www.zareklamy.com/ad?r=kosalagunathilake7"/> */}

                                                <textarea style={{ width: "100%", marginLeft: "5px", borderTopColor: "transparent", borderLeftColor: "transparent", borderRightColor: "transparent" }}
                                                    ref={(textarea) => this.textArea = textarea}
                                                    value={this.state.referalLink}
                                                />
                                                <button class="btn btn-success" type="button" style={{ marginTop: "10px", marginLeft: "10px", marginBottom: "10px" }} onClick={() => this.copyCodeToClipboard()}>Copy link</button>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div class="container" style={{ marginTop: "20px", marginBottom: "10px" }}>
                                    <div class="row" style={{ marginTop: "10px", marginLeft: "20px" }}>
                                        <span>Share link :</span>
                                    </div>
                                    <div class="container" style={{ marginTop: "10px", marginBottom: "10px" }}>
                                        <div class="row" style={{ marginTop: "10px", marginLeft: "10px" }}>
                                            <a class="buttn" href title="share on WhatsApp"><img class="button-enter__icon" alt="" src="assets/img/icons/whatsapp.png" /></a>


                                        </div>
                                    </div>
                                </div> */}


                                <div style={{marginLeft:"25px"}}>
                                    <h6>Share through social media</h6>
                                    <br/>
                                    <FacebookShareButton url={this.state.referalLink}>
                                        <FacebookIcon size={40} round={true} />
                                    </FacebookShareButton>
                                    <FacebookMessengerShareButton url={this.state.referalLink}>
                                        <FacebookMessengerIcon size={40} round={true} />
                                    </FacebookMessengerShareButton>
                                    <WhatsappShareButton url={this.state.referalLink}>
                                        <WhatsappIcon size={40} round={true} />
                                    </WhatsappShareButton>
                                    <ViberShareButton url={this.state.referalLink}>
                                        <ViberIcon size={40} round={true} />
                                    </ViberShareButton>
                                    <TelegramShareButton url={this.state.referalLink}>
                                        <TelegramIcon size={40} round={true} />
                                    </TelegramShareButton>
                                    <TwitterShareButton url={this.state.referalLink}>
                                        <TwitterIcon size={40} round={true} />
                                    </TwitterShareButton>
                                    <LineShareButton url={this.state.referalLink}>
                                        <LineIcon size={40} round={true} />
                                    </LineShareButton>
                                    <LinkedinShareButton url={this.state.referalLink}>
                                        <LinkedinIcon size={40} round={true} />
                                    </LinkedinShareButton>
                                    <EmailShareButton url={this.state.referalLink}>
                                        <EmailIcon size={40} round={true} />
                                    </EmailShareButton>
                                </div>


                                
{/* <label for="male">{this.state.totolrefered} </label> */}



                            </div>
                        </main>
                    </div>
                </div>
            </div>
        );
    }

}
export default Dash