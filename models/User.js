const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
	name: {
    type :String
  },

	fridgeID: [
        {
          type: Schema.Types.ObjectId,
          ref: "Fridge"
        }
      ]


});
//passport-local-mongoose creates a 'username' and some password fields for you
//you can add some other fields here too if you like

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);


