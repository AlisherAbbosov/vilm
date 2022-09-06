"use strict";

const elForm = document.querySelector(".form__search");
const elSearchInput = document.querySelector(".search__input");
const elSearchBtn = document.querySelector(".search__btn");
const elHero = document.querySelector(".hero");
const elHeroTitle = document.querySelector(".hero__movie-title");

const elHeroSummary = document.querySelector(".hero__movie__summary");
const elHeroYear = document.querySelector(".hero__movie-reting");

const elMoviesList = document.querySelector(".movies__list");

const APIKEY = "b1566df1";
let search = "russia";
let page = 1;

let renderMovies = movies => {
  elMoviesList.innerHTML = null;
  movies.forEach(movie => {
    let html = ` <li class="col-2 movies__item">
    <div class="movie__card">
      <img
        class="movie__card-img"
        src="${movie?.Poster}"
        alt="movie avatar"
      />
      <div class="card__body">
        <h3 class="card__movie-title">${movie?.Title}</h3>
        <p class="card__movie-year">${movie?.Year}</p>
      </div>
    </div>
  </li> `;
    elMoviesList.insertAdjacentHTML("beforeend", html);
  });
};

elForm.addEventListener("submit", evt => {
  evt.preventDefault();
  search = elSearchInput.value;
  page = 1;
  getMoives();
});

let getMoives = async () => {
  let res = await fetch(`
  https://omdbapi.com/?apikey=${APIKEY}&s=${search}&page=${page}
  `);

  let data = await res.json();
  renderMovies(data.Search);
  console.log(data);
};

getMoives();
