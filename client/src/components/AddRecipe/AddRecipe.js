import React, {Component} from 'react';
import API from "../../utils/API";
import "./style.css";

class AddRecipe extends Component {
  state = {
    recipeName: "",
    recipeData: []
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.addRecipe(this.state.recipeName);
  };

  addRecipe = recipe => {
    API.getRecipes(recipe)
    .then(res => 
      this.setState({
      recipeData: res.data.matches
    }));
  };
// console.log(res.data.matches))

  render() {
    return <div>
        <div className="row">
          <div className="col-sm-12">
            <div style={{ marginTop: "3%" }} className="form-group mb-3">
              <form onSubmit={this.handleSubmit}>
                <input type="text" className="form-control" placeholder="Search for recipes" name="recipeName" value={this.state.recipeName} onChange={this.handleChange} />
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ul>
              {this.state.recipeData.map(item => (
                <section key={item.id} className="media mb-4">
                  <img className=" mr-3 img-fluid rounded" src={item.smallImageUrls} alt=""/>
                  <div className="media-body">
                    <h4 className="font-weight-normal">{item.sourceDisplayName}</h4>   
                    <ul>
                    <h5>Ingredients:</h5>
                    <div className='float-sm-left'>
                    {item.ingredients.map((ingredient,index) => (
                      <li key={index} >{ingredient}</li>
                    ))}
                    </div>
                    </ul>
                    </div>               
                </section> 
              ))}
            </ul>
          </div>
        </div>
      </div>;
  }
}
      
export default AddRecipe;