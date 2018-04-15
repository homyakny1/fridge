import React from 'react';
import { WithWizard } from 'react-albus';

const Navigation = () => (
  <WithWizard
    render={({ next, previous, step, steps }) => (
      <div className='example-buttons d-flex justify-content-around'>
      {steps.indexOf(step) > 0 && (
        <button className="btn btn-secondary form-button" onClick={previous}>
          Back
        </button>
      )}
        {steps.indexOf(step) < steps.length - 1 && (
          <button className="btn btn-warning form-button" id='next-button' onClick={next}>
            Next
          </button>
        )}
      </div>
    )}
  />
);

export default Navigation;
