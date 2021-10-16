import React , {useState} from "react";
import Carousel from "react-elastic-carousel";


import {Link} from 'react-router-dom'

import Maincrousal from '../Components/Main_crousal'

import Discover from '../Components/Discover'
import Contact from "../Components/COntact"
import { BackTop } from 'antd';
import Popularcat from '../Components/PopularCat'


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

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 4 },
  ];
  

    const [search , setsearch] = useState("")

  
  return (
    <div className="main_main">
      <section>
       

        <div className="heading_main">
          <div class="jumbotron jumbotron-fluid">
            
         <div className="heading">
             <h1  class="animate__animated animate__rubberBand" style={{color: 'white' , fontWeight:'700'}}>React Wallpapers</h1>
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
           
             <h3  class="animate__animated animate__bounce" style={{marginBottom:'17px' , color:'#fff'}}>Popular Tags</h3>
         </div>

         <div className="tags_cat">
         <Carousel breakPoints={breakPoints} enableAutoPlay={true} autoPlaySpeed={3000}>
             <Link class="animate__animated animate__bounceInDown" to={`/Home/Cars`} style={{textDecoration:'none'}}><p>Cars</p></Link>
             <Link class="animate__animated animate__bounceInDown" to={`/Home/Sports`} style={{textDecoration:'none'}}><p>Sports</p></Link>
             <Link class="animate__animated animate__bounceInDown" to={`/Home/Nature`} style={{textDecoration:'none'}}><p>Nature</p></Link>
            <Link class="animate__animated animate__bounceInDown" to={`/Home/Oceans`} style={{textDecoration:'none'}}> <p>Oceans</p></Link>
            <Link class="animate__animated animate__bounceInDown" to={`/Home/Forest`} style={{textDecoration:'none'}}> <p>Forest</p></Link>
           <Link class="animate__animated animate__bounceInDown" to={`/Home/Games`} style={{textDecoration:'none'}}>  <p>Games</p></Link>
             <Link class="animate__animated animate__bounceInDown" to={`/Home/Mountains`} style={{textDecoration:'none'}}><p>Mountains</p></Link>
           <Link class="animate__animated animate__bounceInDown" to={`/Home/Bikes`} style={{textDecoration:'none'}}>  <p>Bikes</p></Link>
             <Link class="animate__animated animate__bounceInDown" to={`/Home/Guns`} style={{textDecoration:'none'}}><p>Guns</p></Link>
             <Link class="animate__animated animate__bounceInDown" to={`/Home/Aeroplane`} style={{textDecoration:'none'}}><p>Aeroplane</p></Link>
             <Link class="animate__animated animate__bounceInDown" to={`/Home/Sky`} style={{textDecoration:'none'}}><p>Sky</p></Link>
             <Link class="animate__animated animate__bounceInDown" to={`/Home/Birds`} style={{textDecoration:'none'}}><p>Birds</p></Link>
             <Link class="animate__animated animate__bounceInDown" to={`/Home/Animals`} style={{textDecoration:'none'}}><p>Animals</p></Link>
            <Link class="animate__animated animate__bounceInDown" to={`/Home/Love`} style={{textDecoration:'none'}}> <p>Love</p></Link>
            <Link class="animate__animated animate__bounceInDown" to={`/Home/Music`} style={{textDecoration:'none'}}> <p>Music</p></Link>
            <Link class="animate__animated animate__bounceInDown" to={`/Home/Horror`} style={{textDecoration:'none'}}> <p>Horror</p></Link>
            <Link class="animate__animated animate__bounceInDown" to={`/Home/Flowers`} style={{textDecoration:'none'}}> <p>Flowers</p></Link>
            <Link class="animate__animated animate__bounceInDown" to={`/Home/Movies`} style={{textDecoration:'none'}}> <p>Movies</p></Link>
            <Link class="animate__animated animate__bounceInDown" to={`/Home/India`} style={{textDecoration:'none'}}> <p>India</p></Link>

            </Carousel>
         </div>
         </div>

            </div>
          </div>

          <div className="discover_main">
            <h2 style={{color: 'black' , fontWeight:'700'}}>Discover Random Wallapaers</h2>
            <Discover />
          </div>

          <div className="popular_cat">
            <Popularcat />
          </div>

          
          <div className="crousal_main_page">
              <Maincrousal />
          </div>

          <div className="contact_main_page">
          <h2 class="animate__animated animate__wobble" style={{color: 'black' , fontWeight:'700'}}>Feedback</h2>
            <Contact />
          </div>


          <BackTop>
      <div style={style}><i class="fas fa-angle-up"></i></div>
    </BackTop>
  
      </section>
    </div>
  );
}
