import React, {Component} from 'react';
import API from "../../utils/API";
import "./style.css";
import SwipeToDelete from "react-swipe-to-delete-component";

class AddList extends Component {
  state = {
    itemName: "",
    data: [],
    giphy: [],
    img: ""
  };

  componentDidMount() {
    this.loadItems();
  }

  loadImages = topic => {
    API.getImages(topic)
      .then(res => this.setState({img: res.data.data[0].images.fixed_width.url}))
      .then(()=> this.addItem())
      .catch(err => console.log(err));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState(
      { 
        [name]: value,
      }
    );
  };

  //logging in
  handleSubmit = event => {
    event.preventDefault();
    this.loadImages(this.state.itemName);
  };


  addItem = () => {
    const newItem = {
      itemName: this.state.itemName,
      img: this.state.img
      // "https://images.pexels.com/photos/39803/pexels-photo-39803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
    console.log("additem", this.state)
    API.saveItem(newItem)
      .then(res => this.loadItems())
      .catch(err => console.log(err));
  };

  loadItems = () => {
    API.getItems()
      // .then(res => console.log(res)
       .then(res => this.setState({
          data: res.data.fridgeID
        })
      ).then(() => this.setState({
        itemName : ''
      }))
      .catch(err => console.log(err));
  };
  
  onDelete = id => {
    console.log('deleted')
    API.deleteItem(id)
      // .then(res => this.loadImages(this.state.itemName))
      .then(res => this.loadItems())
      .catch(err => console.log(err));
  };

  onCancel = () => console.info("Canceled");

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
          <form onSubmit = {this.handleSubmit} id='itemForm'>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Add product"
                name="itemName"
                value={this.state.itemName}
                onChange={this.handleChange}
                onSubmit = {this.handleSubmit}
                ref={el => this.inputTitle = el}
              />
            </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            {/* <List data = {this.state.data} onDelete = {this.onDelete} onCancel = {this.onCancel} /> */}
            <div className="panel panel-default">
              <ul className="list-group list-unstyled">
                {this.state.data.length ?( this.state.data.map(item => (
                  <SwipeToDelete
                    key={item._id}
                    tag="li"
                    classNameTag="tw feed"
                    onCancel={this.onCancel}
                    onDelete={() => this.onDelete(item._id)}
                  >
                    <a className="list-group-item d-flex justify-content-between">
                      <div style={{width:'20%', height:'20%', overflow:'hidden'}}>
                      <img
                        className="rounded"
                        src={item.img}
                        alt='Not available'
                        style={{width:'17vw', borderRadius:'50px'}}
                      /></div>
                      <h4 className="text-uppercase">{item.itemName}</h4>
                      <p className="text-uppercase " style={{ color: "gray" }}>
                      {this.randomNumber}
                      </p>
                    </a>
                  </SwipeToDelete>
                ))
              ): (
                <div style={{textAlign:'center'}}>
                  <h3>Your shopping list is empty</h3>
                </div>
              )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

  export default AddList;