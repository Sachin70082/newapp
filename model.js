const mongoose = require('mongoose');


//define schema
	var dataSchema = mongoose.Schema({
		name : String,
		phone: Number,
		email: String,
		text: String
	});
module.exports = mongoose.model('users', dataSchema);  