import React, { Component } from "react";
import { Link } from "react-router-dom";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import $ from "jquery";
import Sidebar from "../components/Sidebar";
import { Helmet } from "react-helmet";
import paymentService from "../services/paymentService";
import Cookies from "js-cookie";

class AdminPaymentAnagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pending: [],
      payed: [],
    };
  }

  componentDidMount() {
   
    var user = Cookies.get('admin');
    if (user == null) {
      this.props.history.push('/admin');
    } else {
      var completediv = document.getElementById("completediv");
      completediv.setAttribute("style", "display:none");
      paymentService.getPending().then(res => {
        this.setState({ pending: res.data });
      });
      paymentService.getPayed().then(res => {
        this.setState({ payed: res.data });
      });
    }
  }

  componentDidUpdate() {

  }

  changePaymentType = (e) => {
    var pendingdiv = document.getElementById("pendingdiv");
    var completediv = document.getElementById("completediv");
    //var downloadbtn = document.getElementById("downloadbtn");
    if (e.target.id == "pending") {
      pendingdiv.setAttribute("style", "display:");
      completediv.setAttribute("style", "display:none");
    // downloadbtn.setAttribute("style", "display:");
      paymentService.getPending().then((res) => {
        this.setState({ pending: res.data });
      });
      $("#example10").DataTable();
    } else {
      pendingdiv.setAttribute("style", "display:none");
      completediv.setAttribute("style", "display:");
     // downloadbtn.setAttribute("style", "display:none");
      paymentService.getPayed().then((res) => {
        this.setState({ payed: res.data });
      });
      $("#example20").DataTable();
    }
  };

  generatePaymentExcel = (e) => {
    paymentService.generatePayment().then((response) => {
      let fileName = response.headers["content-disposition"].split(
        "filename="
      )[1];
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        // IE variant
        window.navigator.msSaveOrOpenBlob(
          new Blob([response.data], { type: "application/octet-stream" }),
          fileName
        );
      } else {
        const url = window.URL.createObjectURL(
          new Blob([response.data], { type: "application/octet-stream" })
        );
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute(
          "download",
          response.headers["content-disposition"].split("filename=")[1]
        );
        document.body.appendChild(link);
        link.click();
      }
    });
  };

  payToUser(user) {
    let details = { uid: user.uid, amount: user.amount };
    paymentService.savePay(details).then((res) => {
      paymentService.getPending().then((res) => {
        this.setState({ pending: res.data });
      });
    });
  }

  render() {


    // $(document).ready(function () {
    //   $("#example1").DataTable();
    //   $("#example2").DataTable();
    // });


//////////////// add js part//////////////////////////

 //initialize datatable
 
    $(document).ready(function () {
      $("#example10").DataTable();
    });

    $(document).ready(function () {
      $("#example20").DataTable();
    });

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
          {/* ////////////////////////update 2021-05-04 datatable////////////////////////////////////////// */}
          <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
          <script src="https://cdn.datatables.net/1.10.24/js/jquery.dataTables.min.js"></script>

          {/* ////////////////////////update 2021-05-04 datatable////////////////////////////////////////// */}
        </Helmet>
        <Sidebar />

        {/* page container area start */}
        <div className="page-container">
          {/* main content area start */}
          <div className="main-content">
            {/* header area start */}
            <br />
            <div className="page-title-area">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <div className="breadcrumbs-area clearfix">
                    <h4 className="page-title pull-left">Dashboard</h4>
                    <ul className="breadcrumbs pull-left">
                      <li>
                        {" "}
                        <Link to="/admin/admindash">
                          {" "}
                          <a>Home</a>{" "}
                        </Link>
                      </li>
                      <li>
                        <span>Payment management</span>
                      </li>
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
                  <div className="row">
                    <div className="col-4 col-sm-4 col-md-3">
                      Pending Payment{" "}
                      <input
                        id="pending"
                        defaultChecked
                        type="radio"
                        name="answer"
                        defaultValue="completepay"
                        onClick={this.changePaymentType}
                      />
                    </div>
                    <div className="col-4 col-sm-4 col-md-3">
                      Complete Payment
                      <input
                        id="completed"
                        type="radio"
                        name="answer"
                        defaultValue="Pennding"
                        onClick={this.changePaymentType}
                      />
                    </div>
                  </div>
                </div>

{/* //////////////////////////////////////add new table  ///////////////////////////////////////////////////////////////////////// */}

{/* ////////////////////////////////////////// Start pendding payment table//////////////////////// */}
                <div className="col-12 mt-5" id="pendingdiv">
                  <div className="card">
                    <div className="card-body" id="paymenttable">
                      <h4 className="header-title">Pennding Payment</h4>
                      <table id="example10" class="display">
                        <thead>
                          <tr>
                          <th>Name</th>
                              <th>Email</th>
                              <th>Amount </th>
                              <th>Currency</th>
                              <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                            {this.state.pending.map((data) => {
                              return (
                                <tr>
                                  <td>{data.name}</td>
                                  <td>{data.email}</td>
                                  <td>{data.amount}</td>
                                  <td>{data.currency}</td>

                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-success"
                                      onClick={() =>
                                        this.payToUser({
                                          uid: data.cus_id,
                                          amount: data.amount,
                                        })
                                      }
                                    >
                                      Mark As Payed
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                   
                      </table>
                    </div>
                  </div>
                </div>

{/* //////////////////////////////////////////End pendding payment table//////////////////////// */}

{/* //////////////////////////////////////////Start Complete payment table//////////////////////// */}
{/* <div className="col-12 mt-5" id="#">
                  <div className="card">
                    <div className="card-body" id="paymenttable">
                      <h4 className="header-title">Complete Payment</h4>
                      <table id="example20" class="display">
                        <thead>
                          <tr>
                          <th>Name</th>
                              <th>Email </th>
                              <th>Date</th>
                              <th>Payment Method</th>
                              <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                            {this.state.payed.map((data) => {
                              return (
                                <tr>
                                  <td>
                                    {data.user.fname} {data.user.lname}
                                  </td>
                                  <td>{data.user.email}</td>
                                  <td>{data.date}</td>
                                  <td>Paypal</td>
                                  <td>{data.amount}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                   
                      </table>
                    </div>
                  </div>
                </div> */}

{/* //////////////////////////////////////////End Complete payment table//////////////////////// */}

{/* //////////////////////////////////////add new table end ///////////////////////////////////////////////////////////////////////// */}






{/* //////////////////////////////////////old table end ///////////////////////////////////////////////////////////////////////// */}

               {/* <div className="col-12 mt-5" id="pendingdiv">
                  <div className="card">
                    <div className="card-body" id="paymenttable">
                      <h4 className="header-title">Pennding Payment</h4>
                      <div className="data-tables">
                        <table id="example1" class="display">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Amount </th>
                              <th>Currency</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.pending.map((data) => {
                              return (
                                <tr>
                                  <td>{data.name}</td>
                                  <td>{data.email}</td>
                                  <td>{data.amount}</td>
                                  <td>{data.currency}</td>

                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-success"
                                      onClick={() =>
                                        this.payToUser({
                                          uid: data.cus_id,
                                          amount: data.amount,
                                        })
                                      }
                                    >
                                      Mark As Payed
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div> */}
             

             
                <div className="col-12 mt-5" id="completediv">
                  <div className="card">
                    <div className="card-body" id="Completetable">
                      <h4 className="header-title">Complete Payment</h4>
                      <div className="data-tables">
                        <table id="example20" class="display">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Email </th>
                              <th>Date</th>
                              <th>Payment Method</th>
                              <th>Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.payed.map((data) => {
                              return (
                                <tr>
                                  <td>
                                    {data.user.fname} {data.user.lname}
                                  </td>
                                  <td>{data.user.email}</td>
                                  <td>{data.date}</td>
                                  <td>Paypal</td>
                                  <td>{data.amount}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                




         
              </div>
            </div>
          </div>
          
        </div>

      
      </div>
    );
  }
}

export default AdminPaymentAnagement;
