

import React from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/Aboutus.css';
import Image from '../img/Image.png';
import Logo from '../img/logo.png';

function Index() {
  const navigate = useNavigate();

  const routeChange = () => {
    let path = `/signin`;
    navigate(path);
  };

  return (
    <div className="container">
      <div className="header-content">
        <img src={Logo} alt="logo" className="logo_image" />
        <button className="about_btn">About US</button>
      </div>
      <div className="content-body">
        <p className="content-para">
          ELEVATE YOUR RETAIL INTELLIGENCE. UPLOAD DATA EFFORTLESSLY RECEIVE
          INSIGHTS INSTANTLY
        </p>
      </div>
      <div className="main-container">
        <div className="image_container">
          <img src={Image} alt="About_img" className="about_image" />
        </div>
        <div className="para_container">
          <p className="Para-body">
            Empower your grocery retail decisions with our advanced data
            summarization platform. Seamlessly upload, analyze, predict and
            visualize data for unparalleled insights.
          </p>
          <button className="get_btn" onClick={routeChange}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Index;
