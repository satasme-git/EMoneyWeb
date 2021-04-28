
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PackageService from "../services/packageService";
import toast from 'toast-me';
import { Helmet } from "react-helmet";
import Sidebar from '../components/Sidebar';
import Cookies from 'js-cookie';


class ELink extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

      lviewmin: 0,
      lviewmax: 0,
      lvpackqty: '',
      lvpackprice: '',
      lvpackcountry: '',
      lviewdata: []

    }
  }

  componentDidMount() {

    var user = Cookies.get('admin');
    if (user == null) {
      this.props.history.push('/admin');
    } else {
      PackageService.getPackageMinMax("link", "views").then(res => {

        if (JSON.stringify(res.data.social_name) != null) {
          this.setState(
            {
              lviewmin: res.data.min,
              lviewmax: res.data.max
            }
          );
        }
      });

      PackageService.getPackageData("link", "views").then(res => {

        this.setState({ lviewdata: res.data });
      });
    }


  }

  saveLViewsMinMax(social, service) {
    let settings = { social_name: social, service: service, min: this.state.lviewmin, max: this.state.lviewmax }
    PackageService.createPackageMinMax(settings)
      .then(res => {
        toast(res.data, { position: 'bottom' })
      });
  }

  saveLViewsPackage = event => {
    let settings = { social_name: "link", service: "views", min: this.state.lviewmin, max: this.state.lviewmax, count: this.state.lvpackqty, price: this.state.lvpackprice, country: this.state.lvpackcountry }
    PackageService.saveInsPackage(settings)
      .then(res => {
        toast(res.data, { position: 'bottom' })
        PackageService.getPackageData("link", "views").then(res => {

          this.setState({ lviewdata: res.data });
        });
      });
  };

  updateLViewsPackage(setting) {
    var count = document.getElementById("vqty" + setting.id).value;
    var price = document.getElementById("vprice" + setting.id).value;
    var country = document.getElementById("vcountry" + setting.id).innerText;
    let settings = { social_name: "link", service: "views", min: this.state.lviewmin, max: this.state.lviewmax, count: count, price: price, country: country }
    PackageService.saveInsPackage(settings)
      .then(res => {
        if (res.data == "Successfully Added") {
          toast("Successfully Updated", { position: 'bottom' })
          PackageService.getPackageData("link", "views").then(res => {

            this.setState({ lviewdata: res.data });

          });
        }
      });
  };

  changeLViewsMin = event => {
    this.setState({ lviewmin: event.target.value });
  };

  changeLViewsMax = event => {
    this.setState({ lviewmax: event.target.value });
  };



  changeLVpackQty = event => {
    this.setState({ lvpackqty: event.target.value });
  };

  changeLVpackPrice = event => {
    this.setState({ lvpackprice: event.target.value });
  };

  changeLVpackCountry = event => {
    this.setState({ lvpackcountry: event.target.value });
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
                      <li><span>Link Clicking</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* page title area end */}
            <div className="main-content-inner">
              <h4 className="header-title1" style={{ textAlign: 'center', fontSize: '50px', padding: '10px' }}>Link Click</h4>
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
                              {this.state.lviewdata.map((data) => {
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
                              <h5 className="modal-title">Link View Settings</h5>
                              <button type="button" className="close" data-dismiss="modal"><span>×</span></button>
                            </div>
                            <div className="modal-body">
                              <div className="row">
                                <div className="col-sm"> <label htmlFor="lname">Quantity : </label>
                                  <input style={{ width: "80%", borderStyle: "solid", borderRadius: "5px", borderColor: "#e7e7e7", borderTopColor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }}
                                    type="text"
                                    name="lname"
                                    value={this.state.lvpackqty}
                                    onChange={this.changeLVpackQty} />
                                </div>
                              </div>   <br/>
                              <div className="row">
                                <div className="col-sm"> <label htmlFor="lname">Price : </label>
                                  <input
                                    type="text"
                                    style={{ marginLeft: "27px", width: "80%", borderStyle: "solid", borderRadius: "5px", borderColor: "#e7e7e7", borderTopColor: "#e7e7e7", backgroundColor: "#ffffff", padding: "5px" }}
                                    name="lname"
                                    value={this.state.lvpackprice}
                                    onChange={this.changeLVpackPrice}
                                  />
                                </div>
                              </div>
                              <br/>
                              <div className="row">
                                <div class="form-group">
                                  <label for="lname"> &nbsp;&nbsp;Country : </label>&nbsp;&nbsp;
                                  <select class="form-select" id="i_f_country" value={this.state.lvpackcountry}
                                    onChange={this.changeLVpackCountry} aria-label="Default select example">
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
                              <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.saveLViewsPackage}>Save changes</button>
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
                                    value={this.state.lviewmin}
                                    onChange={this.changeLViewsMin}
                                  />
                                  <br />
                                  <label htmlFor="lname">Max:</label><br />
                                  <input
                                    type="text"
                                    name="lname"
                                    placeholder="ex:Max 100000"
                                    style={{ border: "1px solid black", textAlign: "center" }}
                                    value={this.state.lviewmax}
                                    onChange={this.changeLViewsMax}
                                  />
                                  <br />
                                  <br />
                                  <button
                                    type="submit"
                                    class="btn btn-success"
                                    onClick={() => this.saveLViewsMinMax("link", "views")}
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
        {this.state.lviewdata.map((data) => {
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
                          <input type="text" id={"vqty" + data.id} name="lname" style={{ border: "1px solid" }} value={data.count} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm"> <label htmlFor="lname">Price ($): </label>
                          <input type="number" style={{ marginLeft: '27px' }} id={"vprice" + data.id} defaultValue={data.price} name="lname" style={{ border: "1px solid" }} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm">
                          <label htmlFor="lname">Country : </label>
                          <label htmlFor="lname" id={"vcountry" + data.id}>{data.country}</label>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => this.updateLViewsPackage({ id: data.id })}>Save changes</button>
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





export default ELink

