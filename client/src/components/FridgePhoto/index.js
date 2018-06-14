import React, {Component} from 'react';
import Time from 'react-time'

class FridgePhoto extends Component {

  render() {
    let now = new Date()
    return (
      <div>
        <img onLoad={this.randomNumber} id='fridge-photo' src={"http://homyakny1.epizy.com/fridge.jpg?dummy"+now} alt='fridge'/>
      </div>
    );
  }
}

  export default FridgePhoto;