import React, {Component} from 'react';
import API from "../../utils/API";
import "./style.css";

class AddRecipe extends Component {
    render() {
        return (
        <div>
        <div className="row">
          <div className="col-sm-12">
          <form>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Add product"
                name="recipeName"
              />
            </div>
            </form>
          </div>
        </div>
      </div>
        ); 
    }
}
      
export default AddRecipe;