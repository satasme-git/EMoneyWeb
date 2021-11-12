
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import { Helmet } from "react-helmet";
import moment from 'moment';
import toast from 'toast-me';
import OrderService from "../services/orderService";
import earningService from "../services/earningService";
import socialmedia from "../services/socialmedia";
import ScreenshotService from "../services/screenshotService";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
//Datatable Modules
import $ from 'jquery';
import Sidebar from '../components/Sidebar';
import Cookies from 'js-cookie';

class Screenshots extends React.Component {


  constructor(props) {
    super(props)
    this.state = {

      status: '',
      ssdata: [],
      point: '',
      ssid: '',
      userid: ''
    }
  }

  componentDidMount() {

    var user = Cookies.get('admin');
    if (user == null) {
      this.props.history.push('/admin');
    } else {
      ScreenshotService.getAll().then(res => {

        this.setState({
          ssdata: res.data,

        });

       

      });
      //   earningService.getBalance(Cookies.get('user')).then(res => {
      //     this.setState({ balance: res.data });
      // });
    }

  }
  removePoint = (e) => {
    var point = document.getElementById("point").value;
    var ssid = document.getElementById("ssid").value;
    var userid = document.getElementById("userid").value;
    let ss = { userid: userid, point: point, ssid: ssid };
    console.log(ss);
    // toast('Please,awaiting....!', { position: 'bottom' });
    socialmedia.removePoint(ss)
      .then(res => {
        //console.log(ss);
        toast('Please,awaiting....!', { position: 'bottom' });
        if (res.data === "success") {

          this.props.history.push('/admin/screenshot');
          toast('Removed Points.. !', { position: 'bottom' });
          console.log("success");
        } else {

          toast('Have Some Error.. !', { position: 'bottom' });


        }
        this.props.history.push('/admin/screenshot');
      });




  }

  componentDidUpdate() {
    //initialize datatable
    $(document).ready(function () {
      $("#example").DataTable();
    });
  }
  changePoint = (event) => {
    this.setState({
      point: event.target.value
    });
  }





  render() {
    //Datatable HTML

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
        {/* preloader area end */}
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
                      <li><span>Screenshots </span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* page title area end */}
            <div className="main-content-inner">
              <div className="row">

                {/* testtable */}
                <div className="MainDiv">


                  <div className="container">

                    <div className="col-12 mt-5">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="header-title">Screenshots</h4>
                          <div className="data-tables">
                            <div className="container">
                              <table id="example" class="display" style={{ textAlign: "center" }}>
                              <thead>

                              <tr>
                              <th>Screenshot ID</th>
                              <th>User Id</th>
                              <th>View</th>
                              </tr>
                              </thead>
                              <tbody>
                            {this.state.ssdata.map((data) => {
                              return (
                              <tr>

                              <td>{data.id}</td>
                              <td>{data.user_id}</td>
                            {/* <td><i className="ti-eye" data-toggle="modal" data-target={"#" + data.id} /></td> */}
                              <td>
                           
                          <img src={` https://app.emoneytag.live/public/images/Members/${data.image}`} style={{width:100}}></img>
                         
                              </td>
                              {/* <img src={'http://localhost:8000/public/images/members/${data.image}'} style="width:52px"/> */}
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




                      {/* <table id="example" class="display">
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Name</th>
                          <th>Network type</th>
                          <th>Date</th>
                          <th>Cost</th>
                          <th>Status</th>
                          <th>Payment methods</th>
                          <th>View</th>
                        </tr>
                      </thead>
                      <tbody>




                        <tr>
                          <td>001</td>
                          <td>Praveen</td>
                          <td>Youtube</td>
                          <td>2020-10-12</td>
                          <td>500$</td>
                          <td>Pendding</td>
                          <td><i className="ti-eye" data-toggle="modal" data-target="#exampleModalLong" /></td>
                          <td>Credite Crad</td>
                        </tr>






                      </tbody>

                    </table> */}


                    </div>



                    {/* data table start */}


                    {/* Modal */}

                    {this.state.ssdata.map((data) => {

                      return (
                        <div className="modal fade" id={data.id}>
                          <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">Screenshots  Views</h5>

                                <button type="button" className="close" data-dismiss="modal"><span>×</span></button>
                              </div>
                              <div className="modal-body">
                                <form onSubmit={this.removePoint}>
                                  <div className="row">
                                    <input className="input100w" type="hidden" name="ssid" id="ssid" value={data.id} style={{ width: "50%" }} />
                                    <input className="input100w" type="hidden" name="userid" id="userid" value={data.user_id} style={{ width: "50%" }} />
                                    <div className="col-sm">
                                      <input className="input100w" type="number" placeholder="Remove Points" name="point" id="point" value={this.state.point} onChange={this.changePoint} style={{ width: "50%" }} required />

                                      <div className="container-login100-form-btnw">
                                        <input type="submit" className="login100-form-btnw" value="Remove" style={{ width: "50%" }} />

                                      </div>
                                    </div>
                                  </div>

                                </form>
                                <img src={'/screenshots/' + (data.imagepath)} style={{ width: "100%", height: "100%", padding: "10px" }}></img>
                                {/* <img src={'/uregistration/public/screenshots/'+(data.imagepath)} style={{ width: "100%", height: "100%", padding: "10px" }}></img> */}
                                {/* <img src={'/screenshots/'+(data.user.id)+'/'+(data.imagepath)} style={{ width: "100%", height: "100%", padding: "10px" }}></img> */}


                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}



                  </div>
                  {/* data table end */}
                </div>
              </div>
            </div>
            {/* main content area end */}

          </div>
          {/* page container area end */}
        </div >

        );
  }
}


        export default Screenshots

