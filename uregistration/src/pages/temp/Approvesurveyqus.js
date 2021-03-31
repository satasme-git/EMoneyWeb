import React, { Component } from "react";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import $ from "jquery";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class Approvesurveyqus extends React.Component {
  componentDidMount() {
    //initialize datatable
    $(document).ready(function () {
      $("#example").DataTable();
      $("#example2").DataTable();
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

          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.datatables.net/1.10.18/css/dataTables.bootstrap4.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.jqueryui.min.css"
          />
        </Helmet>
        <div id="preloader">
          <div className="loader" />
        </div>
        {/* preloader area end */}
        {/* page container area start */}
        <div className="page-container">
          {/* main content area start */}
          <div className="main-content">
            {/* header area start */}
            <div className="header-area">
              <div className="row align-items-center">
                {/* nav and search button */}
                <div className="col-md-6 col-sm-8 clearfix">
                  <div className="search-box pull-left">
                    <form action="#">
                      <input
                        type="text"
                        name="search"
                        placeholder="Search..."
                        required
                      />
                      <i className="ti-search" />
                    </form>
                  </div>
                </div>
                {/* profile info & task notification */}
              </div>
            </div>
            {/* header area end */}
            {/* page title area start */}
            <div className="page-title-area">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <div className="breadcrumbs-area clearfix">
                    <h4 className="page-title pull-left">Dashboard</h4>
                    <ul className="breadcrumbs pull-left">
                      <li>
                        {" "}
                        <Link to="/admindash">
                          {" "}
                          <a>Home</a>{" "}
                        </Link>
                      </li>
                      <li>
                        <span>Approve survey question </span>
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
                  <div className="card">
                    <div className="card-body">
                      <h4 className="header-title">Approve survey question</h4>
                      <div className="data-tables">
                        <table id="example" class="display" style={{textAlign:"center" }}  >
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Email</th>
                              <th>View</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Praveen</td>
                              <td>Praveen@gmail.com</td>
                              <td>
                                <i
                                  class="ti-eye"
                                  data-toggle="modal"
                                  data-target="#exampleModalLong"
                                ></i>
                              </td>
                              <td>
                                {" "}
                             
                              
                                <button
                                  type="button"
                                  className="btn btn-success"
                                  style={{ backgroundColor: "green" }}
                                >
                                  Approve
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* Vertically centered modal start */}
                    <div className="col-lg-6 mt-5">
                      {/* Modal */}
                      <div className="modal fade" id="exampleModalLong">
                        <div
                          className="modal-dialog modal-dialog-centered"
                          role="document"
                        >
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Questions Details</h5>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                              >
                                <span>×</span>
                              </button>
                            </div>
                            <div className="modal-body">

                         <table style={{width:"100%" }} > <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6"> 1. Have you ever heard about [Site Name]? </label>
            <div id="cid_6" className="form-input-wide" data-layout="full">
              <div className="form-single-column" role="group" aria-labelledby="label_6" data-component="radio">
                <span className="form-radio-item" style={{clear: 'left'}}>
                  <span className="dragger-item">
                  </span>
                  <input type="radio" className="form-radio" id="input_6_0" name="q6_1Have" defaultValue="Yes" />
                  <label id="label_input_6_0" htmlFor="input_6_0"> Yes </label>
                </span>
                <span className="form-radio-item" style={{clear: 'left'}}>
                  <span className="dragger-item">
                  </span>
                  <input type="radio" className="form-radio" id="input_6_1" name="q6_1Have" defaultValue="No" />
                  <label id="label_input_6_1" htmlFor="input_6_1"> No </label>
                </span>
              </div>
            </div>
          </li>
          <li className="form-line" data-type="control_radio" id="id_35">
            <label className="form-label form-label-top form-label-auto" id="label_35" htmlFor="input_35"> 1. Have you ever heard about [Site Name]? </label>
            <div id="cid_35" className="form-input-wide" data-layout="full">
              <div className="form-single-column" role="group" aria-labelledby="label_35" data-component="radio">
                <span className="form-radio-item" style={{clear: 'left'}}>
                  <span className="dragger-item">
                  </span>
                  <input type="radio" className="form-radio" id="input_35_0" name="q35_1Have35" defaultValue="Yes" />
                  <label id="label_input_35_0" htmlFor="input_35_0"> Yes </label>
                </span>
                <span className="form-radio-item" style={{clear: 'left'}}>
                  <span className="dragger-item">
                  </span>
                  <input type="radio" className="form-radio" id="input_35_1" name="q35_1Have35" defaultValue="No" />
                  <label id="label_input_35_1" htmlFor="input_35_1"> No </label>
                </span>
              </div>
            </div>
          </li>
          <li className="form-line" data-type="control_radio" id="id_36">
            <label className="form-label form-label-top form-label-auto" id="label_36" htmlFor="input_36"> 1. Have you ever heard about [Site Name]? </label>
            <div id="cid_36" className="form-input-wide" data-layout="full">
              <div className="form-single-column" role="group" aria-labelledby="label_36" data-component="radio">
                <span className="form-radio-item" style={{clear: 'left'}}>
                  <span className="dragger-item">
                  </span>
                  <input type="radio" className="form-radio" id="input_36_0" name="q36_1Have36" defaultValue="Yes" />
                  <label id="label_input_36_0" htmlFor="input_36_0"> Yes </label>
                </span>
                <span className="form-radio-item" style={{clear: 'left'}}>
                  <span className="dragger-item">
                  </span>
                  <input type="radio" className="form-radio" id="input_36_1" name="q36_1Have36" defaultValue="No" />
                  <label id="label_input_36_1" htmlFor="input_36_1"> No </label>
                </span>
              </div>
            </div>
          </li>



          <li className="form-line" data-type="control_checkbox" id="id_74">
                <label className="form-label form-label-top form-label-auto" id="label_74" htmlFor="input_74"> Type a question </label>
                <div id="cid_74" className="form-input-wide" data-layout="full">
                  <div className="form-single-column" role="group" aria-labelledby="label_74" data-component="checkbox">
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_74_0" name="q74_typeA74[]" defaultValue="Type option 1" />
                      <label id="label_input_74_0" htmlFor="input_74_0"> Type option 1 </label>
                    </span>
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_74_1" name="q74_typeA74[]" defaultValue="Type option 2" />
                      <label id="label_input_74_1" htmlFor="input_74_1"> Type option 2 </label>
                    </span>
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_74_2" name="q74_typeA74[]" defaultValue="Type option 3" />
                      <label id="label_input_74_2" htmlFor="input_74_2"> Type option 3 </label>
                    </span>
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_74_3" name="q74_typeA74[]" defaultValue="Type option 4" />
                      <label id="label_input_74_3" htmlFor="input_74_3"> Type option 4 </label>
                    </span>
                  </div>
                </div>
              </li>
              <li className="form-line" data-type="control_checkbox" id="id_75">
                <label className="form-label form-label-top form-label-auto" id="label_75" htmlFor="input_75"> Type a question </label>
                <div id="cid_75" className="form-input-wide" data-layout="full">
                  <div className="form-single-column" role="group" aria-labelledby="label_75" data-component="checkbox">
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_75_0" name="q75_typeA75[]" defaultValue="Type option 1" />
                      <label id="label_input_75_0" htmlFor="input_75_0"> Type option 1 </label>
                    </span>
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_75_1" name="q75_typeA75[]" defaultValue="Type option 2" />
                      <label id="label_input_75_1" htmlFor="input_75_1"> Type option 2 </label>
                    </span>
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_75_2" name="q75_typeA75[]" defaultValue="Type option 3" />
                      <label id="label_input_75_2" htmlFor="input_75_2"> Type option 3 </label>
                    </span>
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_75_3" name="q75_typeA75[]" defaultValue="Type option 4" />
                      <label id="label_input_75_3" htmlFor="input_75_3"> Type option 4 </label>
                    </span>
                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_radio" id="id_51">
              <label className="form-label form-label-top form-label-auto" id="label_51" htmlFor="input_51"> Type a question </label>
              <div id="cid_51" className="form-input-wide" data-layout="full">
                <div className="form-single-column" role="group" aria-labelledby="label_51" data-component="radio">
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_51_0" name="q51_typeA51" defaultValue="Type option 1" />
                    <label id="label_input_51_0" htmlFor="input_51_0"> Type option 1 </label>
                  </span>
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_51_1" name="q51_typeA51" defaultValue="Type option 2" />
                    <label id="label_input_51_1" htmlFor="input_51_1"> Type option 2 </label>
                  </span>
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_51_2" name="q51_typeA51" defaultValue="Type option 3" />
                    <label id="label_input_51_2" htmlFor="input_51_2"> Type option 3 </label>
                  </span>
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_51_3" name="q51_typeA51" defaultValue="Type option 4" />
                    <label id="label_input_51_3" htmlFor="input_51_3"> Type option 4 </label>
                  </span>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_radio" id="id_52">
              <label className="form-label form-label-top form-label-auto" id="label_52" htmlFor="input_52"> Type a question </label>
              <div id="cid_52" className="form-input-wide" data-layout="full">
                <div className="form-single-column" role="group" aria-labelledby="label_52" data-component="radio">
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_52_0" name="q52_typeA52" defaultValue="Type option 1" />
                    <label id="label_input_52_0" htmlFor="input_52_0"> Type option 1 </label>
                  </span>
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_52_1" name="q52_typeA52" defaultValue="Type option 2" />
                    <label id="label_input_52_1" htmlFor="input_52_1"> Type option 2 </label>
                  </span>
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_52_2" name="q52_typeA52" defaultValue="Type option 3" />
                    <label id="label_input_52_2" htmlFor="input_52_2"> Type option 3 </label>
                  </span>
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_52_3" name="q52_typeA52" defaultValue="Type option 4" />
                    <label id="label_input_52_3" htmlFor="input_52_3"> Type option 4 </label>
                  </span>
                </div>
              </div>
            </li>
</table>
<br/>



                             
                         
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

export default Approvesurveyqus;
