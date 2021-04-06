import React, { Component } from "react";


//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
// import CartIcon from "./Image/imge.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import uploadVideoService from "../services/uploadVideoService";
import ReactPlayer from 'react-player'
import Sidebar from '../components/Sidebar';

class Approvevdeos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {


      uploads: []

    }
  }
  componentDidMount() {
    uploadVideoService.getAllVideos().then(res => {

      this.setState({ uploads: res.data });

    });
  }

  componentDidUpdate() {
    //initialize datatable
    $(document).ready(function () {
      $("#example").DataTable();
    });

  }

  uploadVideo(order) {
    uploadVideoService.uploadVideo(order.oid).then(res => {
// alert("aaaaaaaaaaa")
    });
  }

  deleteVideo(order) {
    uploadVideoService.deleteVideo(order.oid).then(res => {

    });
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charset="utf-8" />
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <title>Dashboard</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" type="text/css" href="/assetsadmin/css/css/util1.css" />
          <link rel="stylesheet" type="text/css" href="/assetsadmin/css/css/main1.css" />
          <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css" />

          <link rel="stylesheet" href="/assetsadmin/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/assetsadmin/css/font-awesome.min.css" />
          <link rel="stylesheet" href="/assetsadmin/css/themify-icons.css" />
          <link rel="stylesheet" href="/assetsadmin/css/metisMenu.css" />
          <link rel="stylesheet" href="/assetsadmin/css/owl.carousel.min.css" />
          <link rel="stylesheet" href="/assetsadmin/css/slicknav.min.css" />


          <link rel="stylesheet" href="/assetsadmin/css/typography.css" />

          <link rel="stylesheet" href="/assetsadmin/css/styles.css" />
          <link rel="stylesheet" href="/assetsadmin/css/responsive.css" />
          <script src="/assetsadmin/js/vendor/modernizr-2.8.3.min.js"></script>

          <script src="/assetsadmin/js/vendor/jquery-2.2.4.min.js"></script>
          <script src="/assetsadmin/js/popper.min.js"></script>
          <script src="/assetsadmin/js/bootstrap.min.js"></script>
          <script src="/assetsadmin/js/owl.carousel.min.js"></script>
          <script src="/assetsadmin/js/metisMenu.min.js"></script>
          <script src="/assetsadmin/js/jquery.slimscroll.min.js"></script>
          <script src="/assetsadmin/js/jquery.slicknav.min.js"></script>


          <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>
          <script src="https://code.highcharts.com/highcharts.js"></script>
          <script src="https://code.highcharts.com/modules/exporting.js"></script>
          <script src="https://code.highcharts.com/modules/export-data.js"></script>

          <script src="https://www.amcharts.com/lib/3/ammap.js"></script>
          <script src="https://www.amcharts.com/lib/3/maps/js/worldLow.js"></script>


          <script src="/assetsadmin/js/maps.js"></script>


        </Helmet>
        <Sidebar />
        <div id="preloader">
          <div class="loader"></div>
        </div>
        {/*    <!-- preloader area end -->
    <!-- page container area start --> */}
        <div class="page-container">

          {/* <!-- main content area start -->  */}
          <div class="main-content">
            {/*  <!-- header area start --> */}
            <br/>
            <div className="page-title-area">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <div className="breadcrumbs-area clearfix">
                    <h4 className="page-title pull-left">Dashboard</h4>
                    <ul className="breadcrumbs pull-left">
                      <li> <Link to="/admin/admindash" > <a >Home</a> </Link></li>
                      <li><span>Approve Videos</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*    <!-- page title area end --> */}
            <div class="main-content-inner">
              <div class="row">
                {/* 
                    <!-- data table start --> */}
                <div class="col-12 mt-5">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="header-title">Approve Videos</h4>
                      <div class="data-tables">
                        <table id="example" class="display">
                          <thead>
                            <tr>
                              <th> Video Name</th>
                              <th>Time Duration (Min)</th>
                              <th>Customer Name</th>
                              <th>Date</th>
                              <th>Watch</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.uploads.map((data) => {
                              return (
                                <tr>
                                  <td>{data.vname}</td>
                                  <td>{data.duration}</td>
                                  <td>{data.user.fname} {data.user.lname}</td>
                                  <td>{data.submitdate}</td>
                                  <td>
                                    <i class="ti-eye" data-toggle="modal" data-target={"#" + data.id} ></i>
                                  </td>

                                  <td>
                                    <button button type="button" style={{ backgroundColor: "green",margin:"5px" }} onClick={() => this.uploadVideo({ oid: data.id })} class="btn btn-secondary" >
                                      <i class="ti-save"></i>
                                    </button>

                                    <button button type="button" style={{ backgroundColor: "red",margin:"5px"  }} onClick={() => this.deleteVideo({ oid: data.id })} class="btn btn-secondary">
                                      <i class="ti-trash"></i>
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}

                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/*     <!-- Vertically centered modal start --> */}

                    {this.state.uploads.map((data) => {
                      return (
                        <div class="col-lg-6 mt-5">
                          <div class="modal fade" id={data.id}>
                            <div class="modal-dialog modal-dialog-centered" role="document" >
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title">Watch</h5>
                                  <button type="button" class="close" data-dismiss="modal">
                                    <span>&times;</span>
                                  </button>
                                </div>

                                <div class="modal-body">
                                  <h6>Thumbnail</h6>
                                  <a target="_blank" href="imge.png"> </a>
                                  <hr></hr>
                                  {/* <iframe
                                    src={"http://127.0.0.1:8887" + data.videourl}
                                    frameborder="0"
                                    width="465"
                                    height="340"
                                    allow="autoplay; encrypted-media"
                                    allowfullscreen
                                    title="video"
                                  /> */}
                                  <ReactPlayer
                                    className='react-player fixed-bottom'
                                    url={"http://127.0.0.1:8887/" + data.videourl}
                                    width='100%'
                                    height='100%'
                                    controls={true}

                                  />
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-dismiss="modal" >
                                    Close
                              </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    {/*  <!-- Vertically centered modal end --> */}
                  </div>
                </div>
                {/* <!-- data table end --> */}
              </div>
            </div>
          </div>
          {/* <!-- main content area end -->
        <!-- footer area start--> */}
          <footer>
            <div class="footer-area"></div>
          </footer>
          {/* <!-- footer area end--> */}
        </div>
      </div>
    );
  }
}

export default Approvevdeos;
