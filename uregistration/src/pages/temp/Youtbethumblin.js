import React, { Component } from "react";

class Youtbethumblin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ytimage: null,
    };
  }

  getVideoId() {
    let tempVar = this.typedUrl;
    return tempVar.split("?v=")[1];
  }

  fetchYouTube() {
    let thumbnailUrl =
      "https://img.youtube.com/vi/" + this.getVideoId() + "/0.jpg";
    this.setState({ ytimage: thumbnailUrl });
  }

  handleChange(e) {
    let typedUrl = e.target.value;
    this.typedUrl = e.target.value;
  }

  render() {
    return (
      <div>
        <div>
          {" "}
          For Demo purpose
          <div className="col-md-6 no-padding">
            <input
              type="text"
              name="preview_video"
              onBlur={this.fetchYouTube.bind(this)}
              onChange={this.handleChange.bind(this)}
              className="form-control"
              placeholder="Preview Video Url"
            />
          </div>
          <img src={this.state.ytimage} />
        </div>

        <iframe
          width="560"
          height="315"
          src="https://img.youtube.com/vi/sharadhchanduma/mqdefault.jpg"
          
         
         
        ></iframe>
      </div>
    );
  }
}

export default Youtbethumblin;
