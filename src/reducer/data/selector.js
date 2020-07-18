import NameSpace from "./../name-space.js";

const getFilms = (state) => {
  return state[NameSpace.DATA].films;
};

const getPromoFilm = (state) => {
  return state[NameSpace.DATA].promoFilm;
};

export {getFilms, getPromoFilm};
