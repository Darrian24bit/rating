let movies = [
  {
    name: "The Godfather",
    year: 1972,
    rating: 10,
    director: "Francis Ford Coppola",
    image:
      "https://cdn1.thr.com/sites/default/files/imagecache/320x480/2014/06/1_The_Godfather.jpg",
  },
  {
    name: "The Shawshank Redemption",
    year: 1994,
    rating: 9,
    director: "Frank Darabont",
    image:
      "https://cdn1.thr.com/sites/default/files/imagecache/320x480/2014/06/shawshank2hinpeters.jpg",
  },
  {
    name: "Pulp Fiction",
    year: 1994,
    rating: 5,
    director: "Quentin Tarantino",
    image:
      "https://cdn1.thr.com/sites/default/files/imagecache/675x380/2014/06/5_Pulp_Fiction.jpg",
  },
  {
    name: "A Clockwork Orange",
    year: 1971,
    rating: 7,
    director: "Stanley Kubrick",
    image:
      "https://cdn1.thr.com/sites/default/files/imagecache/675x380/2014/06/35_A_Clockwork_Orange.jpg",
  },
  {
    name: "Titanic",
    year: 1997,
    rating: 3,
    director: "Steven Spielberg",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51mTtUGvUCL._SY445_.jpg",
  },
];

let divMov = document.querySelector(".container");
const fragment = document.createDocumentFragment();

movies.forEach((movie) => {
  const movName = document.createElement("h1");
  movName.classList.add("movName");
  movName.textContent = movie.name;
  fragment.appendChild(movName);

  const movYear = document.createElement("h5");
  movYear.classList.add("movYear");
  movYear.textContent = movie.year;
  fragment.appendChild(movYear);

  const movDir = document.createElement("h3");
  movDir.classList.add("movDir");
  movDir.textContent = movie.director;
  fragment.appendChild(movDir);

  const movRate = document.createElement("h2");
  movRate.classList.add("movRate");
  movRate.textContent = "Our Rating:" + movie.rating;
  if (movie.rating <= 3) {
    movRate.style.color = "red";
  } else if (movie.rating <= 7) {
    movRate.style.color = "yellow";
  } else {
    movRate.style.color = "green";
  }
  fragment.appendChild(movRate);

  const movStar = document.createElement("button");
  movStar.classList.add("movStar");
  movStar.setAttribute("data", movie.name);
  fragment.appendChild(movStar);

  const movStarImg = document.createElement("img");
  movStarImg.classList.add("movStarImg");
  movStarImg.src = "https://icon-icons.com/icons2/1077/PNG/128/star_77949.png";
  movStar.appendChild(movStarImg);

  const movImg = document.createElement("img");
  movImg.classList.add("movImg");
  movImg.src = movie.image;
  fragment.appendChild(movImg);
});

divMov.appendChild(fragment);

let click = document.querySelectorAll(".movStar");
[].forEach.call(click, function (el) {
  el.onclick = function (e) {
    alert("Спасибо за ваш голос");
  };
});

console.log(movies);
