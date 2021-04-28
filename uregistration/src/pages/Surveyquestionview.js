/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { $, jQuery } from 'jquery';
import serveyService from "../services/serveyService";
import queryString from 'query-string';
import earningService from "../services/earningService";
import userServices from "../services/userServices";
import Cookies from "js-cookie";
import toast from 'toast-me';

class Surveyquestionview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      values: [],
      nextquestion: 1,
      questioncount: 0,
      servey: []
    };
  }

  componentDidMount() {
    const value = queryString.parse(this.props.location.search);
    const serveyid = value.servey;
    serveyService.getServeyById(serveyid).then(res => {
      this.setState({ servey: res.data });
    });

    serveyService.getQuestionCount(serveyid).then(res => {
      this.setState({ questioncount: res.data });
    });
    earningService.getTotalEarning(Cookies.get('user')).then(res => {
      this.setState({ total_earning: res.data });
    });

    userServices.getUserById(Cookies.get('user')).then(res => {
      this.setState({ username: res.data.fname });
    });

  }

  nextQuestion(qid) {
    const value = queryString.parse(this.props.location.search);
    const serveyid = value.servey;
    var checked = false;
    var textin = false;
    var elements = document.getElementsByName("q_" + qid);
    var answers = [];
    var queid = ""
    if (elements[0].type == "checkbox") {
      for (var i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
          checked = true;
          var str = elements[i].id;
          queid = str.substring(0, str.length - 1);
          answers.push(elements[i].value);
        }
      }
    } else if (elements[0].type == "radio") {
      for (var i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
          checked = true;
          var str = elements[i].id;
          queid = str.substring(0, str.length - 1);
          answers.push(elements[i].value);
        }
      }
    } else if (elements[0].type == "textarea") {
      textin = true;
      answers.push(elements[0].value)
      var str = elements[0].id;
      queid = str.substring(0, str.length - 1);
    }
    if (checked === false && textin === false) {
      toast('You must fill data!', { position: 'bottom' });
    } else if (textin == true && answers.length == 0) {
      toast('You must fill data!', { position: 'bottom' });
    } else {
      let settings = { user: Cookies.get('user'), servey_id: serveyid, question_id: queid, answers: answers }
      serveyService.saveAnswers(Cookies.get('user'), serveyid, queid, answers).then(res => {

        qid = this.state.nextquestion += 1;
        document.getElementById("id_" + qid).style.display = '';
        if (this.state.questioncount !== this.state.nextquestion) {
          document.getElementById('button').style.display = 'none';
          this.showTimer();
        } else {
          document.getElementById('button').style.display = 'none';
          document.getElementById("countdown").style.display = 'none';
          document.getElementById('redeem').style.display = '';
        }
      });
    }
  }

  redeemPoints(qid) {
    const value = queryString.parse(this.props.location.search);
    const serveyid = value.servey;
    var checked = false;
    var textin = false;
    var elements = document.getElementsByName("q_" + qid);
    var answers = [];
    var queid = ""
    if (elements[0].type == "checkbox") {
      for (var i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
          checked = true;
          var str = elements[i].id;
          queid = str.substring(0, str.length - 1);
          answers.push(elements[i].value);
        }
      }
    } else if (elements[0].type == "radio") {
      for (var i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
          checked = true;
          var str = elements[i].id;
          queid = str.substring(0, str.length - 1);
          answers.push(elements[i].value);
        }
      }
    } else if (elements[0].type == "textarea") {
      textin = true;
      answers.push(elements[0].value)
      var str = elements[0].id;
      queid = str.substring(0, str.length - 1);
    }
    if (checked === false && textin === false) {
      toast('You must fill data!', { position: 'bottom' });
    } else if (textin == true && answers.length == 0) {
      toast('You must fill data!', { position: 'bottom' });
    } else {
      let settings = { user: Cookies.get('user'), servey_id: serveyid, question_id: queid, answers: answers }
      serveyService.redeemPoints(Cookies.get('user'), serveyid, queid, answers).then(res => {
        toast('Points Redeemed!', { position: 'bottom' });
        window.location="/servey";
      });
    }
  }

  showTimer() {
    var timeleft = 5;
    var that = this;
    var downloadTimer = setInterval(function () {
      document.getElementById('button').style.display = 'none';
      if (timeleft <= 0) {
        document.getElementById("countdown").innerHTML = "0 Seconds remaining to next question";
        clearInterval(downloadTimer);
        document.getElementById('button').style.display = '';
      } else {
        document.getElementById("countdown").innerHTML = timeleft + " Seconds remaining to next question";
        document.getElementById('button').style.display = 'none';
      }

      timeleft -= 1;
    }, 1000);
  }


  render() {
    this.showTimer();

    return (
      <div>
        <Helmet>
          <link type="text/css" rel="stylesheet" href="/assets/css/app69fd.css?id=d97cc8504a674a3a9f71" />
          <link rel="stylesheet" href="/assets/css/dash.css" />
          <script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>
          <link href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css" rel="stylesheet" type="text/css" />
        </Helmet>
        <header class="header" style={{ marginLeft: "63px", height: "63px" }}>
          <section class="container header__inner">
            <div class="header__right">

              <span class="utext">{this.state.total_earning}</span>
              <Link to="/profile" >
                <li class="nav-item dropdown  user-menu">
                  <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" aria-haspopup="true" aria-expanded="false">

                    <i class="fa fa-user"></i>
                    <span class="hidden-xs">{this.state.username}</span>
                  </a>
                </li>
              </Link>
            </div>
          </section>

        </header>

        <div class="main" style={{ backgroundColor: "#dfeef2" }}>

          <div class="s-layout">
            {/* <!-- Sidebar --> */}
            <div class="s-layout__sidebar">
              <a class="s-sidebar__trigger" href="#0">
                <i class="fa fa-bars"></i>
              </a>

              <nav class="s-sidebar__nav">
                <ul>
                  <li>
                    <a class="s-sidebar__nav-link" href="/dash">
                      <i class="fa fa-th-large"></i><em>Dashbboard</em>
                    </a>
                  </li>
                  <li>
                    <a class="s-sidebar__nav-link" href="/earnpage">
                      <i class="fa fa-dollar"></i><em>Earn Points</em>
                    </a>
                  </li>
                  <li>
                    <a class="s-sidebar__nav-link" href="/createorder">
                      <i class="fa fa-plus"></i><em>Promote Youtube/Social</em>
                    </a>
                  </li>
                  <li>
                    <a class="s-sidebar__nav-link" href="/myorders">
                      <i class="fa fa-list"></i><em>My Orders</em>
                    </a>
                  </li>
            
                  <li>
                    <a class="s-sidebar__nav-link" href="/referal">
                      <i class="fa fa-share-alt"></i><em>Referral</em>
                    </a>
                  </li>
                  <li>
                    <a class="s-sidebar__nav-link" href="/earnhistory">
                      <i class="fa fa-bitcoin"></i><em>Billings</em>
                    </a>
                  </li>

                  <br></br>
                  <li>
                    <a class="s-sidebar__nav-link" onClick={this.logout}>
                      <i class="fa fa-flash"></i><em>Logout</em>
                    </a>
                  </li>

                </ul>
              </nav>
            </div>

            {/* <!-- Content --> */}
            <main class="s-layout__content" style={{ backgroundColor: "#dfeef2", height: "100%", width: "100%" }}>



              <div role="main" className="form-all" style={{ backgroundColor: "#dfeef2", border: "none" }}>
                <ul className="form-section page-section">
                  <li id="cid_1" className="form-input-wide" data-type="control_head">
                    <div className="form-header-group  header-large">
                      <div className="header-text httal htvam">
                        <h1 id="header_1" className="form-header" style={{ textAlign: "center" }} data-component="header">
                          Fill out survey ({this.state.questioncount} Questions)
                </h1>
                      </div>
                    </div>
                  </li>

                  {this.state.servey.map((data1, i) => {
                    if (i == 0) {
                      return (
                        <li className="form-line" data-type="control_radio" id={"id_" + (i + 1)}>
                          {(() => {
                            if (data1.qtype == "yesno") {
                              return (
                                <div>
                                  <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6"> {i + 1 + ". " + data1.question} </label>
                                  <div id="cid_6" className="form-input-wide" data-layout="full">
                                    <div className="form-single-column" role="group" aria-labelledby="label_6" data-component="radio">
                                      <span className="form-radio-item" style={{ clear: 'left' }}>
                                        <span className="dragger-item">
                                        </span>
                                        <input type="radio" className="form-radio" id={data1.id + "1"} name={"q_" + (i + 1)} value="yes" />
                                        <label id="label_input_6_0" htmlFor={data1.id + "1"}> Yes </label>
                                      </span>
                                      <span className="form-radio-item" style={{ clear: 'left' }}>
                                        <span className="dragger-item">
                                        </span>
                                        <input type="radio" className="form-radio" id={data1.id + "2"} name={"q_" + (i + 1)} value="no" />
                                        <label id="label_input_6_1" htmlFor={data1.id + "2"}> No </label>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              )
                            } else if (data1.qtype == "multiple") {
                              return (
                                <div>
                                  <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6"> {i + 1 + ". " + data1.question} </label>
                                  <div id="cid_6" className="form-input-wide" data-layout="full">
                                    <div className="form-single-column" role="group" aria-labelledby="label_74" data-component="checkbox">
                                      <span className="form-checkbox-item" style={{ clear: 'left' }}>
                                        <span className="dragger-item">
                                        </span>
                                        <input type="checkbox" className="form-checkbox" id={data1.id + "0"} name={"q_" + (i + 1)} value={data1.answers.split("~")[0]} />
                                        <label id="label_input_74_0" htmlFor={data1.id + "0"}> {data1.answers.split("~")[0]} </label>
                                      </span>
                                      <span className="form-checkbox-item" style={{ clear: 'left' }}>
                                        <span className="dragger-item">
                                        </span>
                                        <input type="checkbox" className="form-checkbox" id={data1.id + "1"} name={"q_" + (i + 1)} value={data1.answers.split("~")[1]} />
                                        <label id="label_input_74_1" htmlFor={data1.id + "1"}> {data1.answers.split("~")[1]} </label>
                                      </span>
                                      <span className="form-checkbox-item" style={{ clear: 'left' }}>
                                        <span className="dragger-item">
                                        </span>
                                        <input type="checkbox" className="form-checkbox" id={data1.id + "2"} name={"q_" + (i + 1)} value={data1.answers.split("~")[2]} />
                                        <label id="label_input_74_2" htmlFor={data1.id + "2"}> {data1.answers.split("~")[2]} </label>
                                      </span>
                                      <span className="form-checkbox-item" style={{ clear: 'left' }}>
                                        <span className="dragger-item">
                                        </span>
                                        <input type="checkbox" className="form-checkbox" id={data1.id + "3"} name={"q_" + (i + 1)} value={data1.answers.split("~")[3]} />
                                        <label id="label_input_74_3" htmlFor={data1.id + "3"}> {data1.answers.split("~")[3]} </label>
                                      </span>
                                      <span className="form-checkbox-item" style={{ clear: 'left' }}>
                                        <span className="dragger-item">
                                        </span>
                                        <input type="checkbox" className="form-checkbox" id={data1.id + "4"} name={"q_" + (i + 1)} value={data1.answers.split("~")[4]} />
                                        <label id="label_input_74_3" htmlFor={data1.id + "4"}> {data1.answers.split("~")[4]} </label>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              )
                            } else if (data1.qtype == "single") {
                              return (
                                <div>
                                  <label className="form-label form-label-top form-label-auto" id="label_51" htmlFor="input_51"> {i + 1 + ". " + data1.question} </label>
                                  <div id="cid_51" className="form-input-wide" data-layout="full">
                                    <div className="form-single-column" role="group" aria-labelledby="label_51" data-component="radio">
                                      <span className="form-radio-item" style={{ clear: 'left' }}>
                                        <span className="dragger-item">
                                        </span>
                                        <input type="radio" className="form-radio" id={data1.id + "0"} name={"q_" + (i + 1)} value={data1.answers.split("~")[0]} />
                                        <label id="label_input_51_0" htmlFor={data1.id + "0"}> {data1.answers.split("~")[0]} </label>
                                      </span>
                                      <span className="form-radio-item" style={{ clear: 'left' }}>
                                        <span className="dragger-item">
                                        </span>
                                        <input type="radio" className="form-radio" id={data1.id + "1"} name={"q_" + (i + 1)} value={data1.answers.split("~")[1]} />
                                        <label id="label_input_51_1" htmlFor={data1.id + "1"}> {data1.answers.split("~")[1]} </label>
                                      </span>
                                      <span className="form-radio-item" style={{ clear: 'left' }}>
                                        <span className="dragger-item">
                                        </span>
                                        <input type="radio" className="form-radio" id={data1.id + "2"} name={"q_" + (i + 1)} value={data1.answers.split("~")[2]} />
                                        <label id="label_input_51_2" htmlFor={data1.id + "2"}> {data1.answers.split("~")[2]} </label>
                                      </span>
                                      <span className="form-radio-item" style={{ clear: 'left' }}>
                                        <span className="dragger-item">
                                        </span>
                                        <input type="radio" className="form-radio" id={data1.id + "3"} name={"q_" + (i + 1)} value={data1.answers.split("~")[3]} />
                                        <label id="label_input_51_3" htmlFor={data1.id + "3"}> {data1.answers.split("~")[3]} </label>
                                      </span>
                                      <span className="form-radio-item" style={{ clear: 'left' }}>
                                        <span className="dragger-item">
                                        </span>
                                        <input type="radio" className="form-radio" id={data1.id + "4"} name={"q_" + (i + 1)} value={data1.answers.split("~")[4]} />
                                        <label id="label_input_51_3" htmlFor={data1.id + "4"}> {data1.answers.split("~")[4]} </label>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              )
                            } else if (data1.qtype == "essay") {
                              return (
                                <div>
                                  <label className="form-label form-label-top form-label-auto" id="label_74" htmlFor="input_74"> {i + 1 + ". " + data1.question} </label>
                                  <div id="cid_74" className="form-input-wide" data-layout="full">
                                    <div className="form-single-column" role="group" aria-labelledby="label_74" data-component="checkbox">
                                      <span className="form-checkbox-item" style={{ clear: 'left' }}>
                                        <span className="dragger-item">
                                        </span>
                                        <textarea id="input_74_0" name={"q_" + (i + 1)} id={data1.id + "2"} style={{ border: "1px solid" }}></textarea>
                                      </span>

                                    </div>
                                  </div>
                                </div>
                              )
                            }
                          })()}
                        </li>

                      );
                    } else {
                      return (
                        <li className="form-line" data-type="control_radio" id={"id_" + (i + 1)} style={{ display: "none" }}>
                          {(() => {
                            if (data1.qtype == "yesno") {
                              return (
                                <div>
                                  <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6"> {i + 1 + ". " + data1.question} </label>
                                  <div id="cid_6" className="form-input-wide" data-layout="full">
                                    <div className="form-single-column" role="group" aria-labelledby="label_6" data-component="radio">
                                      <span className="form-radio-item" style={{ clear: 'left' }}>
                                        <span className="dragger-item">
                                        </span>
                                        <input type="radio" className="form-radio" id={data1.id + "1"} name={"q_" + (i + 1)} value="Yes" />
                                        <label id="label_input_6_0" htmlFor={data1.id + "1"}> Yes </label>
                                      </span>
                                      <span className="form-radio-item" style={{ clear: 'left' }}>
                                        <span className="dragger-item">
                                        </span>
                                        <input type="radio" className="form-radio" id={data1.id + "2"} name={"q_" + (i + 1)} value="yes" />
                                        <label id="label_input_6_1" htmlFor={data1.id + "2"}> No </label>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              )
                            } else if (data1.qtype == "multiple") {
                              return (
                                <div>
                                  <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6"> {i + 1 + ". " + data1.question} </label>
                                  <div id="cid_6" className="form-input-wide" data-layout="full">
                                    <div className="form-single-column" role="group" aria-labelledby="label_74" data-component="checkbox">
                                      <span className="form-checkbox-item" style={{ clear: 'left' }}>
                                        <span className="dragger-item">
                                        </span>
                                        <input type="checkbox" className="form-checkbox" id={data1.id + "0"} name={"q_" + (i + 1)} value={data1.answers.split("~")[0]} />
                                        <label id="label_input_74_0" htmlFor={data1.id + "0"}> {data1.answers.split("~")[0]} </label>
                                      </span>
                                      <span className="form-checkbox-item" style={{ clear: 'left' }}>
                                        <span className="dragger-item">
                                        </span>
                                        <input type="checkbox" className="form-checkbox" id={data1.id + "1"} name={"q_" + (i + 1)} value={data1.answers.split("~")[1]} />
                                        <label id="label_input_74_1" htmlFor={data1.id + "1"}> {data1.answers.split("~")[1]} </label>
                                      </span>
                                      <span className="form-checkbox-item" style={{ clear: 'left' }}>
                                        <span className="dragger-item">
                                        </span>
                                        <input type="checkbox" className="form-checkbox" id={data1.id + "2"} name={"q_" + (i + 1)} value={data1.answers.split("~")[2]} />
                                        <label id="label_input_74_2" htmlFor={data1.id + "2"}> {data1.answers.split("~")[2]} </label>
                                      </span>
                                      <span className="form-checkbox-item" style={{ clear: 'left' }}>
                                        <span className="dragger-item">
                                        </span>
                                        <input type="checkbox" className="form-checkbox" id={data1.id + "3"} name={"q_" + (i + 1)} value={data1.answers.split("~")[3]} />
                                        <label id="label_input_74_3" htmlFor={data1.id + "3"}> {data1.answers.split("~")[3]} </label>
                                      </span>
                                      <span className="form-checkbox-item" style={{ clear: 'left' }}>
                                        <span className="dragger-item">
                                        </span>
                                        <input type="checkbox" className="form-checkbox" id={data1.id + "4"} name={"q_" + (i + 1)} value={data1.answers.split("~")[4]} />
                                        <label id="label_input_74_3" htmlFor={data1.id + "4"}> {data1.answers.split("~")[4]} </label>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              )
                            } else if (data1.qtype == "single") {
                              return (
                                <div>
                                  <label className="form-label form-label-top form-label-auto" id="label_51" htmlFor="input_51"> {i + 1 + ". " + data1.question} </label>
                                  <div id="cid_51" className="form-input-wide" data-layout="full">
                                    <div className="form-single-column" role="group" aria-labelledby="label_51" data-component="radio">
                                      <span className="form-radio-item" style={{ clear: 'left' }}>
                                        <span className="dragger-item">
                                        </span>
                                        <input type="radio" className="form-radio" id={data1.id + "0"} name={"q_" + (i + 1)} value={data1.answers.split("~")[0]} />
                                        <label id="label_input_51_0" htmlFor={data1.id + "0"}> {data1.answers.split("~")[0]} </label>
                                      </span>
                                      <span className="form-radio-item" style={{ clear: 'left' }}>
                                        <span className="dragger-item">
                                        </span>
                                        <input type="radio" className="form-radio" id={data1.id + "1"} name={"q_" + (i + 1)} value={data1.answers.split("~")[1]} />
                                        <label id="label_input_51_1" htmlFor={data1.id + "1"}> {data1.answers.split("~")[1]} </label>
                                      </span>
                                      <span className="form-radio-item" style={{ clear: 'left' }}>
                                        <span className="dragger-item">
                                        </span>
                                        <input type="radio" className="form-radio" id={data1.id + "2"} name={"q_" + (i + 1)} value={data1.answers.split("~")[2]} />
                                        <label id="label_input_51_2" htmlFor={data1.id + "2"}> {data1.answers.split("~")[2]} </label>
                                      </span>
                                      <span className="form-radio-item" style={{ clear: 'left' }}>
                                        <span className="dragger-item">
                                        </span>
                                        <input type="radio" className="form-radio" id={data1.id + "3"} name={"q_" + (i + 1)} value={data1.answers.split("~")[3]} />
                                        <label id="label_input_51_3" htmlFor={data1.id + "3"}> {data1.answers.split("~")[3]} </label>
                                      </span>
                                      <span className="form-radio-item" style={{ clear: 'left' }}>
                                        <span className="dragger-item">
                                        </span>
                                        <input type="radio" className="form-radio" id={data1.id + "4"} name={"q_" + (i + 1)} value={data1.answers.split("~")[4]} />
                                        <label id="label_input_51_3" htmlFor={data1.id + "4"}> {data1.answers.split("~")[4]} </label>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              )
                            } else if (data1.qtype == "essay") {
                              return (
                                <div>
                                  <label className="form-label form-label-top form-label-auto" id="label_74" htmlFor="input_74"> {i + 1 + ". " + data1.question} </label>
                                  <div id="cid_74" className="form-input-wide" data-layout="full">
                                    <div className="form-single-column" role="group" aria-labelledby="label_74" data-component="checkbox">
                                      <span className="form-checkbox-item" style={{ clear: 'left' }}>
                                        <span className="dragger-item">
                                        </span>
                                        <textarea id="input_74_0" name={"q_" + (i + 1)} id={data1.id + "2"} style={{ border: "1px solid" }}></textarea>
                                      </span>

                                    </div>
                                  </div>
                                </div>
                              )
                            }
                          })()}
                        </li>

                      );
                    }
                  })
                  }
                  <div style={{ margin: "10px" }}>
                    <span className id="countdown" style={{ fontSize: '1.5em', backgroundColor: "#FFFF00", marginLeft: "10px", marginRight: "20px" }} />
                    <button className="btn btn-success" id="button" style={{ display: "none" }} onClick={() => this.nextQuestion(this.state.nextquestion)} >Next</button>
                    <button className="btn btn-success" id="redeem" style={{ display: "none", width: "100%" }} onClick={() => this.redeemPoints(this.state.nextquestion)}>Redeem Points</button>
                  </div>

                </ul>
              </div>


            </main>
          </div>
        </div>
      </div>


    )
  }
}
export default Surveyquestionview