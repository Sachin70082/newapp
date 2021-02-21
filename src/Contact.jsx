import React from 'react';
import axios from 'axios';
	


class Contact extends React.Component {

	constructor (props){
		super(props);
		this.state = {
			name : "",
			phone : "",
			email : "",
			text : "",
			nameError : false,
			phoneError : false,
			emailError : false,
			textError : false
		}
		this.validateForm = this.validateForm.bind(this);
		this.onChangeInput = this.onChangeInput.bind(this);
     }
	validateForm(){
		const name = this.state.name;
		const phone = this.state.phone;
		const email = this.state.email;
		const text = this.state.text;

		if(name){
			this.setState({nameError:false})
		}else{
			this.setState({nameError:true})
		}
		if(phone){
			this.setState({phoneError:false})
		}else{
			this.setState({phoneError:true})
		}
		if(email){
			this.setState({emailError:false})
		}else{
			this.setState({emailError:true})
		}
		if(text){
			this.setState({textError:false})
		}else{
			this.setState({textError:true})
		}


	var data={
			name : name,
			phone : phone,
			email : email,
			text : text
		}
		axios.post('/Contact',data).then(function(response){
			console.log('Stored to database!');
		}).catch(function(error){
			console.log(error);
		});

}
	
	

		
	onChangeInput(event){
		const name = event.target.name;
		const value = event.target.value;
		this.setState({[name]: value});

		}


	
render(){

	return ( 
		<>
			<div className="row bg-dark mx-auto">
    <div className="col-10 mx-auto">
    
    <div className="row ">
    
    <div className="col my-md-5 text-white flex-column ">
    <h1 className="card-title text-center">Let's make something awesome together. </h1>
    <p className="my-3 h6 text-center">Drop us a line, or give us a heads up if you are interested in visiting us.</p>
    </div>
    </div>
	</div>
  
  </div>

<form>
  <div className="row mx-auto ">
  	
  	<div className="col-md-8 mx-auto">

  	<div className="row">
  			<div className="col mx-3">
  				<h1 className="display-4 text-center">Get in touch</h1>
  				<p className="text-center">Lets talk about your projects.</p>
  			</div>
  		</div>
  		
  		<div className="row">
  		
  		<div className="col mx-auto my-4 d-md-flex">
  		
  		<div className="input-group col-md-4 ">
  			<div className="input-group-prepend">
    			<span className="input-group-text" id="inputGroup-sizing-default">Name</span>
  			</div>
  			<input type="text" className="form-control" name="name" style={{border:(this.state.nameError)?"1px solid red":''}} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={this.state.name} onChange={(e)=> this.onChangeInput(e)} />
		</div>
		<div className="input-group col-md-4">
  			<div className="input-group-prepend">
    			<span className="input-group-text" id="inputGroup-sizing-default">Ph No.</span>
  			</div>
  			<input type="text" className="form-control" name="phone" style={{border:(this.state.phoneError)?"1px solid red":''}} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={this.state.phone} onChange={(e)=> this.onChangeInput(e)} />
		</div>
		<div className="input-group col-md-4">
  			<div className="input-group-prepend">
    			<span className="input-group-text" id="inputGroup-sizing-default">Email</span>
  			</div>
  			<input type="text" className="form-control" name="email" style={{border:(this.state.emailError)?"1px solid red":''}} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="example@gmail.com" value={this.state.email} onChange={(e)=> this.onChangeInput(e)} />
		</div>
		</div>
  		</div>
  		
  		


  		<div className="row">
  			<div className="col mx-3">
  				<textarea className="form-control" name="text" style={{border:(this.state.textError)?"1px solid red":''}} id="exampleFormControlTextarea1" rows="3" placeholder="Write your message here" value={this.state.text} onChange={(e)=> this.onChangeInput(e)} ></textarea>
  			</div>
  		</div>
  		
  		<div className="row">
  			<div className="col mx-3 my-4">
  				<button type="button" onClick={this.validateForm} className="btn btn-warning float-right">Submit</button>
  			</div>
  		</div>
  	
  	</div>
  	
  	
  	</div>
</form>
	</>
		);

};

};

export default Contact;