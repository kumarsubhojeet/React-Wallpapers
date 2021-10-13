import React, { useState, useEffect } from "react";
import axios from "axios";
import { BackTop } from 'antd';


import {Link , useParams} from 'react-router-dom'

const Home = () => {
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

  const [wall, setwall] = useState([]);
  const {name} = useParams();

  const Key = process.env.REACT_APP_KEY

  const Apicall = async () => {
    try {
      const res = await axios.get(
        `https://api.unsplash.com/search/photos?query=${name}&page=1&per_page=30&client_id=${Key}`
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

        <div className="heading">
          <h4>{name}</h4>
        </div>

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
                  
                  <i class="far fa-thumbs-up" style={{color: 'orangered' , fontWeight:'600'}}></i>
                  
                  <h6>{data.likes}</h6>
                </div>

                </div>
              </div>
            </div>
             </Link>
           </div>

          ))}
        </div>

        <BackTop>
      <div style={style}><i class="fas fa-angle-up"></i></div>
    </BackTop>
      </section>
    </div>
  );
};

export default Home;
