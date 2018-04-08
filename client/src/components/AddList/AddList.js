import React, {Component} from 'react';
import API from "../../utils/API";
import "./style.css";

class AddList extends Component{
    state = {
      itemName : "",
    };
  
    componentDidMount() {
      this.loadItems();
    }
  
  
    //entering username and password
    handleChange = event => {
      const { name, value } = event.target;
      this.setState({[name]: value});
      console.log(this.state);
    };
  
  
    //logging in
    handleSubmit = event => {
      event.preventDefault();
      //call a sign In function
      const newItem = {itemName: this.state.itemName};
      const {name} = event.target;
      this.addItem(newItem);
    };
  
  
    addItem = (newList) => {
      API.saveItem(newList)
        .then(res => this.loadItems())
        .catch(err => console.log(err));
    };
  
    loadItems = () => {
      API.getItems()
        .then(res =>
          this.setState({
            itemName: res.data,
  
          })
        )
      .catch(err => console.log(err));
    };

render() {
   return ( 
  <div className='row'>
        <div className='col-sm-12'>
            <div className="input-group mb-3" onSubmit={this.handleSubmit}>
                <input type="text" className="form-control" placeholder="Add product" name="itemName" value = {this.state.itemName} onChange = {this.handleChange} />                
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick = {this.handleSubmit} >Add to list</button>
                </div>
            </div>
            </div>
        </div>
  
   )
}
}

  export default AddList;