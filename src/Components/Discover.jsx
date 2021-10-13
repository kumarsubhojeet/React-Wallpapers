import React, { useState, useEffect } from "react";
import axios from "axios";

import {Link} from 'react-router-dom'

const Discover = () => {
  const [wall, setwall] = useState([]);
  const Key = process.env.REACT_APP_KEY


  const Apicall = async () => {
    try {
      const res = await axios.get(
        `https://api.unsplash.com/search/photos?query=random&page=1&per_page=30&client_id=${Key}`
      );
      setwall(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Apicall();
  }, []);

  return (
    <div className="Home_main">
      <section>
        <div className="row">
          {wall.map((data) => (
            
           <div className="col-md-4 col-6">
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
  );
};

export default Discover;
