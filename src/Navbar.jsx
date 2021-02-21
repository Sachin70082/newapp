import React from 'react';
import image from './Logo/audonix white.png';
import { NavLink } from 'react-router-dom';

const Nav =() => {
	return ( 
		<>
<div className="container-fluid nav_bg bg-custom-2">
  <div className="row">
    <div className="col-md-10 col-sm-12 mx-auto">

      <nav className="navbar navbar-expand-lg navbar-dark pl-4 pl-md-0 ">
          <div className="navbar-brand"><img src={image} alt="" height='100px' /></div>
          <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown" >

          
            <ul className="navbar-nav ml-auto ">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                </li>
     
                <li className="nav-item dropdown">
                   <NavLink className="nav-link dropdown-toggle" to="" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Services
                  </NavLink>
                     <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <NavLink className="dropdown-item" to="/services">Musics</NavLink>
                        
                    </div>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/About">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                </li>
            </ul>
         </div>
      </nav>
    
    </div>
  </div>
</div>



			
		</>
		);
};

export default Nav;