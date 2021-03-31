/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Cookies from "js-cookie";
import serveyService from "../../services/serveyService";

class Addeasyquestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { values: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  createUI() {
    return this.state.values.map((el, i) => (
      <div key={i}>
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <form className="jotform-form" action>
                <ul className="form-section ">
                  <label
                    className="form-label form-label-top form-label-auto"
                    id="label_6"
                    htmlFor="input_6"
                  >
                   {i + 1}. Type a question{" "}
                  </label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Question</span>
                    </div>
                    <input type = "textarea"  type="text" value={el||''} onChange={this.handleChange.bind(this, i)} 
                      class="form-control"
                      aria-label="With textarea"
                    ></input>
                    <br />
                    <input
                      type='button' value='Remove' onClick={this.removeClick.bind(this, i)}
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "red",
                        color: "white",
                        width: "80px",
                        textAlign: "center",
                        marginLeft: "5px"
                      }}

                    />
                    <input
                      type='button' value='Submit' onClick={this.submitClick.bind(this, i)}
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "blue",
                        color: "white",
                        width: "80px",
                        textAlign: "center",
                        marginLeft: "5px"
                      }}

                    />
                  </div>
                </ul>
              </form>
            </div>
          </div>
        </div>
        {/* <input type="text" value={el||''} onChange={this.handleChange.bind(this, i)} /><br/> */}
      </div>
    ));
  }

  handleChange(i, event) {
    let values = [...this.state.values];
    values[i] = event.target.value;
    this.setState({ values });
  }

  addClick() {
    this.setState((prevState) => ({ values: [...prevState.values, ""] }));
  }

  removeClick(i) {
    let values = [...this.state.values];

    var user = Cookies.get('user');
    serveyService.deleteServeyQuestion(this.props.serveyid, values[i]).then(res => {
      if (res.data == "deleted") {
        // toast('Question added.', { position: 'bottom' })
        values.splice(i, 1);
        this.setState({ values });
        this.props.changeFinalPrice(this.props.views, this.props.serveyid)
        alert('Question Deleted.')
      } else if (res.data == "not found") {
        alert('Question not found for delete.')
      } else {
        // toast('Something went wrong. Please try again.', { position: 'bottom' })
        alert('Something went wrong. Please try again.')
      }
    });
  }

  submitClick(i) {
    let values = [...this.state.values];
    // alert(values[i])
    // alert(this.props.serveyid)
    var user = Cookies.get('user');
    let settings = { user: user, serveyid: this.props.serveyid, type: "essay", question: values[i] }

    serveyService.saveServeyQuestion(settings).then(res => {
      if (res.data == "success") {
        // toast('Question added.', { position: 'bottom' })
        this.props.changeFinalPrice(this.props.views, this.props.serveyid)
        alert('Question added.')
      } else if (res.data == "failed") {
        alert('Cannot add empty question.')
      } else if (res.data == "exist") {
        alert('This question is already exist.')
      } else {
        // toast('Something went wrong. Please try again.', { position: 'bottom' })
        alert('Something went wrong. Please try again.')
      }
    });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.values.join(", "));
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.createUI()}
        <br /> <br />
        <div class="row" style={{ textAlign: "center" }}>
          <div class="container">
            <div class="row" style={{ textAlign: "center" }}>
              <div class="col">
                <input
                  type="button"
                  class="btn btn-success"
                  style={{ width: "300px" }}
                  value="Add Qustion"
                  onClick={this.addClick.bind(this)}
                />
              </div>
            </div>
          </div>
        </div>
        <div class="container"></div>
      </form>
    );
  }
}

export default Addeasyquestion;
