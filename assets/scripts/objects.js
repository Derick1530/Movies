// const addMovieBtn = document.getElementById('add-movie-btn');
// const searchBtn = document.getElementById('search-btn');

// const movies = [];

// const renderMovies = () => {
//   const movieList = document.getElementById('movie-list');

//   if (movies.length === 0) {
//     movieList.classList.remove('visible');
//     return;
//   } else {
//     movieList.classList.add('visible');
//   }
//   movieList.innerHTML = '';

//   movies.forEach((movie) => {
//     const movieEl = document.createElement('li');
//     movieEl.textContent = movie.info.title;
//     movieList.append(movieEl);
//   });
// };

// const addMovieHandler = () => {
//   const title = document.getElementById('title').value;
//   const extraName = document.getElementById('extra-name').value;
//   const extraValue = document.getElementById('extra-value').value;

//   if (
//     title.trim() === '' ||
//     extraName.trim() === '' ||
//     extraValue.trim() === ''
//   ) {
//     return;
//   }

//   const newMovie = {
//     info: {
//       title,
//       [extraName]: extraValue
//     },
//     id: Math.random()
//   };

//   movies.push(newMovie);
//   renderMovies();
// };

// addMovieBtn.addEventListener('click', addMovieHandler);

const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const selectFilter = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));

  selectFilter.forEach((movie) => {
    const movieEl = document.createElement('li');
    let text = movie.info.title + ' - ';
    for (const key in movie.info) {
      if (key !== "title") {
        text = text + `${key}:${movie.info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  })
}

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;
  if (title.trim() === "" || extraValue.trim() === "" || extraValue.trim() === "") {
    return;
  }
  const newMovie = {
    info: {
      title,
      [extraName]: extraValue
    },
    id: Math.random()
  }
  movies.push(newMovie);
  renderMovies();
};

const filterRender = () => {
  const filterV = document.getElementById('filter-title').value;
  renderMovies(filterV);
}

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', filterRender);