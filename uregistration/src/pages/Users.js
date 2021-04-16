import React, { Component } from "react";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import $ from "jquery";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Sidebar from "../components/Sidebar";
import userServices from "../services/userServices";
import Cookies from 'js-cookie';

class Users extends React.Component {

  constructor(props) {
    super(props)
    this.state = {


      profiledata: []

    }
  }

  componentDidMount() {
    //initialize datatable
    var user = Cookies.get('admin');
    if (user == null) {
      this.props.history.push('/admin');
    } else {
      userServices.getUsers().then(res => {
        this.setState(
          {
            profiledata: res.data
          }
        );
      });
    }
    
  }

  componentDidUpdate() {
    $(document).ready(function () {
      $("#example").DataTable();
    });
  }

  AuthUser(user) {
    userServices.DeleteUser(user.uid,user.status).then(res => {

      userServices.getUsers().then(res => {
        this.setState(
          {
            profiledata: res.data
          }
        );
      });

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
          <link
            rel="stylesheet"
            type="text/css"
            href="/assetsadmin/css/css/util1.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/assetsadmin/css/css/main1.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="fonts/font-awesome-4.7.0/css/font-awesome.min.css"
          />

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
          <div className="loader" />
        </div>
        {/* preloader area end */}
        {/* page container area start */}
        <div className="page-container">
          {/* main content area start */}
          <div className="main-content">
            {/* header area start */}
            <br/>
            <div className="page-title-area">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <div className="breadcrumbs-area clearfix">
                    <h4 className="page-title pull-left">Dashboard</h4>
                    <ul className="breadcrumbs pull-left">
                      <li> <Link to="/admin/admindash" > <a >Home</a> </Link></li>
                      <li><span>Users</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* page title area end */}
            <div className="main-content-inner">
              <div className="row">
                {/* data table start */}
                <div className="col-12 mt-5">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="header-title">Users</h4>
                      <div className="data-tables">
                        <table id="example" class="display" style={{ textAlign: "center" }}  >
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Email</th>
                              <th>View</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.profiledata.map((data) => {
                              return (
                                <tr>

                                  {(() => {
                                    if (data.user.fname != null && data.user.lname == null) {
                                      return (
                                        <td>{data.user.fname}</td>
                                        // <td></td>
                                      )
                                    } else if (data.user.fname == null && data.user.lname != null) {
                                      return (
                                        <td>{data.user.lname}</td>
                                        // <td></td>
                                      )
                                    } else if (data.user.fname == null && data.user.lname == null) {
                                      return (
                                        <td><div style={{ color: "red" }}>Not Given</div></td>
                                      )
                                    } else {
                                      return (
                                        <td>{data.user.fname + " " + data.user.lname}</td>
                                        // <td></td>
                                      )
                                    }
                                  })()}
                                  <td>{data.user.email}</td>

                                  <td>
                                    <i
                                      class="ti-eye"
                                      data-toggle="modal"
                                      data-target={"#" + data.user.id}
                                    ></i>
                                  </td>
                                  <td>
                                    {" "}

                                    {(() => {
                                      if (data.user.status === "deactive") {
                                        return (
                                          <button
                                            type="button"
                                            className="btn btn-success"
                                            style={{ backgroundColor: "Blue" }}
                                            onClick={() => this.AuthUser({ uid: data.user.id,status: "deactive" })}
                                          >
                                            Activate
                                          </button>
                                        )
                                      } else {
                                        return (
                                          <button
                                            type="button"
                                            className="btn btn-success"
                                            style={{ backgroundColor: "red" }}
                                            onClick={() => this.AuthUser({ uid: data.user.id,status: "active" })}
                                          >
                                            Deactivate
                                          </button>
                                        )
                                      }
                                    })()}

                                  </td>
                                </tr>
                              );
                            })}

                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* Vertically centered modal start */}
                    {this.state.profiledata.map((data) => {

                      return (
                        <div className="col-lg-6 mt-5">
                          {/* Modal */}
                          <div className="modal fade" id={data.user.id}>
                            <div
                              className="modal-dialog modal-dialog-centered"
                              role="document"
                            >
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title">User Details</h5>
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                  >
                                    <span>×</span>
                                  </button>
                                </div>
                                <div className="modal-body">

                                  <table style={{ width: "100%" }} >
                                    <tr>
                                      <td>Userid</td>
                                      <td>{data.user.id}</td>
                                    </tr>
                                    <tr>
                                      <td>Email</td>
                                      <td>{data.user.email}</td>
                                    </tr>
                                    <tr>
                                      <td>First Name</td>
                                      <td>{data.user.fname}</td>
                                    </tr>

                                    <tr>
                                      <td>Last Name</td>
                                      <td>{data.user.lname}</td>
                                    </tr>

                                    <tr>
                                      <td>Country</td>
                                      <td>{data.user.country}</td>
                                    </tr>

                                    <tr>
                                      <td>Mobile</td>
                                      <td>{data.user.mobile}</td>
                                    </tr>
                                    <tr>
                                      <td>Bob</td>
                                      <td>{data.user.dob}</td>
                                    </tr>
                                    <tr>
                                      <td>Education</td>
                                      <td>{data.user.education}</td>
                                    </tr>
                                    <tr>
                                      <td>Gender</td>
                                      <td>{data.user.gender}</td>
                                    </tr>

                                    <tr>
                                      <td>Referal Code</td>
                                      <td>{data.user.refcode}</td>
                                    </tr>
                                  </table>
                                  <br />
                                  <h5 className="modal-title">Payment Receiver Details</h5>  <br />

                                  <table style={{ width: "100%" }}>





                                    <tr>
                                      <td>First Name</td>
                                      <td>{data.fname}</td>
                                    </tr>

                                    <tr>
                                      <td>Last Name</td>
                                      <td>{data.lname}</td>
                                    </tr>

                                    <tr>
                                      <td>Country</td>
                                      <td>{data.country}</td>
                                    </tr>

                                    <tr>
                                      <td>City</td>
                                      <td>{data.city}</td>
                                    </tr>

                                    <tr>
                                      <td>Street</td>
                                      <td>{data.street}</td>
                                    </tr>

                                    <tr>
                                      <td>Address No</td>
                                      <td>{data.addresno}</td>
                                    </tr>



                                    <tr>
                                      <td>Currency</td>
                                      <td>{data.currency}</td>
                                    </tr>
                                    <tr>
                                      <td>Postal Code</td>
                                      <td>{data.postal}</td>
                                    </tr>
                                    <tr>
                                      <td>Region</td>
                                      <td>{data.region}</td>
                                    </tr>


                                  </table>




                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                  >
                                    Close
                              </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      );
                    })}
                    {/* Vertically centered modal end */}
                  </div>
                </div>
                {/* data table end */}
              </div>
            </div>
          </div>
          {/* main content area end */}
        </div>
        {/* page container area end */}
      </div>
    );
  }
}

export default Users;
