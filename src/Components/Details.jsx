import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams  , Link} from "react-router-dom";
import { BackTop } from 'antd';


export default function Details() {

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

  const Key = process.env.REACT_APP_KEY
  const { id } = useParams();

  const [wall, setwall] = useState([]);
  const [Morewall , setMorewall] = useState([])
  const [details, setdetails] = useState([]);

  const Apicall = async () => {
    try {
      const res = await axios.get(
        `https://api.unsplash.com/photos/${id}?client_id=${Key}`
      );
      setwall(res.data.urls);
      setdetails(res.data);
    } catch (error) {
      console.log(error);
    }
  };

 
    const pageNo = Math.floor((Math.random() * 20) + 1);

  const More = async() => {
    try {
      const res = await axios.get(
        `https://api.unsplash.com/search/photos?query=random&page=${pageNo}&per_page=15&client_id=${Key}`
      );
      setMorewall(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    Apicall();
    More();
   
  }, []);



  return (
    <section>

   <div className="detail_main">

     <div className="detail_wallpaper">
     <div className="details_main">

     <h3>Your Wallpaper...</h3>

<div className="wallpaper_dropdown">
<div className="detail_img">
  <img src={wall.full} className="img_detail" alt="Error" />
</div>



<div className="download_btn">
<div class="btn-group">
<button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Download
</button>

<div class="dropdown-menu">
      <a class="dropdown-item" href={wall.small} download target="_blank" without rel="noreferrer">
        Small 
      </a>
      <a class="dropdown-item" href={wall.regular} download target="_blank" without rel="noreferrer">
        Medium 
      </a>
      <a class="dropdown-item" href={wall.full} download target="_blank" without rel="noreferrer">
        large 
      </a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href={wall.raw} download target="_blank" without rel="noreferrer">
        Original <span></span>
      </a>
    </div>
</div>
</div>
</div>


<div className="details-of-img">
  <div className="downloads">
    <h4>Downloads</h4>
    <h5>{details.downloads}</h5>
  </div>

  <div className="views">
    <h4>Views</h4>
    <h5>{details.views}</h5>
  </div>

  <div className="camera">
    <h4>Dimensions</h4>
    <div className="dimensions" style={{ display: "flex" }}>
      <h5>{details.width}</h5>
      <p style={{ padding: "0 2px", fontWeight: "600" }}> X </p>
      <h5>{details.height}</h5>
    </div>
  </div>
</div>



<div class="container">
  <div class="row">
    <h4>Recommended Tags..</h4>
  <div className="tags_cat">
            <div className="col-md-6">
            <Link to={`/Home/Cars`} style={{textDecoration:'none'}}><p>Cars</p></Link>
             <Link to={`/Home/Sports`} style={{textDecoration:'none'}}><p>Sports</p></Link>
             <Link to={`/Home/Nature`} style={{textDecoration:'none'}}><p>Nature</p></Link>
            <Link to={`/Home/Oceans`} style={{textDecoration:'none'}}> <p>Oceans</p></Link>
            <Link to={`/Home/Forest`} style={{textDecoration:'none'}}> <p>Forest</p></Link>
           <Link to={`/Home/Games`} style={{textDecoration:'none'}}>  <p>Games</p></Link>
           <Link to={`/Home/Abstract`} style={{textDecoration:'none'}}>  <p>Abstract</p></Link>
           <Link to={`/Home/World`} style={{textDecoration:'none'}}>  <p>World</p></Link>
            
            </div>

            <div className="col-md-6">
            <Link to={`/Home/Mountains`} style={{textDecoration:'none'}}><p>Mountains</p></Link>
           <Link to={`/Home/Bikes`} style={{textDecoration:'none'}}>  <p>Bikes</p></Link>
             <Link to={`/Home/Guns`} style={{textDecoration:'none'}}><p>Guns</p></Link>
             <Link to={`/Home/Aeroplane`} style={{textDecoration:'none'}}><p>Aeroplane</p></Link>
             <Link to={`/Home/Sky`} style={{textDecoration:'none'}}><p>Sky</p></Link>
             <Link to={`/Home/Birds`} style={{textDecoration:'none'}}><p>Birds</p></Link>
             <Link to={`/Home/Animals`} style={{textDecoration:'none'}}><p>Animals</p></Link>
            <Link to={`/Home/Code`} style={{textDecoration:'none'}}> <p>Code</p></Link>
            <Link to={`/Home/Space`} style={{textDecoration:'none'}}> <p>Space</p></Link>
            </div>
         </div>
  </div>
  </div>



</div>


     </div>

     <div className="detail_more">
       <h3>More ...</h3>
     <div className="Home_main">
      <section>
        <div className="row">
          {Morewall.map((data) => (
            
           <div className="col-md-12 col-6">
             <Link to={`/detail/${data.id}`} style={{textDecoration: 'none'}}>
             <div class="card" >
              <img class="card-img-top" src={data.urls.small} alt="Error" />
             
              <div className="card-body">
                <div className="det">
                
                <div className="det-img">
                <img src={data.user.profile_image.medium} className="det_img" alt="Error" />
                <p>{data.user.name}</p>
                </div>

                <div className="likes">
                  
                  <i class="far fa-thumbs-up"></i>
                  
                  <h6>{data.likes}</h6>
                </div>

                </div>
              </div>
            </div>
             </Link>
           </div>

          ))}
        </div>
      </section>
    </div>
     </div>
   </div>

   <BackTop>
      <div style={style}><i class="fas fa-angle-up"></i></div>
    </BackTop>
    </section>
  );
}
