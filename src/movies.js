// The `movies` array from the file `src/data.js`.
const movies = require('./data');
console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrMovies) {
  const directors = arrMovies.map((movie) => movie.director);
  const cleanDirectors = [...new Set(directors)]
  return cleanDirectors;
}

console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrMovies) {
  const spilbergDrama = arrMovies.filter(
    (movie) =>
      movie.director.includes('Steven Spielberg') &&
      movie.genre.includes('Drama')
  );
  return spilbergDrama.length;
}

console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arrMovies) {
  const avgScore =
    arrMovies.reduce((prev, curr) => prev + curr.score, 0) / arrMovies.length;
  return avgScore.toFixed(2);
}

console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arrMovies) {
  const drama =
    arrMovies
      .filter((movie) => movie.genre.includes('Drama'))
      .reduce((prev, curr) => prev + curr.score, 0) / arrMovies.length;
  return drama.toFixed(2);
}

console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrMovies) {
  const sortYear = arrMovies.sort((movie1, movie2) => {
    if (movie1.year === movie2.year) {
      if (movie1.title > movie2.title) return 1;
      if (movie1.title < movie2.title) return -1;
    } else {
      if (movie1.year > movie2.year) return 1;
      if (movie1.year < movie2.year) return -1;
    }
  });
  return sortYear;
}

console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrMovies) {
  const sortTitle = arrMovies.sort((movie1, movie2) => {
    if(movie1.title < movie2.title) return -1
  })
  const result = sortTitle.map(movie => movie.title).slice(0, 21);

  return result;
}

console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
