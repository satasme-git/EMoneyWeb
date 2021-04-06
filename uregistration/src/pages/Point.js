
import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { Helmet } from "react-helmet";
import adminEarningService from "../services/adminEarningService";
import Sidebar from '../components/Sidebar';
import pointService from '../services/pointService';
import toast from 'toast-me';

class Points extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      daily_limit: '0',
      payout_limit: '0',
      points: [],
      getpoint: '',
      getpsource: '',

    };

  }

  componentDidMount() {
    // var user = Cookies.get('user');
    // if (user != null) {
    //     earningService.getToday(Cookies.get('user')).then(res => {
    //         this.setState({ today_earning: res.data });
    //     });

    //     earningService.getYesterdayEarning(Cookies.get('user')).then(res => {
    //         this.setState({ yesterday_earning: res.data });
    //     });

    //     earningService.getWeekEarning(Cookies.get('user')).then(res => {
    //         this.setState({ week_earning: res.data });
    //     });

    //     earningService.getMonthEarning(Cookies.get('user')).then(res => {
    //         this.setState({ month_earning: res.data });
    //     });

    //     earningService.getBalance(Cookies.get('user')).then(res => {
    //         this.setState({ balance: res.data });
    //     });
    //     earningService.getTotalEarning(Cookies.get('user')).then(res => {
    //         this.setState({ total_earning: res.data });
    //     });

    //     userServices.getUserById(Cookies.get('user')).then(res => {
    //         this.setState({ username: res.data.fname });
    //     });
    // } else {
    //     this.props.history.push('/login');
    // }
    pointService.getPoints().then(res => {
      this.setState({ points: res.data });
    });

    pointService.getDailyMaxEarning().then(res => {
      this.setState({ daily_limit: res.data });
    });

    pointService.getPayoutEarning().then(res => {
      this.setState({ payout_limit: res.data });
    });

  }

  changeDailyLimit = event => {
    this.setState({ daily_limit: event.target.value });
  };

  changePayoutLimit = event => {
    this.setState({ payout_limit: event.target.value });
  };

  changePoint = event => {
    this.setState({ changepoint: event.target.value });
  };

  changegetPsource = event => {
    this.setState({ getpsource: event.target.value });
  };

  changegetPoint = event => {
    this.setState({ getpoint: event.target.value });
  };

  updatePoints(points) {
    if (this.state.changepoint != "") {
      let p = { pid: points.data, points: this.state.changepoint }
      pointService.updatePoints(p).then(res => {
        pointService.getPoints().then(res => {
          this.setState({ points: res.data });
        });
      });
    }

  }

  savePoints = event => {
    let p = { psource: this.state.getpsource, points: this.state.getpoint }
    pointService.addPoints(p).then(res => {
      pointService.getPoints().then(res => {
        this.setState({ points: res.data });
      });
    });
  }

  updateDailyLimit = event => {
    let p = { point: this.state.daily_limit }
    pointService.addMaxPoints(p).then(res => {
      toast('Daily limit updated', { position: 'bottom' });
      pointService.getDailyMaxEarning().then(res => {
        this.setState({ daily_limit: res.data });
        
      });
    });
  }

  updatePayoutLimit = event => {
    let p = { point: this.state.payout_limit }
    pointService.addPayLimit(p).then(res => {
      toast('Payout limit updated', { position: 'bottom' });
      pointService.getPayoutEarning().then(res => {
        this.setState({ payout_limit: res.data });
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
        <div id="preloader">
          <div className="loader" />
        </div>
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
                      <li><span>Points</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* page title area end */}
            <div className="main-content-inner">
              <h4 className="header-title1" style={{ textAlign: 'center', fontSize: '50px', padding: '10px' }}>Points</h4>
              <div className="row">
                {/* table primary start */}
                <div className="col-lg-12 mt-5">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="header-title">Points</h4>
                      {/* Button */}
                      <div className="row">
                        <div className="col-sm text-right">
                          <button type="button" className="btn btn-success" style={{ width: '20%' }} data-toggle="modal" data-target="#exampleModalCenter">Add</button>
                        </div>
                      </div>
                      {/* Button */}
                      <div className="single-table">
                        <div className="table-responsive">
                          <br /><table className="table text-center">
                            <thead className="text-uppercase bg-primary">
                              <tr className="text-white">

                                <th scope="col" style={{ textAlign: 'center' }}>Point Source</th>
                                <th scope="col" style={{ textAlign: 'center' }}>Point</th>
                                <th scope="col" style={{ textAlign: 'center' }}>Status</th>

                              </tr>
                            </thead>
                            <tbody>
                              {this.state.points.map((data) => {
                                return (
                                  <tr>
                                    <td>{data.pointSource}</td>
                                    <td>{data.points}</td>
                                    <td>
                                      <i
                                        class="ti-eye"
                                        data-toggle="modal"
                                        data-target={"#" + data.id}
                                      ></i>
                                    </td>
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
                {/* table primary end */}
                {/* 2nd table */}
                {/* basic table start */}
                <div className="col-lg-6 mt-5">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="header-title">Maximum Earning Per Day</h4>
                      <div className="single-table">
                        <div className="table-responsive">
                          <table className="table text-center">
                            <thead className="text-uppercase">
                              <tr>
                                <th scope="col" />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <label htmlFor="fname">Max(Points):</label><br />
                                  <input type="text" id="fname" name="fname" placeholder="ex: 100" value={this.state.daily_limit} onChange={this.changeDailyLimit} /><br /><br />

                                  <button type="submit" className="btn btn-success" onClick={this.updateDailyLimit} >Update</button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mt-5">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="header-title">Payout Limit</h4>
                      <div className="single-table">
                        <div className="table-responsive">
                          <table className="table text-center">
                            <thead className="text-uppercase">
                              <tr>
                                <th scope="col" />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <label htmlFor="fname">Limit($):</label><br />
                                  <input type="text" id="fname" name="fname" placeholder="ex:Min 10" value={this.state.payout_limit} onChange={this.changePayoutLimit} /><br /><br />

                                  <button type="submit" className="btn btn-success" defaultValue="Submit" onClick={this.updatePayoutLimit} >Update</button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {this.state.points.map((data) => {
                  return (
                    <div className="col-lg-6 mt-5">
                      {/* Modal */}
                      <div className="modal fade" id={data.id}>
                        <div
                          className="modal-dialog modal-dialog-centered"
                          role="document"
                        >
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Edit Points</h5>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                              >
                                <span>×</span>
                              </button>
                            </div>
                            <div className="modal-body">

                              <label for="Edit" >Point Source :</label>
                              <input type="text" style={{ border: "solid 2px" }} disabled defaultValue={data.pointSource} />
                              <br /><br />
                              <label for="Edit" >Edit Point :</label>
                              <input type="text" style={{ border: "solid 2px" }} id="Edit" name="Edit" defaultValue={data.points} onChange={this.changePoint} />
                              <br /><br />




                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary"
                                data-dismiss="modal">Close</button>
                              <button type="button" data-dismiss="modal" class="btn btn-success" onClick={() => this.updatePoints({ data: data.id })}>Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div class="col-lg-6 mt-5">
                  {/* <!-- Modal --> */}
                  <div class="modal fade" id="exampleModalCenter">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">Add  Details</h5>
                          <button type="button" class="close"
                            data-dismiss="modal"><span>&times;</span></button>
                        </div>
                        <div class="modal-body">



                          <form action="/#">
                            <label for="Edit" >Point Source :</label>
                            <input type="text" style={{ border: "solid 2px" }} id="Source" name="Source" value={this.state.getpsource} onChange={this.changegetPsource} />
                            <br /><br />
                            <label for="Point" >Point  :</label>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                            <input type="text" style={{ border: "solid 2px" }} id="Point" name="Point" value={this.state.getpoints} onChange={this.changegetPoint} />
                            <br /><br />
                          </form>

                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary"
                            data-dismiss="modal">Close</button>
                          <button type="button" data-dismiss="modal" class="btn btn-success" onClick={this.savePoints}>Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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

export default Points

