
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PackageService from "../services/packageService";
import toast from 'toast-me';
import { Helmet } from "react-helmet";
import Sidebar from '../components/Sidebar';
import serveyService from '../services/serveyService';


class EServey extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

      sviewmin: 0,
      sviewmax: 0,
      svpackqty: '',
      svpackprice: '',
      svpackcountry: '',
      sqprice: '',
      sviewdata: []

    }
  }

  componentDidMount() {
    PackageService.getPackageMinMax("servey", "views").then(res => {

      if (JSON.stringify(res.data.social_name) != null) {
        this.setState(
          {
            sviewmin: res.data.min,
            sviewmax: res.data.max
          }
        );
      }
    });

    PackageService.getPackageData("servey", "views").then(res => {

      this.setState({ sviewdata: res.data });
    });

    serveyService.getQuestionPrice().then(res => {

      this.setState({ sqprice: res.data });
    });
  }

  saveSViewsMinMax(social, service) {
    let settings = { social_name: social, service: service, min: this.state.sviewmin, max: this.state.sviewmax }
    PackageService.createPackageMinMax(settings)
      .then(res => {
        toast(res.data, { position: 'bottom' })
      });
  }

  saveSViewsPackage = event => {
    let settings = { social_name: "servey", service: "views", min: this.state.sviewmin, max: this.state.sviewmax, count: this.state.svpackqty, price: this.state.svpackprice, country: this.state.svpackcountry }
    PackageService.saveInsPackage(settings)
      .then(res => {
        toast(res.data, { position: 'bottom' })
        PackageService.getPackageData("servey", "views").then(res => {

          this.setState({ sviewdata: res.data });
        });
      });
  };

  saveSqPrice = event => {
    let settings = { price: this.state.sqprice }
    serveyService.setQuestionPrice(settings)
      .then(res => {
        toast(res.data, { position: 'bottom' })
        serveyService.getQuestionPrice().then(res => {

          this.setState({ sqprice: res.data });
        });
      });
  };

  updateSViewsPackage(setting) {
    var count = document.getElementById("sqty" + setting.id).value;
    var price = document.getElementById("sprice" + setting.id).value;
    var country = document.getElementById("scountry" + setting.id).innerText;
    let settings = { social_name: "servey", service: "views", min: this.state.sviewmin, max: this.state.sviewmax, count: count, price: price, country: country }
    PackageService.saveInsPackage(settings)
      .then(res => {
        if (res.data == "Successfully Added") {
          toast("Successfully Updated", { position: 'bottom' })
          PackageService.getPackageData("servey", "views").then(res => {

            this.setState({ sviewdata: res.data });

          });
        }
      });
  };

  changeSViewsMin = event => {
    this.setState({ sviewmin: event.target.value });
  };

  changeSViewsMax = event => {
    this.setState({ sviewmax: event.target.value });
  };



  changeSVpackQty = event => {
    this.setState({ svpackqty: event.target.value });
  };

  changeSVpackPrice = event => {
    this.setState({ svpackprice: event.target.value });
  };

  changeSVpackCountry = event => {
    this.setState({ svpackcountry: event.target.value });
  };

  changeSqPrice = event => {
    this.setState({ sqprice: event.target.value });
  };

  render() {

    return (
      <div>
        <Helmet>
          <meta charset="utf-8" />
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
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








          <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.css" />
          <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.18/css/dataTables.bootstrap4.min.css" />
          <link rel="stylesheet" type="text/css"
            href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.bootstrap.min.css" />
          <link rel="stylesheet" type="text/css"
            href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.jqueryui.min.css" />



        </Helmet>
        <Sidebar />
        <div id="preloader">
          <div className="loader" />
        </div>
        {/* preloader area end */}
        {/* page container area start */}
        <div className="page-container">
          {/* sidebar menu area start */}

          {/* sidebar menu area end */}
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
                      <li><span>Servey</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* page title area end */}
            <div className="main-content-inner">
              <h4 className="header-title1" style={{ textAlign: 'center', fontSize: '50px', padding: '10px' }}>Servey Filling</h4>
              <div className="row">
                {/* table primary start */}
                <div className="col-lg-12 mt-5">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="header-title">Views</h4>
                      {/* Button */}
                      <div className="row">
                        <div className="col-sm text-right">
                          <button type="button" className="btn btn-success" style={{ width: '20%' }} data-toggle="modal" data-target="#addtfmodal">Add</button>
                        </div>
                      </div>
                      {/* Button */}
                      <div className="single-table">
                        <div className="table-responsive">
                          <br /><table className="table text-center">
                            <thead className="text-uppercase bg-primary">
                              <tr className="text-white">
                                <th scope="col">Views</th>
                                <th scope="col" style={{ textAlign: 'center' }}>price</th>
                                <th scope="col" style={{ textAlign: 'center' }}>Country</th>
                                <th scope="col" style={{ textAlign: 'center' }}>action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.state.sviewdata.map((data) => {
                                return (
                                  <tr>
                                    <th scope="row">{data.count}</th>
                                    <td>${data.price}</td>
                                    <td>{data.country}</td>

                                    <td>
                                      <i
                                        class="ti-pencil"
                                        data-toggle="modal"
                                        data-target={"#f" + data.id}
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
                    {/* Vertically centered modal start */}
                    <div className="col-lg-6 mt-5">
                      {/* Modal */}
                      <div className="modal fade" id="addtfmodal">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Servey View Settings</h5>
                              <button type="button" className="close" data-dismiss="modal"><span>×</span></button>
                            </div>
                            <div className="modal-body">
                              <div className="row">
                                <div className="col-sm"> <label htmlFor="lname">Quantity : </label>
                                  <input style={{ width: "80%", borderStyle: "solid", borderRadius: "5px", borderColor: "#e7e7e7", borderTopColor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }}
                                    type="text"
                                    name="lname"
                                    value={this.state.svpackqty}
                                    onChange={this.changeSVpackQty} />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm"> <label htmlFor="lname">Price : </label>
                                  <input
                                    type="text"
                                    style={{ marginLeft: "27px", width: "80%", borderStyle: "solid", borderRadius: "5px", borderColor: "#e7e7e7", borderTopColor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }}
                                    name="lname"
                                    value={this.state.svpackprice}
                                    onChange={this.changeSVpackPrice}
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div class="form-group">
                                  <label for="lname">Country : </label>
                                  <select class="form-select" id="i_f_country" value={this.state.svpackcountry}
                                    onChange={this.changeSVpackCountry} aria-label="Default select example">
                                    <option selected>--Select--</option>
                                    <option value="AF">Afghanistan</option>
                                    <option value="AM">Armenia</option>
                                    <option value="AZ">Azerbaijan</option>
                                    <option value="BH">Bahrain</option>
                                    <option value="BD">Bangladesh</option>
                                    <option value="BT">Bhutan</option>
                                    <option value="IO">British Indian Ocean Territory</option>
                                    <option value="BN">Brunei Darussalam</option>
                                    <option value="KH">Cambodia</option>
                                    <option value="CN">China</option>
                                    <option value="CX">Christmas Island</option>
                                    <option value="CC">Cocos (Keeling) Islands</option>
                                    <option value="GE">Georgia</option>
                                    <option value="HK">Hong Kong</option>
                                    <option value="IN">India</option>
                                    <option value="ID">Indonesia</option>
                                    <option value="IR">Iran</option>
                                    <option value="IQ">Iraq</option>
                                    <option value="IL">Israel</option>
                                    <option value="JP">Japan</option>
                                    <option value="JO">Jordan</option>
                                    <option value="KZ">Kazakhstan</option>
                                    <option value="KP">Korea, Democratic People's Republic of</option>
                                    <option value="KR">Korea, Republic of</option>
                                    <option value="KW">Kuwait</option>
                                    <option value="KG">Kyrgyzstan</option>
                                    <option value="LA">Lao</option>
                                    <option value="LB">Lebanon</option>
                                    <option value="MY">Malaysia</option>
                                    <option value="MV">Maldives</option>
                                    <option value="MN">Mongolia</option>
                                    <option value="MM">Myanmar (Burma)</option>
                                    <option value="NP">Nepal</option>
                                    <option value="OM">Oman</option>
                                    <option value="PK">Pakistan</option>
                                    <option value="PH">Philippines</option>
                                    <option value="QA">Qatar</option>
                                    <option value="RU">Russian Federation</option>
                                    <option value="SA">Saudi Arabia</option>
                                    <option value="SG">Singapore</option>
                                    <option value="LK">Sri Lanka</option>
                                    <option value="SY">Syria</option>
                                    <option value="TW">Taiwan</option>
                                    <option value="TJ">Tajikistan</option>
                                    <option value="TH">Thailand</option>
                                    <option value="TP">East Timor</option>
                                    <option value="TM">Turkmenistan</option>
                                    <option value="AE">United Arab Emirates</option>
                                    <option value="UZ">Uzbekistan</option>
                                    <option value="VN">Vietnam</option>
                                    <option value="YE">Yemen</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.saveSViewsPackage}>Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Vertically centered modal end */}
                    {/* Editbuttonpopbox */}
                    {/* Vertically centered modal start */}
                    <div className="col-lg-6 mt-5">
                      {/* Modal */}
                      <div className="modal fade" id="exampleModalLong">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title"> Edit</h5>
                              <button type="button" className="close" data-dismiss="modal"><span>×</span></button>
                            </div>
                            <div className="modal-body">
                              <div className="row">
                                <div className="col-sm"> <label htmlFor="lname">Quantity : </label>
                                  <input type="text" id="lname" name="lname" />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm"> <label htmlFor="lname">Price : </label>
                                  <input type="text" style={{ marginLeft: '27px' }} id="lname" name="lname" />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm"> <label htmlFor="lname">Country : </label>
                                  <select style={{ marginLeft: '3px' }} name="Country" id="Country">
                                    <option value="volvo">Srilanka</option>
                                    <option value="saab">Miyanmar</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-success">Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Vertically centered modal end */}
                    {/* Editbuttonpopbox-end */}
                  </div>
                </div>
                {/* table primary end */}
                {/* 2nd table */}
                {/* basic table start */}
                <div className="col-lg-6 mt-5">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="header-title">View Min - Max</h4>
                      <div className="single-table">
                        <div className="table-responsive">
                          <table className="table text-center">
                            <thead className="text-uppercase">
                              <tr>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <label htmlFor="fname">Min:</label><br />
                                  <input
                                    type="text"
                                    name="fname"
                                    placeholder="ex:Min 10"
                                    style={{ border: "1px solid black", textAlign: "center" }}
                                    value={this.state.sviewmin}
                                    onChange={this.changeSViewsMin}
                                  />
                                  <br />
                                  <label htmlFor="lname">Max:</label><br />
                                  <input
                                    type="text"
                                    name="lname"
                                    placeholder="ex:Max 100000"
                                    style={{ border: "1px solid black", textAlign: "center" }}
                                    value={this.state.sviewmax}
                                    onChange={this.changeSViewsMax}
                                  />
                                  <br />
                                  <br />
                                  <button
                                    type="submit"
                                    class="btn btn-success"
                                    onClick={() => this.saveSViewsMinMax("servey", "views")}
                                  >Save</button>
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
                      <h4 className="header-title">Price per one question</h4>
                      <div className="single-table">
                        <div className="table-responsive">
                          <table className="table text-center">
                            <thead className="text-uppercase">
                              <tr>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <label htmlFor="fname">Min:</label><br />
                                  <input
                                    type="text"
                                    name="fname"
                                    placeholder="ex:Min 10"
                                    style={{ border: "1px solid black", textAlign: "center" }}
                                    value={this.state.sqprice}
                                    onChange={this.changeSqPrice}
                                  />

                                  <br />
                                  <br />
                                  <button
                                    type="submit"
                                    class="btn btn-success"
                                    onClick={() => this.saveSqPrice("servey", "views")}
                                  >Save</button>
                                </td>
                              </tr>
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
        {this.state.sviewdata.map((data) => {
          return (
            <div className="col-lg-6 mt-5">
              {/* Modal */}
              <div className="modal fade" id={'f' + data.id}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title"> Edit</h5>
                      <button type="button" className="close" data-dismiss="modal"><span>×</span></button>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-sm"> <label htmlFor="lname">Quantity : </label>
                          <input type="text" id={"sqty" + data.id} name="lname" style={{ border: "1px solid" }} value={data.count} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm"> <label htmlFor="lname">Price ($): </label>
                          <input type="number" style={{ marginLeft: '27px' }} id={"sprice" + data.id} defaultValue={data.price} name="lname" style={{ border: "1px solid" }} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm">
                          <label htmlFor="lname">Country : </label>
                          <label htmlFor="lname" id={"scountry" + data.id}>{data.country}</label>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => this.updateSViewsPackage({ id: data.id })}>Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          );
        })}

        {/* main content area end */}
        {/* page container area end */}
      </div>
    );
  }
}





export default EServey

