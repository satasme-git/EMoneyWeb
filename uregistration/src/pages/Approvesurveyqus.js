import React, { Component } from "react";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import $ from "jquery";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Sidebar from "../components/Sidebar";
import serveyService from "../services/serveyService";
import moment from 'moment'
import Cookies from 'js-cookie';

class Approvesurveyqus extends React.Component {
  constructor(props) {
    super(props)
    this.state = {


      serveys: [],
      serveyquestions: []


    }
  }



  componentDidMount() {

    var user = Cookies.get('admin');
    if (user == null) {
      this.props.history.push('/admin');
    } else {
      serveyService.getPendingServey().then(res => {

        this.setState({ serveys: res.data });

      });

      serveyService.getPendingServeyQuestions().then(res => {

        this.setState({ serveyquestions: res.data });

      });
    }


  }

  componentDidUpdate() {
    //initialize datatable
    $(document).ready(function () {
      $("#example").DataTable();
    });
  }

  approveServey(servey) {
    serveyService.approveServey(servey.id).then(res => {

      serveyService.getPendingServey().then(res => {

        this.setState({ serveys: res.data });

      });

      serveyService.getPendingServeyQuestions().then(res => {

        this.setState({ serveyquestions: res.data });

      });

    });
  }

  deleteServey(servey) {
    serveyService.deleteServey(servey.id).then(res => {

      serveyService.getPendingServey().then(res => {

        this.setState({ serveys: res.data });

      });

      serveyService.getPendingServeyQuestions().then(res => {

        this.setState({ serveyquestions: res.data });

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
        <Sidebar />

      
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





                        <table id="example" class="display" style={{ textAlign: "center" }}  >
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Date</th>
                              <th>View</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.serveys.map((data) => {

                              return (
                                <tr>
                                  <td>{data.user.fname} {data.user.lname}</td>
                                  <td>{data.user.email}</td>
                                  <td>{moment(data.addedDate).format('DD/MM/YYYY')}</td>
                                  <td>
                                    <i
                                      class="ti-eye"
                                      data-toggle="modal"
                                      data-target={"#" + data.id}
                                    ></i>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-success"
                                      onClick={() => this.approveServey({ id: data.id })}
                                      style={{ backgroundColor: "green" }}>
                                      Approve
                                </button>&nbsp;
                                <button
                                      type="button"
                                      className="btn btn-danger"
                                      onClick={() => this.deleteServey({ id: data.id })}
                                      style={{ backgroundColor: "red" }}>
                                      Delete
                                </button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>


                      </div>
                    </div>
                    {/* Vertically centered modal start */}
                    {this.state.serveys.map((data) => {
                      let count = 0;
                      return (
                        <div>
                          <div className="col-lg-6 mt-5">
                            {/* Modal */}
                            <div className="modal fade" id={data.id}>
                              <div
                                className="modal-dialog modal-dialog-centered"
                                role="document"
                              >
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title">Questions  Details</h5>
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

                                      {this.state.serveyquestions.map((data1) => {
                                        if (data1.servey.id === data.id) {
                                          count++;
                                          return (
                                            <div>
                                              {(() => {
                                                if (data1.qtype == "yesno") {
                                                  return (
                                                    <li className="form-line" data-type="control_radio" id="id_6">
                                                      <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6"> {count + ". " + data1.question} </label>
                                                      <div id="cid_6" className="form-input-wide" data-layout="full">
                                                        <div className="form-single-column" role="group" aria-labelledby="label_6" data-component="radio">
                                                          <span className="form-radio-item" style={{ clear: 'left' }}>
                                                            <span className="dragger-item">
                                                            </span>
                                                            <input type="radio" className="form-radio" id={data1.id + "1"} name={data1.id} />
                                                            <label id="label_input_6_0" htmlFor={data1.id + "1"}> Yes </label>
                                                          </span>
                                                          <span className="form-radio-item" style={{ clear: 'left' }}>
                                                            <span className="dragger-item">
                                                            </span>
                                                            <input type="radio" className="form-radio" id={data1.id + "2"} name={data1.id} />
                                                            <label id="label_input_6_1" htmlFor={data1.id + "2"}> No </label>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </li>
                                                  )
                                                } else if (data1.qtype == "multiple") {
                                                  return (
                                                    <li className="form-line" data-type="control_checkbox" id="id_74">
                                                      <label className="form-label form-label-top form-label-auto" id="label_74" htmlFor="input_74"> {count + ". " + data1.question} </label>
                                                      <div id="cid_74" className="form-input-wide" data-layout="full">
                                                        <div className="form-single-column" role="group" aria-labelledby="label_74" data-component="checkbox">
                                                          <span className="form-checkbox-item" style={{ clear: 'left' }}>
                                                            <span className="dragger-item">
                                                            </span>
                                                            <input type="checkbox" className="form-checkbox" id={data1.id + "0"} name={data1.id} />
                                                            <label id="label_input_74_0" htmlFor={data1.id + "0"}> {data1.answers.split("~")[0]} </label>
                                                          </span>
                                                          <span className="form-checkbox-item" style={{ clear: 'left' }}>
                                                            <span className="dragger-item">
                                                            </span>
                                                            <input type="checkbox" className="form-checkbox" id={data1.id + "1"} name={data1.id} />
                                                            <label id="label_input_74_1" htmlFor={data1.id + "1"}> {data1.answers.split("~")[1]} </label>
                                                          </span>
                                                          <span className="form-checkbox-item" style={{ clear: 'left' }}>
                                                            <span className="dragger-item">
                                                            </span>
                                                            <input type="checkbox" className="form-checkbox" id={data1.id + "2"} name={data1.id} />
                                                            <label id="label_input_74_2" htmlFor={data1.id + "2"}> {data1.answers.split("~")[2]} </label>
                                                          </span>
                                                          <span className="form-checkbox-item" style={{ clear: 'left' }}>
                                                            <span className="dragger-item">
                                                            </span>
                                                            <input type="checkbox" className="form-checkbox" id={data1.id + "3"} name={data1.id} />
                                                            <label id="label_input_74_3" htmlFor={data1.id + "3"}> {data1.answers.split("~")[3]} </label>
                                                          </span>
                                                          <span className="form-checkbox-item" style={{ clear: 'left' }}>
                                                            <span className="dragger-item">
                                                            </span>
                                                            <input type="checkbox" className="form-checkbox" id={data1.id + "4"} name={data1.id} />
                                                            <label id="label_input_74_3" htmlFor={data1.id + "4"}> {data1.answers.split("~")[4]} </label>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </li>
                                                  )
                                                } else if (data1.qtype == "single") {
                                                  return (
                                                    <li className="form-line" data-type="control_radio" id="id_51">
                                                      <label className="form-label form-label-top form-label-auto" id="label_51" htmlFor="input_51"> {count + ". " + data1.question} </label>
                                                      <div id="cid_51" className="form-input-wide" data-layout="full">
                                                        <div className="form-single-column" role="group" aria-labelledby="label_51" data-component="radio">
                                                          <span className="form-radio-item" style={{ clear: 'left' }}>
                                                            <span className="dragger-item">
                                                            </span>
                                                            <input type="radio" className="form-radio" id={data1.id + "0"} name={data1.id} />
                                                            <label id="label_input_51_0" htmlFor={data1.id + "0"}> {data1.answers.split("~")[0]} </label>
                                                          </span>
                                                          <span className="form-radio-item" style={{ clear: 'left' }}>
                                                            <span className="dragger-item">
                                                            </span>
                                                            <input type="radio" className="form-radio" id={data1.id + "1"} name={data1.id} />
                                                            <label id="label_input_51_1" htmlFor={data1.id + "1"}> {data1.answers.split("~")[1]} </label>
                                                          </span>
                                                          <span className="form-radio-item" style={{ clear: 'left' }}>
                                                            <span className="dragger-item">
                                                            </span>
                                                            <input type="radio" className="form-radio" id={data1.id + "2"} name={data1.id} />
                                                            <label id="label_input_51_2" htmlFor={data1.id + "2"}> {data1.answers.split("~")[2]} </label>
                                                          </span>
                                                          <span className="form-radio-item" style={{ clear: 'left' }}>
                                                            <span className="dragger-item">
                                                            </span>
                                                            <input type="radio" className="form-radio" id={data1.id + "3"} name={data1.id} />
                                                            <label id="label_input_51_3" htmlFor={data1.id + "3"}> {data1.answers.split("~")[3]} </label>
                                                          </span>
                                                          <span className="form-radio-item" style={{ clear: 'left' }}>
                                                            <span className="dragger-item">
                                                            </span>
                                                            <input type="radio" className="form-radio" id={data1.id + "4"} name={data1.id} />
                                                            <label id="label_input_51_3" htmlFor={data1.id + "4"}> {data1.answers.split("~")[4]} </label>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </li>
                                                  )
                                                } else if (data1.qtype == "essay") {
                                                  return (
                                                    <li className="form-line" data-type="control_checkbox" id="id_74">
                                                      <label className="form-label form-label-top form-label-auto" id="label_74" htmlFor="input_74"> {count + ". " + data1.question} </label>
                                                      <div id="cid_74" className="form-input-wide" data-layout="full">
                                                        <div className="form-single-column" role="group" aria-labelledby="label_74" data-component="checkbox">
                                                          <span className="form-checkbox-item" style={{ clear: 'left' }}>
                                                            <span className="dragger-item">
                                                            </span>
                                                            <textarea id="input_74_0" name="q74_typeA74[]" style={{ border: "1px solid" }}></textarea>
                                                          </span>

                                                        </div>
                                                      </div>
                                                    </li>
                                                  )
                                                }
                                              })()}
                                            </div>

                                          );
                                        }

                                      })
                                      }



                                    </table>
                                    <br />


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
                        </div>

                      );

                    })
                    }



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
