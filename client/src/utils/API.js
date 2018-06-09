import axios from "axios";
const GIPHYURL = "https://api.giphy.com/v1/stickers/search?";
const GIPHYAPIKEY = "api_key=h3ZfcokVkTszyvNg8AB93XpOtTMKzM7B";

// curl -X GET --header "Accept: application/json" --header "Api-Key: 4w89558ze4exgc36jc3mddue" "https://api.gettyimages.com/v3/search/images?compositions=cut_out&embed_content_only=true&exclude_nudity=true&file_types=jpg&graphical_styles=photography&license_models=royaltyfree&number_of_people=none&orientations=Square&page_size=1&phrase=%20%D1%8F%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE&sort_order=most_popular"
// https://api.gettyimages.com/v3/search/images?compositions=cut_out&embed_content_only=true&exclude_nudity=true&file_types=jpg&graphical_styles=photography&license_models=royaltyfree&number_of_people=none&orientations=Square&page_size=1&phrase=%20%D1%8F%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE&sort_order=most_popular



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
  },

  gettyImagesAPI: function(topic){
    
  }
};

//Finaly done