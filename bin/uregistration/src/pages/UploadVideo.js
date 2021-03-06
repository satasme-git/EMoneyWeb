/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import uploadVideoService from "../services/uploadVideoService";
import toast from 'toast-me';
import { Link } from 'react-router-dom';
import { Style } from "react-style-tag";
import { Helmet } from "react-helmet";
import Cookies from 'js-cookie';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import earningService from "../services/earningService";
import userServices from "../services/userServices";



class UploadVideo extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      category: '',
      name: '',
      hashtag: '',
      timeduration: '',
      thumbnail: undefined,
      video: undefined,
      progress: 0,
      currentVideo: "",
      currentThumb: "",
      total_earning: '',
      username: '',
    }
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

  changeCategory = e => {
    this.setState({ category: e.target.value });
  };

  changeName = e => {
    this.setState({ name: e.target.value });
  };

  changeHashtag = e => {
    this.setState({ hashtag: e.target.value });
  };

  changeTimeduration = e => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {

    }
    this.setState({ timeduration: e.target.value });
  };

  changeThumbnail = e => {
    this.setState({ thumbnail: e.target.files });
  };

  changeVideo = e => {
    this.setState({ video: e.target.files });
  };

  redirectToOrders = (e) => {
    this.props.history.push('/myorders');
    window.location.reload();

  }

  UploadVideo = (e) => {
    if (this.state.category === "") {
      // toast('Category is required');
      // <FlashMessage duration={5000} persistOnHover={true}>
      //   <p>Message</p>
      // </FlashMessage>
    }
    else if (this.state.name === "") {
      toast('Video name is required', { position: 'bottom' });

    } else if (this.state.hashtag === "") {
      toast('Hashtag is required', { position: 'bottom' });

    } else if (this.state.timeduration === "") {
      toast('Time duration is required', { position: 'bottom' });

    } else if (this.state.thumbnail == null) {
      toast('Thumbnail is required', { position: 'bottom' });

    } else if (this.state.video == null) {
      toast('Video is required', { position: 'bottom' });

    } else {
      e.preventDefault();
      let currentThumb = this.state.thumbnail[0];
      let currentVideo = this.state.video[0];

      this.setState({
        progress: 0,
        currentVideo: currentVideo,
        currentThumb: currentThumb,
      });
      let upload = { category: this.state.category, name: this.state.name, hashtag: this.state.hashtag, duration: this.state.timeduration, thumbnail: this.state.thumbnail[0], video: this.state.video[0] }

      uploadVideoService.upload(Cookies.get('user'), this.state.category, this.state.name, this.state.timeduration, this.state.hashtag, this.state.thumbnail[0], this.state.video[0], (event) => {
        this.setState({
          progress: Math.round((100 * event.loaded) / event.total),
        });
      })
        .then(res => {
          if (res.data == "success") {
            this.props.history.push('/UploadVideo');
          } else {
            toast('Failed to upload video', { position: 'bottom' });
          }

        })
        .catch(() => {
          this.setState({
            progress: 0,
            message: "Could not upload the file!",
            currentFile: undefined,
          });
        });
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
  BackToPage = (e) =>{
    this.props.history.push('/earnpage');
    window.location.reload();
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
        <Style>{`

        
          
.upheader{
  text-align: center;
  font-size: 3vh;
  text-decoration: solid;
}

.maxmin{
  color: red;
  text-align: left;
  font-size: 3vhmax;
}


.maxmin1{
  color: red;
  text-align: left;
  font-size: 3vhmax;
  paddingBottom: 500px;

}










#contact textarea,
#contact button[type="submit"] {
font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
}






fieldset {
border:  !important;
margin: 0 0 10px;
min-width: 100%;
padding: 0;
width: 100%;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea {
width: 100%;

background: #FFF;
margin: 0 0 5px;
padding: 10px;
}


#contact input[type="email"]:hover,
#contact input[type="tel"]:hover,
#contact input[type="url"]:hover,
#contact textarea:hover {
-webkit-transition: border-color 0.3s ease-in-out;
-moz-transition: border-color 0.3s ease-in-out;
transition: border-color 0.3s ease-in-out;

}



#contact button[type="submit"] {
cursor: pointer;
width: 100%;
border: none;
background: #4CAF50;
color: #FFF;
margin: 0 0 5px;
padding: 10px;
font-size: 15px;
}

#contact button[type="submit"]:hover {
background: #43A047;
-webkit-transition: background 0.3s ease-in-out;
-moz-transition: background 0.3s ease-in-out;
transition: background-color 0.3s ease-in-out;
}

#contact button[type="submit"]:active {
box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}



#contact input:focus,
#contact textarea:focus {
outline: 0;

}

::-webkit-input-placeholder {
color: #888;
}

:-moz-placeholder {
color: #888;
}

::-moz-placeholder {
color: #888;
}

:-ms-input-placeholder {
color: #888;
}



body {background-color:#dfeef2;}

.headtitle{
  font-family:sans-serif;
  font-size: 250%;
  text-align: center;
  color:rgb(43, 43, 43);
  padding: 5% 5% 5% 5%;
  
}





/* Responsive columns - one column layout (vertical) on small screens */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
    padding: 10%;
  }
}

.container-fluid{
    color: rgb(66, 66, 66);
    align-content: center;
    
}

.cradtext1{

  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 150%;
  color: rgb(49, 49, 49);
  text-align: center;
  margin-top: -20px;

}

 


.upheader{

    font-size: 4vwmax;
    font-weight: 500;
    z-index: -1px;
}


 /* upload button */



 .wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;}

  .file-upload {
    height: 200px;
    width: 200px;
    border-radius: 100px;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 3px solid #55bbff;
    overflow: hidden;
    background-image: linear-gradient(to bottom, #2590eb 50%, #ffffff 50%);
    background-size: 100% 200%;
    transition: all 1s;
    color: #ffffff;
    font-size: 100px;}

    input[type="file"] {
      height: 200px;
      width: 200px;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      cursor: pointer;
    }

    :hover {
      background-position: 0 -100%;

      color: #131313;
    }
  


/*  Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) { 
.row{
  padding: 10px;
}
}

/*  Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {

.row{
  padding: 10px;
 
 
}
}

/*  Large devices (desktops, 992px and up) */
@media (min-width: 1087px) { 

  .row{
    padding-top: 50px;
   
   
  }

}


}

.selectop{
  color: #2590eb;
  outline: none !important;
  border:1px solid red;
  border-radius: 30px;
  padding: 5px;
  

}



.selectcatagor{
  font-size: 4vhmax;
  padding-bottom: 10px;

  
}
        `}</Style>
        <header class="header" style={{ marginLeft: "63px", height: "63px" }}>
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
        <script data-ad-client="ca-pub-9982225669544459" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
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




            <main class="s-layout__content" style={{ height: "100%", marginTop: "50px", width: "100%" }}>
            <a   class="class row" style={{ marginTop: "0px",marginLeft:"1px"}} onClick={this.BackToPage}>
                                        <i class="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
                                        
                                    </a>
              <div class="container">
                <div className="col-md-12 col-sm-12">
                  <div className="row" >
                    <div className="col-md-6 col-sm-12 "  style={{ padding: "10px"  }}>
                      <div className="card">
                        <div className="card-body">
                          <div className="upheader">Upload Your Video</div><br />
                          <div className="maxmin">*A Maximum Video Size 50Mb *</div>
                          <div className="maxmin1" style={{ paddingBottom: "70px" }}>
                            * Maximum Time Range 5Min *
                    </div>
                          <br />
                          <div className="selectcatagor">Select Category *</div>

                          <form action="/action_page.php">
                            <select
                              name="Category"
                              id="Category"
                              className="selectop"
                              value={this.state.category}
                              onChange={this.changeCategory}
                              style={{paddingRight:"50px"}}
                              
                            >
               
                              <option value="Entertainment">Entertainment </option>
                              <option value="Comedy">Comedy</option>
                              <option value="Music">Music</option>
                              <option value="Culture">Culture</option>
                            </select>
                            <br />
                            <br />
                          </form>


                          <fieldset>
                            <input
                              placeholder="Name"
                              type="text"
                              value={this.state.name}
                              onChange={this.changeName}
                              style={{ border: "solid 1px", borderRadius: "10px", padding: "5px" }}
                            />
                          </fieldset>
                          <br />
                          <fieldset>
                            <input
                              placeholder="Hash Tag"
                              type="text"
                              value={this.state.hashtag}
                              onChange={this.changeHashtag}
                              style={{ border: "solid 1px", borderRadius: "10px", padding: "5px" }}
                            />
                          </fieldset>
                          <br />
                          <fieldset>
                            <input
                              placeholder="Time Duration of video "
                              type="text"
                              value={this.state.timeduration}
                              onChange={this.changeTimeduration}
                              style={{ border: "solid 1px", borderRadius: "10px", padding: "5px" }}
                            />
                          </fieldset>
                          <br/><br/><br/><br/><br/><br/>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="col-md-6 col-sm-12" style={{ padding: "10px" }}>
                      <div className="card">
                        <div className="card-body"><br/>
                          <div className="cradtext1">Upload Thumbnail</div>
                          <br />
                          <div className="wrapper">
                            <div className="file-upload">
                              <input
                                type="file"
                                onChange={this.changeThumbnail}
                                accept="image/*"
                              />
                              <i className="fa fa-file-image-o" />
                            </div>
                          </div>
                          <br />
                          <hr />
                          <div className="cradtext1">Upload Video</div>
                          <br />
                          <div className="wrapper">
                            <div className="file-upload">
                              <input
                                type="file"
                                onChange={this.changeVideo}
                                accept="video/mp4,video/x-m4v,video/*"
                              />
                              <i className="fa fa-file-video-o" />
                            </div>
                          </div>
                          <br />
                          <div>
                            <button
                              class="btn btn-primary mt-2"
                              role="button"
                              onClick={this.UploadVideo}
                            >
                              Upload
                      </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              
  

            </main>


      


            
          </div>
        </div>
      </div >

    )
  }
}
export default UploadVideo