import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  

  return (
    <div   role="tabpanel"
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
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,


    

},
paper: {
  padding: theme.spacing(2),
  textAlign: 'center',



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
          <Tab label="Yes / No questions"  {...a11yProps(0)} />
          <Tab label="Multiple Choice Questions" {...a11yProps(1)} />
          <Tab label="Single Choice Question " {...a11yProps(2)} />
          <Tab label="Text Question " {...a11yProps(3)} />
        </Tabs>
      </AppBar>
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
            <li className="form-line" data-type="control_radio" id="id_6">
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
            <li className="form-line" data-type="control_radio" id="id_37">
              <label className="form-label form-label-top form-label-auto" id="label_37" htmlFor="input_37"> 1. Have you ever heard about [Site Name]? </label>
              <div id="cid_37" className="form-input-wide" data-layout="full">
                <div className="form-single-column" role="group" aria-labelledby="label_37" data-component="radio">
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_37_0" name="q37_1Have37" defaultValue="Yes" />
                    <label id="label_input_37_0" htmlFor="input_37_0"> Yes </label>
                  </span>
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_37_1" name="q37_1Have37" defaultValue="No" />
                    <label id="label_input_37_1" htmlFor="input_37_1"> No </label>
                  </span>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_radio" id="id_38">
              <label className="form-label form-label-top form-label-auto" id="label_38" htmlFor="input_38"> 1. Have you ever heard about [Site Name]? </label>
              <div id="cid_38" className="form-input-wide" data-layout="full">
                <div className="form-single-column" role="group" aria-labelledby="label_38" data-component="radio">
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_38_0" name="q38_1Have38" defaultValue="Yes" />
                    <label id="label_input_38_0" htmlFor="input_38_0"> Yes </label>
                  </span>
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_38_1" name="q38_1Have38" defaultValue="No" />
                    <label id="label_input_38_1" htmlFor="input_38_1"> No </label>
                  </span>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_radio" id="id_39">
              <label className="form-label form-label-top form-label-auto" id="label_39" htmlFor="input_39"> 1. Have you ever heard about [Site Name]? </label>
              <div id="cid_39" className="form-input-wide" data-layout="full">
                <div className="form-single-column" role="group" aria-labelledby="label_39" data-component="radio">
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_39_0" name="q39_1Have39" defaultValue="Yes" />
                    <label id="label_input_39_0" htmlFor="input_39_0"> Yes </label>
                  </span>
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_39_1" name="q39_1Have39" defaultValue="No" />
                    <label id="label_input_39_1" htmlFor="input_39_1"> No </label>
                  </span>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_radio" id="id_40">
              <label className="form-label form-label-top form-label-auto" id="label_40" htmlFor="input_40"> 1. Have you ever heard about [Site Name]? </label>
              <div id="cid_40" className="form-input-wide" data-layout="full">
                <div className="form-single-column" role="group" aria-labelledby="label_40" data-component="radio">
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_40_0" name="q40_1Have40" defaultValue="Yes" />
                    <label id="label_input_40_0" htmlFor="input_40_0"> Yes </label>
                  </span>
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_40_1" name="q40_1Have40" defaultValue="No" />
                    <label id="label_input_40_1" htmlFor="input_40_1"> No </label>
                  </span>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_radio" id="id_41">
              <label className="form-label form-label-top form-label-auto" id="label_41" htmlFor="input_41"> 1. Have you ever heard about [Site Name]? </label>
              <div id="cid_41" className="form-input-wide" data-layout="full">
                <div className="form-single-column" role="group" aria-labelledby="label_41" data-component="radio">
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_41_0" name="q41_1Have41" defaultValue="Yes" />
                    <label id="label_input_41_0" htmlFor="input_41_0"> Yes </label>
                  </span>
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_41_1" name="q41_1Have41" defaultValue="No" />
                    <label id="label_input_41_1" htmlFor="input_41_1"> No </label>
                  </span>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_radio" id="id_42">
              <label className="form-label form-label-top form-label-auto" id="label_42" htmlFor="input_42"> 1. Have you ever heard about [Site Name]? </label>
              <div id="cid_42" className="form-input-wide" data-layout="full">
                <div className="form-single-column" role="group" aria-labelledby="label_42" data-component="radio">
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_42_0" name="q42_1Have42" defaultValue="Yes" />
                    <label id="label_input_42_0" htmlFor="input_42_0"> Yes </label>
                  </span>
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_42_1" name="q42_1Have42" defaultValue="No" />
                    <label id="label_input_42_1" htmlFor="input_42_1"> No </label>
                  </span>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_radio" id="id_43">
              <label className="form-label form-label-top form-label-auto" id="label_43" htmlFor="input_43"> 1. Have you ever heard about [Site Name]? </label>
              <div id="cid_43" className="form-input-wide" data-layout="full">
                <div className="form-single-column" role="group" aria-labelledby="label_43" data-component="radio">
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_43_0" name="q43_1Have43" defaultValue="Yes" />
                    <label id="label_input_43_0" htmlFor="input_43_0"> Yes </label>
                  </span>
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_43_1" name="q43_1Have43" defaultValue="No" />
                    <label id="label_input_43_1" htmlFor="input_43_1"> No </label>
                  </span>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_radio" id="id_44">
              <label className="form-label form-label-top form-label-auto" id="label_44" htmlFor="input_44"> 1. Have you ever heard about [Site Name]? </label>
              <div id="cid_44" className="form-input-wide" data-layout="full">
                <div className="form-single-column" role="group" aria-labelledby="label_44" data-component="radio">
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_44_0" name="q44_1Have44" defaultValue="Yes" />
                    <label id="label_input_44_0" htmlFor="input_44_0"> Yes </label>
                  </span>
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_44_1" name="q44_1Have44" defaultValue="No" />
                    <label id="label_input_44_1" htmlFor="input_44_1"> No </label>
                  </span>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_radio" id="id_45">
              <label className="form-label form-label-top form-label-auto" id="label_45" htmlFor="input_45"> 1. Have you ever heard about [Site Name]? </label>
              <div id="cid_45" className="form-input-wide" data-layout="full">
                <div className="form-single-column" role="group" aria-labelledby="label_45" data-component="radio">
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_45_0" name="q45_1Have45" defaultValue="Yes" />
                    <label id="label_input_45_0" htmlFor="input_45_0"> Yes </label>
                  </span>
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_45_1" name="q45_1Have45" defaultValue="No" />
                    <label id="label_input_45_1" htmlFor="input_45_1"> No </label>
                  </span>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_radio" id="id_46">
              <label className="form-label form-label-top form-label-auto" id="label_46" htmlFor="input_46"> 1. Have you ever heard about [Site Name]? </label>
              <div id="cid_46" className="form-input-wide" data-layout="full">
                <div className="form-single-column" role="group" aria-labelledby="label_46" data-component="radio">
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_46_0" name="q46_1Have46" defaultValue="Yes" />
                    <label id="label_input_46_0" htmlFor="input_46_0"> Yes </label>
                  </span>
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_46_1" name="q46_1Have46" defaultValue="No" />
                    <label id="label_input_46_1" htmlFor="input_46_1"> No </label>
                  </span>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_radio" id="id_68">
              <label className="form-label form-label-top form-label-auto" id="label_68" htmlFor="input_68"> 1. Have you ever heard about [Site Name]? </label>
              <div id="cid_68" className="form-input-wide" data-layout="full">
                <div className="form-single-column" role="group" aria-labelledby="label_68" data-component="radio">
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_68_0" name="q68_1Have68" defaultValue="Yes" />
                    <label id="label_input_68_0" htmlFor="input_68_0"> Yes </label>
                  </span>
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_68_1" name="q68_1Have68" defaultValue="No" />
                    <label id="label_input_68_1" htmlFor="input_68_1"> No </label>
                  </span>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_radio" id="id_69">
              <label className="form-label form-label-top form-label-auto" id="label_69" htmlFor="input_69"> 1. Have you ever heard about [Site Name]? </label>
              <div id="cid_69" className="form-input-wide" data-layout="full">
                <div className="form-single-column" role="group" aria-labelledby="label_69" data-component="radio">
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_69_0" name="q69_1Have69" defaultValue="Yes" />
                    <label id="label_input_69_0" htmlFor="input_69_0"> Yes </label>
                  </span>
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_69_1" name="q69_1Have69" defaultValue="No" />
                    <label id="label_input_69_1" htmlFor="input_69_1"> No </label>
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
              <li id="cid_1" className="form-input-wide" data-type="control_head">
                <div className="form-header-group  header-large">
                  <div className="header-text httal htvam">
                    <h1 id="header_1" className="form-header" data-component="header">
                      Multiple Choice
                    </h1>
                  </div>
                </div>
              </li>
              <li className="form-line" data-type="control_checkbox" id="id_73">
                <label className="form-label form-label-top form-label-auto" id="label_73" htmlFor="input_73"> Type a question </label>
                <div id="cid_73" className="form-input-wide" data-layout="full">
                  <div className="form-single-column" role="group" aria-labelledby="label_73" data-component="checkbox">
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_73_0" name="q73_typeA[]" defaultValue="Type option 1" />
                      <label id="label_input_73_0" htmlFor="input_73_0"> Type option 1 </label>
                    </span>
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_73_1" name="q73_typeA[]" defaultValue="Type option 2" />
                      <label id="label_input_73_1" htmlFor="input_73_1"> Type option 2 </label>
                    </span>
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_73_2" name="q73_typeA[]" defaultValue="Type option 3" />
                      <label id="label_input_73_2" htmlFor="input_73_2"> Type option 3 </label>
                    </span>
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_73_3" name="q73_typeA[]" defaultValue="Type option 4" />
                      <label id="label_input_73_3" htmlFor="input_73_3"> Type option 4 </label>
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
              <li className="form-line" data-type="control_checkbox" id="id_76">
                <label className="form-label form-label-top form-label-auto" id="label_76" htmlFor="input_76"> Type a question </label>
                <div id="cid_76" className="form-input-wide" data-layout="full">
                  <div className="form-single-column" role="group" aria-labelledby="label_76" data-component="checkbox">
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_76_0" name="q76_typeA76[]" defaultValue="Type option 1" />
                      <label id="label_input_76_0" htmlFor="input_76_0"> Type option 1 </label>
                    </span>
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_76_1" name="q76_typeA76[]" defaultValue="Type option 2" />
                      <label id="label_input_76_1" htmlFor="input_76_1"> Type option 2 </label>
                    </span>
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_76_2" name="q76_typeA76[]" defaultValue="Type option 3" />
                      <label id="label_input_76_2" htmlFor="input_76_2"> Type option 3 </label>
                    </span>
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_76_3" name="q76_typeA76[]" defaultValue="Type option 4" />
                      <label id="label_input_76_3" htmlFor="input_76_3"> Type option 4 </label>
                    </span>
                  </div>
                </div>
              </li>
              <li className="form-line" data-type="control_checkbox" id="id_77">
                <label className="form-label form-label-top form-label-auto" id="label_77" htmlFor="input_77"> Type a question </label>
                <div id="cid_77" className="form-input-wide" data-layout="full">
                  <div className="form-single-column" role="group" aria-labelledby="label_77" data-component="checkbox">
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_77_0" name="q77_typeA77[]" defaultValue="Type option 1" />
                      <label id="label_input_77_0" htmlFor="input_77_0"> Type option 1 </label>
                    </span>
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_77_1" name="q77_typeA77[]" defaultValue="Type option 2" />
                      <label id="label_input_77_1" htmlFor="input_77_1"> Type option 2 </label>
                    </span>
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_77_2" name="q77_typeA77[]" defaultValue="Type option 3" />
                      <label id="label_input_77_2" htmlFor="input_77_2"> Type option 3 </label>
                    </span>
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_77_3" name="q77_typeA77[]" defaultValue="Type option 4" />
                      <label id="label_input_77_3" htmlFor="input_77_3"> Type option 4 </label>
                    </span>
                  </div>
                </div>
              </li>
              <li className="form-line" data-type="control_checkbox" id="id_78">
                <label className="form-label form-label-top form-label-auto" id="label_78" htmlFor="input_78"> Type a question </label>
                <div id="cid_78" className="form-input-wide" data-layout="full">
                  <div className="form-single-column" role="group" aria-labelledby="label_78" data-component="checkbox">
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_78_0" name="q78_typeA78[]" defaultValue="Type option 1" />
                      <label id="label_input_78_0" htmlFor="input_78_0"> Type option 1 </label>
                    </span>
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_78_1" name="q78_typeA78[]" defaultValue="Type option 2" />
                      <label id="label_input_78_1" htmlFor="input_78_1"> Type option 2 </label>
                    </span>
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_78_2" name="q78_typeA78[]" defaultValue="Type option 3" />
                      <label id="label_input_78_2" htmlFor="input_78_2"> Type option 3 </label>
                    </span>
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_78_3" name="q78_typeA78[]" defaultValue="Type option 4" />
                      <label id="label_input_78_3" htmlFor="input_78_3"> Type option 4 </label>
                    </span>
                  </div>
                </div>
              </li>
              <li className="form-line" data-type="control_checkbox" id="id_79">
                <label className="form-label form-label-top form-label-auto" id="label_79" htmlFor="input_79"> Type a question </label>
                <div id="cid_79" className="form-input-wide" data-layout="full">
                  <div className="form-single-column" role="group" aria-labelledby="label_79" data-component="checkbox">
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_79_0" name="q79_typeA79[]" defaultValue="Type option 1" />
                      <label id="label_input_79_0" htmlFor="input_79_0"> Type option 1 </label>
                    </span>
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_79_1" name="q79_typeA79[]" defaultValue="Type option 2" />
                      <label id="label_input_79_1" htmlFor="input_79_1"> Type option 2 </label>
                    </span>
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_79_2" name="q79_typeA79[]" defaultValue="Type option 3" />
                      <label id="label_input_79_2" htmlFor="input_79_2"> Type option 3 </label>
                    </span>
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_79_3" name="q79_typeA79[]" defaultValue="Type option 4" />
                      <label id="label_input_79_3" htmlFor="input_79_3"> Type option 4 </label>
                    </span>
                  </div>
                </div>
              </li>
              <li className="form-line" data-type="control_checkbox" id="id_80">
                <label className="form-label form-label-top form-label-auto" id="label_80" htmlFor="input_80"> Type a question </label>
                <div id="cid_80" className="form-input-wide" data-layout="full">
                  <div className="form-single-column" role="group" aria-labelledby="label_80" data-component="checkbox">
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_80_0" name="q80_typeA80[]" defaultValue="Type option 1" />
                      <label id="label_input_80_0" htmlFor="input_80_0"> Type option 1 </label>
                    </span>
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_80_1" name="q80_typeA80[]" defaultValue="Type option 2" />
                      <label id="label_input_80_1" htmlFor="input_80_1"> Type option 2 </label>
                    </span>
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_80_2" name="q80_typeA80[]" defaultValue="Type option 3" />
                      <label id="label_input_80_2" htmlFor="input_80_2"> Type option 3 </label>
                    </span>
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_80_3" name="q80_typeA80[]" defaultValue="Type option 4" />
                      <label id="label_input_80_3" htmlFor="input_80_3"> Type option 4 </label>
                    </span>
                  </div>
                </div>
              </li>
              <li className="form-line" data-type="control_checkbox" id="id_81">
                <label className="form-label form-label-top form-label-auto" id="label_81" htmlFor="input_81"> Type a question </label>
                <div id="cid_81" className="form-input-wide" data-layout="full">
                  <div className="form-single-column" role="group" aria-labelledby="label_81" data-component="checkbox">
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_81_0" name="q81_typeA81[]" defaultValue="Type option 1" />
                      <label id="label_input_81_0" htmlFor="input_81_0"> Type option 1 </label>
                    </span>
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_81_1" name="q81_typeA81[]" defaultValue="Type option 2" />
                      <label id="label_input_81_1" htmlFor="input_81_1"> Type option 2 </label>
                    </span>
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_81_2" name="q81_typeA81[]" defaultValue="Type option 3" />
                      <label id="label_input_81_2" htmlFor="input_81_2"> Type option 3 </label>
                    </span>
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_81_3" name="q81_typeA81[]" defaultValue="Type option 4" />
                      <label id="label_input_81_3" htmlFor="input_81_3"> Type option 4 </label>
                    </span>
                  </div>
                </div>
              </li>
              <li className="form-line" data-type="control_checkbox" id="id_82">
                <label className="form-label form-label-top form-label-auto" id="label_82" htmlFor="input_82"> Type a question </label>
                <div id="cid_82" className="form-input-wide" data-layout="full">
                  <div className="form-single-column" role="group" aria-labelledby="label_82" data-component="checkbox">
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_82_0" name="q82_typeA82[]" defaultValue="Type option 1" />
                      <label id="label_input_82_0" htmlFor="input_82_0"> Type option 1 </label>
                    </span>
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_82_1" name="q82_typeA82[]" defaultValue="Type option 2" />
                      <label id="label_input_82_1" htmlFor="input_82_1"> Type option 2 </label>
                    </span>
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_82_2" name="q82_typeA82[]" defaultValue="Type option 3" />
                      <label id="label_input_82_2" htmlFor="input_82_2"> Type option 3 </label>
                    </span>
                    <span className="form-checkbox-item" style={{clear: 'left'}}>
                      <span className="dragger-item">
                      </span>
                      <input type="checkbox" className="form-checkbox" id="input_82_3" name="q82_typeA82[]" defaultValue="Type option 4" />
                      <label id="label_input_82_3" htmlFor="input_82_3"> Type option 4 </label>
                    </span>
                  </div>
                </div>
              </li>
              <li className="form-line" data-type="control_button" id="id_34">
                <div id="cid_34" className="form-input-wide" data-layout="full">
                  <div data-align="auto" className="form-buttons-wrapper form-buttons-auto   jsTest-button-wrapperField">
                    <button id="input_34" type="submit" className="form-submit-button submit-button jf-form-buttons jsTest-submitField" data-component="button" data-content>
                      Submit
                    </button>
                  </div>
                </div>
              </li>
           
            </ul>
          </div>
   
       
     
        </form>

      </TabPanel>
      <TabPanel value={value} index={2}>
        
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
                    Single Choice Question
                  </h1>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_radio" id="id_50">
              <label className="form-label form-label-top form-label-auto" id="label_50" htmlFor="input_50"> Type a question </label>
              <div id="cid_50" className="form-input-wide" data-layout="full">
                <div className="form-single-column" role="group" aria-labelledby="label_50" data-component="radio">
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_50_0" name="q50_typeA" defaultValue="Type option 1" />
                    <label id="label_input_50_0" htmlFor="input_50_0"> Type option 1 </label>
                  </span>
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_50_1" name="q50_typeA" defaultValue="Type option 2" />
                    <label id="label_input_50_1" htmlFor="input_50_1"> Type option 2 </label>
                  </span>
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_50_2" name="q50_typeA" defaultValue="Type option 3" />
                    <label id="label_input_50_2" htmlFor="input_50_2"> Type option 3 </label>
                  </span>
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_50_3" name="q50_typeA" defaultValue="Type option 4" />
                    <label id="label_input_50_3" htmlFor="input_50_3"> Type option 4 </label>
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
            <li className="form-line" data-type="control_radio" id="id_53">
              <label className="form-label form-label-top form-label-auto" id="label_53" htmlFor="input_53"> Type a question </label>
              <div id="cid_53" className="form-input-wide" data-layout="full">
                <div className="form-single-column" role="group" aria-labelledby="label_53" data-component="radio">
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_53_0" name="q53_typeA53" defaultValue="Type option 1" />
                    <label id="label_input_53_0" htmlFor="input_53_0"> Type option 1 </label>
                  </span>
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_53_1" name="q53_typeA53" defaultValue="Type option 2" />
                    <label id="label_input_53_1" htmlFor="input_53_1"> Type option 2 </label>
                  </span>
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_53_2" name="q53_typeA53" defaultValue="Type option 3" />
                    <label id="label_input_53_2" htmlFor="input_53_2"> Type option 3 </label>
                  </span>
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_53_3" name="q53_typeA53" defaultValue="Type option 4" />
                    <label id="label_input_53_3" htmlFor="input_53_3"> Type option 4 </label>
                  </span>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_radio" id="id_54">
              <label className="form-label form-label-top form-label-auto" id="label_54" htmlFor="input_54"> Type a question </label>
              <div id="cid_54" className="form-input-wide" data-layout="full">
                <div className="form-single-column" role="group" aria-labelledby="label_54" data-component="radio">
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_54_0" name="q54_typeA54" defaultValue="Type option 1" />
                    <label id="label_input_54_0" htmlFor="input_54_0"> Type option 1 </label>
                  </span>
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_54_1" name="q54_typeA54" defaultValue="Type option 2" />
                    <label id="label_input_54_1" htmlFor="input_54_1"> Type option 2 </label>
                  </span>
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_54_2" name="q54_typeA54" defaultValue="Type option 3" />
                    <label id="label_input_54_2" htmlFor="input_54_2"> Type option 3 </label>
                  </span>
                  <span className="form-radio-item" style={{clear: 'left'}}>
                    <span className="dragger-item">
                    </span>
                    <input type="radio" className="form-radio" id="input_54_3" name="q54_typeA54" defaultValue="Type option 4" />
                    <label id="label_input_54_3" htmlFor="input_54_3"> Type option 4 </label>
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
              <label className="form-label form-label-top form-label-auto" id="label_55" htmlFor="input_55"> Type a question </label>
              <div id="cid_55" className="form-input-wide" data-layout="half">
                <input type="text" id="input_55" name="q55_typeA" data-type="input-textbox" className="form-textbox" style={{width: '310px'}} size={310} defaultValue data-component="textbox" aria-labelledby="label_55" />
              </div>
            </li>
            <li className="form-line" data-type="control_textbox" id="id_56">
              <label className="form-label form-label-top form-label-auto" id="label_56" htmlFor="input_56"> Type a question </label>
              <div id="cid_56" className="form-input-wide" data-layout="half">
                <input type="text" id="input_56" name="q56_typeA56" data-type="input-textbox" className="form-textbox" style={{width: '310px'}} size={310} defaultValue data-component="textbox" aria-labelledby="label_56" />
              </div>
            </li>
            <li className="form-line" data-type="control_textbox" id="id_57">
              <label className="form-label form-label-top form-label-auto" id="label_57" htmlFor="input_57"> Type a question </label>
              <div id="cid_57" className="form-input-wide" data-layout="half">
                <input type="text" id="input_57" name="q57_typeA57" data-type="input-textbox" className="form-textbox" style={{width: '310px'}} size={310} defaultValue data-component="textbox" aria-labelledby="label_57" />
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
