const express = require('express');
const connectDB = require('./Connection.js');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const Data = require('./model.js');
connectDB();

const port = process.env.Port || 3000;

app.use(cors());
//Parse JSON
app.use(bodyparser.urlencoded({extended:false})) 
app.use(bodyparser.json()) 


app.post('/Contact',function(req,res){

	
//document instance
	var Data1 = new Data({ 

	name: req.body.name,
	phone: req.body.phone,
	email: req.body.email,
	text: req.body.text
});
//Save model to DB
	Data1.save(function (error, data){
		if (error){
			res.send({status:0, result:error})
		}else{
			res.send({status:1, result:data})
		}
	});
});

app.listen(port,()=>console.log("Server Ok"));

