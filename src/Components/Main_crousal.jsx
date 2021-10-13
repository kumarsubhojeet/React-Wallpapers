import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Main_crousal() {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <a href="https://source.unsplash.com/1600x900/?nature,water" download target="_blank" without rel="noreferrer">
            <img
              class="d-block w-100 crousal_wallpaper"
              src="https://source.unsplash.com/1600x900/?nature,water"
              alt="First slide"
            />
          </a>
        </div>
        <div class="carousel-item">
          <a href="https://source.unsplash.com/1600x900/?sports,shoes" download target="_blank" without rel="noreferrer">
            <img
              class="d-block w-100 crousal_wallpaper"
              src="https://source.unsplash.com/1600x900/?sports,shoes"
              alt="Second slide"
            />
          </a>
        </div>
        <div class="carousel-item">
          <a href="https://source.unsplash.com/1600x900/?games,computer" download target="_blank" without rel="noreferrer" >
            <img
              class="d-block w-100 crousal_wallpaper"
              src="https://source.unsplash.com/1600x900/?games,computer"
              alt="Third slide"
            />
          </a>
        </div>

        <div class="carousel-item">
          <a href="https://source.unsplash.com/1600x900/?animals,forest" download target="_blank" without rel="noreferrer">
            <img
              class="d-block w-100 crousal_wallpaper"
              src="https://source.unsplash.com/1600x900/?animals,forest"
              alt="Third slide"
            />
          </a>
        </div>

        <div class="carousel-item">
          <a href="https://source.unsplash.com/1600x900/?food,fruits" download target="_blank" without rel="noreferrer">
            <img
              class="d-block w-100 crousal_wallpaper"
              src="https://source.unsplash.com/1600x900/?food,fruits"
              alt="Third slide"
            />
          </a>
        </div>

        <div class="carousel-item">
          <a href="https://source.unsplash.com/1600x900/?camera" download target="_blank" without rel="noreferrer">
            <img
              class="d-block w-100 crousal_wallpaper"
              src="https://source.unsplash.com/1600x900/?camera"
              alt="Third slide"
            />
          </a>
        </div>

        <div class="carousel-item">
          <a href="https://source.unsplash.com/1600x900/?india" download target="_blank" without rel="noreferrer">
            <img
              class="d-block w-100 crousal_wallpaper"
              src="https://source.unsplash.com/1600x900/?india"
              alt="Third slide"
            />
          </a>
        </div>

        <div class="carousel-item">
          <a href="https://source.unsplash.com/1600x900/?paris" download target="_blank" without rel="noreferrer">
            <img
              class="d-block w-100 crousal_wallpaper"
              src="https://source.unsplash.com/1600x900/?paris"
              alt="Third slide"
            />
          </a>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}
