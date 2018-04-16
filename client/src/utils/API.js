import axios from "axios";
import { ContentSelectAll } from "material-ui";
const GIPHYURL = "https://api.giphy.com/v1/stickers/search?";
const GIPHYAPIKEY = "api_key=h3ZfcokVkTszyvNg8AB93XpOtTMKzM7B";

const YAMMLYURL = 'http://api.yummly.com/v1/recipes?';
const YAMMLYAPIKEY='_app_id=22821bab&_app_key=aed0010220fcd1499bddfe34c263d253&q=';

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
    console.log('API TOPIC',topic)
    const myQuery = "&q=" + topic;
    const URL = GIPHYURL + GIPHYAPIKEY + myQuery + "&limit=1&rating=g";
    // console.log('APIURL',URL);
    return axios.get(URL);
  },

  getRecipes: function(recipeName){
    console.log('Recipe Name ', recipeName)
    const RecipesUrl = YAMMLYURL+YAMMLYAPIKEY+recipeName+'&requirePictures=true'
  }
};