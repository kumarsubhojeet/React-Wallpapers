import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-elastic-carousel";

import {Link} from 'react-router-dom'

const PopularCat = () => {
  const [wall, setwall] = useState([]);
  const Key = process.env.REACT_APP_KEY

  const pageNo = Math.floor((Math.random() * 50) + 1);
  console.log(pageNo);

  const Apicall_pop = async () => {
    try {
      const res = await axios.get(
        `https://api.unsplash.com/search/photos?query=random&page=${pageNo}&per_page=100&client_id=${Key}`
      );
      setwall(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Apicall_pop();
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div className="Home_main">
      <section>
          <h3>Popular</h3>
        <div className="row">
        <Carousel breakPoints={breakPoints} enableAutoPlay={true} autoPlaySpeed={3000}>

          {wall.map((data) => (
            
          
             <Link to={`/detail/${data.id}`} style={{textDecoration: 'none'}}>
             <div class="card animate__animated animate__zoomInDown" >
              <img class="card-img-top" src={data.urls.small} alt="Error" />
            </div>
             </Link>
          

          ))}
            </Carousel>
        </div>
      </section>
    </div>
  );
};

export default PopularCat;
