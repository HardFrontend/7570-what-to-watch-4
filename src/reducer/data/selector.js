import NameSpace from "./../name-space.js";
import {createSelector} from "reselect";

const getFilms = (state) => {
  return state[NameSpace.DATA].films;
};

const getPromoFilm = (state) => {
  return state[NameSpace.DATA].promoFilm;
};

const getGenreForFilter = (state) => {
  return state[NameSpace.DATA].genreForFilter;
};

const getFilteredFilms = createSelector(
    getFilms,
    getGenreForFilter,
    (films, genre) => {
      if (genre === `All genres`) {
        return films;
      }
      return films.filter((film) => film.genre === genre);
    }
);
export {getFilms, getPromoFilm, getFilteredFilms};