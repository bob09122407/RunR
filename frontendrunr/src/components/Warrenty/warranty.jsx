// App.js
import React, {useEffect} from 'react';
import "../Safety/safety.css"
import White from "../../assets/white.png"
import AOS from "aos"
const Warranty = () => {

  useEffect(()=>{
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  },[])
    
  return (
    <div className="black-container">
      <div className="blue-box left-box"  data-aos="zoom-in-right">
      <div className="green_ev">
          <img src={White} alt="" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"/>
         
        </div>
      </div>
      <div className="blackk-box right-box" data-aos="zoom-in-left">
      
        <div className="main_content">
       
        </div>
        <div className="wrapper">
          <i className="zmdi zmdi-chevron-up"></i>
          <i className="zmdi zmdi-chevron-up"></i>
          <i className="zmdi zmdi-chevron-up"></i>
          </div>
       
     
      </div>
    </div>
  );
};

export default Warranty;