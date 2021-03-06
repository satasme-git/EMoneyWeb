import React, { Component } from "react";

import { Link } from "react-router-dom";

//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { Helmet } from "react-helmet";
import adminEarningService from "../services/adminEarningService";
import Sidebar from '../components/Sidebar';
import paymentService from "../services/paymentService";
import serveyService from "../services/serveyService";
import Cookies from 'js-cookie';

class InstagramEarnHistory extends React.Component {

  constructor(props) {
    super(props)
    this.state = {


      pending: [],
      payed: []

    }
  }


  componentDidMount() {
    adminEarningService.getSocialEarning("instagram").then(res => {

      this.setState({ service: res.data });

    });
    adminEarningService.getUserSocialEarning("instagram").then(res => {

      this.setState({ customer: res.data });

    });

    var user = Cookies.get('admin');
    if (user == null) {
      this.props.history.push('/admin');
    } else {
      var completediv = document.getElementById("completediv");
      completediv.setAttribute("style", "display:none");
      adminEarningService.getSocialEarning("website").then(res => {

        this.setState({ pending: res.data });

      });

      adminEarningService.getUserSocialEarning("website").then(res => {

        this.setState({ payed: res.data });

      });
    }
    var completediv = document.getElementById("completediv");
    completediv.setAttribute("style", "display:none");
    serveyService.getSocialEarning().then(res => {

      this.setState({ pending: res.data });

    });

    serveyService.getUserSocialEarning().then(res => {

      this.setState({ payed: res.data });

    });
  }

  componentDidUpdate() {
   

  }
  changePaymentType = (e) => {
    var pendingdiv = document.getElementById("pendingdiv");
    var completediv = document.getElementById("completediv");
    if (e.target.id == "pending") {
      pendingdiv.setAttribute("style", "display:");
      completediv.setAttribute("style", "display:none");

      serveyService.getUserSocialEarning().then(res => {

        this.setState({ payed: res.data });

      });
      $("#example1").DataTable();
    } else {
      pendingdiv.setAttribute("style", "display:none");
      completediv.setAttribute("style", "display:");
      serveyService.getSocialEarning().then(res => {

        this.setState({ pending: res.data });

      });
      $("#example2").DataTable();
    }
  }

  render() {

     //initialize datatable
     $(document).ready(function () {
      $("#example1").DataTable();
      $("#example2").DataTable();
    });
    
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


          <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>
          <script src="https://code.highcharts.com/highcharts.js"></script>
          <script src="https://code.highcharts.com/modules/exporting.js"></script>
          <script src="https://code.highcharts.com/modules/export-data.js"></script>

          <script src="https://www.amcharts.com/lib/3/ammap.js"></script>
          <script src="https://www.amcharts.com/lib/3/maps/js/worldLow.js"></script>


          <script src="/assetsadmin/js/maps.js"></script>

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
                      <li> <Link to="/admin/admindash" > <a >Home</a> </Link></li>
                      <li><span>Survey Earn History</span></li>
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
                    <div className="col-4 col-sm-4 col-md-3">Customers Earn History<input id="pending" defaultChecked type="radio" name="answer" defaultValue="completepay" onClick={this.changePaymentType} /></div>
                    <div className="col-4 col-sm-4 col-md-3">Survey Earn History<input id="completed" type="radio" name="answer" defaultValue="Pennding" onClick={this.changePaymentType} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-5" id="pendingdiv">

                <div className="card">
                  <div className="card-body" id="paymenttable">
                    <h4 className="header-title">Customers Earn History</h4>
                    <div className="data-tables">
                      <table id="example1" class="display">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Amount($) </th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.payed.map((data) => {
                            return (
                              <tr>
                                <td>{data.fname} {data.lname}</td>
                                <td>{data.email}</td>
                                <td>{data.earning}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                  </div>
                </div>
              </div>
              {/* data table end */}
              {/* Primary table start */}
              <div className="col-12 mt-5" id="completediv">
                <div className="card">
                  <div className="card-body" id="Completetable">
                    <h4 className="header-title">Survey Earn History</h4>

                    <table id="example2" class="display">
                      <thead>
                        <tr>
                          <th>Service</th>
                          <th>Date </th>
                          <th>Count(Clicks)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.pending.map((data) => {
                          return (
                            <tr>
                              <td>{data.service}</td>
                              <td> {data.url} </td>
                              <td>{data.count}</td>
                            </tr>
                          );
                        })}
                        {/* <tr>
                            <td>001</td>
                            <td> parveen </td>
                            <td>praveem@gmail.com</td>
                            <td>2020.30.30</td>
                            <td> card  </td>
                            <td> 500$  </td>


                          </tr> */}
                      </tbody>
                    </table>

                  </div>
                </div>
              </div>
              {/* Primary table end */}
            </div>
          </div>
          {/* main content area end */}
        </div>
        {/* page container area end */}
      </div>
    );
  }
}

export default InstagramEarnHistory;
