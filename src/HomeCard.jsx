import React from 'react';


const HomeCard =(props) => {
	return ( 
		<>

  <div className="col-sm-6">
    <div className="card ">
      <div className="card-body d-flex homecard">
    
      <img src={props.imgsrc} alt={props.imgsrc} className="img-fluid mr-2" width="150px" height="auto" />

     
      <div className="crd-body">
        <h5 className="h6 card-title alert alert-primary">{props.title}</h5>
        <p className="card-text ">{props.subtitle}</p>
        <a hrefName="#" class="btn btn-primary text-white">Go somewhere</a>
     </div>
      </div>
    </div>
  </div>

		</>
		);
	};
export default HomeCard;