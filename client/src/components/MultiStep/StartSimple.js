import React from 'react';
import "react-day-picker/lib/style.css";
import "./style.css";
import { render } from 'react-dom';
import { Wizard, Steps, Step } from 'react-albus';
import Navigation from './Navigation';
import DayPickerInput from 'react-day-picker/DayPickerInput';

const StartSimple = () => {
  return(
  <div id='signupForm'>
      <h2 className='text-center margin-bottom'>Moving Form</h2>
      <Wizard style={{backgroundColor:'red'}}>
        <Steps>
          <Step id="first">
          <div className="form-group row">
            <label for="example-text-input" className="col-2 col-form-label">From Address</label>
            <div className="col-10">
              <input className="form-control" type="text" placeholder='1234 Main St, Orlando, FL'/>
            </div>
          </div>
          <div className="form-group row">
            <label for="example-text-input" className="col-2 col-form-label">To Address</label>
            <div className="col-10">
              <input className="form-control" type="text" placeholder='1234 Main St, Orlando, FL'/>
            </div>
          </div>
          <div className='row'>
          <div className="dropdown col-sm-6 text-center">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Start time
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" to="">Morning</a>
              <a className="dropdown-item" to="">Afternoon</a>
              <a className="dropdown-item" to="">Evening</a>
            </div>
          </div>
          <div className='col-md-6 text-center'>
            <DayPickerInput className='date-input'/>
          </div>
          </div>

          </Step>
          <Step id="second">
            <div className='row'>
              <div className='col-sm-4'>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
              </div>
              <div className='col-sm-4'>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
              </div>
              <div className='col-sm-4'>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
              </div>
            </div>
          </Step>
          <Step id="third">
            <div className='col-sm-12 text-center'>
              <h5>
                Your pick up location is <h4 className='form-values text-capitalize'>1234 main street, orlando, FL, 32123</h4>
                Your drop off location is <h4 className='form-values text-capitalize'>1234 main street, orlando, FL, 32123</h4>
                Pick up time is around <h4 className='form-values text-capitalize'>mornign</h4> 
                Date<h4 className='form-values text-capitalize'>2018-04-12</h4>
              </h5>
            </div>
            <div className='row'>
              <div className='col-sm-12 text-center'>
                <button className='btn btn-success'>Submit</button>
              </div>
            </div>
          </Step>
        </Steps>
          <Navigation/>
      </Wizard>
    </div>
  )
};



export default StartSimple;
