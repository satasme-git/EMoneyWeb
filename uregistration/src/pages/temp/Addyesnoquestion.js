/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import serveyService from "../../services/serveyService";
import Cookies from "js-cookie";
import { toast } from "react-toast";

class Addyesnoquestion extends React.Component {
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
                    id="1"
                    htmlFor="input_6"
                  >
                    {i + 1}. Type a question{" "}
                  </label>
                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text"
                        id="inputGroup-sizing-sm"
                      >
                        Question
                      </span>
                    </div>
                    <input
                      type="text" value={el || ''} onChange={this.handleChange.bind(this, i)}
                      className="form-control"
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
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
    let settings = { user: user, serveyid: this.props.serveyid, type: "yesno", question: values[i] }
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
    let settings = { user: user, serveyid: this.props.serveyid, type: "yesno", question: values[i] }

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

    // var user = Cookies.get('user');
    // let settings = { user: user, serveyid: this.props.serveyid}

    // serveyService.completeQuestion(settings).then(res => {
    //   if (res.data == "success") {
    //     alert('Question added.')
    //   } else {
    //     alert('Something went wrong. Please try again.')
    //   }
    // });
    event.preventDefault();
  }

  render() {
    return (
      <form >
        {this.createUI()}

        <br />
        <br />
        <div class="container">
          <div class="row" style={{ textAlign: "center" }}>
            <div class="col">
              <input
                type="button"
                class="btn btn-success"
                style={{ width: "300px" }}
                value="Add Question"
                onClick={this.addClick.bind(this)}

              />

            </div>
          </div>
        </div>

        <div class="container"></div>
      </form>
    );
  }
}

export default Addyesnoquestion;
