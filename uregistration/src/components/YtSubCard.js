import React from 'react';
import PropTypes from 'prop-types';



const YtSubCard = props => {
  const { url: code2 = '', status = null, id = null, name = {} } = props.country || {};
  if (status === "Liked") {
    return (

      <div className="col-sm-6 col-md-4 country-card">
        <div class="col">
          <div class="card">

            {/* <div class="fb-page" data-href={code2} data-tabs="cover" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false">
            </div> */}
            <div>
              <img src="/assets/Image/new image size/icon/5.png" width="150px" height="150px" />
            </div>

            <div style={{ margin: "20px" }}><button class="btn btn-primary mt-2" disabled="disable" id={id} value={status}>Subscribed</button>
              <p id="Liked"></p></div>
          </div>
        </div>
      </div>
    )
  } else {
    return (

      <div className="col-sm-6 col-md-4 country-card">
        <div class="col">
          <div class="card">

            {/* <div class="fb-page" data-href={code2} data-tabs="cover" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false">
            </div> */}
            <div>
              <img src="/assets/Image/new image size/icon/5.png" width="150px" height="150px" />
            </div>

            <div style={{ margin: "20px" }}><button class="btn btn-success mt-2" id={id} value={status} onClick={(e) => props.handleClick({ url: code2, id: id })}>Subscribe</button>
              <p id="Liked"></p></div>
          </div>
        </div>
      </div>
    )
  }
}

YtSubCard.propTypes = {
  country: PropTypes.shape({
    cca2: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    name: PropTypes.shape({
      common: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default YtSubCard;
