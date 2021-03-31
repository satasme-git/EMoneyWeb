/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Cookies from "js-cookie";
import serveyService from "../../services/serveyService";

class Addsinglechoicequestion extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      values: [],
      q1: [],
      q2: [],
      q3: [],
      q4: [],
      q5: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  createUI() {
    return this.state.values.map((el, i) =>



      <div key={i}>

        <div class="container" >
          <div class="row">

            <div class="col-sm-6">

              <form className="jotform-form" action>

                <ul className="form-section ">
                  <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6">{i + 1}. Type a question{" "} </label>
                  <div className="input-group input-group-sm mb-3"  >
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

                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text"
                        id="inputGroup-sizing-sm"
                      >
                        1) Type Answer

                    </span>
                    </div>
                    <input
                      type="text"
                      onChange={this.handleQ1.bind(this, i)}
                      className="form-control"
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                    {/* <input type='button' style={{borderRadius:"5px" , backgroundColor:"red" , color:"white",width:"80px",textAlign:"center"}}  value='remove' onClick={this.removeClick.bind(this, i)}/> */}
                  </div>

                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text"
                        id="inputGroup-sizing-sm"
                      >
                        2) Type Answer
                    </span>
                    </div>
                    <input
                      type="text"
                      onChange={this.handleQ2.bind(this, i)}
                      className="form-control"
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                    {/* <input type='button' style={{borderRadius:"5px" , backgroundColor:"red" , color:"white",width:"80px",textAlign:"center"}}  value='remove' onClick={this.removeClick.bind(this, i)}/> */}
                  </div>

                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text"
                        id="inputGroup-sizing-sm"
                      >
                        3) Type Answer
                    </span>
                    </div>
                    <input
                      type="text"
                      onChange={this.handleQ3.bind(this, i)}
                      className="form-control"
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                    {/* <input type='button' style={{borderRadius:"5px" , backgroundColor:"red" , color:"white",width:"80px",textAlign:"center"}}  value='remove' onClick={this.removeClick.bind(this, i)}/> */}
                  </div>

                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text"
                        id="inputGroup-sizing-sm"
                      >
                        4) Type Answer
                    </span>
                    </div>
                    <input
                      type="text"
                      onChange={this.handleQ4.bind(this, i)}
                      className="form-control"
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                    {/* <input type='button' style={{borderRadius:"5px" , backgroundColor:"red" , color:"white",width:"80px",textAlign:"center"}}  value='remove' onClick={this.removeClick.bind(this, i)}/> */}
                  </div>

                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text"
                        id="inputGroup-sizing-sm"
                      >
                        5) Type Answer
                    </span>
                    </div>
                    <input
                      type="text"
                      onChange={this.handleQ5.bind(this, i)}
                      className="form-control"
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                    {/* <input type='button' style={{borderRadius:"5px" , backgroundColor:"red" , color:"white",width:"80px",textAlign:"center"}}  value='remove' onClick={this.removeClick.bind(this, i)}/> */}
                  </div>



                </ul>

              </form>

            </div>

          </div></div>
        {/* <input type="text" value={el||''} onChange={this.handleChange.bind(this, i)} /><br/> */}
      </div>


    )
  }

  handleChange(i, event) {
    let values = [...this.state.values];
    values[i] = event.target.value;
    this.setState({ values });
  }

  handleQ1(i, event) {
    let q1 = [...this.state.q1];
    q1[i] = event.target.value;
    this.setState({ q1 });
  }

  handleQ2(i, event) {
    let q2 = [...this.state.q2];
    q2[i] = event.target.value;
    this.setState({ q2 });
  }

  handleQ3(i, event) {
    let q3 = [...this.state.q3];
    q3[i] = event.target.value;
    this.setState({ q3 });
  }

  handleQ4(i, event) {
    let q4 = [...this.state.q4];
    q4[i] = event.target.value;
    this.setState({ q4 });
  }

  handleQ5(i, event) {
    let q5 = [...this.state.q5];
    q5[i] = event.target.value;
    this.setState({ q5 });
  }

  addClick() {
    this.setState(prevState => ({ values: [...prevState.values, ''] }))
  }

  removeClick(i) {
    let values = [...this.state.values];
    let q1 = [...this.state.q1];
    let q2 = [...this.state.q2];
    let q3 = [...this.state.q3];
    let q4 = [...this.state.q4];
    let q5 = [...this.state.q5];

    var user = Cookies.get('user');
    serveyService.deleteServeyQuestion(this.props.serveyid, values[i]).then(res => {
      if (res.data == "deleted") {
        // toast('Question added.', { position: 'bottom' })
        values.splice(i, 1);
        q1.splice(i, 1);
        q2.splice(i, 1);
        q3.splice(i, 1);
        q4.splice(i, 1);
        q5.splice(i, 1);
        this.setState({ values });
        this.setState({ q1 });
        this.setState({ q2 });
        this.setState({ q3 });
        this.setState({ q4 });
        this.setState({ q5 });
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
    let q1 = [...this.state.q1];
    let q2 = [...this.state.q2];
    let q3 = [...this.state.q3];
    let q4 = [...this.state.q4];
    let q5 = [...this.state.q5];
    // alert(values[i])
    var user = Cookies.get('user');
    let settings = { user: user, serveyid: this.props.serveyid, type: "single", question: values[i], ans1: q1[i], ans2: q2[i], ans3: q3[i], ans4: q4[i], ans5: q5[i] }

    serveyService.saveServeyQuestion(settings).then(res => {
      if (res.data == "success") {
        // toast('Question added.', { position: 'bottom' })
        this.props.changeFinalPrice(this.props.views, this.props.serveyid)
        alert('Question added.')
      } else if (res.data == "empty") {
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
    alert('A name was submitted: ' + this.state.values.join(', '));
    event.preventDefault();
  }




  render() {

    return (






      <form onSubmit={this.handleSubmit}>
        {this.createUI()}

        <br /><br />

        <div class="container" >
          <div class="row" style={{ textAlign: "center" }}>

            <div class="col">
              <input type='button' class="btn btn-success" style={{ width: "300px" }} value='Add Qustion' onClick={this.addClick.bind(this)} />
            </div>


          </div>
        </div>
      </form>

    );
  }
}


export default Addsinglechoicequestion;
