import React , {useState} from "react";

import {Link} from 'react-router-dom'

import Maincrousal from '../Components/Main_crousal'

import Discover from '../Components/Discover'
import Contact from "../Components/COntact"
import { BackTop } from 'antd';

export default function Main_page() {

  const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 50,
    backgroundColor: '#2c3e50 ',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  };

    const [search , setsearch] = useState("")

  
  return (
    <div className="main_main">
      <section>
       

        <div className="heading_main">
          <div class="jumbotron jumbotron-fluid">
            
         <div className="heading">
             <h1 style={{color: 'white' , fontWeight:'700'}}>React Wallpapers</h1>
             <p style={{color: 'white'}}>Fast & Easy way to view and download wallpapers for free.</p>
         </div>

         <div className="search_main_page">
         <div class="input">
  <input type="text" style={{textAlign: 'center'}} class="form-control" value={search} onChange={(e) => setsearch(e.target.value)} placeholder="Find Your Wallpaper..." />
  
  <Link to={`/Home/${search}`} style={{margin:'8px auto'}} class="btn btn-success">Search</Link>
  
</div>
         </div>

         <div className="tags_main">

         <div className="tags">
             <h3 style={{marginBottom:'17px' , color:'#fff'}}>Categories</h3>
         </div>

         <div className="tags_cat">
             <Link to={`/Home/Cars`} style={{textDecoration:'none'}}><p>Cars</p></Link>
             <Link to={`/Home/Sports`} style={{textDecoration:'none'}}><p>Sports</p></Link>
             <Link to={`/Home/Nature`} style={{textDecoration:'none'}}><p>Nature</p></Link>
            <Link to={`/Home/Oceans`} style={{textDecoration:'none'}}> <p>Oceans</p></Link>
            <Link to={`/Home/Forest`} style={{textDecoration:'none'}}> <p>Forest</p></Link>
           <Link to={`/Home/Games`} style={{textDecoration:'none'}}>  <p>Games</p></Link>
             <Link to={`/Home/Mountains`} style={{textDecoration:'none'}}><p>Mountains</p></Link>
           <Link to={`/Home/Bikes`} style={{textDecoration:'none'}}>  <p>Bikes</p></Link>
             <Link to={`/Home/Guns`} style={{textDecoration:'none'}}><p>Guns</p></Link>
             <Link to={`/Home/Aeroplane`} style={{textDecoration:'none'}}><p>Aeroplane</p></Link>
             <Link to={`/Home/Sky`} style={{textDecoration:'none'}}><p>Sky</p></Link>
             <Link to={`/Home/Birds`} style={{textDecoration:'none'}}><p>Birds</p></Link>
             <Link to={`/Home/Animals`} style={{textDecoration:'none'}}><p>Animals</p></Link>
            <Link to={`/Home/Code`} style={{textDecoration:'none'}}> <p>Code</p></Link>
         </div>
         </div>

            </div>
          </div>

          <div className="discover_main">
            <h2 style={{color: 'black' , fontWeight:'700'}}>Discover Random Wallapaers</h2>
            <Discover />
          </div>

          
          <div className="crousal_main_page">
              <Maincrousal />
          </div>

          <div className="contact_main_page">
          <h2 style={{color: 'black' , fontWeight:'700'}}>Contact Us</h2>
            <Contact />
          </div>


          <BackTop>
      <div style={style}><i class="fas fa-angle-up"></i></div>
    </BackTop>
  
      </section>
    </div>
  );
}
