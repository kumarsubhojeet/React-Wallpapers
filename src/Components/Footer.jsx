import React , {useState} from "react";
import {Link} from 'react-router-dom'

export default function footer() {

  

  return (
  <>
    <div className="footer_heading">
      <div className="footer_main">

        <div className="footer_about">
          <h3>About</h3>
          <p style={{fontWeight:'200'}}>React Wallpaper helps you to find and download your favorite wallpaper for free and can upload your own images to our Website and we are imporving it with time.</p>
        </div>

        <div className="catrgory_footer">
        <h3>Categories</h3>
          <Link to={`/Home/Cars`} style={{textDecoration:'none',fontWeight:'200' , color:'black'}}><p>Cars</p></Link>
             <Link to={`/Home/Sports`} style={{textDecoration:'none',fontWeight:'200' , color:'black'}}><p>Sports</p></Link>
             <Link to={`/Home/Nature`} style={{textDecoration:'none',fontWeight:'200' , color:'black'}}><p>Nature</p></Link>
            <Link to={`/Home/Oceans`} style={{textDecoration:'none',fontWeight:'200' , color:'black'}}> <p>Oceans</p></Link>
            <Link to={`/Home/Forest`} style={{textDecoration:'none',fontWeight:'200' , color:'black'}}> <p>Forest</p></Link>
           <Link to={`/Home/Games`} style={{textDecoration:'none',fontWeight:'200' , color:'black'}}>  <p>Games</p></Link>
             <Link to={`/Home/Mountains`} style={{textDecoration:'none',fontWeight:'200' , color:'black'}}><p>Mountains</p></Link>
        </div>

        <div className="social_media">
          <h3>Find Us on Folowing:</h3>
          <ul>
            <a href="#"><li><i class="fab fa-instagram instagram"></i></li></a>
            <a href="#"><li><i class="fab fa-youtube youtube"></i></li></a>
            <a href="https://github.com/kumarsubhojeet" target="_blank" without rel="noreferrer"><li><i class="fab fa-github github"></i></li></a>
            <a href="#"><li><i class="fab fa-linkedin-in linkedin"></i></li></a>
          <a href="#">  <li><i class="fab fa-twitter twitter"></i></li></a>
          </ul>

          <div className="footer_search">
            <a href="#"><h5>Find More...</h5></a>
          </div>
        </div>
         
         <div className="footer_contact">
           <h3>Contact Us</h3>

           <div className="footer_contact_home">
           <i class="fas fa-home home"></i>
           <h5 style={{fontWeight:'400'}}>Pune,,412207,Maharastra,India</h5>
           </div>

           <div className="footer_contact_home">
           <i class="fas fa-phone home"></i>
           <h5 style={{fontWeight:'400'}}>+123456789</h5>
           </div>
           <div className="footer_contact_home">
           <i class="fas fa-envelope home"></i>
           <h5 style={{fontWeight:'400'}}>info@email.com</h5>
           </div>
           <div className="footer_contact_home">
           <i class="fas fa-user home"></i>
           <a href="https://portfolio80.netlify.app"  without rel="noreferrer" target="_blank"><h5 style={{fontWeight:'400'}}>Visit-Portpolio</h5></a>
           </div>
         </div>


      </div>
      <div className='Footer-End' style={{margin:'10px auto' , textAlign:'center'}}>
      
      <p style={{fontWeight:'300' , color:'#fff' , backgroundColor:'#2c3e50', padding:'5px'}}>Copyright © 2021 All Rights Reserved by React Walls</p>
  
        </div>
    </div>

 

</>


  );
}
