import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Popper from 'popper.js';

import Home from './Home.jsx';
import Services from './Services.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Nav from './Navbar.jsx';
import Footer from './footer.jsx';
import { Switch, Route, Redirect } from 'react-router-dom';

import AHome from './Adminpanel.jsx';


const App =() => {
	return ( 

		<>
				
				
	

		
		<Switch>
				<Route exact path='/Adminpanel' component={AHome} />
				
				<Route exact path='/' render={props =>
					<Fragment>
						<Nav />
						<Home />
						<Footer />
					</Fragment> } />
				
				<Route exact path='/Services' render={props =>
					<Fragment>
						<Nav />
						<Services />
						<Footer />
					</Fragment> } />
				<Route exact path='/About' render={props =>
					<Fragment>
						<Nav />
						<About />
						<Footer />
					</Fragment> }  />
				<Route exact path='/Contact' render={props =>
					<Fragment>
						<Nav />
						<Contact />
						<Footer />
					</Fragment> }  />
				


		</Switch>

	
			

		</>
	);
};

export default App;