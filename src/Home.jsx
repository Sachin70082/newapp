import React, { Component } from 'react';
import Svg from "./blogging.svg";
import wall from './wall.svg';
import ontime from './Logo/ontime.png';
import grnty from './Logo/grnty.png';
import support from './Logo/support.png';

import HomeCard from './HomeCard.jsx';
import Data from './HomeCardData.jsx';
import Carousel from './Carousel.jsx';
const Home =() => {
	return ( 
		<>
    
    <div className="wallpaper">
      <img src={wall} alt="Responsive image" className="img-fluid d-md-block d-none" width="100%" />
    </div>
  <section id="header" className="d-flex align-items-center">
    <div className="container-fluid nav_bg">
  <div className="row">
    <div className="col-10 mx-auto">
    
    <div className="row ">
    
    <div className="col-md-6 pt-5 pt-lg-0 text-white order-1 order-lg-1 justify-content-center flex-column d-flex">
    <h1 className="homeTitle">Feel free to connect with <strong className="brand-name text-warning ">Audonix</strong></h1>
    <p className="my-3 h6">Looking for Music video content or background scoring & mixing mastering ? We are here!</p>
    <a href="#" className="btn btn-outline-light rounded-pill mt-3 p-2"><strong>Get started</strong></a>
    </div>
    
    <div className="col-lg-6 order-2 order-lg-2 ">
       <img src={Svg} alt="home image" className="img-fluid mx-auto d-block my-sm-4" height="80%" />
    </div>
   
    
    </div>

    </div>
  
  </div>
  <br/><br/>
<div className="text-center my-4">
    <div className="col-10 mx-auto">
    <strong className="h3">We Got Covered to Succeed Online</strong>
    <p class="text-muted h5 mt-2">Quick support and a wide range of tools help you to get best service in while.</p>
    <hr  className="w-50" />
    </div>
</div>
</div>



 </section>

<section id="header" className="d-flex align-items-center">
    <div className=" container-fluid nav_bg mb-4">

    <div className="row ">
      <div className="col-md-8 mx-auto ">
      <div className="row">
  
      {
        Data.map((val, ind) =>{
          return <HomeCard 
          imgsrc={val.imgsrc}
          title={val.title}
          subtitle={val.subtitle}
          />
        })
      }

</div></div></div>
</div>
</section>
		<br />
    <br />
		<section id="header" className="d-flex align-items-center">
    <div className=" container-fluid nav_bg mb-4">

    <div className="row ">
      <div className="col-md-10 mx-auto ">
      <div className="row">

      <div className="col-6">
      <h1 class="">LOOKING FOR THE SUPPORT?</h1>
      <p class="lead">Get in touch with our experts today!</p>
      </div>
       
      <div className="col-6 ">
<button type="button" class="btn btn-light float-right shadow p-3 mb-5 bg-white rounded px-4"><strong>Contact Us</strong></button>
</div>
</div>

</div>
</div>
	</div>	
  </section>	
  <br/><br/>
<div className="text-center my-4">
    <div className="col-10 mx-auto">
    <strong className="h3">Our Promise</strong>
    <p class="text-muted h5 mt-2">Your satisfaction is guaranteed. Indeed.</p>
    <hr  className="w-50" />
    </div>
</div>

<section id="header" className="d-flex align-items-center">
    <div className="container-fluid nav_bg mb-4">

      <div className="row ">
        <div className="col-md-8 mx-auto ">
          <div className="row justify-content-center">
            
            <div class="promise m-2 ">
            <div className="card-img-fluid mx-auto mt-4">
            <img class="card-img-top"src={ontime} alt="Card image cap" />
            </div>
              <div class="card-body">
                   <h5 class="card-title">%99.9 Uptime</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                </div>
            </div>

            <div class="promise m-2 ">
             <div className="card-img-fluid mx-auto mt-4 ">
            <img class="card-img-top"src={grnty} alt="Card image cap" />
            </div><div class="card-body">
                   <h5 class="card-title">Satisfaction Guarantee</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                </div>
            </div>

            <div class="promise m-2 ">
              <div className="card-img-fluid mx-auto mt-4">
            <img class="card-img-top"src={support} alt="Card image cap" />
            </div> <div class="card-body">
                   <h5 class="card-title">Best Support</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
</section>

		</>
		);
};

export default Home;