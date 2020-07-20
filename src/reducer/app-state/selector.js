import NameSpace from "./../name-space.js";

const getCountDisplayedFilms = (state) => {
  return state[NameSpace.APP_STATE].countDisplayedFilms;
};

const getPlayableMovie = (state) => {
  return state[NameSpace.APP_STATE].playableMovie;
};


const getSortGenre = (state) => {
  return state[NameSpace.APP_STATE].sortGenre;
};

export {getCountDisplayedFilms, getPlayableMovie,getSortGenre};
