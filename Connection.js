const mongoose = require('mongoose');
const URI = "mongodb+srv://smakel01:98610@avcluster.reru8.mongodb.net/AVCluster";

const connectDB = async()=>{
	await mongoose.connect(URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true
	});
	console.log('DB connected...!');
}

module.exports = connectDB;