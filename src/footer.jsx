import React from 'react';
import '@fortawesome/react-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import 'mdbootstrap/css/bootstrap.min.css';
import image from './Logo/audonix white.png';

const Footer =() => {
  return ( 
    <>

<footer className="page-footer font-small bg-dark text-white pt-4">


  <div className="container col-10 text-center text-md-left">


    <div className="row text-center text-md-left mt-3 pb-3">

      <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Audonix Vision</h6>
        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
          consectetur
          adipisicing elit.</p>
      </div>

      <hr className="w-100 clearfix d-md-none" />

      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 ">
        <h6 className="text-uppercase mb-4 font-weight-bold ">Products</h6>
        <p>
          <a href="#">project on progress</a>
        </p>
        <p>
          <a href="#">project on progress</a>
        </p>
        <p>
          <a href="#">project on progress</a>
        </p>
        <p>
          <a href="#">project on progress</a>
        </p>
      </div>

      <hr className="w-100 clearfix d-md-none" />

      <div className="col-sm-3 d-flex justify-content-center">
      <img src={image} alt="foot logo" width="300px" className="" />
        
      </div>

      <hr className="w-100 clearfix d-md-none" />

      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
        <p>
          Nalco Nagar, Angul, Odisha</p>
        <p>
         sachinmohanty98610@gmail.com</p>
        <p>
         + 91 70082*****</p>
        
      </div>

    </div>

    <hr />

    <div className="row d-flex align-items-center">

      <div className="col-md-7 col-lg-8">

        <p className="text-center text-md-left">© 2020 Copyright:
          <a href="">
            <strong> AudonixVision.com</strong>
          </a>
        </p>

      </div>

      <div className="col-md-5 col-lg-4 ml-lg-0">

        <div className="text-center text-md-right">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a className="btn-floating btn-sm rgba-white-slight mx-1">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-sm rgba-white-slight mx-1">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-sm rgba-white-slight mx-1">
                <i className="fab fa-google-plus-g"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-sm rgba-white-slight mx-1">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>

      </div>

    </div>

  </div>

</footer>

</>

    );
};
export default Footer;