import axios from "axios";
const GIPHYURL = "https://api.giphy.com/v1/gifs/search?";
const GIPHYAPIKEY = "api_key=h3ZfcokVkTszyvNg8AB93XpOtTMKzM7B";


//api.giphy.com/v1/gifs/search?api_key=h3ZfcokVkTszyvNg8AB93XpOtTMKzM7B&q=apple&limit=25&offset=0&rating=G&lang=en

export default {
  getItems: function() {
    return axios.get("/api/");
  },
  // Gets the book with the given id
  getItem: function(id) {
    return axios.get("/api/" + id);
  },
  // Deletes the book with the given id
  deleteItem: function(id) {
    console.log(id);
    return axios.delete("/api/" + id);
  },
  // Saves a book to the database
  saveItem: function(itemData) {
    console.log(itemData)
    return axios.post("/api/", itemData);
  },
 


  getImages: function(topic) {
    const myQuery = "&q=" + topic;
    const URL = GIPHYURL + GIPHYAPIKEY + myQuery + "&limit=1&rating=g";
    return axios.get(URL);
  },

  getRecipes: function(recipeName){
    const RecipesUrl = "https://api.yummly.com/v1/api/recipes?_app_id=22821bab&_app_key=421162948dbe294a0c32d2aab37a610d&q="+recipeName+"&requirePictures=true"
    return axios.get(RecipesUrl)
  }
};