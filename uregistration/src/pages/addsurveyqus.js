import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import $ from "jquery";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="secondary"
          textColor=" pink"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Yes / No questions" {...a11yProps(0)} />
          <Tab label="Multiple Choice Questions" {...a11yProps(1)} />
          <Tab label="Single Choice Question " {...a11yProps(2)} />
          <Tab label="Text Question" {...a11yProps(3)} />
        </Tabs>
      </AppBar>

      {/* //////////////////////////////////////////////////1dt tab///////////////////////////////// */}
      <TabPanel value={value} index={0}>
       
      
      <form className="jotform-form" action>
      
      <div role="main" className="form-all">
        <ul className="form-section page-section">
          <li id="cid_1" className="form-input-wide" data-type="control_head">
            <div className="form-header-group  header-large">
              <div className="header-text httal htvam">
                <h1 id="header_1" className="form-header" data-component="header">
                  Survey ( YES / No )
                </h1>
              </div>
            </div>
          </li>


          {/* /////////////////////////yesno qus//////////////////////////////////////// */}
         


          <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6">1. Type a question{" "} </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
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
          <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6">2. Type a question{" "} </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
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
          <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6">3. Type a question{" "} </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
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
          <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6">4. Type a question{" "} </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
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
          <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6">5. Type a question{" "} </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
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
          <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6">6. Type a question{" "} </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
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
          <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6">7. Type a question{" "} </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
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
          <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6">8. Type a question{" "} </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
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
          <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6">9. Type a question{" "} </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
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
          <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6">10. Type a question{" "} </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
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
          <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6">111. Type a question{" "} </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
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
          <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6">12. Type a question{" "} </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
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
          <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6">13. Type a question{" "} </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
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
          <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6">14. Type a question{" "} </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
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
          <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6">15. Type a question{" "} </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
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
          <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6">16. Type a question{" "} </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
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
          <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6">17. Type a question{" "} </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
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
          <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6">18. Type a question{" "} </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
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
          <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6">19. Type a question{" "} </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
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
          <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6">20. Type a question{" "} </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
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
          <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6">21. Type a question{" "} </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
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
          <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6">22. Type a question{" "} </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
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
          <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6">23. Type a question{" "} </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
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
          <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6">24. Type a question{" "} </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
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
          <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6">25. Type a question{" "} </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
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
          <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6">26. Type a question{" "} </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
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
          <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6"> 27.Type a question{" "} </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
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


          <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6"> 28.Type a question{" "} </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
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
     

          <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6"> 29.Type a question{" "} </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
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
     

          <li className="form-line" data-type="control_radio" id="id_6">
            <label className="form-label form-label-top form-label-auto" id="label_6" htmlFor="input_6"> 30.Type a question{" "} </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
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
     


     
   
        
         
          <li className="form-line" data-type="control_button" id="id_34">
            <div id="cid_34" className="form-input-wide" data-layout="full">
              <div data-align="auto" className="form-buttons-wrapper form-buttons-auto   jsTest-button-wrapperField">
                <button id="igh" type="submit" className="form-submit-button submit-button jf-form-buttons jsTest-submitField" data-component="button" data-content>
                  Submit
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </form>

      
  

      </TabPanel>
      <TabPanel value={value} index={1}>
      <form className="jotform-form" action="">
          <input type="hidden" name="formID" />
          <input type="hidden" id="JWTContainer" defaultValue />
          <input type="hidden" id="cardinalOrderNumber" defaultValue />
          <div role="main" className="form-all">
            <ul className="form-section page-section">
              <li
                id="cid_1"
                className="form-input-wide"
                data-type="control_head"
              >
                <div className="form-header-group  header-large">
                  <div className="header-text httal htvam">
                    <h1
                      id="header_1"
                      className="form-header"
                      data-component="header"
                    >
                      Multiple Choice
                    </h1>
                  </div>
                </div>
              </li>
    {/* ///////////////////1///////////////////////////////// */}

              
          <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  1. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>
    {/* ///////////////////1///////////////////////////////// */}
  
       
     
          <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  2. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>
        
    
    
          <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  3. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>

              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  4. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>

              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  5. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  6. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  7. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  8. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  9. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>

              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  11. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  12. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  13. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  14. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  15. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  16. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  17. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  18. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  19. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  20. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  21. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  22. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>



              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  23. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  24. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  25. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  26. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  27. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  28. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>
          

              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  29. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>
          

              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  30. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>
          


          
   
      {/* //////////////////////////////////////////////////slider///////////////////////////////// */}
            
              <li className="form-line" data-type="control_button" id="id_34">
                <div id="cid_34" className="form-input-wide" data-layout="full">
                  <div
                    data-align="auto"
                    className="form-buttons-wrapper form-buttons-auto   jsTest-button-wrapperField"
                  >
                    <button
                      id="input_34"
                      type="submit"
                      className="form-submit-button submit-button jf-form-buttons jsTest-submitField"
                      data-component="button"
                      data-content
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
</form>


      {/* //////////////////////////////////////////////////1st tab///////////////////////////////// */}

      {/* ///////////////////////////////////////////2nd bundel///////////////////////////// */}
      </TabPanel>
      <TabPanel value={value} index={2}>
       {/* ////////////////////////////////////////singal Qus////////////////////////////////////////////////// */}
       <form className="jotform-form" action="">
          <input type="hidden" name="formID" />
          <input type="hidden" id="JWTContainer" defaultValue />
          <input type="hidden" id="cardinalOrderNumber" defaultValue />
          <div role="main" className="form-all">
            <ul className="form-section page-section">
              <li
                id="cid_1"
                className="form-input-wide"
                data-type="control_head"
              >
                <div className="form-header-group  header-large">
                  <div className="header-text httal htvam">
                    <h1
                      id="header_1"
                      className="form-header"
                      data-component="header"
                    >
                      Single Choice Question
                    </h1>
                  </div>
                </div>
              </li>
    {/* ///////////////////1///////////////////////////////// */}

              
          <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  1. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>
    {/* ///////////////////1///////////////////////////////// */}
  
       
     
          <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  2. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>
        
    
    
          <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  3. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>

              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  4. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>

              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  5. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  6. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  7. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  8. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  9. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>

              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  11. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  12. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  13. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  14. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  15. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  16. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  17. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  18. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  19. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  20. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  21. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  22. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>



              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  23. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  24. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  25. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  26. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  27. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>


              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  28. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>
          

              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  29. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>
          

              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label
                  className="form-label form-label-top form-label-auto"
                  id="label_82"
                  htmlFor="input_82"
                >
                  {" "}
                  30. Type a question{" "}
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div
                    className="form-single-column"
                    role="group"
                    aria-labelledby="label_82"
                    data-component="checkbox"
                  >
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_0"
                        name="q82_typeA82[]"
                        defaultValue="Type option 1"
                      />
                    
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            1 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>



                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_1"
                        name="q82_typeA82[]"
                        defaultValue="Type option 2"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          2 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_2"
                        name="q82_typeA82[]"
                        defaultValue="Type option 3"
                      />
               
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                           3 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>
                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          4 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                    <span
                      className="form-checkbox-item"
                      style={{ clear: "left" }}
                    >
                      <span className="dragger-item"></span>
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        id="input_82_3"
                        name="q82_typeA82[]"
                        defaultValue="Type option 4"
                      />
             
                      <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                          5 Type Answer
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Small"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </span>


                  </div>
                </div>
              </li>
          


          
   
      {/* //////////////////////////////////////////////////slider///////////////////////////////// */}
            
              <li className="form-line" data-type="control_button" id="id_34">
                <div id="cid_34" className="form-input-wide" data-layout="full">
                  <div
                    data-align="auto"
                    className="form-buttons-wrapper form-buttons-auto   jsTest-button-wrapperField"
                  >
                    <button
                      id="input_34"
                      type="submit"
                      className="form-submit-button submit-button jf-form-buttons jsTest-submitField"
                      data-component="button"
                      data-content
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
</form>


      {/* //////////////////////////////////////////////////1st tab///////////////////////////////// */}
      </TabPanel>
      <TabPanel value={value} index={3}>
      
      <form className="jotform-form" action="">
        <input type="hidden" name="formID" />
        <input type="hidden" id="JWTContainer" defaultValue />
        <input type="hidden" id="cardinalOrderNumber" defaultValue />
        <div role="main" className="form-all">
          <ul className="form-section page-section">
            <li id="cid_1" className="form-input-wide" data-type="control_head">
              <div className="form-header-group  header-large">
                <div className="header-text httal htvam">
                  <h1 id="header_1" className="form-header" data-component="header">
                    Easy Question
                   
                  </h1>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55"> 1. Type a question </label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
              
            </li>

            <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55">2. Type a question</label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                  </li>

                  <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55">3. Type a question</label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                  </li>
                  <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55">3. Type a question</label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                  </li>
                  <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55">4. Type a question</label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                  </li>
                  <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55">5. Type a question</label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                  </li>
                  <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55">6. Type a question</label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                  </li>
                  <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55">7. Type a question</label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                  </li>
                  <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55">8. Type a question</label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                  </li>
                  <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55">9. Type a question</label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                  </li>
                  <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55">10. Type a question</label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                  </li>
                  <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55">11. Type a question</label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                  </li>
                  <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55">12. Type a question</label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                  </li>
                  <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55">13. Type a question</label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                  </li>
                  <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55">14. Type a question</label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                  </li>
                  <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55">15. Type a question</label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                  </li>
                  <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55">16. Type a question</label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                  </li>
                  <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55">17. Type a question</label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                  </li>
                  <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55">18. Type a question</label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                  </li>
                  <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55">19. Type a question</label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                  </li>
                  <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55">20. Type a question</label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                  </li>
                  <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55">21. Type a question</label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                  </li>
                  <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55">22. Type a question</label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                  </li> <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55">23. Type a question</label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                  </li>

                  <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55">24. Type a question</label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                  </li>
                  <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55">25. Type a question</label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                  </li>
                  <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55">26. Type a question</label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                  </li>
                  <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55">27. Type a question</label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                  </li>
                  <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55">28. Type a question</label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                  </li>
                  <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55">29. Type a question</label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                  </li>
                  <li className="form-line" data-type="control_textbox" id="id_55">
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55">30. Type a question</label>
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
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                  </li>

        
            
            <li className="form-line" data-type="control_button" id="id_34">
              <div id="cid_34" className="form-input-wide" data-layout="full">
                <div data-align="auto" className="form-buttons-wrapper form-buttons-auto   jsTest-button-wrapperField">
                  <button id="igh" type="submit" className="form-submit-button submit-button jf-form-buttons jsTest-submitField" data-component="button" data-content>
                    Submit
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </form>

      </TabPanel>
 
    </div>
  );
}
